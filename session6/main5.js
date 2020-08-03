document.addEventListener('DOMContentLoaded', function(){
    const el = document.querySelector('.animate-title');
    //console.log(el.innerHTML.trim());
    
    /*
    const str = el.innerHTML.trim();
    let concatStr = '';

    for(let c of str) {
        console.log(`<span class="char">${c}</span>`);
        //c = c.replace(' ', '&nbsp;');
        c = c.replace(/\s+/, '&nbsp;');
        concatStr += `<span class="char">${c}</span>`;
    }
    el.innerHTML = concatStr;
    */

    const str = el.innerHTML.trim().split("");
    el.innerHTML =
        str.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");


});
