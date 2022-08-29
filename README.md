



Try this markdown:

![alt text](https://dev-bitsyte.s3.us-west-2.amazonaws.com/tokenwidget/dist/images/basic-widget.png)

```
<div id="tokenwidget"
    contractId="0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf"
    iconTokenUrl="https://nftroyaltoken.com/static/media/logo_icon.b6e610fa.svg"
    >
        <span id="name"></span>
        <div class="price">
            <span>$</span>
            <span id="price" decimals="2" >...</span>
        </div>
        <div class="bnb_price">
            <span id="price_bnb" decimals="3">...</span>
            <span>BNB</span>
        </div>
        <div class="inputgroup">
            <input id="input_adress" type="text"/>
            <button id="btn_clipboard">Copy</button>
            <button onclick="addTokenFunction(this)"  id="addToken">MetaMask</button>
            <div id="copiedAlert" style="display:none;" >
                <span>Copied</span>
            </div>
        </div>

    </div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/web3/1.5.0/web3.min.js'></script>
    <script  src="https://dev-bitsyte.s3.us-west-2.amazonaws.com/tokenwidget/dist/main-min.js"></script>
```