//DOM Elements
var nameInput = document.getElementById("prenom");
var surnameInput = document.getElementById("surname");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("formMessageInput");
const modal = document.getElementById("contact_modal");
const buttonContact = document.getElementById("sendButon");

function displayModal() {
	modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    nameInput.focus();
};
    
    function closeModal() {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');

        // Close modal when escape key is pressed
        window.addEventListener("keydown", function (event) {
                if (event.defaultPrevented) {
                      return; // Do nothing if the event was already processed
                    }
                    switch (event.key) {
                        case "Escape":
                            document.getElementById("contact_modal").style.display = "none";
                            modal.setAttribute('aria-hidden', 'true');
                                break;
                            default:
                                return; // Quit when this doesn't handle the key event.
                        }});
                };
                
                
        buttonContact.addEventListener('click', (e) =>{
            e.preventDefault();
                console.log('Prenom: '+ nameInput.value);
                console.log('Nom: '+ surnameInput.value);
                console.log('Email: '+ emailInput.value);
                console.log('Message: '+ messageInput.value);
    });


 