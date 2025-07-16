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


document.getElementById("organizationForm").addEventListener("submit", function (e0){
    e.preventDefault();

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
});

//send EmailJS
document.getElementById("organizationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    applicants = document.getElementById("applicants").value;

    emailjs.send("service_3ako77n", "template_zcx9q0m", {
        name: name,
        phone: phone,
        applicants: applicants,
    })
    .then(() => {
        //show toast
        const toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);

        //Reset form
        document.getElementById("organizationFrom").reset();
    })
    .catch((error) => {
        alert("Failed to send form. Please try again.");
        console.error("EmailJS Error:", error);
    });
});