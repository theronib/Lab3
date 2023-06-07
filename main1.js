
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

  localStorage.setItem(element.tagName.toLowerCase(), newText);

  element.replaceWith(updatedElement);
}

// Отримання збереженої назви з локального сховища при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', () => {
//   const tomatoElement = document.querySelector('.tomato s');
//   const tomatoText = localStorage.getItem('s');
//   if (tomatoText) {
//     tomatoElement.textContent = tomatoText;
//   }

//   const cookiesElement = document.querySelector('.cookies p');
//   const cookiesText = localStorage.getItem('p');
//   if (cookiesText) {
//     cookiesElement.textContent = cookiesText;
//   }


  
//   const potatoElement = document.querySelector('.potato p');
//   const potatoText = localStorage.getItem('p');
//   if (potatoText) {
//     potatoElement.textContent = potatoText;
//   }
// });


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


// ДОДАВАННЯ ТОВАРУ


// Функція для додавання елемента і збереження значення
function addItem() {
  var columnNew = document.querySelector('.column-new');
  var searchInput = document.getElementById('searchInput');

  var newItemAdded = document.querySelector('.newitem-added');
  newItemAdded.innerHTML = searchInput.value; // Замінюємо текст надпису на значення з поля вводу

  columnNew.style.display = 'block'; // Змінюємо стиль блоку на видимий

  var addButton = document.querySelector('.button');
  addButton.onclick = addItem2; // Змінюємо функцію, яка викликається при натисканні на кнопку

  searchInput.value = ''; // Очищуємо поле вводу

  localStorage.setItem('item1', newItemAdded.innerHTML);


}

function addItem2() {
  var columnNew2 = document.querySelector('.column-new2');
  var searchInput = document.getElementById('searchInput');

  var newItemAdded2 = document.querySelector('.added2');
  newItemAdded2.innerHTML = searchInput.value; // Замінюємо текст надпису на значення з поля вводу

  columnNew2.style.display = 'block'; // Змінюємо стиль блоку на видимий

  var addButton = document.querySelector('.button');
  addButton.onclick = addItem3; // Змінюємо функцію, яка викликається при натисканні на кнопку

  searchInput.value = ''; // Очищуємо поле вводу

}

function addItem3() {
  var columnNew3 = document.querySelector('.column-new3');
  var searchInput = document.getElementById('searchInput');

  var newItemAdded3 = document.querySelector('.added3');
  newItemAdded3.innerHTML = searchInput.value; // Замінюємо текст надпису на значення з поля вводу

  columnNew3.style.display = 'block'; // Змінюємо стиль блоку на видимий

  var addButton = document.querySelector('.button');
  addButton.onclick = addItem4; // Змінюємо функцію, яка викликається при натисканні на кнопку

  searchInput.value = ''; // Очищуємо поле вводу

  
}

function addItem4() {
  var columnNew4 = document.querySelector('.column-new4');
  var searchInput = document.getElementById('searchInput');

  var newItemAdded4 = document.querySelector('.added4');
  newItemAdded4.innerHTML = searchInput.value; // Замінюємо текст надпису на значення з поля вводу

  columnNew4.style.display = 'block'; // Змінюємо стиль блоку на видимий

  var addButton = document.querySelector('.button');
  addButton.onclick = addItem4; // Змінюємо функцію, яка викликається при натисканні на кнопку

  searchInput.value = ''; // Очищуємо поле вводу
  
}

window.onload = function() {
  // Отримуємо значення з локального сховища
  var savedItem = localStorage.getItem('item1');

  if (savedItem) {
    var newItemAdded = document.querySelector('.newitem-added');
    newItemAdded.innerHTML = savedItem;

    var columnNew = document.querySelector('.column-new');
    columnNew.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem2;
  }
}