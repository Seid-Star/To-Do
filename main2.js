const form=document.createElement('form')
document.body.appendChild(form)
const input=document.createElement('input')
document.body.appendChild(input)
input.placeholder='TO-DO'
const button=document.createElement('button')
document.body.appendChild(button)
button.innerText='ADD'
const ul=document.createElement('ul')
document.body.appendChild(ul)
form.appendChild(input)
form.appendChild(button)
const removeElement=(el)=>{
    el.remove()
}
form.onsubmit=(e)=>{
    f.preventDefault()
    const li=document.createElement('li')
    ul.appendChild(li)
    li.innerText=input.value
    li.onclick=removeElement.bind(null,li)
    input.value=''

}
