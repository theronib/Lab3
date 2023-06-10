
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

  // Оновлення значення лічильника в статистиці
  updateStatisticItemAmount(counterIndex, counterValue);

  // Збереження значення лічильника в локальне сховище
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

    // Оновлення значення лічильника в статистиці
    updateStatisticItemAmount(counterIndex, counterValue);

    // Збереження значення лічильника в локальне сховище
    localStorage.setItem(`counter${counterIndex}`, counterValue.toString());
  }
}

// Функція для оновлення значення лічильника в статистиці
function updateStatisticItemAmount(counterIndex, counterValue) {
  const statisticItem = document.querySelector(`.product-item.item${counterIndex}`);
  if (statisticItem) {
    const amountElement = statisticItem.querySelector('.amount');
    if (amountElement) {
      amountElement.textContent = counterValue.toString();
    }
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
      // Оновлення значення лічильника в статистиці
      updateStatisticItemAmount(counterIndex, parseInt(counterValue));
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

// ДОДАВАННЯ ТОВАРУ
function addItem() {
  var columnNew = document.querySelector('.column-new');
  var searchInput = document.getElementById('searchInput');

  if (searchInput.value.trim() !== '') {
    var newItemAdded = document.querySelector('.newitem-added');
    newItemAdded.innerHTML = searchInput.value;

    columnNew.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem2;

    searchInput.value = '';

    localStorage.setItem('item1', newItemAdded.innerHTML);
  } else {
    alert('Будь ласка, введіть назву товару!');
  }
}

function addItem2() {
  var columnNew2 = document.querySelector('.column-new2');
  var searchInput = document.getElementById('searchInput');

  if (searchInput.value.trim() !== '') {
    var newItemAdded2 = document.querySelector('.added2');
    newItemAdded2.innerHTML = searchInput.value;

    columnNew2.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem3;

    searchInput.value = '';

    localStorage.setItem('item2', newItemAdded2.innerHTML);
  } else {
    alert('Будь ласка, введіть назву товару!');
  }
}

function addItem3() {
  var columnNew3 = document.querySelector('.column-new3');
  var searchInput = document.getElementById('searchInput');

  if (searchInput.value.trim() !== '') {
    var newItemAdded3 = document.querySelector('.added3');
    newItemAdded3.innerHTML = searchInput.value;

    columnNew3.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem4;

    searchInput.value = '';

    localStorage.setItem('item3', newItemAdded3.innerHTML);
  } else {
    alert('Будь ласка, введіть назву товару!');
  }
}

function addItem4() {
  var columnNew4 = document.querySelector('.column-new4');
  var searchInput = document.getElementById('searchInput');

  if (searchInput.value.trim() !== '') {
    var newItemAdded4 = document.querySelector('.added4');
    newItemAdded4.innerHTML = searchInput.value;

    columnNew4.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem4;

    searchInput.value = '';

    localStorage.setItem('item4', newItemAdded4.innerHTML);
  } else {
    alert('Будь ласка, введіть назву товару!');
  }
}



function addItem2() {
  var columnNew2 = document.querySelector('.column-new2');
  var searchInput = document.getElementById('searchInput');

  if (searchInput.value.trim() !== '') {
    var newItemAdded2 = document.querySelector('.added2');
    newItemAdded2.innerHTML = searchInput.value;

    columnNew2.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem3;

    searchInput.value = '';

    localStorage.setItem('item2', newItemAdded2.innerHTML);
  } else {
    alert('Будь ласка, введіть назву товару!');
  }
}

function addItem3() {
  var columnNew3 = document.querySelector('.column-new3');
  var searchInput = document.getElementById('searchInput');

  if (searchInput.value.trim() !== '') {
    var newItemAdded3 = document.querySelector('.added3');
    newItemAdded3.innerHTML = searchInput.value;

    columnNew3.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem4;

    searchInput.value = '';

    localStorage.setItem('item3', newItemAdded3.innerHTML);
  } else {
    alert('Будь ласка, введіть назву товару!');
  }
}

function addItem4() {
  var columnNew4 = document.querySelector('.column-new4');
  var searchInput = document.getElementById('searchInput');

  if (searchInput.value.trim() !== '') {
    var newItemAdded4 = document.querySelector('.added4');
    newItemAdded4.innerHTML = searchInput.value;

    columnNew4.style.display = 'block';

    var addButton = document.querySelector('.button');
    addButton.onclick = addItem4;

    searchInput.value = '';

    localStorage.setItem('item4', newItemAdded4.innerHTML);
  } else {
    alert('Будь ласка, введіть назву товару!');
  }
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


// НЕКУЛПЕНО І КУПЛЕНО

// ITEM 0
var initialButtonText = 'Не куплено';
var initialVisibility = 'hidden';

// Перевірка, чи є збережений стан у локальному сховищі
var storedState = localStorage.getItem('shoppingState');
if (storedState) {
  var state = JSON.parse(storedState);
  
  // Відновлення стану кнопки "Не куплено"
  var buyButton = document.querySelector('.buy-button');
  buyButton.innerText = state.buttonText;
  buyButton.classList.toggle('not-bought', !state.isBought);
  buyButton.classList.toggle('was-bought', state.isBought);

  // Відновлення видимості кнопки "Зробити не купленим"
  var actionButton = document.querySelector('.not-bought-action');
  actionButton.style.visibility = state.actionButtonVisibility;

  // Відновлення стану кнопок "+", "-"
  var addButton = document.getElementById('addButton');
  var removeButton = document.getElementById('removeButton');
  addButton.style.visibility = state.addButtonVisibility;
  removeButton.style.visibility = state.removeButtonVisibility;

  // Відновлення кнопки "Куплено"
  if (state.isBought) {
    var boughtButton = document.createElement('button');
    boughtButton.className = 'was-bought-button';
    boughtButton.innerText = 'Куплено';

    // Застосування стилів до кнопки "Куплено"
    boughtButton.style.color = 'rgb(117, 114, 114)';
    boughtButton.style.backgroundColor = '#f0f0f0';
    boughtButton.style.fontFamily = 'Arial';
    boughtButton.style.fontWeight = 'bold';
    boughtButton.style.fontSize = '13px';
    boughtButton.style.width = '100px';
    boughtButton.style.height = '10px';
    boughtButton.style.padding = '10px';
    boughtButton.style.textAlign = 'center';
    boughtButton.style.display = 'flex';
    boughtButton.style.justifyContent = 'center';
    boughtButton.style.alignItems = 'center';
    boughtButton.style.borderRadius = '3px';
    boughtButton.style.border = '2px solid #cecece';
    boughtButton.style.position = 'absolute';
    boughtButton.style.top = '17%';
    boughtButton.style.left = '42%';
    boughtButton.style.transform = 'translate(-50%, -50%)';

    document.body.appendChild(boughtButton);
  }
}

function markAsBought(button) {
  // Зміна тексту кнопки
  button.innerText = 'Куплено';
  
  // Зміна класу кнопки
  button.classList.remove('not-bought');
  button.classList.add('was-bought');
  
  // Зробити кнопку not-bought-action видимою
  var actionButton = document.querySelector('.not-bought-action');
  actionButton.style.visibility = 'visible';
  

  // Збереження стану у локальному сховищі
  var state = {
    buttonText: button.innerText,
    isBought: true,
    actionButtonVisibility: 'visible',
    addButtonVisibility: 'hidden',
    removeButtonVisibility: 'hidden'
  };
  localStorage.setItem('shoppingState', JSON.stringify(state));

  // Затримка для зміни видимості кнопок "+", "-"
  setTimeout(function() {
    var addButton = document.getElementById('addButton');
    var removeButton = document.getElementById('removeButton');
    addButton.style.visibility = 'hidden';
    removeButton.style.visibility = 'hidden';
  }, 100);


}


function undoPurchase() {
  // Зміна тексту кнопки
  var buyButton = document.querySelector('.buy-button');
  buyButton.innerText = initialButtonText;
  
  // Зміна класу кнопки
  buyButton.classList.remove('was-bought');
  buyButton.classList.add('not-bought');
  
  // Приховування кнопки not-bought-action
  var actionButton = document.querySelector('.not-bought-action');
  actionButton.style.visibility = initialVisibility;

  // Повернення видимості кнопок "+", "-"
  var addButton = document.getElementById('addButton');
  var removeButton = document.getElementById('removeButton');
  addButton.style.visibility = 'visible';
  removeButton.style.visibility = 'visible';

  // Видалення збереженого стану з локального сховища
  localStorage.removeItem('shoppingState');

  // Видалення кнопки "Куплено"
  var boughtButton = document.querySelector('.was-bought-button');
  if (boughtButton) {
    boughtButton.parentNode.removeChild(boughtButton);
  }
}


// ITEM 2
var initialButtonText2 = 'Не куплено';
var initialVisibility2 = 'hidden';

// Перевірка, чи є збережений стан у локальному сховищі
var storedState2 = localStorage.getItem('shoppingState2');
if (storedState2) {
  var state2 = JSON.parse(storedState2);

  // Відновлення стану кнопки "Не куплено"
  var buyButton2 = document.querySelector('.buy-button.not-bought-custom');
  buyButton2.innerText = state2.buttonText;
  buyButton2.classList.toggle('not-bought', !state2.isBought);
  buyButton2.classList.toggle('was-bought', state2.isBought);

  // Відновлення видимості кнопки "Зробити не купленим"
  var actionButton2 = document.querySelector('.not-bought-action.not-bought-action2');
  actionButton2.style.visibility = state2.actionButtonVisibility;

  // Відновлення видимості кнопок "+", "-"
  var addButton2 = document.querySelector('.add-button.add-button4');
  var removeButton2 = document.querySelector('.add-button.remove-button4');
  addButton2.style.visibility = state2.addButtonVisibility;
  removeButton2.style.visibility = state2.removeButtonVisibility;
}

function markAsBought2(button) {
  // Зміна тексту кнопки
  button.innerText = 'Куплено';

  // Зміна класу кнопки
  button.classList.remove('not-bought');
  button.classList.add('was-bought');

  // Зробити кнопку "Зробити не купленим" видимою
  var actionButton2 = document.querySelector('.not-bought-action.not-bought-action2');
  actionButton2.style.visibility = 'visible';

  // Зробити кнопки "+", "-" невидимими
  var addButton2 = document.querySelector('.add-button.add-button4');
  var removeButton2 = document.querySelector('.add-button.remove-button4');
  addButton2.style.visibility = 'hidden';
  removeButton2.style.visibility = 'hidden';

  // Збереження стану у локальному сховищі
  var state2 = {
    buttonText: button.innerText,
    isBought: true,
    actionButtonVisibility: 'visible',
    addButtonVisibility: 'hidden',
    removeButtonVisibility: 'hidden'
  };
  localStorage.setItem('shoppingState2', JSON.stringify(state2));

  updateStatistics();
}

function undoPurchase2() {
  // Зміна тексту кнопки
  var buyButton2 = document.querySelector('.buy-button.not-bought-custom');
  buyButton2.innerText = initialButtonText2;

  // Зміна класу кнопки
  buyButton2.classList.remove('was-bought');
  buyButton2.classList.add('not-bought');

  // Приховування кнопки "Зробити не купленим"
  var actionButton2 = document.querySelector('.not-bought-action.not-bought-action2');
  actionButton2.style.visibility = 'hidden';

  // Повернення видимості кнопок "+", "-"
  var addButton2 = document.querySelector('.add-button.add-button4');
  var removeButton2 = document.querySelector('.add-button.remove-button4');
  addButton2.style.visibility = 'visible';
  removeButton2.style.visibility = 'visible';

  // Видалення збереженого стану з локального сховища
  localStorage.removeItem('shoppingState2');

  updateStatistics();
}

function updateStatistics() {
  // Отримання списку товарів
  var items = document.querySelectorAll('.column-new2 .product-item');

  // Прохід по кожному товару і оновлення лічильників
  items.forEach(function (item) {
    var isBought = item.classList.contains('itemcrossed');
    var amount = parseInt(item.querySelector('.amount').innerText);
    if (isBought) {
      boughtCount += amount;
    } else {
      remainingCount += amount;
    }
  });

  // Оновлення значень в статистиці
  var remainingSpan = document.querySelector('#p2 .header');
  remainingSpan.innerText = 'Залишилося ' + remainingCount;

  var boughtSpan = document.querySelector('#p2 .head-bought');
  boughtSpan.innerText = 'Куплено ' + boughtCount;
}



// Отримуємо посилання на елементи
// Отримуємо посилання на елементи
var searchInput = document.getElementById("searchInput");
var addProductButton = document.getElementById("addProductButton");
var p2Section = document.getElementById("p2");

// Додаємо обробник події для кнопки "Додати"
addProductButton.addEventListener("click", function() {
  var productName = searchInput.value; // Отримуємо значення поля вводу для назви товару

  if (productName.trim() !== "") { // Перевіряємо, чи введено значення назви товару
    // Створюємо розмітку для нового товару
    var newProductHTML = `
      <article class="product-item">
        <p>${productName}</p>
        <span class="amount">1</span>
      </article>
    `;

    // Додаємо новий товар до статистики p2
    p2Section.innerHTML += newProductHTML;

    // Очищаємо поле вводу
    searchInput.value = "";
  }
});
