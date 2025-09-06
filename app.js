var inp = document.querySelector(`.inputBox form input`);
var submitButton = document.querySelector(`.inputBox form button `);
var list = document.querySelector(`.listBox ul`);

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
  inp.value = ``;
  focus(inp);
}
