// DELETE THE ITEM
const list = document.querySelector('#shopping-list ul');

list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})