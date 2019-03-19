const list = document.querySelector('#book-list ul');

//event bubbling - delete books
list.addEventListener('click', function(e) {
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//event add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
		
	//create element
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');
	
	//add content
	deleteBtn.textContent = 'delete';
	bookName.textContent = value;
	
	//add CSS classes
	bookName.classList.add('name');
	deleteBtn.classList.add('delete');
	
	//appending children to the li, then to the ul
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
	
});

//event hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
	if (hideBox.checked) {
		list.style.display = "none";
	} else {
		list.style.display = "block";
	}
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
	const term = e.target.value.toLowerCase();
	const books = list.getElementByTagName('li');
	Array.from(books).forEach(function(book) {
		const title = book.firstElementChild.textContent;
		if (title.toLowerCase().indexOf(term) != -1) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}	
	});
});


