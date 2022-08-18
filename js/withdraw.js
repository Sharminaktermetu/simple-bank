

document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawAmount = getInputById('input-withdraw');
    const getWithdrawValue = getHtmlValuebyid ('withdraw-amount');
    const withdrawTotal = getWithdrawValue + withdrawAmount;
    setElement('withdraw-amount', withdrawTotal);
    
    const getnowTotalAmount = getHtmlValuebyid('total-depo-amount');
    const nowTotal = getnowTotalAmount - withdrawAmount;
    setElement ('total-depo-amount', nowTotal);

})