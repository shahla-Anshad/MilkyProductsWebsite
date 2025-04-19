


// "Buy Now" Button Alert
document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", function () {
        let productName = this.closest(".card").querySelector(".card-title").textContent;
        alert(`You selected: $ {productName}. Proceeding to checkout...`);});
});


// email form sender
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
     // Get form elements
     const name = document.getElementById('name').value.trim();
     const email = document.getElementById('email').value.trim();
     const phone = document.getElementById('phonenumber').value.trim();
     const feedBack = document.getElementById('feedBack').value.trim();

        // Basic validations
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }


    // prepare form data
    const formData = new FormData(event.target);
    // replace your google sheet api
    const scriptURL ='https://script.google.com/macros/s/AKfycbzB5qXiMWkh9Q8UIKMtwa3lgENwyTus-7WYzncZvJcTA2j18gUsL8r3tTMj9jgUM6iD/exec';

    // Submit data to google app in google sheet 
    fetch(scriptURL, {
        method: 'POST',
        body: formData,
    })
    .then((response) => {
        alert('Form Submitted Succesfully');
        document.getElementById('contact-form').reset();
    })
     .catch((error) =>{
        alert('Error submitting the form ')
        console.error("Error", error)
     }) 
});
});




