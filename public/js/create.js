/*
|1| Create Item: 
    To create item we need to do these steps orderly:
      1- Open/Close the Addition form according to user interactions
      2- Style inputs based on it's content
      3- Pushing item data to localStorage
      4- clear input fileds 
      5- Show items in the UI
*/

// |1.1| Open/Close the Addition form according to user interactions
popupVisibilityBtn.addEventListener("click", toggleAdditionForm = () => {
  toggleClass(addingNewItemPopup, "hidden");
  addingNewItemPopup.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});

// |1.2| Style inputs based on it's content
inputHandle = (e) => {
  if (e.value == "") {
    addClass(e, "border", "border-red-500", "placeholder:text-red-500");
    e.placeholder = "Fill the field";
  } else {
    removeClass(e, "border", "border-red-500", "placeholder:text-red-500");
    e.placeholder = e.placeholder;
  }

  if (
    newItemCategory.value != "" &&
    newItemPrice.value != "" &&
    newItemPrice.value >= 1 &&
    newItemBrand.value != "" &&
    newItemId.value != "" &&
    newItemId.value.length == 6
  ) {
    addClass(addingNewItemBtn, "!bg-green-500");
    addingNewItemBtn.removeAttribute("disabled");
  } else {
    removeClass(addingNewItemBtn, "!bg-green-500");
    addingNewItemBtn.setAttribute("disabled", "true");
  }
};

// |1.3| Pushing item data to localStorage
localStorage.item != null
  ? (items = JSON.parse(localStorage.item))
  : (items = []);
addingNewItemBtn.addEventListener("click",pushItemDataToLocalStorage = () => {
  let itemData = {
    category: newItemCategory.value.toLowerCase(),
    price: newItemPrice.value.toLowerCase(),
    brand: newItemBrand.value.toLowerCase(),
    id: newItemId.value.toLowerCase(),
  };
  if (mode === "create") {
    items.push(itemData);
    newItemCategory.focus();
  } else {
    items[temporary] = itemData;
    mode = "create";
    addingNewItemBtn.innerHTML = "add";
  }
  localStorage.setItem("item", JSON.stringify(items));
  clearInputFields();
  showItem();
  itemSetup();
});

// |1.4| clear inputs after item addition
clearInputFields = _ => Object.values(requiredInputs).map(e=> e.value = '')

// |1.5| Show items in the UI
showItem = () => {
  let item = "";
  for (let i = 0; i < items.length; i++) {
    item += `
  <div class="item grid grid-cols-6 h-[45px] border-b border-slate-200	" data-item-index=${i}>
    <div class="checkbox flex items-center justify-center capitalize border-l border-slate-200	"><i class="icon-square cursor-pointer"></i></div>
    
    <div class='flex items-center justify-center capitalize border-l border-slate-200	'>
      <span class='item-pre-define'>ID: </span>
      <span class='uppercase'>${items[i].id}</span>
    </div>
    <div class='flex items-center justify-center capitalize border-l border-slate-200	'>
      <span class='item-pre-define'>Category: </span>
      <span>${items[i].category}</span>
    </div>
    <div class="flex items-center justify-center capitalize border-l border-slate-200	">
    <span class='item-pre-define'>Brand: </span>
    <span>${items[i].brand}</span>
    </div>
    <div class='flex items-center justify-center capitalize border-l border-slate-200	'>
      <span class='item-pre-define'>Price: </span>
      <span>${items[i].price} L.E</span>
    </div>
    <div class="actions relative flex items-center justify-end capitalize border-l border-slate-200	">
    <i class="icon-dots-three-vertical cursor-pointer mr-7"></i>
    <div class="actions-box hidden	relative flex items-center justify-center order-first	bg-dark-blue rounded-sm">
      <div onclick='deleteItem(${i})' class="delete py-1 px-2 cursor-pointer text-slate-400 flex items-center justify-center bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500"><i class="icon-trash-2 py-1"></i></div>
      <div onclick='editItem(${i})' class="edit py-1 px-2 cursor-pointer text-slate-400 flex items-center justify-center bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500"><i class="icon-pen-tool py-1"></i></div>
      <div onclick='duplicateItem(${i})' class="duplicate py-1 px-2 cursor-pointer text-slate-400 flex items-center justify-center bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500"><i class="icon-copy py-1"></i></div>
    </div>
    </div>
  </div>
  `;
  }
  itemsWrapper.innerHTML = item;
  itemsNumber.innerHTML = `${itemsWrapper.children.length} Item`;
};