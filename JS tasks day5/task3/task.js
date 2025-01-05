const inputField = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const shoppingList = document.getElementById("shoppingList");

function addItem() {
  const itemText = inputField.value.trim();

  if (itemText !== "") {
    const listItem = document.createElement("li");

    listItem.textContent = itemText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      shoppingList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    shoppingList.appendChild(listItem);

    inputField.value = "";
    inputField.focus();
  }
}

addButton.addEventListener("click", addItem);

inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
