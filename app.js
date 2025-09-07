var inp = document.querySelector(`.inputBox form input`);
var submitButton = document.querySelector(`.inputBox form button `);
var list = document.querySelector(`.listBox ul`);

showAllItems();
submitButton.addEventListener(`click`, addNewItem);

function addNewItem(e) {
  e.preventDefault();
  if (inp.value != ``) {
    list.innerHTML += `<li>
            ${inp.value}
            <div>
              <i class="bx bx-pen-alt" style="color: #000000"></i>
              <i class="bx bx-trash-x" style="color: #000000"></i>
            </div>`;
  } else {
    alert(`please enter something`);
  }
  var txt = inp.value;
  addToLocalStorage(txt);
  inp.value = ``;
  focus(inp);
}

function addToLocalStorage(txt) {
  var oldValue = JSON.parse(localStorage.getItem(`key`));

  if (oldValue == null) {
    oldValue = [txt];
  } else {
    oldValue.push(txt);
  }
  localStorage.setItem(`key`, JSON.stringify(oldValue));
}

function showAllItems() {
  var allItems = JSON.parse(localStorage.getItem(`key`));
  if (allItems != null) {
    for (var i = 0; i < allItems.length; i++) {
      list.innerHTML += `<li>
            ${allItems[i]}
            <div>
              <i class="bx bx-pen-alt" style="color: #000000"></i>
              <i class="bx bx-trash-x" style="color: #000000"></i>
            </div>`;
    }
  }
}
