


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
const inputToken = document.getElementById("input_adress")
inputToken.value = contractId

const buttonClip = document.getElementById("btn-clipboard")
buttonClip.textContent = "Copy"

const inputGroup = document.createElement("div")
inputGroup.classList.add("inputgroup")


//APPEND CHILD


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




if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.log("MetaMask is not installed");
}
