let 
  items,
  inputHandle,
  showItem,
  itemSetup,
  deleteItem,
  duplicateItem,
  editItem,
  temporary, // fake variable
  mode = "create",
  searchMode = "category",
  open_close_searchBox,
  open_close_categoryBox,
  $ = (id) => document.getElementById(id),
  popupVisibilityBtn = $("adding-button"),
  addingNewItemBtn = $("new-item-button"),
  newItemCategory = $("new-item-category"),
  newItemPrice = $("new-item-price"),
  newItemBrand = $("new-item-brand"),
  newItemId = $("new-item-id"),
  addingNewItemPopup = $("addingNewItemPopup"),
  itemsWrapper = $("items-wrapper"),
  itemsNumber = $("items-number"),
  numberOfSelectedItems = $("selected-items"),
  gridRowSwitcher = $("grid-row-switcher"),
  deleteSelectedItems = $("delete-selected-items"),
  searchResultsNumber = $("searchResults"),
  categoryBox = $("category-box"),
  deleteAllItemsIcon = $("delete-all-items"),
  filterIcon = $("filter-icon"),
  searchIcon = $("search-icon"),
  searchBox = $("search-box"),
  selectedItems = document.getElementsByClassName("bi-check-square"),
  notFound = document.getElementsByClassName('CRUDS__body')[0],
  requiredInputs = document.querySelectorAll('[data-item-date="required-field"]'),
  removeClass = (ele, ...classes) => ele.classList.remove(...classes),
  addClass = (ele, ...classes) => ele.classList.add(...classes),
  toggleClass = (ele, ...classes) => ele.classList.toggle(...classes);