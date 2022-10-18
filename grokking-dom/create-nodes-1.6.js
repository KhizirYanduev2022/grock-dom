const body = document.body


const wrapper = document.createElement('div')
const links = document.createElement('ul')
const item = document.createElement('li')
const ash = document.createElement('a')
const ash2 = document.createElement('a')


body.append(wrapper)
wrapper.prepend(links)
links.prepend(item)
item.prepend(ash)
item.append(ash2)

ash.href = '"https://instagram.com/intocode"'
ash2.href = 'https://intocode.ru"'


ash.textContent = 'Наш инстаграм'
ash2.textContent = 'Наш сайт'

console.log(wrapper)

