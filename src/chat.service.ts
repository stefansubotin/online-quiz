/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';

@Injectable()
export class ChatService {
    getChat(){
        return `<div><p>Hello! Please input a handle before typing an message!</p>
        <label for="userName">Handle: </label>
        <input type="text" id="userName" name="userName"><br>
        <p>Input your chat message here</p>
        <input type="text" id="messageInput" name="messageInput">
        <button onclick="onSendClick()">Send</button>
        <div id="chatDiv"></div>
        <script>
            function onSendClick(){
                var url = window.location.href;
                var urlArray = url.split('/');
                var cod = 'my-channel';//urlArray[urlArray.length - 1];
                var mes = document.getElementById("messageInput").value;
                var use = document.getElementById("userName").value;
                fetch("https://filthy-sweatsuit-boa.cyclic.cloud/update", {
                    method: "POST",
                    body: JSON.stringify({
                        id: "messageInput",
                        code: cod,
                        event: "chat",
                        user: use,
                        message: mes
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
            };
        </script><div>`;
    };

    getChatHeader(){
        return `<head>
        <meta charset="utf-8" />
        <title>Chat</title>
        <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
        <script>
          var pusher = new Pusher('cefecd31795a4e419288', {
            cluster: 'eu'
          });
    
          var channel = pusher.subscribe('my-channel');
          channel.bind('chat', function(data) {
            var history = document.getElementById("chatDiv").innerHTML;
            var newLine = "<br>" + data.user + ":";
            for (let i = newLine.length; i < 40; i++){
              newLine = newLine + "&nbsp;";
            }
            history = history + newLine + data.message;
            document.getElementById("chatDiv").innerHTML = history;
          });
        </script>
      </head>`;
    }
 }
