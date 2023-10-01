/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';

@Injectable()
export class ChatService {
    chat(){
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
    }
 }
