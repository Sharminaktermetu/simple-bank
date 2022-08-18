function getInputById(inputId) {
    const getTheInput = document.getElementById(inputId);
    const getIdValue = getTheInput.value;
    const getValueToNumber = parseFloat(getIdValue);
    getTheInput.value ='';
    return getValueToNumber;
    
}

function getHtmlValuebyid(htmlId) {
    const gethtmlId =document.getElementById(htmlId);
    const htmlValue = gethtmlId.innerText;
    const htmlString = parseFloat(htmlValue);
    return htmlString;


}

function setElement(inputId , htmlId) {
    const textElement =document.getElementById(inputId);
    textElement.innerText =htmlId;
}

document.getElementById('deposite-btn').addEventListener('click',function(){
// Deposit amount
    const theInputValue= getInputById('input-field');
    const depositeAmmount= getHtmlValuebyid('diposite-amount');
    const depositTotalAmount = theInputValue + depositeAmmount;
    setElement('diposite-amount' , depositTotalAmount);
// total amount
    const getTotalAmount = getHtmlValuebyid('total-depo-amount');
    const newTotal = getTotalAmount + theInputValue;
    setElement ('total-depo-amount', newTotal);

})

 