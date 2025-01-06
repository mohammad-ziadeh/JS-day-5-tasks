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


