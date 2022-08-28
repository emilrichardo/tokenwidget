

const element = document.getElementById("tokenwidget")
const contractId =  element.attributes.contractid.value


const apiToken = "https://api.pancakeswap.info/api/v2/tokens/" + contractId;

const fetchApi = async() => {
    const res = await fetch(apiToken)
    let  data;
    data = await  res.json()
    const name = data.data.name

    const price = parseFloat(data.data.price).toFixed(3)
    const elementPrice =  document.getElementById('price')
    elementPrice.textContent =  price

    const priceBNB = parseFloat(data.data.price_BNB).toFixed(6)
    const elementPriceBnb =  document.getElementById('price_bnb')
    elementPriceBnb.textContent =  priceBNB




}
fetchApi();


// input token adress copy
const inputToken = document.createElement("input")
inputToken.value = contractId

const buttonClip = document.createElement("button")
buttonClip.classList.add("btn-clipboard")
buttonClip.textContent = "Copy"

const inputGroup = document.createElement("div")
inputGroup.classList.add("inputgroup")


//APPEND CHILD
inputGroup.appendChild(inputToken)
inputGroup.appendChild(buttonClip)
element.appendChild(inputGroup)



//function copy to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(contractId).then(() => {
    });
}

// event listener click button copy
buttonClip.addEventListener('click', function handleClick(){
    buttonClip.textContent = "Copied";
    setTimeout(function(){
        buttonClip.textContent = "Copy";

        const labelCopied = document.createElement("span")
    }, 1000);
})