export function onSendClick(){
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