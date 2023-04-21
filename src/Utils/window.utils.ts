export function scrollTo(id: any) {
    document.querySelector(id).scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
    });
}