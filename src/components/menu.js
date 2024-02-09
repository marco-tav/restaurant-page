function createMenu() {
  const contentDiv = document.getElementById('content');
  
  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'menu-container');

  const description = 'This is a great description of a great ramen than contains some great ingredients which is very descriptive and makes you want to eat ramen.';

  const nameArray = [
    'Tonkotsu', 
    'Tonkotsu Shoyu', 
    'Miso', 
    'Spicy Miso', 
    'Vegan', 
    'Spicy Vegan'
  ];

  for(let i=0; i<6; i++) {
    let menuItem = createMenuItem(nameArray[i], description);
    menuContainer.appendChild(menuItem);
  }

  contentDiv.appendChild(menuContainer);
}

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.setAttribute('class', 'menu-item');

  const imgPHolder = createImgPlaceholder();
  menuItem.appendChild(imgPHolder);

  const dishDescription = createDescription(name, description);
  menuItem.appendChild(dishDescription);

  return menuItem;
}

function createImgPlaceholder() {
  const imgPlaceholder = document.createElement('div');
  imgPlaceholder.setAttribute('class', 'img-placeholder');
  
  const placeholderPara = document.createElement('p');
  placeholderPara.innerText = 'placeholder';

  imgPlaceholder.appendChild(placeholderPara);

  return imgPlaceholder;
}

function createDescription(name, description) {
  const container = document.createElement('div');
  container.setAttribute('class', 'item-description');

  const dishName = document.createElement('h3');
  dishName.innerText = name;
  container.appendChild(dishName);

  const itemDescription = document.createElement('p');
  itemDescription.innerText = description;
  container.appendChild(itemDescription);

  return container;
}

export default createMenu;