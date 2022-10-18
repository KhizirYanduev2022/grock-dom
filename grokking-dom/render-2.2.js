const data = [
    {
      name: "Google",
      url: "https://google.com",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
    },
    {
      name: "intocode",
      url: "https://intocode.ru",
    },
  ];
  




const ul = document.createElement('ul')

function render (data) {
data.map((elem)=>{
    const li = document.createElement('li') 
    const a = document.createElement('a')

    a.textContent = elem.url
    li.textContent = elem.name



    ul.append(li)
    li.append(a)
    
}
    )


} 

render(data)

document.body.prepend(ul);

console.log(ul)