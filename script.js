// script.js

document.addEventListener('DOMContentLoaded', () => {
 const greetingElement = document.getElementById('greeting');
 const changeTextBtn = document.getElementById('changeTextBtn');
 const styleBtn = document.getElementById('styleBtn');
 const container = document.getElementById('container');
 const addElementBtn = document.getElementById('addElementBtn');
 const removeElementBtn = document.getElementById('removeElementBtn');
 let newElement = null;

 // Change text content dynamically
 changeTextBtn.addEventListener('click', () => {
     greetingElement.textContent = 'Text changed by JavaScript!';
 });

 // Modify CSS styles via JavaScript
 styleBtn.addEventListener('click', () => {
     greetingElement.classList.toggle('highlight');
 });

 // Add an element when a button is clicked
 addElementBtn.addEventListener('click', () => {
     if (!newElement) {
         newElement = document.createElement('div');
         newElement.id = 'newElement';
         newElement.textContent = 'This element was added dynamically!';
         container.appendChild(newElement);
     }
 });

 // Remove the added element when a button is clicked
 removeElementBtn.addEventListener('click', () => {
     if (newElement && newElement.parentNode === container) {
         container.removeChild(newElement);
         newElement = null;
     }
 });
});