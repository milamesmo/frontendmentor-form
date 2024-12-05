
nomeCartao.oninput = changeName;
function changeName(){
nameCard.innerText = nomeCartao.value || "Jane Appleseed";
}


numeroCartao.oninput = changeNumber;
function changeNumber(){
cardNumber.innerText = numeroCartao.value || "0000 0000 0000 0000";
}


validadeMes.oninput = changeMonth;


function changeMonth(){
month.innerText = validadeMes.value + "/" || "00/";
}

validadeAno.oninput = changeYear;
function changeYear(){
    year.innerText = validadeAno.value || "00";

}


codigoVerificacao.oninput = changeCvv;
function changeCvv(){
cvv.innerText = codigoVerificacao.value || "000";
}
