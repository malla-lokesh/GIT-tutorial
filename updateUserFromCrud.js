var form = document.getElementById('form');
var list = document.getElementById('users');

form.addEventListener('submit', displayNames);

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/23ff337813b045fd8e194d286fe7268a/appointmentData")
        .then((response) => {
            for(var i=0;i<response.data.length;i++){
                showDetails(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error)
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
        axios.delete(`https://crudcrud.com/api/23ff337813b045fd8e194d286fe7268a/appointmentData/${parsedObject._id}`)
            .then((response) => {
                var itemToBeRemoved = e.target.parentElement;
                list.removeChild(itemToBeRemoved);
            })
            .catch((error) => {
                console.log(error)
            });
    });

    var editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode("Edit"));
    newLi.appendChild(editBtn);
    editBtn.addEventListener('click', function(e){
        e.preventDefault();
        var itemToBeRemoved = e.target.parentElement;
        list.removeChild(itemToBeRemoved);
        axios.delete(`https://crudcrud.com/api/23ff337813b045fd8e194d286fe7268a/appointmentData/${parsedObject._id}`)
            .then(()=>{

            })
            .catch((error)=>{
                console.log(error)
            })
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

    axios.post("https://crudcrud.com/api/23ff337813b045fd8e194d286fe7268a/appointmentData", details)
    .then((response) => {
        showDetails(details)
    })
    .catch((err) => {
        console.log(err)
    })
}