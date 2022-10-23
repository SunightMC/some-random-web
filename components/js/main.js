    document.getElementById("1").onclick = function(e) {
        e.preventDefault();
        document.getElementById("modal1").style.display = "flex";
    }
    document.getElementById("2").onclick = function(e) {
        e.preventDefault();
        document.getElementById("modal2").style.display = "flex";
    }
    document.getElementById("3").onclick = function(e) {
        e.preventDefault();
        document.getElementById("modal3").style.display = "flex";
    }
    document.getElementById("4").onclick = function(e) {
        e.preventDefault();
        document.getElementById("modal4").style.display = "flex";
    }

function close1() {
    document.getElementById("modal1").style.display = "none";
}
function close2() {
    document.getElementById("modal2").style.display = "none";
}
function close3() {
    document.getElementById("modal3").style.display = "none";
}
function close4() {
    document.getElementById("modal4").style.display = "none";
}