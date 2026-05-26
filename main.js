const input=document.createElement('input')
input.placeholder='TO DO'
document.body.appendChild(input)
const button=document.createElement('button')
document.body.appendChild(button)
button.innerText='ADD'
document.addEventListener('click',()=>{
    console.log('YOU CLICKED ME')
})
document.addEventListener('click',()=>{
    const div=document.createElement('div')
    div.innerText=input.value
    document.body.appendChild(div)
    input.value=''
})
