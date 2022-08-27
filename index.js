let a=document.getElementById('a');
let b=document.getElementById('b');
let c=document.getElementById('c');
let calcBtn=document.getElementById('calcBtn');
let resultDisplay =document.getElementById('resultDisplay');

calcBtn.addEventListener('click',calculate);

function calculate(){
    let a1=a.value;
    let b1=b.value;
    let c1=c.value;

    a1=parseFloat(a1);
    b1=parseFloat(b1);
    c1=parseFloat(c1);

    let bPower=Math.pow(b1 , 2);
    let fourAc=(4 * a1 * c1);
    let resultToBeSquared=bPower-fourAc;
    let squareRoot=Math.sqrt(resultToBeSquared);
    let bottomOfEquation=2*a1;

    if (isNaN(squareRoot)===true){
        resultDisplay.innerHTML= " ";
    }
    else {
        let result1=(-b1 - squareRoot) / bottomOfEquation;
        let result2=(-b1 + squareRoot) / bottomOfEquation;
        resultDisplay.innerHTML="<b>x<sub>1</sub> = </b> "+result1;
        resultDisplay1.innerHTML="<b>x<sub>2</sub> = </b> "+result2;
    
    }
}
