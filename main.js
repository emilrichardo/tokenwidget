const element = document.getElementById("tokenwidget")
const contractId =  element.attributes.contractid.value
const iconTokenUrl = element.attributes.iconTokenUrl.value
const apiToken = "https://api.pancakeswap.info/api/v2/tokens/" + contractId;

let tokenSymbol;

const fetchApi = async() => {
    const res = await fetch(apiToken)
    let  data;
    data = await  res.json()
    const name = data.data.name
    tokenSymbol = data.data.symbol


    const elementPrice =  document.getElementById('price')
    const priceDecimals = elementPrice.attributes.decimals.value
    const price = parseFloat(data.data.price).toFixed(priceDecimals)
    const elementPriceBnb =  document.getElementById('price_bnb')
    elementPrice.textContent =  price
    const priceDecimalsBnb = elementPriceBnb.attributes.decimals.value
    const priceBNB = parseFloat(data.data.price_BNB).toFixed(priceDecimalsBnb)
    elementPriceBnb.textContent =  priceBNB;

}
fetchApi();


// input token adress copy
const inputToken = document.getElementById("input_adress")
inputToken.value = contractId

const buttonClip = document.getElementById("btn_clipboard")
buttonClip.textContent = "Copy"


console.log(contractId);

//function copy to clipboard


// event listener click button copy
buttonClip.addEventListener('click', function handleClick(){
  navigator.clipboard.writeText(contractId).then(() => {
  });
    buttonClip.textContent = "Copied";
    setTimeout(function(){
        buttonClip.textContent = "Copy";

        const labelCopied = document.createElement("span")
    }, 1000);
})


//Add token button
const chainId = 56
async function addTokenFunction(obj) {
     if ( typeof window.ethereum !== 'undefined'){
        const netWork = await window.ethereum.networkVersion
        if (netWork == chainId){
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

        } else{
            alert("Change the wallet network in the MetaMask app to add this contract.")
        }

    } else{
        window.open('https://metamask.io/download/', '_blank');
        console.log("instalar");
    }
}