const elForm =  document.querySelector('.form')
const ul = document.querySelector('.ul')

//inputs
const elName = document.querySelector('.name')
const elName2 = document.querySelector('.name2')
const elNumber = document.querySelector('.number')
const error = document.querySelector('.pf')
const error2 = document.querySelector('.pr')
const error3 = document.querySelector('.pt')
elForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    if(elName.value == ''&& elName2.value == ''&& elNumber.value == ''){
      error.classList = 'text-red-900 block relative bottom-10 '
      error2.classList = 'text-red-900 block'
      error3.classList = 'text-red-900 block'

      elName.classList = 'border-2 border-red-600'
      elName2.classList = 'border-2 border-red-600'
      elNumber.classList = 'border-2 border-red-600'
    }else{ error.classList = 'hidden'
    error2.classList = 'hidden'
    error3.classList = 'hidden'
    elName.classList = ''
    elName2.classList = ''
    elNumber.classList = ''
    
    newDiv = document.createElement('div')
    newDiv.innerHTML = `
    <ul class="ul1">
    <li class="li1">${elName.value}</li>
    <li class="li2">${elName2.value}</li>
    <li class="li3">${elNumber.value}</a></li>
    </ul>`
     ul.appendChild(newDiv)
     elName.value = ''
     elName2.value = ''
     elNumber.value = ''
}

 
})