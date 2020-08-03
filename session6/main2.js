document.querySelector('#main-title');
//document.body.children;
//document.getElementById('main-title');

//document.querySelector('.item');
document.querySelectorAll('.item');

const h1 = document.querySelector('#main-title');
h1.innerHTML;
h1.textContent;

const h1 = document.querySelector('#main-title');
h1.classList.add('underline');
h1.classList.remove('underline');
h1.classList.toggle('underline');

const ul = document.querySelector('ul');
ul.style.color = 'red';

const firstLi = ul.querySelector('li');
firstLi.style.color = 'black';

const li = document.querySelectorAll('li');
li[0].style.color = 'purple';

li.forEach(node => node.style.color = 'purple');
