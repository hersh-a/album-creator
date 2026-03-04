# Album Creator  

This project was originally created for **CPSC 1520 – JavaScript Class**.  

Album Creator is a small web app that lets users create album cards by filling out a form with a title, description, and cover art image. The project focuses on form validation, DOM manipulation, events, conditionals, and templating using JavaScript. Bootstrap is used for styling.

Although this started as a school assignment, I’ve included it here as part of my project portfolio because it demonstrates my understanding of client-side validation and dynamic UI updates.

---

##  What This Project Does

Users can:

- Enter an album title  
- Write a short description  
- Select album artwork  
- Submit the form to generate an album card  

The app validates user input before creating the album card. If something is wrong, it shows helpful feedback and prevents submission.

---

## Features

### Form Validation
- Album title cannot be empty  
- Album title must be under the maximum character limit  
- Description cannot be empty  
- Description must be under the maximum character limit  
- Album art must be selected (cannot stay on default option)  
- Real-time validation feedback  
- Bootstrap `is-invalid` classes added and removed dynamically  

### DOM Manipulation
- Prevents default form submission (no page refresh)  
- Creates album card dynamically using a template  
- Inserts the card into the page  
- Resets the form after successful submission  

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Bootstrap  

---


