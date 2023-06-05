function increaseQuantity(counterIndex) {
    const counterElement = document.querySelector(`#counter${counterIndex} p`);
    let counterValue = parseInt(counterElement.textContent);

    counterValue += 1;
    counterElement.textContent = counterValue.toString();

    const removeButton = document.querySelector(`.remove-button${counterIndex}`);
    if (counterValue > 1) {
        removeButton.disabled = false;
    } else {
        removeButton.disabled = true;
    }
}

function decreaseQuantity(counterIndex) {
    const counterElement = document.querySelector(`#counter${counterIndex} p`);
    let counterValue = parseInt(counterElement.textContent);

    if (counterValue === 1) {
        increaseQuantity(counterIndex);
    } else if (counterValue > 1) {
        counterValue -= 1;
        counterElement.textContent = counterValue.toString();

        const removeButton = document.querySelector(`.remove-button${counterIndex}`);
        if (counterValue === 1) {
            removeButton.disabled = true;
        }
    }
}

function startEditing(element) {
    const text = element.textContent;
    const input = document.createElement('input');
    input.value = text;
    copyStyles(element, input);
    input.addEventListener('blur', () => finishEditing(element, input.value));
  
    element.replaceWith(input);
    input.focus();
  }
  
  function copyStyles(sourceElement, targetElement) {
    const computedStyles = getComputedStyle(sourceElement);
    for (const prop of computedStyles) {
      targetElement.style[prop] = computedStyles[prop];
    }
  }
  
  function finishEditing(element, newText) {
    const updatedElement = document.createElement(element.tagName.toLowerCase());
    updatedElement.textContent = newText;
    updatedElement.onclick = () => startEditing(updatedElement);
    
    element.replaceWith(updatedElement);
  }

  
  function addItem() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Назва товару';
  
    const addButton = document.createElement('button');
    addButton.className = 'add-button';
    addButton.innerHTML = '<p>+</p><span class="tooltip">Додати товар</span>';
    addButton.addEventListener('click', increaseQuantity.bind(null, 4));
  
    const removeButton = document.createElement('button');
    removeButton.className = 'add-button remove-button';
    removeButton.innerHTML = '<p>-</p><span class="tooltip">Видалити товар</span>';
    removeButton.addEventListener('click', decreaseQuantity.bind(null, 4));
  
    const newField = document.getElementById('newField');
    newField.innerHTML = '';
    newField.appendChild(newInput);
    newField.appendChild(addButton);
    newField.appendChild(removeButton);
  
    // Зміна розмірів контейнера
    const section = document.getElementById('p1');
    section.style.height = section.offsetHeight + 8 + 'px';
  
    // Додавання <hr>
    const hr = document.createElement('hr');
    newField.style.marginTop = '100px';

newField.appendChild(hr);


  }
  