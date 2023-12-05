
function Total() {
    let a = eval(document.getElementById("inputBox").value);
    document.getElementById("inputBox").value = a;
}
function getval(num) {
    let btn = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value += num;
}
function allClear() {
    document.getElementById("inputBox").value = "";
}
function Back() {
    let backspace = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = backspace.slice(0,-1);
}