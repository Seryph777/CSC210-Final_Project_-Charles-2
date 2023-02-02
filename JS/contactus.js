var quote = document.getElementById("daily_quote")

async function getQuote(url="https://theysaidso.com"){
    let quoteObject = await fetch(url="https://theysaidso.com");
    let quoteText = (await quoteObject).text();
    quote.innerHTML = quoteText
}
