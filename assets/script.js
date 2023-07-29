
// pin generate event
function pinGenerate() {
    let generate = Math.random();
    generate = generate * 9000 + 1000;
    generate = parseInt(generate);
    return generate;
}

let getPin = document.getElementById('generate');
getPin.addEventListener('click', function () {
    let newPin = pinGenerate();
    document.getElementById('pin').value = newPin;

})

document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('pin').value = '';
    document.getElementById('allow').style.display = 'none';
    document.getElementById('notAllow').style.display = 'none';
})

// user pin event
function pin(id) {
    let singlePin = document.getElementById(id).innerText;
    let value = document.getElementById('user-pin').value;
    value = value + singlePin;
    document.getElementById('user-pin').value = value;
}

document.getElementById('btn1').addEventListener('click', function () {
    pin('btn1');
});
document.getElementById('btn2').addEventListener('click', function () {
    pin('btn2');
});
document.getElementById('btn3').addEventListener('click', function () {
    pin('btn3');
});
document.getElementById('btn4').addEventListener('click', function () {
    pin('btn4');
});
document.getElementById('btn5').addEventListener('click', function () {
    pin('btn5');
});
document.getElementById('btn6').addEventListener('click', function () {
    pin('btn6');
});
document.getElementById('btn7').addEventListener('click', function () {
    pin('btn7');
});
document.getElementById('btn8').addEventListener('click', function () {
    pin('btn8');
});
document.getElementById('btn9').addEventListener('click', function () {
    pin('btn9');
});
document.getElementById('btn0').addEventListener('click', function () {
    pin('btn0');
});
document.getElementById('btnClear').addEventListener('click', function () {
    document.getElementById('user-pin').value = '';
});
document.getElementById('btnBackspace').addEventListener('click', function () {
    let currentPin = document.getElementById('user-pin').value ;
    // console.log(currentPin);
    let lastNumber = currentPin.charAt(currentPin.length - 1);
    // console.log(lastNumber);
    let newPin = currentPin.replace(lastNumber, '')
    // console.log(newPin);
    document.getElementById('user-pin').value = newPin;
});


// pin match event
document.getElementById('submit').addEventListener('click', function () {
    let pinCatch = document.getElementById('pin').value;
    let userPin = document.getElementById('user-pin').value;
    pinCatch = parseInt(pinCatch);
    userPin = parseInt(userPin);
    if (pinCatch == userPin) {
        document.getElementById('allow').style.display = 'block';
    } else {
        document.getElementById('notAllow').style.display = 'block';
    }
    document.getElementById('user-pin').value = '';
})

