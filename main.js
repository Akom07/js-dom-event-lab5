const invoiceNumber = document.querySelector('#inv')
const invoice = document.querySelector('#invoice')
const invoiceTax = document.querySelector('#invT')
const clac = document.querySelector('#clac')
const fNum = document.querySelector('#num')
const invText = document.querySelector('#invText')

clac.addEventListener("click" , ()=>{
    invoiceTax.innerText = (parseInt(invoice.value)*0.15)
    invoiceNumber.innerText = ((parseInt(invoice.value)*0.15)+parseInt(invoice.value))/parseInt(fNum.value)
    if(parseInt(fNum.value) !== 1){
        invText.innerText == "invoice for each friend is :"
    }

})

