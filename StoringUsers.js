var form = document.getElementById('my-form');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();

    let obj = { name: document.getElementById('name').value,
                email: document.getElementById('email').value
            };
    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem('myObj', obj_serialized);
    console.log(JSON.parse(localStorage.getItem('myObj')));
}