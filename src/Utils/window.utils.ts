export function scrollTo(id: any,block:string,inline:string) {
    document.querySelector(id).scrollIntoView({
        block: block,
        inline: inline,
        behavior: 'smooth'
    });
}

export function setEntryAnimationRight(timeFast:number) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('show-right-'+timeFast)) entry.target.classList.remove('show-right-'+timeFast);
                entry.target.classList.add('show-right-'+timeFast);
            }
        })
    })
    const hiddenCards = document.querySelectorAll('.hidden-right-'+timeFast);
    hiddenCards.forEach(card => observer.observe(card));
}

export function setClassIfIsVisible(className:string,classNameToAdd:string){
    debugger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                debugger
                if (entry.target.classList.contains(classNameToAdd)) entry.target.classList.remove(classNameToAdd);
                entry.target.classList.add(classNameToAdd);
            }
        })
    })
    const domElements = document.querySelectorAll(className);
    domElements.forEach(item => observer.observe(item));
}