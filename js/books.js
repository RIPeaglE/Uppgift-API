async function books() {
    let res = await fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=eOV8sq6l5DOPpgKAA0lPiAZAZMDcp0ty');
    let data = await res.json();

    console.log(data);

    let bookList = document.getElementById("bookInfor");

    for (let i = 0; i < 5; i++) {
        let bookH = document.createElement("div");
        let bTitle = document.createElement("h4");
        let bAuthor = document.createElement("p");

        bTitle.textContent =  data.results[i].title;
        bAuthor.textContent = `By ${data.results[i].author}`;

        bookH.setAttribute("class", "bookDiv")
            
        bookList.appendChild(bookH);
        bookH.appendChild(bTitle);
        bookH.appendChild(bAuthor);

    };
};

books();

