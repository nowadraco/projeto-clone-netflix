const button = document.querySelector('.popup-button')
const popup = document.querySelector('.popup-wrapper')
const txtp = document.querySelector('.txt-principal')
const maisp = document.querySelector('.espande-principal')
const menosp = document.querySelector('.retrair-principal')

button.addEventListener('click', () =>{
 popup.style.display = 'block'
})

maisp.addEventListener('click', () =>{
    menosp.style.display = 'block'
    maisp.style.display = 'none' 
    txtp.style = 'white-space: inherit'
   })

   menosp.addEventListener('click', () =>{
    maisp.style.display = 'block'
    menosp.style.display = 'none'
    txtp.style = 'white-space: nowrap'
   })


popup.addEventListener('click',event => {
 const classNameOfClickedElement = event.target.classList[0]
 const classNames = ['popup-closed', 'popup-wrapper', 'popup-link']
 const shouldClosedPopup = classNames.some(className => className === classNameOfClickedElement)
 
 if (shouldClosedPopup){
 popup.style.display = 'none'
 }
})