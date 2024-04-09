// eval, toFixed replace, first letter not operand - doubt class,  submit, 

function display(e) {
    /*if (document.getElementById('Sec1').value[0]=='*') {
        document.getElementById('Sec1').value = '';
    }
    if (document.getElementById('Sec1').value[0]=='+') {
        document.getElementById('Sec1').value = '';
    }
    if (document.getElementById('Sec1').value[0]=='/') {
        document.getElementById('Sec1').value = '';
    }*/
    document.getElementById('Sec1').value = document.getElementById('Sec1').value + e;
}

function clearDisplay() {
    document.getElementById('Sec1').value='';
}


function calculate() {
    try {
        let result = eval(document.getElementById('Sec1').value);
        if (result % 1 !== 0) {
            result = result.toFixed(3);
        }
        document.getElementById('Sec1').value = result;
    }
    catch (error) {
        document.getElementById('Sec1').value='Invalid Input';
    }   
}

function del() {
    var a = document.getElementById('Sec1').value;
    document.getElementById('Sec1').value = a.slice(0, -1);
}

