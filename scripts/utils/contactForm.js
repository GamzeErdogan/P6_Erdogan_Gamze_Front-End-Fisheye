function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    const closeButton = document.querySelector('.modal img');
    closeButton.focus();
};
    
    function closeModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
              return; // Do nothing if the event was already processed
            }
            switch (event.key) {
                case "Escape":
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }});
        // const buttonOpen = document.getElementsByClassName('contact_button');
        // buttonOpen.focus();
    };
    
    const buttonContact = document.getElementById("sendButon");
    buttonContact.addEventListener('click', (e) =>{
        e.preventDefault();
        var nameInput = document.getElementById("prenom");
        var surnameInput = document.getElementById("surname");
        var emailInput = document.getElementById("email");
        var messageInput = document.getElementById("formMessageInput");
        console.log('Prenom: '+ nameInput.value);
        console.log('Nom: '+ surnameInput.value);
        console.log('Email: '+ emailInput.value);
        console.log('Message: '+ messageInput.value);
    });


 