fetch("http://quotes.rest/qod")
.then((response) => response.json())
.then((data) => {
    console.log("Check")
    var quote = document.getElementById("daily_quote")
    var quoteIMG = document.getElementById("quote_img")
    quote.textContent = data.contents.quotes[0].quote
    quoteIMG.src = data.contents.quotes[0].background
})

var quote = document.getElementById("daily_quote")

async function getQuote(url="https://theysaidso.com"){
    let quoteObject = await fetch(url="https://theysaidso.com");
    let quoteText = (await quoteObject).text();
    document.getElementById("daily_quote").innerHTML = quoteText
}
