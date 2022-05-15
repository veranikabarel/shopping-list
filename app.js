// DELETE THE ITEM
const list = document.querySelector('#shopping-list ul');

list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

// ADD THE ITEM
const addForm = document.forms['add-item'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // CREATE THE ELEMENT 

    const li = document.createElement('li');
    const itemName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // ADD CONTENT

    deleteBtn.textContent = 'delete';
    itemName.textContent = value;

    // ADD CLASSES

    itemName.classList.add('name');
    deleteBtn.classList.add('delete');

    // APPEND TO DOM

    li.appendChild(itemName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})


