// Form variable
var form = document.getElementById('addForm');
// itemList
var itemList = document.getElementById('items');
// filter
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete button click event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();
    
    var input = document.getElementById('inp1').value;
    var input2 = document.getElementById('inp2').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(input));
    itemList.appendChild(li);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right ml-2 delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');
    editBtn.className = "btn btn-success btn-sm float-right";
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    li.appendChild(document.createTextNode(" " + input2));
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("R u really want to remove?")){
            var item = e.target.parentElement;
            itemList.removeChild(item);
        }
    }
}

function filterItem(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName1 = item.firstChild.textContent;
        var itemName2 = item.lastChild.textContent;
        if(itemName1.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else if(itemName2.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}
