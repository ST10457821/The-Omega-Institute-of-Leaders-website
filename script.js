function toggleDropdown () {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('dropdown-button')) {
        var dropdowns = document.getElementByClassName("dropdown-content");
        for (var i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdoww.classList, contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('dropdownButton');
    const menu = document.getElementById('dropdownMenu');

    button.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    //Toggle open/close on button click
    button.addEventListener('click', (e) => {
        e.stopPropagation(); //prevent window listenr form instantly closing it 
        menu.classList.toggle('show');
    });

    //Close dropdown when clicking outside
    window.addEventListener('click', (e) => {
        if (!button.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});