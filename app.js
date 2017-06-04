console.log("connected");
$( document ).ready(function() {

  var text = ["Full-Stack Developer", "Problem Solver","Creative",
"Ambitious","Hardworker"];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 2000);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }

});
