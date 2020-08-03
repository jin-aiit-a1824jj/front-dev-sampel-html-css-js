const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function hello(){
    alert('hello');
}

function changeColor(){
    btn.style.color = 'red';
    console.log(this);
}

function changeBgColor(){
    h1.style.backgroundColor = 'green';
}

btn.addEventListener('click', changeColor);
//btn.removeEventListener('click', hello);
btn.addEventListener('click', changeBgColor);

// btn.onclick = changeColor;
// btn.onclick = changeBgColor;
