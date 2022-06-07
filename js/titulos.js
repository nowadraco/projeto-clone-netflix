
const txtt = document.querySelector('.txt-titulo')
const maist = document.querySelector('.espande-titulo')
const menost = document.querySelector('.retrair-titulo')

maist.addEventListener('click', () =>{
    menost.style.display = 'block'
    maist.style.display = 'none' 
    txtt.style = 'white-space: inherit'
   })

   menost.addEventListener('click', () =>{
    maist.style.display = 'block'
    menost.style.display = 'none'
    txtt.style = 'white-space: nowrap'
   })