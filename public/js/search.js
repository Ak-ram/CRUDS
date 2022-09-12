open_close_searchBox = () => {
  toggleClass(searchBox.parentElement, "expanded");
  if (searchBox.parentElement.classList.contains("expanded")) {
    itemsNumber.innerHTML = `${itemsWrapper.children.length} Item`;
    removeClass(searchBox, "px-2");
    popupVisibilityBtn.classList.remove("hidden");
  } else {
    itemsNumber.innerHTML = ``;
    popupVisibilityBtn.classList.add("hidden");
    addClass(searchBox, "px-2");
  }
};
open_close_categoryBox = () => {
  toggleClass(categoryBox, "hidden");
};
getSearchMode = (id) => {
  id == "category" ? (searchMode = "category") : (searchMode = "price");
  searchBox.placeholder = `Search by ${searchMode}`;
};

searchBox.addEventListener("input", () => {
  for (let i = 0; i < items.length; i++) {
    itemsWrapper.children[i].classList.add("hidden");
    if (searchMode == "category") {
      if (items[i].category.includes(searchBox.value.toLowerCase())) {
        itemsWrapper.children[i].classList.remove("hidden");
        notFound.classList.remove("not-found");
        itemsWrapper.innerHTML = item;
      } else {
        notFound.classList.add("not-found");
      }
    } else {
      if (items[i].price.includes(searchBox.value.toLowerCase())) {
        itemsWrapper.children[i].classList.remove("hidden");
        notFound.classList.remove("not-found");
        itemsWrapper.innerHTML = item;
      } else {
        notFound.classList.add("not-found");
      }
    }
  }
});
