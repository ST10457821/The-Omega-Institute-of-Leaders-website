function toggleDropdown () {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.dropdown-button');

    button.addEventListener('click', (e) => {
        e.stopPropagation(); //prevent window listenr form instantly closing it 
        toggleDropdown();
    });
});