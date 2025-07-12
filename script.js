document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('dropdownButton');
    const menu = document.getElementById('dropdownMenu');

    button.addEventListener('click', () => {
        meny.classList.toggle('show');
    });

    //Toggle open/close on button click
    button.addEventListener('click', (e) => {
        e.stopPropagation(); //prevent window listenr form instantly closing it 
        menu.classList.toggle('show');
    })

    //Close dropdown when clicking outside
    window.addEventListener('click', (e) => {
        of (!button.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});