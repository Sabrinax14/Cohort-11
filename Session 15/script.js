// creating function for numbers// 
function Number(val){
    document.getElementById('result').value += val;
};
// creating function for operators
function Operator(val) {
    document.getElementById('result').value += val;
};
// result 
function equal(){
    let Input = document.getElementById('result').value;
    let Output = eval(Input);
    document.getElementById('result').value = Output;
};
// Clear button
function clr(){
    document.getElementById('result').value = '';
};