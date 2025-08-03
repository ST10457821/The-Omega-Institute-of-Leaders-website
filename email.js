document.getElementById("organizationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const applicants = document.getElementById("applicants").value;

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