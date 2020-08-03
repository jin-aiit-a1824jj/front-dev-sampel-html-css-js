class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        console.log(this);
        const _that = this;
        window.setTimeout(function() {
            console.log(this);
            this.el.classList.toggle('inview');
            console.log(_that);
        }.bind(this));
    }
    // log() {
    //     console.log(this.el);
    // }
}


//alert(ta.el);
//ta.log();




document.addEventListener('DOMContentLoaded', function () {
    /*
    const el = document.querySelector('.animate-title');
    const el2 = document.querySelector('.animate-title-2');
    const str = el.innerHTML.trim().split("");
    const str2 = el2.innerHTML.trim().split("");
    
    // let concatStr = '';

    // for(let c of str) {
    //     c = c.replace(/\s+/, '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`;
    // }

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
    el2.innerHTML = str2.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
    */

    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(()=>{
        ta.animate();
        ta2.animate();
    }, 1000);
 
    document.querySelector('button').addEventListener('click', ta.animate.bind(ta));
    document.querySelector('button').addEventListener('click', function(){
       ta2.animate();
    });
});




