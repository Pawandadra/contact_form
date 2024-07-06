# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: (https://github.com/Pawandadra/contact_form)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

This is the major thing I learned during developing this project. These are the code snippets to implement toast notifications. You can copy-paste this code to implement toast notification.
**Edit as per your requirements**

```html
<div id="toastContainer"></div>
```
```css
#toastMsg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 1rem;
    background-color: hsl(169, 84%, 17%);
    color: white;
    position: fixed;
    top: -7rem;
    left: 50%;
    transform: translateX(-50%);
    transition: top 0.5s ease-in-out;
    z-index: 9999;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

#toastMsg #main{
    display: flex;
    /* border: 1px solid black; */
    margin-bottom: 0.8rem;
}

#toastMsg svg{
    margin: 0.2rem;
}
#toastHeading{
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0.4rem 0.5rem;
}
#toastSubheading{
    color: rgba(255, 255, 255, 0.726);
}
```
```js
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
```

### Useful resources

- [chatGPT](https://chatgpt.com/) - This helped me in JS logic for implementing svg graphics while clicking on radio buttons and checkbox. I really liked this and will use it going forward.
- [W3Schools](https://www.w3schools.com/html/html5_svg.asp) - This is an amazing article which helped me finally understand SVG. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@Pawandadra](https://www.frontendmentor.io/profile/Pawandadra)