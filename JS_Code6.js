// Form variable
var form = document.getElementById('addForm');

// itemList
var itemList = document.getElementById('items');

// Form submit even
form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    
    var input = document.getElementById('inp').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(input));
    itemList.appendChild(li);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("R u really want to remove?")){
            var item = e.target.parentElement;
            itemList.removeChild(item);
        }
    }
}