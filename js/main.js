const button = document.querySelector('.popup-button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () =>{
 popup.style.display = 'block'
 
})

popup.addEventListener('click',event => {
 const classNameOfClickedElement = event.target.classList[0]
 const classNames = ['popup-closed', 'popup-wrapper', 'popup-link']
 const shouldClosedPopup = classNames.some(className => className === classNameOfClickedElement)
 
 if (shouldClosedPopup){
 popup.style.display = 'none'
 }
})
