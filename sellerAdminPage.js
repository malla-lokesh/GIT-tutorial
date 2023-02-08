var form = document.getElementById('form')
var list = document.getElementById('list')
var cost = document.getElementById('totalCost')

form.addEventListener('submit', processData)

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/8d48e84921e949e8a746d44ccd5979c2/items")
        .then((response) => {
            for(var i=0;i<response.data.length;i++){
                displayItemList(response.data[i])
                getTotal()
            }
        }) 
        .catch((err)=>{
            console.log(err)
        }) 
})

function displayItemList(details){

    var obj = JSON.stringify(details)
    var parsedObject = JSON.parse(obj)

    var newListElement = document.createElement('li')
    newListElement.appendChild(document.createTextNode(`${parsedObject.price} - ${parsedObject.product} `))
    list.appendChild(newListElement)

    var deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('Delete Product'))
    newListElement.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', function(e){
        e.preventDefault()
        axios.delete(`https://crudcrud.com/api/8d48e84921e949e8a746d44ccd5979c2/items/${parsedObject._id}`)
            .then((response)=>{
                var itemToBeRemoved = e.target.parentElement
                list.removeChild(itemToBeRemoved)
                getTotal()
            })
            .catch((error)=>{
                console.log(error)
            })
    })
}

function processData(e){
    e.preventDefault()

    const details = {
        price: document.getElementById('price').value,
        product: document.getElementById('product').value
    }

    axios.post("https://crudcrud.com/api/8d48e84921e949e8a746d44ccd5979c2/items", details)
        .then((response) => {
            displayItemList(details)
            getTotal()
        })
        .catch((error)=>{
            console.log(error)
        })
}

function getTotal(){
    var totalItemCost = 0
    axios.get("https://crudcrud.com/api/8d48e84921e949e8a746d44ccd5979c2/items")
        .then((response) => {
            for(var i=0;i<response.data.length;i++){
                totalItemCost += parseInt(response.data[i].price)
            }
            cost.innerHTML = '';
            var newPara = document.createElement('h3');
            newPara.appendChild(document.createTextNode(`Total Value Worth of Products: ${totalItemCost}`));
            cost.appendChild(newPara);
        })
}