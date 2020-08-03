/*
//alert('hello');

//var, let, const

let name = 'Tom';
console.log('hello' + name);

// Number, String, Boolean,, Undefined, Null, Symbol

//動的型付け言語
let variable = 'str';
variable = 12;
console.log(typeof variable);
variable = false;
console.log(typeof variable);
variable = undefined;
console.log(typeof variable);

//静的型付け言語
//int num = 12;


function hello(name, age) {
    console.log('hello' + name + age);
    return name + age;
}

hello('code Mafia', 10);
const returnVal = hello('code Mafia2', 20);
console.log(returnVal);

const h = function (name, age) {
    console.log('hello' + name + age);
    return name + age;
}
h('code Mafia3', 30);


let hello = 'hello world';
console.log(hello.length);
console.log(hello.toLocaleUpperCase());
console.log(hello.slice(0,5));
console.log(hello.split(' '));


const arry = new Array(1,2,3,4,5,6, 'moji', false);
console.log(arry);
console.log(arry[3]);

arry[5] = 8;
console.log(arry[5]);
console.log(arry.length);

arry.push('new item');
console.log(arry.length);
console.log(arry);

const p = arry.pop();
console.log(p);
console.log(arry);

arry.unshift('add first item');
console.log(arry);

const val = arry.shift();
console.log(val);
console.log(arry);


const person = {
    name: ['Code', 'Mafia'],
    age: 32,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullName: function(){
        console.log(this.name[0] + this.name[1]);
    }
};

console.log(person.name);
console.log(person.interests);

const ageKey = 'age';
person[ageKey] = 12;
console.log(person.age);
person.getFullName();


const arry = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < arry.length; ++i){
    //console.log(i);
    console.log(arry[i]);
}

for (let i in arry){
    console.log(i, arry[i]);
}

for (let v of arry){
    console.log(v, arry[v]);
}


const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: true
    },
    {
        id: 3,
        title: 'Go shopping',
        completed: false
    },
];

for(let i = 0; i < todos.length; i++){
    let todo = todos[i];
    //console.log(i, todo.title);

    if(todo.completed === true){
        console.log(i, todo.title);
    }
}

for(let i in todos){
    let todo = todos[i];
    if(todo.completed === true){
        console.log(i, todo.title);
    }
}

for(let todo of todos){
    if(todo.completed === true){
        console.log(todo, todo.title);
    }
}
*/

if(true) {
    console.log('this is true');
} else if(true) {
    console.log('this is in else if true');
} else {
    console.log('this is false');
}

let num = Number(false);
console.log(num);

if (1 == '1') {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (1 === '1') {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (0 == '0') {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (0 === '0') {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (1 == true) {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (1 === true) {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (0 == false) {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (0 === false) {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (1 == true && 1 === true) {
    console.log('this is true');
} else {
    console.log('this is false');
}

if (1 == true || 1 === true) {
    console.log('this is true');
} else {
    console.log('this is false');
}

num = 0; //undefined; null;
const bool = Boolean(num);
console.log(bool);
if (!num) {
    console.log('this is true');
} else {
    console.log('this is false');
}
