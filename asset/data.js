let products = {
    data: [
        {
            productName: "The Legend Of Zelda : Tear of the kingdom",
            price: "69.99$",
            image: "https://product.hstatic.net/200000160361/product/6464080_sd_e3442fad9e50424a89935218ee85dcf1.jpg",
        },
        {
            productName: "Mario Kart 8 dexlue",
            price: "59.99$",
            image: "https://m.media-amazon.com/images/I/81mqZx5X1XL._AC_UF894,1000_QL80_.jpg",
        },
        {
            productName: "Pokemon Scarlet",
            price: "59.99$",
            image: "https://m.media-amazon.com/images/I/81EyjDeArUL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            productName: "Pokemon Violet",
            price: "59.99$",
            image: "https://media.gamestop.com/i/gamestop/11202244/Pokemon-Violet---Nintendo-Switch",
        },
    ]
}


for (let i of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card)

}
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").ariaValueMax.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".product-name")
    let price = document.querySelectorAll('h6')

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)) {
            cards[index].classList.remove("hide")
        } else {
            cards[index].classList.add("hide")
        }
    })
})