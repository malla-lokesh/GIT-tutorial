var form = document.getElementById('my-form');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
}