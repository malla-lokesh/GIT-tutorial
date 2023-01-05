// parentElement
console.log(document.querySelector('.list-group').parentElement);

// lastElementChild
console.log(document.querySelector('.list-group').lastElementChild);

// lastChild
console.log(document.querySelector('.list-group').lastChild);

// firstElementChild
console.log(document.querySelector('.list-group').firstElementChild);

// firstChild
console.log(document.querySelector('.list-group').firstChild);

// nextSibling
console.log(document.querySelector('.title').nextSibling);

// nextElementSibling
console.log(document.querySelector('.title').nextElementSibling);

// previousSibling
console.log(document.querySelector('.list-group').previousSibling);

// previousElementSibling
console.log(document.querySelector('.list-group').previousElementSibling);

// createElement
var newElement = document.createElement('div');
console.log(newElement);

// setAttribute
newElement.setAttribute('class', 'newDiv');
console.log(newElement);

// createTextNode
var text = document.createTextNode('New Div Text');
console.log(text);

// appendChild
newElement.appendChild(text);
console.log(newElement);