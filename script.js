// ---------- ---------- Init()

// random int
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// items mis en vente
function item(name, img, rate, price, description, tags) {
    return {
        name: name,
        img: img,
        rate: rate,
        price: price,
        description: description,
        tags: tags
    }
}
let allItems = [
    new item(
        "dirt",
        "dirt.png",
        1,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        ["bestSelling"]
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        ["bestSelling", "lastDrop", "reco"]
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        ["bestSelling", "lastDrop"]
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        ["reco"]
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        []
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        []
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        ["reco"]
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        ["bestSelling", "lastDrop"]
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        []
    )
    ,
    new item(
        "dirt",
        "dirt.png",
        4,
        65,
        "Lorem ipsum dolor sit amet consectetur.",
        ["reco"]
    )
]

// timer
let timer = 100

// Sections
let home = document.querySelector("#home")
let shop = document.querySelector("#shop")
let cart = document.querySelector("#cart")
let how = document.querySelector("#how")
let about = document.querySelector("#about")
let buy = document.querySelector("#buy")


// ---------- --------- Fonction Definition


// ---------- Article
// Génération des articles en vente
function generateItems() {
    for (let x = 0; x < allItems.length; x++) {
        let bestSelling = ""
        let lastDrop = ""
        let selling = ""
        let reco = ""

        let item = allItems[x]

        // ajout à best selling
        if (item.tags.includes("bestSelling")) {
            bestSelling += "<div class='item'><img src='Ressources/Images/" + item.img + "'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur 361 avis</p></div><p>" + item.price + "$</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
        }

        // ajout à last drop
        if (item.tags.includes("lastDrop")) {
            lastDrop += "<div class='item'><img src='Ressources/Images/" + item.img + "'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur 361 avis</p></div><p>" + item.price + "$</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
        }
        // ajout au recomandation
        if (item.tags.includes("reco")) {
            reco += "<div class='item'><img src='Ressources/Images/" + item.img + "'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur 361 avis</p></div><p>" + item.price + "$</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
        }

        // ajout à selling
        selling += "<div class='item'><img src='Ressources/Images/" + item.img + "'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur 361 avis</p></div><p>" + item.price + "$</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"


        /* ajout au HTML */
        document.querySelector(".selling>.itemsList").innerHTML += selling
        document.querySelector(".bestSelling>.itemsList").innerHTML += bestSelling
        document.querySelector(".lastDrop>.itemsList").innerHTML += lastDrop
        document.querySelector(".recommandation>.itemsList").innerHTML += reco

    }
}
// add to cart
function addToCart() {

    let cards = document.querySelectorAll(".item")
    let allInCartList = document.querySelector(".allInCart")

    for (let x = 0; x < cards.length; x++) {
        let card = cards[x]
        let addToCart = card.querySelector(".addCart")
        addToCart.addEventListener("click", () => {
            allInCartList.innerHTML += "<div class='item inCart'>" + card.innerHTML + "</div>"
            addToCart.style.backgroundColor = "var(--colorSuccess)"
            setTimeout(() => { addToCart.style.backgroundColor = "var(--bgPrimaryHover)" }, 100)
            document.querySelector("header>ul>li>.cart").innerHTML = "<img src='Ressources/Icon/Cart.svg'><p>" + document.querySelectorAll(".inCart").length + "</p>"
            IATalk("Bravo", "Votre artice a été ajouté ave succès au panier", "sucess")
        })
    }
}

// ---------- navigation
// navigation entre sections
function navigate() {
    let destinations = ["home", "shop", "viewItem", "cart", "how", "about", "buy"]
    let navButtons = document.querySelectorAll(".nav")
    for (let x = 0; x < navButtons.length; x++) {

        let button = navButtons[x]

        button.addEventListener("click", () => {
            for (let y = 0; y < destinations.length; y++) {
                document.querySelector("#" + destinations[y]).setAttribute("style", "display: none;")
            }
            document.querySelector("#blank").setAttribute("style", "display: flex;")
            /*else {
                document.querySelector("#" + destinations[y]).setAttribute("style", "display: none;")
            }*/
            setTimeout(() => {
                for (let y = 0; y < destinations.length; y++) {
                    if (button.classList.contains(destinations[y])) {
                        document.querySelector("#" + destinations[y]).setAttribute("style", "display: flex;")
                        document.querySelector("#blank").setAttribute("style", "display: none;")

                        /*document.querySelector("#" + destinations[y]).classList.toggle("Afficher", "toAfficher")
                        setTimeout(() => {
                            document.querySelector("#" + destinations[y]).classList.replace("toAfficher", "Afficher")
                        })*/
                    }
                }
            }, timer)

            scrollTo({ left: 0, top: 0, behavior: "smooth" })
        }
        )
    }

}
// ouvrir l'aperçu de l'aticle
function openViewItem() {
    // generation de la page view
    let cards = document.querySelectorAll(".item")
    let view = document.querySelector("#viewItem")
    console.log(cards)

    for (let x = 0; x < cards.length; x++) {
        let card = cards[x]
        let image = card.querySelector("img")
        image.addEventListener("click", () => {
            view.innerHTML = "<div class='item view'>" + card.innerHTML + "</div>"

            // navigation vers la page view
            let toHide = ["home", "shop", "cart", "how", "about", "buy"]
            for (let y = 0; y < toHide.length; y++) {
                document.querySelector("#" + toHide[y]).setAttribute("style", "display: none;")
            }
            document.querySelector("#blank").setAttribute("style", "display: flex;")
            setTimeout(() => {
                document.querySelector("#viewItem").setAttribute("style", "display: flex;")
                document.querySelector("#blank").setAttribute("style", "display: none;")
            }, timer)

            scrollTo({ left: 0, top: 0, behavior: "smooth" })
        })
    }

}

// navigation par bouton de scroll
function buttonScroll() {
    // accroche
    document.querySelector(".accroche>button").addEventListener("click", function () {
        scrollTo({ left: 0, top: 920, behavior: "smooth" })
    })
}

// ---------- Cart
// état vide du shop
// calcul du résumé
function calcResume() {
    let sousTotal = 0
    let delivery = true
    let TVA = true
    let total = 0 

    let articles = document.querySelectorAll(".allInCart > .item")
    // calcul sousTotal
    /*
    for (x = 0; x < articles.length; x++){
        let article = articles[x]
        article.querySelector("")

        sousTotal += 
    }
    */
    // calcul livraison
    if (articles.length < 5){
        delivery = getRandomInt(200)
    }
}


// ---------- IA
// génération de l'IA
function IALanding() {
    setTimeout(() => {
        // animation avatar
        document.querySelector(".avatar>img").classList.replace("IAStatePop", "IAStateIn")
        document.querySelector(".avatar>div").classList.replace("IAStatePop", "IAStateIn")

        // premier message
        setTimeout(() => {
            IATalk("Bonjour", "Je suis dirtytalk, votre interlocuteur pour acheter la terre de vos reve")
        }, 1000)

    }, 500)
}
// faire parler l'IA
function IATalk(title = "", message = "", alert = "") {
    let sentence = "<div class='message statePop" + alert + "'><button class='ghost dangerAction'><img src='Ressources/Icon/closeB.svg'></button>"

    if (title !== "") {
        sentence += "<h3>" + title + "</h3>"
    }

    if (message !== "") {
        sentence += "<p>" + message + "</p>"
    }

    sentence += "</div>"
    document.querySelector("#IA > .conv").innerHTML += sentence

    // Animation avatar
    document.querySelector(".avatar").querySelector("*").style.scale = "0.9"
    setTimeout(() => {
        document.querySelector(".avatar").querySelector("*").style.scale = "1"

        // Animation apparition
        setTimeout(() => {
            document.querySelectorAll(".statePop")[0].classList.replace("statePop", "stateIn")
        }, 500)

    }, 200)

    closeMessage()

}
// fermer un message
function closeMessage() {
    let messages = document.querySelectorAll(".message")
    for (let x = 0; x < messages.length; x++) {
        let closeButton = messages[x].querySelector("button")
        // fermuture click
        closeButton.addEventListener("click", () => {
            setTimeout(() => { messages[x].classList.add("stateClosed") }
                , timer)
            setTimeout(() => { messages[x].remove() }
                , 500)
        })
        // fermeture automatique
        setTimeout(() => {
            setTimeout(() => { messages[x].classList.add("stateClosed") }
                , timer)
            setTimeout(() => { messages[x].remove() }
                , 500)
        }, 5000 + timer)
    }
}
function IAFlow() {
    // toute les  10 secondes

    // toute  
}

// ---------- Timer
function timerGrow() {
    document.addEventListener("click", () => {
        timer += 25
        console.log("timer is now : " + timer)
    })
}


// ---------- ---------- Exe()

// ---------- Generate

// génération des articles
generateItems()

// ajout des items au panier
addToCart()

// appartition du chat
IALanding()



// ---------- Rules

// Timer
timerGrow()

// navigation
navigate()
openViewItem()

// ajouter les règles d'apparition de text

// créer les bugs d'images

//