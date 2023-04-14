const add = () =>{
    let number = document.getElementById("num");
    let newNumber = ++number.value ;
    // let newNumber = number.value + 1 ;
    render(newNumber);
}
const minus = () =>{
    let number = document.getElementById("num");
    let newNumber = number.value - 1 ;
    render(newNumber);
}

const setFormat = (newNumber) =>{
    let number = document.getElementById("num");
    number.style.color = "black";
    number.style.fontStyle = "normal";
    number.style.fontWeight = "normal";
    if(newNumber % 2 === 0 ){
        number.style.color = "red";
    }
    if(newNumber % 3 === 0 ){
        number.style.fontStyle = "italic";
    }
    if(newNumber % 7 === 0 ){
        number.style.fontWeight = "bold";
    }
    if(newNumber === 0){
        number.style.color = "black";
        number.style.fontStyle = "normal";
        number.style.fontWeight = "normal";
    }
}

const render = (newNumber) => {
    let number = document.getElementById("num");
    number.value = newNumber;
    setFormat(newNumber);
}


