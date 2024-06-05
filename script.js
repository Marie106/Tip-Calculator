const btnEl = document.getElementById("calculate"); 
const billinput = document.getElementById("bill");
const tipinput = document.getElementById("Tip");
const totalspan = document.getElementById("total");

function calculateTotal(){
    const billvalue = billinput.value;
    const tipvalue = tipinput.value;
    const totalvalue = billvalue * (1 + tipvaluen / 100);
    totalspan.innertext = totalvalue.toFixed
    console.log(b)
}

btnEl.addEventListener("click", calculateTotal);