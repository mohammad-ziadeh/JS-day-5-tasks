const form = document.getElementById("form");
const input = document.getElementById("items");
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let items = input.value.trim();
  if (items !== "") {
    let newItem = document.createElement("li");
    newItem.textContent = items;
    list.appendChild(newItem);

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "delete";
    newItem.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
      list.removeChild(newItem);
    });
    input.value = "";
    input.focus();
  }
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let newItem = input.value.trim();
//   if (newItem) {
//     let listItem = document.createElement("li");
//     listItem.textContent = newItem;

//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {
//       list.removeChild(listItem);
//     });

//     listItem.appendChild(deleteButton);

//     list.appendChild(listItem);

//     input.value = "";
//     input.focus();
//   }
// });
