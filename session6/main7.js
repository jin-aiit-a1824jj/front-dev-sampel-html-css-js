// const obj = {
//     first_name: 'Mafia',
//     last_name: 'Code',
//     printFullName: function() {
//         console.log('hello');
//     }
// }

// console.log(obj.first_name);
// obj.printFullName();


// class MyObj {
//     constructor(){
//         this.first_name = 'Mafia';
//         this.last_name = 'Code';
//     }

//     printFullName() {
//         console.log('hello');
//     }
// }

// const obj2 = new MyObj();
// obj2.__proto__.printFullName();

/*
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name);
        window.setTimeout(function(){
            console.log(this);
        });
        const fn = function() {
            console.log(this);
        }
        window.setTimeout(fn);
    }
}

class MyObj {
    constructor(){
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
    }
}

const window = {
    setTimeout: function(fn) {
        fn();    
    }
}

obj.printFullName();

const obj2 = new MyObj();
obj2.printFullName();
*/

const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this);
        const _that = this;

        window.setTimeout(function(){
            console.log(this);
            console.log(_that);
        });

        window.setTimeout(function(){
            console.log(this);
        }.bind(this));

        window.setTimeout(function(){
            console.log(this);
        }.bind({first_name: 'Taro'}));
    }
}

obj.printFullName();
