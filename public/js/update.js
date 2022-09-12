// Edit items
editItem = (i) => {
  mode = "update";
  temporary = i;
  addingNewItemPopup.classList.contains("hidden") 
    ? popupVisibilityBtn.click() 
    : null
  newItemCategory.value = items[i].category;
  newItemPrice.value = items[i].price;
  newItemBrand.value = items[i].brand;
  newItemId.value = items[i].id;
  addingNewItemBtn.innerHTML = "update";
};