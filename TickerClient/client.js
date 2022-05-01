let socket = new WebSocket("ws://192.168.1.101:10573/Echo");

socket.onmessage = function(event) {
        let message = event.data;
        document.getElementById("tickertext").innerHTML = message;
}