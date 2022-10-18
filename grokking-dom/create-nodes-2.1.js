const ul = document.createElement("ul")

function renrer (arr) {
arr.map((item) => {
    let li = document.createElement('li')
    li.textContent = item
    ul.append (li)

});
}


renrer(["html", "css", "js"])
document.body.prepend(ul);


console.log(ul)


