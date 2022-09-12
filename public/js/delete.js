deleteAllItems = () => {
  items.splice(0, items.length);
  localStorage.clear();
  showItem();
  itemSetup();
};

// Delete one item
deleteItem = (i) => {
  items.splice(i, 1);
  localStorage.item = JSON.stringify(items);
  showItem();
  itemSetup();
};
