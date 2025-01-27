// script.js

let items = [];
let editingIndex = null; 

// Function to render the list of items
function renderItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';

    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} - ${item.description}</span>
            <button onclick="deleteItem(${index})">Delete</button>
            <button onclick="editItem(${index})">Edit</button>
        `;
        itemsList.appendChild(listItem);
    });
}

// Function to add a new item
function addItem() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    if (name && description) {
        const newItem = { name, description };
        items.push(newItem);
        renderItems();
        resetForm();
    } else {
        alert('Please fill out both fields');
    }
}

// Function to delete an item
function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}

// Function to edit an item
function editItem(index) {
    const item = items[index];
    document.getElementById('name').value = item.name;
    document.getElementById('description').value = item.description;
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('updateBtn').style.display = 'inline-block';
    editingIndex = index;
}

// Function to update an item
function updateItem() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    if (name && description) {
        items[editingIndex] = { name, description };
        renderItems();
        resetForm();
    } else {
        alert('Please fill out both fields');
    }
}

// Function to reset the form
function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('updateBtn').style.display = 'none';
    editingIndex = null;
}

// Initial render
renderItems();
