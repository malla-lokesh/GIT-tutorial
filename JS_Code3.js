// Editing 5th list item with className
document.getElementsByClassName('list-group-item')[4].style.color = 'red';

// The above statement doesn't reflect because the 5th element
// does not have any class name.


// By using tagName
var ele = document.getElementsByTagName('li');
ele[4].style.color = 'red';