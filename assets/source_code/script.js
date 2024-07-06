document.addEventListener("DOMContentLoaded", function() {
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    let generalBox = document.getElementById("generalBox");
    let supportBox = document.getElementById("supportBox");
    let consentBox = document.getElementById("consent-group");
    let consentCheckbox = document.getElementById("consent");

    function updateBackgrounds() {
        generalBox.style.backgroundColor = document.getElementById("general").checked ? 'var(--light-green)' : 'white';
        supportBox.style.backgroundColor = document.getElementById("support").checked ? 'var(--light-green)' : 'white';
    }

    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', updateBackgrounds);
    });

    // Initialize the background colors on page load
    updateBackgrounds();

    generalBox.addEventListener("click", function() {
        document.getElementById("general").checked = true;
        updateBackgrounds();
    });

    supportBox.addEventListener("click", function() {
        document.getElementById("support").checked = true;
        updateBackgrounds();
    });

    generalBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            document.getElementById("general").checked = true;
            updateBackgrounds();
        }
    });

    supportBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            document.getElementById("support").checked = true;
            updateBackgrounds();
        }
    });

    consentBox.addEventListener("click", function() {
        consentCheckbox.checked = !consentCheckbox.checked;
    });

    consentBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            consentCheckbox.checked = !consentCheckbox.checked;
        }
    });

    document.querySelector('form').addEventListener('submit', function(event){
        let firstNameInput = document.getElementById("firstName");
        let lastNameInput = document.getElementById("lastName");
        let emailInput = document.getElementById("email");
        let queryInput = document.querySelectorAll('input[type="radio"]');
        let messageInput = document.getElementById("message");
        let consentInput = document.getElementById("consent")

        
        let firstNameErr = document.getElementById("firstNameErr");
        let lastNameErr = document.getElementById("lastNameErr");
        let emailErr = document.getElementById("emailErr");
        let queryErr = document.getElementById("queryErr");
        let messageErr = document.getElementById("messageErr");
        let consentErr = document.getElementById("consentErr");


        firstNameErr.style.visibility = "hidden";
        lastNameErr.style.visibility = "hidden";
        emailErr.style.visibility = "hidden";
        queryErr.style.visibility = "hidden";
        messageErr.style.visibility = "hidden";
        consentErr.style.visibility = "hidden";

        let isFormValid = true;

        if(firstNameInput.value.trim() === ''){
            firstNameErr.style.visibility = "visible";
            isFormValid = false;
        }

        if(lastNameInput.value.trim() === '') {
            lastNameErr.style.visibility = "visible";
            isFormValid = false;
        }

        if(emailInput.value.trim() === '') {
            emailErr.style.visibility = "visible";
            isFormValid = false;
        }

        if(!Array.from(queryInput).some(input => input.checked)) {
            queryErr.style.visibility = "visible";
            isFormValid = false;
        }

        if(messageInput.value.trim() === '') {
            messageErr.style.visibility = "visible";
            isFormValid = false;
        }

        if(!consentInput.checked) {
            consentErr.style.visibility = "visible";
            isFormValid = false;
        }

        if (!isFormValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            showNotification();
            this.reset()
        }
    });

    function showNotification() {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.innerHTML = `
            <span id="main">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none" viewBox="0 0 20 21">
                    <path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"/>
                </svg>
                <span id="toastHeading">Message Sent!</span>
            </span>
            <p id="toastSubheading">Thanks for completing the form. We'll be in touch soon!</p>
        `;  
        toastContainer.appendChild(toast);

        setTimeout(function() {
            toast.style.top = '2rem';
        }, 100);
    
        setTimeout(function() {
            toast.style.top = '-7rem';
            setTimeout(function() {
                toast.remove();
            },500); 
        }, 3000);
    }
});
