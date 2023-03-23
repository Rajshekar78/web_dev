// code for mulitple of 2 in javascript?
<pre id="my-output"></pre>


var pre = document.getElementById("my-output");


pre.innerHTML = "Hello <b>world</b>!";


var n = 10;
pre.innerHTML = "";
for (var i=1 ; i<=n ; i++) {
    pre.innerHTML += i + " * 2 = " + (i * 2) + "\n";
}


<html>
    <head>
        <script>
var n = 10;

function start() {
    var pre = document.getElementById("my-output");
    pre.innerHTML = "";
    for (var i=1 ; i<=n ; i++) {
        pre.innerHTML += i + " * 2 = " + (i * 2) + "\n";
    }
}
        </script>
    </head>
    <body>
        <pre id="my-output">Click the button to see the resulting table.</pre>
        <button onclick="start()">Show the table</button>
    </body>
</html>


