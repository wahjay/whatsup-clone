import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

export default function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if(roomId) {
      // fetch this room info
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ));

      // fetch all the messages inside this room, order by ascending time (most recent at the bottom)
      db.collection('rooms').doc(roomId).collection('messages')
        .orderBy('timestamp', 'asc').onSnapshot(snapshot => {
          const res = snapshot.docs.map(doc => doc.data());
          setMessages(res);
        });
    }

    setSeed(Math.floor(Math.random() * 6000));
  }, [roomId]);

  /* chat room scroll bar always start at the bottom and when new message comes in */
  useEffect(() => {
    scrollToBottom()
  }, [messages.length])

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages')
      .add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
      });

    setInput('');
  }

  /* scroll the chat window to bottom */
  const scrollToBottom = () => {
    let element = document.getElementById("chat__window");
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/gridy/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen: { messages.length > 0 &&
            new Date(messages[messages.length-1].timestamp?.toDate()).toLocaleString()}
          </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body" id="chat__window">
        {
          messages.map(message => (
            <div className="chat__messageContainer">
              <div className="chat__message">
                 { message.name !== user.displayName &&
                   <Avatar src={message.profilePic} style={{ marginRight: '10px' }} />
                 }
                <p className={`chat__messageInfo ${message.name === user.displayName && 'chat__receiver'}`}>
                  <span className="chat__name">
                    {message.name}
                  </span>
                  {message.message}
                </p>
                { message.name === user.displayName &&
                  <Avatar src={message.profilePic} style={{ marginLeft: '10px' }} />
                }
              </div>
              <span className={`chat__timestamp ${message.name === user.displayName && 'chat__receiverTimestamp'}`}>
                {new Date(message.timestamp?.toDate()).toLocaleString()}
              </span>
            </div>
          ))
        }
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form onSubmit={sendMessage}>
          <input value={input} type="text" placeholder="Got something to say?" onChange={e => setInput(e.target.value)}/>
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}
