const sumArray = () => {
    let inpCtrl = document.getElementsByTagName("input")[0];
    let inpStr = inpCtrl.value;
    let numArray = inpStr.split(",");
    let summedNums = 0;
    for(let num of numArray){
        summedNums += +num;
    }
    document.getElementById("lbl").innerText = summedNums;

}