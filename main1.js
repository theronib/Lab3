
//РЕДАГУВАННЯ КІЛЬКОСТІ ТОВАРУ
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

  // Зберігаємо значення лічильника в локальне сховище
  localStorage.setItem(`counter${counterIndex}`, counterValue.toString());
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

      // Зберігаємо значення лічильника в локальне сховище
      localStorage.setItem(`counter${counterIndex}`, counterValue.toString());
  }
}

// Збереження значень лічильників при оновленні сторінки
window.addEventListener('beforeunload', () => {
  const counters = document.querySelectorAll('[id^="counter"]');
  counters.forEach((counter) => {
    const counterIndex = counter.id.replace('counter', '');
    const counterValue = counter.querySelector('p').textContent;
    localStorage.setItem(`counter${counterIndex}`, counterValue);
  });
});

// Встановлення значень лічильників при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[id^="counter"]');
  counters.forEach((counter) => {
    const counterIndex = counter.id.replace('counter', '');
    const counterValue = localStorage.getItem(`counter${counterIndex}`);
    if (counterValue) {
      counter.querySelector('p').textContent = counterValue;
    }
  });
});


// РЕДАГУВАННЯ НАЗВИ 
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

  // Збереження нової назви в локальному сховищі
  localStorage.setItem(element.tagName.toLowerCase(), newText);

  element.replaceWith(updatedElement);
}

// Отримання збереженої назви з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const tomatoElement = document.querySelector('.tomato s');
  const tomatoText = localStorage.getItem('s');
  if (tomatoText) {
    tomatoElement.textContent = tomatoText;
  }

  const cookiesElement = document.querySelector('.cookies p');
  const cookiesText = localStorage.getItem('p');
  if (cookiesText) {
    cookiesElement.textContent = cookiesText;
  }


  
  const potatoElement = document.querySelector('.potato p');
  const potatoText = localStorage.getItem('p');
  if (potatoText) {
    potatoElement.textContent = potatoText;
  }
});




// НЕКУПЛЕНО -> КУПЛЕНО
function toggleBoughtStatus(button) {
  var container = button.parentNode;
  
  if (button.classList.contains('not-bought')) {
    // Зміна стану з "Не куплено" на "Куплено"
    button.style.display = 'none'; // Приховати кнопку "Не куплено"
    
    var boughtButton = document.createElement('button');
    boughtButton.textContent = 'Куплено';
    boughtButton.className = 'was-bought-action';
    boughtButton.onclick = function() {
      toggleBoughtStatus(boughtButton);
    };
    
    container.appendChild(boughtButton); // Додати кнопку "Куплено"
  } else {
    // Зміна стану з "Куплено" на "Не куплено"
    button.style.display = ''; // Показати кнопку "Не куплено"
    
    var wasBoughtButton = container.querySelector('.was-bought');
    container.removeChild(wasBoughtButton); // Видалити кнопку "Куплено"
  }
}





  
//   function addItem() {
//     const newInput = document.createElement('input');
//     newInput.type = 'text';
//     newInput.placeholder = 'Назва товару';
  
//     const addButton = document.createElement('button');
//     addButton.className = 'add-button';
//     addButton.innerHTML = '<p>+</p><span class="tooltip">Додати товар</span>';
//     addButton.addEventListener('click', increaseQuantity.bind(null, 4));
  
//     const removeButton = document.createElement('button');
//     removeButton.className = 'add-button remove-button';
//     removeButton.innerHTML = '<p>-</p><span class="tooltip">Видалити товар</span>';
//     removeButton.addEventListener('click', decreaseQuantity.bind(null, 4));
  
//     const newField = document.getElementById('newField');
//     newField.innerHTML = '';
//     newField.appendChild(newInput);
//     newField.appendChild(addButton);
//     newField.appendChild(removeButton);
  
//     // Зміна розмірів контейнера
//     const section = document.getElementById('p1');
//     section.style.height = section.offsetHeight + 8 + 'px';
  
//     // Додавання <hr>
//     const hr = document.createElement('hr');
//     newField.style.marginTop = '100px';

// newField.appendChild(hr);


//   }
  