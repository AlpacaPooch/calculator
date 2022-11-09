let bar = document.querySelector('#equation-bar');
const buttons = document.querySelectorAll('button');
const clickElement = document.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() == 'button') {
    let currentSelector = String(e.target.id); // sets id to string value
    currentSelector = document.querySelector(`#${currentSelector}`); // gets id selector
    bar.textContent = bar.textContent += currentSelector.textContent; // adds text of button to eval bar
    }
});


const clickEqual = document.addEventListener('click', (e) => {
    if (String(e.target.id) == 'equal') {
        evaluatefunc();
        
    }
});

const clickClear = document.addEventListener('click', (e) => {
    if (String(e.target.id) == 'clear') {
        bar.textContent = '';
        
    }
});





let evaluatefunc = function(evaluate) {
        evaluate = bar.textContent;
        let i = 0;
        let evaluated = 0;
        while (i < 1) {
            
        
        if (evaluate.includes('*') == false && evaluate.includes('/') == false && evaluate.includes('+') == false && evaluate.includes('-') == false) {
            bar.textContent = parseFloat(evaluated).toFixed(2);
            i++;
            
        
        // } else if (evaluate.includes('/') == false) {
        //     continue;
        // } else if (evaluate.includes('+') == false) {
        //     continue;
        // } else if (evaluate.includes('-') == false) {
        //     continue;
        } else if (evaluate.includes('*') == true) {
            console.log('2')
        let evaluatePair = evaluate.match(/[0-9]+\.?([0-9]+)?\*[0-9]+\.?([0-9]+)?/);
        let value = evaluatePair[0].split('*');
        value = value[0] * value[1];
        evaluated = evaluate.replace(evaluatePair[0], value);
        console.log(evaluated);
        evaluate = evaluated;
        } else if (evaluate.includes('/') == true) {
            console.log('2')
        let evaluatePair = evaluate.match(/[0-9]+\.?([0-9]+)?\/[0-9]+\.?([0-9]+)?/);
        let value = evaluatePair[0].split('/');
        value = value[0] / value[1];
        evaluated = evaluate.replace(evaluatePair[0], value);
        console.log(evaluated);
        evaluate = evaluated;
        } else if (evaluate.includes('+') == true) {
            console.log('2')
        let evaluatePair = evaluate.match(/[0-9]+\.?([0-9]+)?\+[0-9]+\.?([0-9]+)?/);
        console.log(evaluatePair);
        let value = evaluatePair[0].split('+');
        value = parseFloat(value[0]) + parseFloat(value[1]);
        evaluated = evaluate.replace(evaluatePair[0], value);
        console.log(evaluated);
        evaluate = evaluated;
        } else if (evaluate.includes('-') == true) {
            console.log('2')
        let evaluatePair = evaluate.match(/[0-9]+\.?([0-9]+)?\-[0-9]+\.?([0-9]+)?/);
        let value = evaluatePair[0].split('-');
        value = value[0] - value[1];
        evaluated = evaluate.replace(evaluatePair[0], value);
        console.log(evaluated);
        evaluate = evaluated;
        } else {
        console.log('3')
        i++;
        };
        };
    };

