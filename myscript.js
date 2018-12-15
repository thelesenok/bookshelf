document.addEventListener("DOMContentLoaded", function(){
    loadBooks();
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
        bookTh.innerHTML = i + 1;
        bookRow.appendChild(bookTh);
        
        var bookNameCell = document.createElement('td');
        bookNameCell.innerHTML = books[i].name;
        bookRow.appendChild(bookNameCell);

        var bookAuthorCell = document.createElement('td');
        bookAuthorCell.innerHTML = books[i].author;
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
        bookActionGroupDelete.appendChild(bookActionsDeleteButton);   
    }
}