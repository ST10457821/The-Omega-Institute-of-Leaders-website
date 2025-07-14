function toggleDropdown () {
    console.log("toggling");
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown?.classList.add('show');
    }

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
        e.preventDefault(); //prevent window listenr form instantly closing it 
        e.stopPropagation();
        toggleDropdown();
    });
});