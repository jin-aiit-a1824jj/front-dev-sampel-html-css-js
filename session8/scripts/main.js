document.addEventListener('DOMContentLoaded', function () {
    // const hero = new HeroSlider('.swiper-container');
    // hero.start();

    // const cb = function (el, isIntersecting) {
    //     if(isIntersecting) {
    //         const ta = new TweenTextAnimation(el);
    //         ta.animate();
    //     }
    // }

    // const so = new ScrollObserver('.tween-animate-title', cb);

    // const _inviewAnimation = function(el, inview){
    //     if(inview){
    //         el.classList.add('inview');
    //     }else{
    //         el.classList.remove('inview')
    //     }
    // };

    //const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);

    //const header = document.querySelector('.header');
    // const _navAnimation = function(el, inview){
    //     if(inview){
    //         header.classList.remove('triggered');
    //     }else{
    //         header.classList.add('triggered')
    //     }
    // };

    //const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});
    
    const main = new Main();
});

class Main {
    constructor(){
        this.header = document.querySelector('.header');
        this._observers = [];
        this._init();
    }

    _init() {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        this._scrollInit();
    }

    _navAnimation(el, inview){
        if(inview){
            this.header.classList.remove('triggered');
        }else{
            this.header.classList.add('triggered')
        }
    };

    _inviewAnimation(el, inview){
        if(inview){
            el.classList.add('inview');
        }else{
            el.classList.remove('inview')
        }
    };

    _textAnimation(el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation(el, inview){
        if(inview){
            this.hero.start();
        }else{
            this.hero.stop();
        }
    }

    _scrollInit() {
        this._observers.push(
            new ScrollObserver('.tween-animate-title', this._textAnimation),
            new ScrollObserver('.cover-slide', this._inviewAnimation),
            new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false}),
            new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false}),
        );
    }
}
