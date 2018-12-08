document.addEventListener("DOMContentLoaded", function(){
    loadBooks();
})

function showAddForm() {
    var addForm;
    addForm = document.getElementById("addForm");
    //debugger;
    addForm.className = "show";
}

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
    var allRows;
    allRows = document.getElementById("dispayBooks");
    var rowCount = allRows.rows.length;
    for (var j = 1; j < rowCount; j++) {
        allRows.deleteRow(1);
    }
    for (var i = 0; i < books.length; i++) {
        var dispayBooks;
        dispayBooks = document.getElementById("dispayBooks");
        var displayRow = dispayBooks.insertRow(-1);
        var displayCellName = displayRow.insertCell(-1);
        displayCellName.appendChild(document.createTextNode(books[i].name));
        var displayCellAuthor = displayRow.insertCell(-1);
        displayCellAuthor.appendChild(document.createTextNode(books[i].author));
        var displayCellActions = displayRow.insertCell(-1);
        displayCellActions.appendChild(document.createTextNode("no actions"));
    }
}