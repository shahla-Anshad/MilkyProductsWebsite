


// "Buy Now" Button Alert
document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", function () {
        let productName = this.closest(".card").querySelector(".card-title").textContent;
        alert(`You selected: $ {productName}. Proceeding to checkout...`);});
});




