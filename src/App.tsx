import React from 'react';
import logo from './logo.svg';
import liff from '@line/liff';
import './App.css';

function App() {
  const sendMessage = () => {
    liff.init({liffId: process.env.REACT_APP_LIFF_ID as string}) // LIFF IDをセットする
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}) // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) { // LIFFので動いているのであれば
          liff.sendMessages([{ // メッセージを送信する
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
          }]).then(function() {
            window.alert('Message sent');
          }).catch(function(error) {
            window.alert('Error sending message: ' + error);
          });
        }
      })
    }
    const getUserInfo = () => {
        liff.init({liffId: process.env.REACT_APP_LIFF_ID as string})
          .then(() => {
            if (!liff.isLoggedIn()) {
              liff.login({}) // ログインしていなければ最初にログインする
            } else if (liff.isInClient()) {
              liff.getProfile()  // ユーザ情報を取得する
                .then(profile => {
                  const userId: string = profile.userId
                  const displayName: string = profile.displayName
                  alert(`Name: ${displayName}, userId: ${userId}`)
                }).catch(function(error) {
                  window.alert('Error sending message: ' + error);
                });
            }
          })
        }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="button" onClick={sendMessage}>send message</button>
        <button className="button" onClick={getUserInfo}>show user info</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
