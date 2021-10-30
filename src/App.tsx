import React from 'react';
import liff from '@line/liff';
import './App.css';
import {TodoItemList} from "./components/TodoItemList"
import { Item } from './types/item.type';

const TodoItems: Item[] = [
  {id:1, title: "aaa", description: "aaa", finished: false},
  {id:2, title: "aaabbb", description: "aaa", finished: true},
  {id:3, title: "aaabbbccc", description: "aaa", finished: false}
]

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
    <div className="bg-blue-50 w-full min-h-screen">
      <div className="w-1/2 m-auto">
      <TodoItemList items={TodoItems}/>
      </div>
    </div>
  );
}

export default App;
