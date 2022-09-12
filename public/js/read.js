// Displaying Mode [Grid or Rows]
gridRowSwitcher.addEventListener("click", () => {
  toggleClass(gridRowSwitcher, "icon-grid");
  toggleClass(itemsWrapper, "square-template");
});

itemSetup = () => {
  for (let i = 0; i < itemsWrapper.children.length; i++) {
    let item = itemsWrapper.children[i];
    let selectbox = itemsWrapper.children[i].children[0].firstChild;
    let actionsBtn = itemsWrapper.children[i].children[5].children[0];
    let actionsBox =
      itemsWrapper.children[i].children[5].children[0].nextElementSibling;
    selectbox.addEventListener("click", () => {
      if (selectbox.classList.contains("icon-check-square")) {
        removeClass(selectbox, "icon-check-square");
        addClass(selectbox, "icon-square");
      } else {
        addClass(selectbox, "icon-check-square");
        removeClass(selectbox, "icon-square");
      }
      toggleClass(itemsWrapper.children[i], "item-selected");
      numberOfSelectedItems.innerHTML = selectedItems.length;
      deleteSelectedItems.addEventListener("click", () =>
        deleteMultipleItems(item)
      );
    });
    actionsBtn.parentElement.addEventListener("click", () => {
      toggleClass(actionsBox, "hidden");
    });
    removeClass(item, "bg-pink-600", "!text-white");
    addClass(item, "text-zinc-500");
  }
  if (itemsWrapper.children.length != 0) {
    addClass(itemsWrapper.lastElementChild, "bg-pink-600", "!text-white");
    itemsWrapper.lastElementChild.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
};


// |3| Duplicate items
duplicateItem = (i) => {
  items.splice(i, 0, items[i]);
  localStorage.item = JSON.stringify(items);
  showItem();
  itemSetup();
};