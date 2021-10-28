// const numberButton =  document.querySelector(".button number");
// const clearButton = document.querySelector(".clear grey");
// const plusMinus = document.querySelector(".grey");
// const deleteButton = document.querySelector(".icon grey");
// const operators = document.querySelector(".operator");
// const divideOperand = document.querySelector(".divide");
// const multipleOperand = document.querySelector(".multiple");
// const minusOperand = document.querySelector(".minus");
// const plusOperand = document.querySelector(".plus");
// const equalOperand = document.querySelector(".equal");
// const commaButton = document.querySelector(".comma");
// const output1 = document.querySelector(".result1");
// const output2 = document.querySelector(".result2");
// const button = document.getElementsByTagName("button")
// const displayButton =Array.from(document.getElementsByClassName("number"));


// displayButton.map(button => {
//     button.addEventlistener('click',(e) => {
//         switch(e.target.innerText){
//             case 'AC':
//                 output1.innerText = '';
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result'); 
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach( number => {
  number.addEventListener('click', (e)=>{
    if(e.target.innerText === ',' && !haveDot){
      haveDot = true;
    } else if (e.target.innerText === ',' && haveDot){
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
    // console.log();
  })
})

operationEl.forEach( operation => {
  operation.addEventListener('click', (e)=> {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation){
      mathOperation();

    }else{
    //   result = parseFloat(dis2Num);    //******** */
        result = dis2Num;
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  })
});
function clearVar(name = ''){
  dis1Num += dis2Num + ' ' + name + ' ';
  display1El.innerText = dis1Num;
  display2El.innerText = result;      //**************** */
  dis2Num = '';
//   tempResultEl.innerText = result;
}

function mathOperation() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(dis2Num);
  }else if(lastOperation === '%'){
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}
// operation();

equalEl.addEventListener('click', ()=> {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;      
  tempResultEl.innerText = '';
  dis2Num = result;
  dis1Num = '';
})

clearAllEl.addEventListener('click', ()=>{
  dis1Num = '';
  dis2Num = '';
  display1El.innerText ='';
  display2El.innerText ='';
  result = '';
  tempResultEl.innerText = '';
});

clearLastEl.addEventListener('click', () => {
  display2El.innerText = display2El.innerText.toString().slice(0, -1);
  dis2Num= '';
});

window.addEventListener('keydown', (e)=>{
  if(
    e.key === '0' ||
    e.key === '1' || 
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === ',' 
  ){
    clickButtonEl(e.key)
    // console.log(e.key)
  }else if(
    e.key === '+' ||
    e.key === '-' ||
    e.key === '/' ||
    e.key === '%' 
  ){
    clickOperation(e.key);
  }
  else if(e.key === '*'){
    clickOperation('x')
    // console.log(e.key)
  } else if( e.key == "Enter" || e.key === '='){
    clickEqual();
  }
  // console.log(e.key)
})
function clickButtonEl(key) {
  numbersEl.forEach(button => {
    if (button.innerText === key) {
      button.click();
    }
  })
}
function clickOperation(key){
  operationEl.forEach( operation => {
    if(operation.innerText === key){
      operation.click()
    }
  })
}
function clickEqual(){
  equalEl.click();
}