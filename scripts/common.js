export function openDrawer() {
    const drawer  = document.getElementById('app-drawer');
    const menuBtn = document.getElementById('menuBtnOpen');

    menuBtn.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        drawer.classList.remove('drawer-close');
        drawer.classList.add('drawer-open');
    })
}

export function closeDrawer() {
    const drawer  = document.getElementById('app-drawer');
    const menuBtn = document.getElementById('menuBtnClose');

    menuBtn.addEventListener('click', () => {
        document.body.style.overflow = 'auto';
        drawer.classList.add('drawer-close');
        drawer.classList.remove('drawer-open');
    })
}