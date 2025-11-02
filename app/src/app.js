const output = document.getElementById("output");
let calc = document.getElementById("calc");
const yourname = document.getElementById("yourname");
const theirname = document.getElementById("theirname");

calc.onclick = () => {
    output.innerHTML = "<p>" + lovecalc() + "% compatible!</p>";
}

const lovecalc = (name1, name2) => {
    name1 = yourname.value;
    name2 = theirname.value;
    var result = Math.floor(Math.random() * 100 + 1);
    return result;
}

















