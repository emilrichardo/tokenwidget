



const element = document.getElementById("tokenwidget")
const contractId =  element.attributes.contractid.value
let tokenSymbol;

const iconTokenUrl = element.attributes.iconTokenUrl.value

const apiToken = "https://api.pancakeswap.info/api/v2/tokens/" + contractId;



const fetchApi = async() => {
    const res = await fetch(apiToken)
    let  data;
    data = await  res.json()


    const name = data.data.name
    tokenSymbol = data.data.symbol


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

const buttonClip = document.getElementById("btn_clipboard")
buttonClip.textContent = "Copy"




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


//add token



async function addTokenFunction() {

try {

  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: contractId,
        symbol: tokenSymbol,
        decimals: 18,
        image: iconTokenUrl,
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('HelloWorld Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}
