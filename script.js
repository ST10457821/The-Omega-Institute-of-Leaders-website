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

    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault(); //prevent window listenr form instantly closing it 
            e.stopPropagation();
            toggleDropdown();
        });
    }

    let headerEl = document.querySelector('header');
    if (!headerEl) {
        headerEl = document.createElement("header");
        headerEl.innerHTML = `
        <a href="/">
            <div class="logo-section">
                    <img src="./static/oil_logo.png" alt="Omega Logo" class="logo" />
                    <h1 class="logo-text">The Omega Institute<br>of Leaders®</h1>
            </div>
        </a>

            <div class="dropdown">
                <button class="dropdown-button">
                    Our Services
                    <span class="chevron">&#x25BC;</span>
                </button>
                <div id="dropdownMenu" class="dropdown-content">
                    <a href="aligning-the-organization.html">Aligning the Organization</a>
                    <a href="selecting-the-leadership.html">Selecting the Leadership</a>
                    <a href="selecting-a-strategy.html">Selecting a Strategy</a>
                    <a href="laws-of-governance.html">Laws of Governance</a>
                    <a href="evaluation.html">Evaluation</a>
                    <a href="resources-management.html">Resources Management</a>
                    <a href="risk-management.html">Risk Management</a>
                    <a href="coaching.html">Coaching</a>
                    <a href="counselling.html">Counselling</a>
                </div>
       `;
        const body = document.body;
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.width = "100%";
        headerEl.style.padding = "0em";
        headerEl.style.width = "100%";
        headerEl.style.marginBottom = "1rem";
        document.body.insertBefore(headerEl, document.body.firstChild);
    }
});


document.getElementById("organizationForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
});