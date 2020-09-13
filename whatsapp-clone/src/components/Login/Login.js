import React from 'react';
import { Button } from "@material-ui/core";
import './Login.css';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../Reducer';
import { SetLocalStore } from '../../LocalStorage';

export default function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(res => {
        const _2hrs = 2 * 60 * 60 * 1000;
        SetLocalStore(res.user.email, res.user, _2hrs);

        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch(err => alert(err.message));
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp logo"
        />

        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}
