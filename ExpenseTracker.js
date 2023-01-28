var form = document.getElementById('form');
var list = document.getElementById('list');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();

    const info = {
        amount: document.getElementById('Amount').value,
        desc: document.getElementById('Description').value,
        option: document.getElementById('options').value
    };
    localStorage.setItem(info.option, JSON.stringify(info));
    var obj = localStorage.getItem(info.option);
    var parsedObject = JSON.parse(obj);

    var newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(parsedObject.amount + " - " + parsedObject.option + " - " + parsedObject.desc + " "));
    list.appendChild(newLi)

    var deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode("Delete Expense"))
    deleteBtn.className = "btn btn-danger"
    newLi.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', function(e){
        e.preventDefault();
        var itemToBeRemoved = e.target.parentElement
        localStorage.removeItem(parsedObject.option)
        list.removeChild(itemToBeRemoved)
    })

    var editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode("Edit Expense"))
    editBtn.className = "btn btn-warning"
    newLi.appendChild(editBtn)
    editBtn.addEventListener('click', function(e){
        e.preventDefault();
        var itemToBeRemoved = e.target.parentElement
        localStorage.removeItem(info.option)
        list.removeChild(itemToBeRemoved)
        document.getElementById('Amount').value = parsedObject.amount
        document.getElementById('Description').value = parsedObject.desc
        document.getElementById('options').value = parsedObject.option
    })
}