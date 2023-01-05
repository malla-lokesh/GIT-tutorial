var form = document.getElementById('my-form');
var list = document.getElementById('users');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();

    let obj = { 
                name: document.getElementById('name').value,
                email: document.getElementById('email').value
            };
    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem('myObj', obj_serialized);
    console.log(JSON.parse(localStorage.getItem('myObj')));

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(obj.name + " - " + obj.email));
    list.appendChild(li);
}