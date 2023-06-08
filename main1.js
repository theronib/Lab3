
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


// НЕКУПЛЕНО -> КУПЛЕНО
// function toggleBoughtStatus(button) {
//   var container = button.parentNode;
  
//   if (button.classList.contains('not-bought')) {
//     // Зміна стану з "Не куплено" на "Куплено"
//     button.style.display = 'none'; // Приховати кнопку "Не куплено"
    
//     var boughtButton = document.createElement('button');
//     boughtButton.textContent = 'Куплено';
//     boughtButton.className = 'was-bought-action';
//     boughtButton.onclick = function() {
//       toggleBoughtStatus(boughtButton);
//     };
    
//     container.appendChild(boughtButton); // Додати кнопку "Куплено"
//   } else {
//     // Зміна стану з "Куплено" на "Не куплено"
//     button.style.display = ''; // Показати кнопку "Не куплено"
    
//     var wasBoughtButton = container.querySelector('.was-bought');
//     container.removeChild(wasBoughtButton); // Видалити кнопку "Куплено"
//   }
// }


// ДОДАВАННЯ ТОВАРУ
function addItem() {
  var columnNew = document.querySelector('.column-new');
  var searchInput = document.getElementById('searchInput');

  var newItemAdded = document.querySelector('.newitem-added');
  newItemAdded.innerHTML = searchInput.value; // Замінюємо текст надпису на значення з поля вводу

  columnNew.style.display = 'block'; // Змінюємо стиль блоку на видимий

  var addButton = document.querySelector('.button');
  addButton.onclick = addItem2; // Змінюємо функцію, яка викликається при натисканні на кнопку

  searchInput.value = ''; // Очищуємо поле вводу

  // Зберігаємо значення поля в локальному сховищі
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

  // Зберігаємо значення поля в локальному сховищі
  localStorage.setItem('item2', newItemAdded2.innerHTML);
}


// Функція для додавання товару 3
function addItem3() {
  var columnNew3 = document.querySelector('.column-new3');
  var searchInput = document.getElementById('searchInput');

  var newItemAdded3 = document.querySelector('.added3');
  newItemAdded3.innerHTML = searchInput.value; // Замінюємо текст надпису на значення з поля вводу

  columnNew3.style.display = 'block'; // Змінюємо стиль блоку на видимий

  var addButton = document.querySelector('.button');
  addButton.onclick = addItem4; // Змінюємо функцію, яка викликається при натисканні на кнопку

  searchInput.value = ''; // Очищуємо поле вводу

  // Зберігаємо значення поля в локальному сховищі
  localStorage.setItem('item3', newItemAdded3.innerHTML);
}


// Функція для додавання товару 4
function addItem4() {
  var columnNew4 = document.querySelector('.column-new4');
  var searchInput = document.getElementById('searchInput');

  var newItemAdded4 = document.querySelector('.added4');
  newItemAdded4.innerHTML = searchInput.value; // Замінюємо текст надпису на значення з поля вводу

  columnNew4.style.display = 'block'; // Змінюємо стиль блоку на видимий

  var addButton = document.querySelector('.button');
  addButton.onclick = addItem4; // Змінюємо функцію, яка викликається при натисканні на кнопку

  searchInput.value = ''; // Очищуємо поле вводу

  // Зберігаємо значення поля в локальному сховищі
  localStorage.setItem('item4', newItemAdded4.innerHTML);
}


// Функція для завантаження доданих товарів під час завантаження сторінки
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
    localStorage.removeItem('item1');
  }

  var savedItem2 = localStorage.getItem('item2');

  if (savedItem2) {
    var newItemAdded2 = document.querySelector('.added2');
    newItemAdded2.innerHTML = savedItem2;

    var columnNew2 = document.querySelector('.column-new2');
    columnNew2.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem3;
    localStorage.removeItem('item2');

  }

  var savedItem3 = localStorage.getItem('item3');

    if (savedItem3) {
      var newItemAdded3 = document.querySelector('.added3');
      newItemAdded3.innerHTML = savedItem3;
  
      var columnNew3 = document.querySelector('.column-new3');
      columnNew3.style.display = 'block';
  
      var addButton = document.querySelector('.button');
      addButton.onclick = addItem4;
      localStorage.removeItem('item3');

    }

    var savedItem4 = localStorage.getItem('item4');

      if (savedItem4) {
        var newItemAdded4 = document.querySelector('.added4');
        newItemAdded4.innerHTML = savedItem4;
    
        var columnNew4 = document.querySelector('.column-new4');
        columnNew4.style.display = 'block';
    
        var addButton = document.querySelector('.button');
        addButton.onclick = addItem4;
        localStorage.removeItem('item4');

      }
}




// ВИДАЛЕННЯ НЕ КУПЛЕНОГО ТОВАРУ
// Отримуємо всі кнопки "cancel-action"
const cancelButtons = document.querySelectorAll(".cancel-action");

// Ітеруємося по кожній кнопці "cancel-action" і призначаємо обробник подій
cancelButtons.forEach(function(cancelButton) {
  cancelButton.addEventListener("click", function() {
    // Отримуємо батьківський елемент (секцію), який потрібно видалити
    const section = this.parentNode;
    // Зберігаємо інформацію про видалення елемента в локальне сховище
    localStorage.setItem("deletedSection-" + section.id, "true");
    // Видаляємо секцію
    section.remove();
  });
});





