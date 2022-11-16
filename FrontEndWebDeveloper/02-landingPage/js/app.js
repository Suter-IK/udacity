/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 *  >> no global variables defined
 * End Global Variables
 *
 * Start Helper Functions
 * 
*/

/**
 * Returns list of text and targetId to create navigation elements
 * @param { NodeListOf<HTMLElement> } targetNodes 
 * @param { String } childAttribute 
 * @returns { Array.<{text: String, target: String}> }
 */
function getNavVector(targetNodes, childAttribute) {
  let navVec = [];
  targetNodes.forEach(element => {
    const navItem = {
      text: element.getAttribute(childAttribute),
      target: element.id,
    }
    navVec.push(navItem);
  });
  return navVec;
}

/**
 * Creates navigation elements from navNodes-Array
 * @param { Array.<{text: String, target: String}> } navNodes 
 * @returns { DocumentFragment }
 */
function getListElements(navNodes) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < navNodes.length; i++) {
    const liElement = document.createElement('li');
    liElement.id = `nav__heading${i}`;
    liElement.innerText = navNodes[i].text;
    liElement.classList.add('menu__link');
    liElement.setAttribute('navTarget', navNodes[i].target);
    frag.appendChild(liElement);
  }
  return frag;
}

/**
 * Event handler for navigation button click event, scrolling to appropriate section
 * @param { * } e - The observable event.
*/
const navClickHandler = (e) => {
  const navTarget = e.target.getAttribute('navTarget');
  const targetSection = document.getElementById(navTarget);
  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setActiveListItem(e.target.parentElement, e.target);
  setActiveSection(targetSection);
}


/**
 * Event handler for scroll event, scrolling to anchor ID using scrollTO event
 * and adding class 'active' to section when near top of viewport
 * @param {*} e - The observable event.
 */
const scrollHandler = (e) => {
  const allSectionNodes = document.querySelectorAll('section');
  let targetSection = allSectionNodes[0];
  //get distance from top of section1
  let targetSectionTop = Math.abs(targetSection.getBoundingClientRect().top);
  //and compare it with all other elements to find the one closest to the top 
  allSectionNodes.forEach(element => {
    let top = Math.abs(element.getBoundingClientRect().top);
    //console.log(element.id + '|' + top);
    if (targetSectionTop > top) {
      targetSection = element;
      targetSectionTop = Math.abs(targetSection.getBoundingClientRect().top);
    }
  });
  //console.log(targetSection.getAttribute('data-nav'));

  setActiveSection(targetSection);

  const navButton = document.querySelector(`[navTarget="${targetSection.id}"]`);
  setActiveListItem(navButton.parentElement, navButton);
}


/**
 * Sets the new active list item <li> within a parent node, e.g. <ul> or <ol>
 * @param { HTMLObjectElement } list the parent node containing the list items
 * @param { HTMLObjectElement } item the new active node/item
 */
const setActiveListItem = (list, item) => {
  const childElements = list.children;
  for (let i = 0; i < childElements.length; i++) {
    childElements[i].classList.remove('nav-active');
  }
  item.classList.add('nav-active');
}

/**
 * Sets the new active section
  * @param { HTMLObjectElement } item the new active section
 */
const setActiveSection = (item) => {
  const sections = document.querySelectorAll('section')
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('your-active-class');
  }
  item.classList.add('your-active-class');
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function initializeSolution() {
  // build the nav
  const allSectionNodes = document.querySelectorAll('section');
  const navNodes = getNavVector(allSectionNodes, 'data-nav');

  const ulElement = document.createElement('ul');
  ulElement.id = 'navbar__list';

  //get li elements as fragment
  const liFragment = getListElements(navNodes);
  ulElement.appendChild(liFragment);
  const navParent = document.querySelector('.navbar__menu');
  navParent.appendChild(ulElement);

  //initialize active section by adding 'active' classes
  setActiveListItem(ulElement, ulElement.firstChild);
  setActiveSection(allSectionNodes[0]);

  // Attach eventListener for navigation
  navParent.addEventListener('click', navClickHandler);
  document.addEventListener('scroll', scrollHandler);
}

initializeSolution();

/**
 * End Main Functions
 *
*/








