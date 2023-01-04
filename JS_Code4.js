document.querySelector('li:nth-child(2)').style.backgroundColor = 'green';
document.querySelector('li:nth-child(3)').style.visibility = 'hidden';

document.querySelectorAll('li')[1].style.color = 'green';
var oddEle = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<oddEle.length;i++){
    oddEle[i].style.backgroundColor = 'green';
}