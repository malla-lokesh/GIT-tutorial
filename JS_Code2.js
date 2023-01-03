var list = document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor = 'green';
for(let i=0;i<list.length;i++){
    list[i].style.color = 'orange';
    list[i].style.fontWeight = 'bold';
}