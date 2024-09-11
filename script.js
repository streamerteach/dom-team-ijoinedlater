window.onload = function() {
    // Lyssna efter händelser
    var Hoverable = document.getElementsByClassName("team-member");
    for (var i = 0; i < Hoverable.length; i++){
        Hoverable[i].id = 'Hoverable' + i;
        Hoverable[i].addEventListener("mouseover", effectOn(Hoverable[i].id));
        alert("pause");
        Hoverable[i].addEventListener("mouseout", effectOff(Hoverable[i].id));
    }   
}
var editTitle = function(e) {
    // Ändra "team-title"
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    document.getElementById(id).style.filter = "drop-shadow(30px 10px 4px #4444dd)";
    document.getElementById(id).style.border = "5px,solid,black";
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    document.getElementById(id).style.filter = "none";
    document.getElementById(id).style.border = "none";
}
