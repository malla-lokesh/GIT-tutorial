var form = document.getElementById('form');
var list = document.getElementById('users');

form.addEventListener('submit', displayNames);

function displayNames(e){
    e.preventDefault();

    const details = {
        name: document.getElementById('name').value,
        mail: document.getElementById('email').value,
        phone: document.getElementById('phoneNo').value
    };
    localStorage.setItem(details.name, JSON.stringify(details));
    var obj = localStorage.getItem(details.name);
    var parsedObject = JSON.parse(obj);

    var newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(parsedObject.name + " - " + parsedObject.mail + " - " + parsedObject.phone));
    list.appendChild(newLi);

    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode("Delete"));
    newLi.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function(e){
        e.preventDefault();
        var itemToBeRemoved = e.target.parentElement;
        list.removeChild(itemToBeRemoved);
        localStorage.removeItem(parsedObject.name);
    });

    var editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode("Edit"));
    newLi.appendChild(editBtn);
    editBtn.addEventListener('click', function(e){
        e.preventDefault();
        var itemToBeRemoved = e.target.parentElement;
        list.removeChild(itemToBeRemoved);
        localStorage.removeItem(name);
        document.getElementById('name').value = parsedObject.name;
        document.getElementById('email').value = parsedObject.mail;
        document.getElementById('phoneNo').value = parsedObject.phone;
    });
}