var form = document.getElementById('form');
var list = document.getElementById('users');

form.addEventListener('submit', displayNames);

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/afa215eab6e04ddaa80c34817baf20c7/appointmentData")
        .then((response) => {
            for(var i=0;i<response.data.length;i++){
                showDetails(response.data[i])
            }
        })
})

function showDetails(details){
    var obj = JSON.stringify(details);
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
        localStorage.removeItem(details.name);
        document.getElementById('name').value = parsedObject.name;
        document.getElementById('email').value = parsedObject.mail;
        document.getElementById('phoneNo').value = parsedObject.phone;
    });
}

function displayNames(e){
    e.preventDefault();

    const details = {
        name: document.getElementById('name').value,
        mail: document.getElementById('email').value,
        phone: document.getElementById('phoneNo').value
    };

    axios.post("https://crudcrud.com/api/afa215eab6e04ddaa80c34817baf20c7/appointmentData", details)
    .then((response) => {
        console.log(response)
        showDetails(details)
    })
    .catch((err) => {
        console.log(err)
    })
}