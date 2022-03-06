// Load CSS
import './style.css';

// Dropdown functionality

const clickBtn = (e) => {
  const menuClass = e.currentTarget.nextSibling.classList;
  if (menuClass.contains('show')) {
    menuClass.remove('show');
  } else {
    menuClass.add('show');
  }
};

const hoverBtn = (e) => {
  const menuClass = e.currentTarget.nextSibling.classList;
  if (!menuClass.contains('show')) {
    menuClass.add('show');
  }
};

const clickMenu = (e) => {
  const menuClass = e.currentTarget.parentNode.classList;
  if (menuClass.contains('show')) {
    menuClass.remove('show');
  } else {
    menuClass.add('show');
  }
};

// Build dropdown elements

const dropdownBtn = (title, hover) => {
  const btn = document.createElement('button');
  const icon = document.createElement('i');

  icon.className = 'fa-solid fa-caret-down';

  btn.className = 'btn btn-dropdown';
  btn.setAttribute('type', 'button');
  btn.textContent = ` ${title} `;
  btn.appendChild(icon);
  if (hover === true) {
    btn.addEventListener('mouseenter', hoverBtn);
  }
  btn.addEventListener('click', clickBtn);

  return btn;
};

const dropdownLink = (link) => {
  const listItem = document.createElement('li');
  const listLink = document.createElement('a');

  listLink.className = 'dropdown-item';
  listLink.href = link.href;
  listLink.textContent = link.text;

  listItem.appendChild(listLink);
  listItem.addEventListener('click', clickMenu);

  return listItem;
};

const dropdownMenu = (links) => {
  const list = document.createElement('ul');
  list.className = 'dropdown-menu hide';
  links.forEach((link) => list.appendChild(dropdownLink(link)));

  return list;
};

const dropdown = (title, links, hover = false) => {
  const container = document.createElement('div');
  container.className = 'dropdown';
  container.appendChild(dropdownBtn(title, hover));
  container.appendChild(dropdownMenu(links));

  return container;
};

module.exports = dropdown;
