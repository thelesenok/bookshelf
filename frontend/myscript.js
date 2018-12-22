document.addEventListener("DOMContentLoaded", function(){
    loadBooks();
    $("#editModal").on("show.bs.modal");
})

function loadBooks() {
    var xhttp;
    xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var books;
            books = JSON.parse(this.responseText);
            displayBooks(books.books);
        }
    }; 
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}

function displayBooks(books) {    
    var dispayBooks;
    dispayBooks = document.getElementById("dispayBooks");

    var rowCount = dispayBooks.rows.length;
    for (var j = 1; j < rowCount; j++) {
        dispayBooks.deleteRow(1);
    }
    
    var bookTbody = document.createElement('tbody');
    dispayBooks.appendChild(bookTbody);

    for (var i = 0; i < books.length; i++) {    
        
        var bookRow = document.createElement('tr');
        bookTbody.appendChild(bookRow);

        var bookTh = document.createElement('th');
        bookTh.setAttribute("scope", "row");
        bookTh.innerHTML = (i + 1);
        bookRow.appendChild(bookTh);
        
        var bookNameCell = document.createElement('td');
        bookNameCell.innerHTML = books[i].nameRus;
        bookRow.appendChild(bookNameCell);

        var bookAuthorCell = document.createElement('td');
        for (var j=0; j < books[i].authors.length; j++) {
            bookAuthorCell.innerHTML = books[i].authors[j].firstNameRus + " " + books[i].authors[j].lastNameRus;
        }
        bookRow.appendChild(bookAuthorCell);

        var bookActionsCell = document.createElement('td');
        bookRow.appendChild(bookActionsCell);

        var bookActionToolbar = document.createElement('div');
        bookActionToolbar.setAttribute("class", "btn-toolbar");
        bookActionToolbar.setAttribute("role", "toolbar");
        bookActionsCell.appendChild(bookActionToolbar);

        var bookActionGroupEdit = document.createElement('div');
        bookActionGroupEdit.setAttribute("class", "btn-group mr-2");
        bookActionGroupEdit.setAttribute("role", "group");
        bookActionGroupEdit.setAttribute("aria-label", "edit");
        bookActionToolbar.appendChild(bookActionGroupEdit);

        var bookActionsEditButton = document.createElement('button');
        bookActionsEditButton.setAttribute("class", "btn btn-warning");
        bookActionsEditButton.addEventListener("click", editBook.bind(this, books[i].id));
        bookActionsEditButton.innerHTML = "EDIT";
        bookActionGroupEdit.appendChild(bookActionsEditButton);

        var bookActionGroupDelete = document.createElement('div');
        bookActionGroupDelete.setAttribute("class", "btn-group");
        bookActionGroupDelete.setAttribute("role", "group");

        bookActionGroupDelete.setAttribute("aria-label", "delete");
        bookActionToolbar.appendChild(bookActionGroupDelete);
        
        var bookActionsDeleteButton = document.createElement('button');
        bookActionsDeleteButton.setAttribute("class", "btn btn-danger");
        bookActionsDeleteButton.innerHTML = "DELETE";
        bookActionsDeleteButton.addEventListener("click", deleteBook());
        bookActionGroupDelete.appendChild(bookActionsDeleteButton);   
    }
}

function AddBook() {
    var xhttp;
    xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Book was successfully added")
        }
    }; 
    xhttp.open("POST", "newbook.json", true);
    var newBook;
    newBook = {
        name: document.getElementById("InputBookNameRus").value,
        author: document.getElementById("InputBookAuthorFirstNameRus").value
    }
    xhttp.send(JSON.stringify(newBook));
}

function loadBook(id) {
    
}
function editBook(id) {


    document.getElementById("InputBookNameRus").value = book[i].



    $("#editModal").modal('show');
}

function deleteBook() {

}

