
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
          currentInput = '';
          display.textContent = '0';
        } 
        else if (value === 'DEL') {
          currentInput = currentInput.slice(0, -1);
          display.textContent = currentInput || '0';
        } 
        else if (value === '=') {
          try {
            const result = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
            display.textContent = result;
            currentInput = result.toString();
          } catch (e) {
            display.textContent = 'Error';
            currentInput = '';
          }
        } 
        else {
          currentInput += value === '×' ? '*' : value === '÷' ? '/' : value;
          display.textContent = currentInput;
        }
      });
    });
    
  