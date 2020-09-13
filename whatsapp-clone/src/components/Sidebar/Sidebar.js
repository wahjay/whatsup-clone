import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from '../SidebarChat/SidebarChat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { actionTypes } from '../../Reducer';

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const [clickMore, setClickMore] = useState(null);

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
      const result = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
      }));

      setRooms(result);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signOut = () => {
    auth.signOut()
      .then(() => {
        //remove the session cookies
        const curUser = sessionStorage.getItem('curUser');
        sessionStorage.removeItem('curUser');
        curUser && sessionStorage.removeItem(curUser);

        // update the global context
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch(err => alert(err.message));
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar src={user?.photoURL} />
        </IconButton>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton onClick={() => setClickMore(clickMore => !clickMore)}>
            <MoreVertIcon />
          </IconButton>
          {
            clickMore &&
            <div className="dropdown">
              <div className="option" onClick={signOut}>
                <ExitToAppIcon />
                <button>Sign out</button>
              </div>
            </div>
          }
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {
          rooms.map(room => (
            <SidebarChat
              key={room.id}
              id={room.id}
              name={room.data.name}
            />
          ))
        }
      </div>
    </div>
  );
}
