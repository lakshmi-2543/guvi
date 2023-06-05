function dis(x) {
    if (document.getElementById("input").value == 0) {
        document.getElementById("input").value = "";
        document.getElementById("input").value = x;
    } else {
        document.getElementById("input").value += x;

    }

}

function solve() {
    var x = document.getElementById("input").value;
    var y = eval(x);
    document.getElementById("input").value = y;
}

function clean() {
    document.getElementById("input").value = 0;
}