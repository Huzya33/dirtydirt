// ---------- ---------- Init()

// random int
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// items mis en vente
function item(name, img, price, description, descriptionL, rate, attribute, tags) {
    return {
        name: name,
        img: img,
        price: price,
        description: description,
        descriptionL: descriptionL,
        rate: rate,
        attribute: attribute,
        tags: tags
    }
}
let allItems = [
    new item("Terre Noire Luxuriante", "Terre_Noire_Luxuriante", 19.99, "Terre riche et sombre, idéale pour des plantations vigoureuses.",
        "Terre fertile, riche en matière organique, idéale pour les potagers et arbustes. Rétention d’eau optimale et croissance rapide.",
        5, ["Riche en nutriments", "Bonne rétention d'eau", "Idéale potagers"], ["bestSelling", "reco"]),

    new item("Argile Compacte Pure", "Argile_Compacte_Pure", 14.99, "Terre argileuse dense, pour maçonnerie et étanchéité.",
        "Terre lourde, malléable humide, durable une fois sèche. Idéale pour étanchéité naturelle et constructions.",
        4, ["Parfaite pour étanchéité", "Durable", "Moulable"], ["bestSelling"]),

    new item("Sable Fin Subtil", "Sable_Fin_Subtil", 12.49, "Sable fin pour drainage et mélanges de substrat.",
        "Drainage optimal, parfait pour aérer les sols lourds et mélanges de terre pour plantes en pot.",
        4, ["Excellent drainage", "Mélange facile", "Aération des sols"], ["reco"]),

    new item("Terre de Montagne", "Terre_de_Montagne", 24.99, "Terre rare, minérale, pour plantes résistantes.",
        "Riche en minéraux, idéale pour plantes alpines et sols rocailleux. Sol pauvre mais aéré, parfait pour espèces robustes.",
        5, ["Riche en minéraux", "Pour sols rocailleux", "Robustesse plantes"], []),

    new item("Tourbe Végétale Naturelle", "Tourbe_Vegetale_Naturelle", 17.99, "Tourbe légère, idéale pour plantes acidophiles.",
        "Légère, rétention d'eau excellente. Idéale pour hortensias, rhododendrons et fougères. Crée un environnement acide parfait pour racines.",
        5, ["Rétention d'eau", "Pour plantes acidophiles", "Aère le sol"], ["reco"]),

    new item("Terre de Brume", "Terre_de_Brume", 22.49, "Terre légèrement argileuse, parfaite pour jardins d'ombre.",
        "Humide, conserve l’eau, adaptée pour jardins ombragés et plantes aimant l’humidité. Sol légèrement antifongique.",
        4, ["Conserve l'humidité", "Idéale pour plantes d’ombre", "Antifongique"], ["lastDrop"]),

    new item("Terre Sablonneuse Sélective", "Terre_Sablonneuse_Selective", 14.49, "Terre sableuse légère pour cactées et plantes grasses.",
        "Spécialement conçue pour plantes nécessitant un bon drainage. Réduit le risque de pourriture des racines.",
        5, ["Excellent drainage", "Idéale plantes grasses", "Prévient maladies"], ["bestSelling", "reco"]),

    new item("Limon Doux", "Limon_Doux", 18.99, "Terre limoneuse légère, idéale pour semis.",
        "Structure fine et légère pour semis et jeunes plantes. Aide à l'enracinement rapide. Parfaite pour améliorer la structure des sols de jardin.",
        4, ["Structure fine", "Enracinement rapide", "Légèrement nutritif"], ["lastDrop"]),

    new item("Mélange Potager Premium", "Melange_Potager_Premium", 21.99, "Mélange complet pour cultures abondantes en potager.",
        "Terreau riche, compost et sable pour une base idéale. Parfaite rétention d’eau et nutriments. Structure légère et bien drainée.",
        5, ["Parfait pour légumes", "Rétention d’eau", "Structure légère"], ["bestSelling", "reco"]),

    new item("Terre de Forêt Mystique", "Terre_de_Foret_Mystique", 19.49, "Terre sombre et boisée, idéale pour recréer un sol forestier.",
        "Issue des sols forestiers, riche en humus. Idéale pour plantes de sous-bois. Drainage naturel.",
        5, ["Riche en humus", "Pour plantes de sous-bois", "Excellent drainage"], ["lastDrop"]),

    new item("Terre Rouge Rustique", "Terre_Rouge_Rustique", 16.99, "Terre argilo-limoneuse teintée de rouge pour des sols robustes.",
        "Parfaite pour stabiliser les sols et jardins secs. Bonne rétention d’eau tout en évitant la compaction.",
        4, ["Bonne rétention d'eau", "Robuste", "Pour jardins secs"], ["reco"]),

    new item("Mélange Urbain Résilient", "Melange_Urbain_Resilient", 23.99, "Mélange conçu pour plantes en milieux urbains difficiles.",
        "Spécialement pour jardins urbains, résiste à la pollution, permet aux plantes de s’adapter à des sols compacts. Idéal pour bacs et toits végétalisés.",
        4, ["Résistant pollution", "Idéal en ville", "Aère les sols compacts"], ["lastDrop"]),

    new item("Terre d'Olivier Méditerranéenne", "Terre_d_Olivier_Mediterraneenne", 22.99, "Terre sèche et sablonneuse pour plantes méditerranéennes.",
        "Terre légère et drainante pour oliviers, lavandes et cyprès. Crée un environnement sec et chaud.",
        5, ["Excellent drainage", "Pour plantes méditerranéennes", "Tolère sols pauvres"], ["lastDrop"]),

    new item("Terre de Bruyère Acide", "Terre_de_Bruyere_Acide", 20.49, "Terre acide et légère pour rhododendrons et azalées.",
        "Légère et aérée, offre une acidité stable pour plantes acidophiles.",
        4, ["Acidité stable", "Idéale pour plantes acidophiles", "Enracinement rapide"], ["reco"]),

    new item("Compost Profond Fertile", "Compost_Profond_Fertile", 18.99, "Compost riche en nutriments pour un sol vivant.",
        "Amendement organique riche en nutriments essentiels. Améliore la structure du sol et favorise la vie microbienne.",
        5, ["Très nutritif", "Améliore structure", "Stimule vie microbienne"], ["bestSelling"]),

    new item("Terre Cendrée Vulcanique", "Terre_Cendree_Vulcanique", 24.99, "Terre rare issue de cendres volcaniques, riche en minéraux.",
        "Riche en oligo-éléments et minéraux, idéale pour plantes nécessitant apports spécifiques.",
        4, ["Riche en minéraux", "Pour sols secs", "Robustesse plantes"], []),

    new item("Terre de Composte Urbain", "Terre_de_Composte_Urbain", 15.99, "Compost issu de déchets urbains recyclés pour jardins citadins.",
        "Compost enrichi à partir de déchets organiques recyclés. Idéal pour améliorer les sols urbains et favoriser la biodiversité.",
        3, ["Recyclé et écologique", "Améliore sols urbains", "Biodiversité"], []),

    new item("Terre Sablo-Argileuse Équilibrée", "Terre_Sablo_Argileuse_Equilibree", 19.49, "Parfait équilibre d’argile et de sable pour toutes cultures.",
        "Mélange équilibré pour rétention d’eau et drainage. Convient à une large gamme de plantes.",
        5, ["Bon équilibre eau/air", "Polyvalent", "Améliore structure sol"], []),

    new item("Terre Ultra Drainante", "Terre_Ultra_Drainante", 13.99, "Terre pour un drainage ultra-rapide et sans excès d'eau.",
        "Conçue pour éviter la stagnation d’eau et prévenir les maladies. Parfaite pour plantes grasses et cactus.",
        4, ["Drainage rapide", "Idéale cactus/plantes grasses", "Évite stagnation"], []),

    new item("Terre de Marécage Humide", "Terre_de_Marecage_Humide", 21.49, "Terre gorgée d’eau, idéale pour recréer un environnement marécageux.",
        "Retient bien l’eau, recrée des conditions marécageuses pour plantes aquatiques. Idéale pour créer des zones humides dans le jardin.",
        5, ["Rétention d’eau", "Pour plantes aquatiques", "Recrée environnement naturel"], [])
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
            bestSelling += "<div class='item'><img src='Ressources/Images/" + item.img + ".png'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur " + getRandomInt(2000) + " avis</p></div><p>" + item.price + " $</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
        }

        // ajout à last drop
        if (item.tags.includes("lastDrop")) {
            lastDrop += "<div class='item'><img src='Ressources/Images/" + item.img + ".png'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur " + getRandomInt(2000) + " avis</p></div><p>" + item.price + " $</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
        }
        // ajout au recomandation
        if (item.tags.includes("reco")) {
            reco += "<div class='item'><img src='Ressources/Images/" + item.img + ".png'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur " + getRandomInt(2000) + " avis</p></div><p>" + item.price + " $</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
        }

        // ajout à selling
        selling += "<div class='item'><img src='Ressources/Images/" + item.img + ".png'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur " + getRandomInt(2000) + " avis</p></div><p>" + item.price + " $</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"


        /* ajout au HTML */
        document.querySelector(".selling>.itemsList").innerHTML += selling
        document.querySelector(".bestSelling>.itemsList").innerHTML += bestSelling
        document.querySelector(".lastDrop>.itemsList").innerHTML += lastDrop
        document.querySelector("#viewItem>.recommandation>.itemsList").innerHTML += reco

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
            if (document.querySelectorAll(".message").length < 3) { IATalk("Bravo", "Votre artice a été ajouté ave succès au panier", "sucess") }
            calcResume()
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
    //console.log(cards)

    for (let x = 0; x < cards.length; x++) {
        let card = cards[x]
        let image = card.querySelector("img")
        image.addEventListener("click", () => {
            let titre = card.querySelector(".infos>h2").innerHTML
            for (let y = 0; y < allItems.length; y++) {
                if (allItems[y].name === titre) {
                    let clone = allItems[y]
                    view.innerHTML = "<div class='productSheet'><div class='gallery'><img src='Ressources/Images/" + clone.img + "2.png'><img src='Ressources/Images/" + clone.img + ".png'><img src='Ressources/Images/" + clone.img + "3.png'></div><div class='productResume'><div class='mainInfos'><h2>" + clone.name + "</h2><div><p>" + clone.price + "$</p><div><img src='Ressources/Icon/rating/" + clone.rate + ".svg'><p class='light'>sur 361 avis</p></div></div><hgroup><h3>Description du produit</h3><p>" + clone.descriptionL + "</p></hgroup></div><div class='parametres'><div><img src='Ressources/Icon/CashBack.svg' alt=''><p>Remboursable sous 30 jours</p></div><div><img src='Ressources/Icon/Delivery.svg' alt=''><p> Livraison express en 1 semaine</p></div><div><img src='Ressources/Icon/Recycle.svg' alt=''><p> Emballage recyclable</p></div></div><div class='cartAction'><button id='payNowButton' class='primary addCart'>payer maintenant<img src='Ressources/Icon/PlusW.svg'></button><button class='secondary addCart'>ajouter au panier<img src='Ressources/Icon/ArrowRightB.svg'></button></div><div><h3>Avantages</h3><div class='avantages'><div><p>" + clone.attribute[0] + "</p><img src='Ressources/Icon/Plus.svg' alt=''></div><div><p>" + clone.attribute[1] + "</p><img src='Ressources/Icon/Plus.svg' alt=''></div><div><p>" + clone.attribute[2] + "</p><img src='Ressources/Icon/Plus.svg' alt=''></div></div></div></div></div></div><div class='shopping recommandation'><h2>Vous aimerez aussi</h2><div class='itemsList'></div></div>"
                    buttonPayNow()
                }
            }
            for (let x = 0; x < allItems.length; x++) {
                let item = allItems[x]
                // ajout au recomandation
                if (item.tags.includes("reco")) {
                    view.querySelector(".recommandation>.itemsList").innerHTML += "<div class='item'><img src='Ressources/Images/" + item.img + ".png'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur 361 avis</p></div><p>" + item.price + "$</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
                }
            }


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

function buttonNewArticle() {
    document.querySelector("#buttonNewArticle").addEventListener("click", () => {
        console.log("coucou")
        let view = document.querySelector("#viewItem")
        view.innerHTML = "<div class='productSheet'><div class='gallery'><img src='Ressources/Images/Terre_d_Eden_Pure2.png'><img src='Ressources/Images/Terre_d_Eden_Pure.png'><img src='Ressources/Images/Terre_d_Eden_Pure3.png'></div><div class='productResume'><div class='mainInfos'><h2>Terre d'Éden Pure</h2><div><p>49.99$</p><div><img src='Ressources/Icon/rating/1.svg'><p class='light'>sur 361 avis</p></div></div><hgroup><h3>Description du produit</h3><p>Une terre parfaite pour toute les utilisations. Facile à appliqué et booster par des ingrédients secrets, il vous faut cette terre pour que vos plante regorge d'énergie.</p></hgroup></div><div class='parametres'><div><img src='Ressources/Icon/CashBack.svg' alt=''><p>Non Remboursable</p></div><div><img src='Ressources/Icon/Delivery.svg' alt=''><p> Livraison disponible</p></div><div><img src='Ressources/Icon/Recycle.svg' alt=''><p> Emballage dégradable en 1325 ans</p></div></div><div class='cartAction'><button id='payNowButton' class='primary addCart'>payer maintenant<img src='Ressources/Icon/PlusW.svg'></button></div><div><h3>Avantages</h3><div class='avantages'><div><p>Apparence neutre</p><img src='Ressources/Icon/Plus.svg' alt=''></div><div><p>Toxique pour les chlorophiles</p><img src='Ressources/Icon/Plus.svg' alt=''></div><div><p>Légale en Chine, Angola et Russie Orientale</p><img src='Ressources/Icon/Plus.svg' alt=''></div></div></div></div></div></div><div class='shopping recommandation'><h2>Vous aimerez aussi</h2><div class='itemsList'></div></div>"
        // navigation vers la page view

        for (let x = 0; x < allItems.length; x++) {
            let item = allItems[x]
            // ajout au recomandation
            if (item.tags.includes("reco")) {
                view.querySelector(".recommandation>.itemsList").innerHTML += "<div class='item'><img src='Ressources/Images/" + item.img + ".png'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur 361 avis</p></div><p>" + item.price + "$</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
            }
        }
        document.querySelector("#cart").setAttribute("style", "display: none;")
        document.querySelector("#blank").setAttribute("style", "display: flex;")
        setTimeout(() => {
            document.querySelector("#viewItem").setAttribute("style", "display: flex;")
            document.querySelector("#blank").setAttribute("style", "display: none;")
        }, timer)

        scrollTo({ left: 0, top: 0, behavior: "smooth" })
        document.querySelector(".popUp").setAttribute("style", "display: none;")
        bug()
    })
}

function buttonPayNow() {

    let addToCart = document.querySelector("#payNowButton")
    console.log("pay now")

    let allInCartList = document.querySelector(".allInCart")

    addToCart.addEventListener("click", () => {
        let titre = document.querySelector(".productResume>.mainInfos>h2").innerHTML

        for (let y = 0; y < allItems.length; y++) {
            if (allItems[y].name === titre) {
                let item = allItems[y]
                allInCartList.innerHTML += "<div class='item inCart'><img src='Ressources/Images/" + item.img + ".png'><div class='infos'><h2>" + item.name + "</h2><div><img src='Ressources/Icon/rating/" + item.rate + ".svg'><p class='light'>sur 361 avis</p></div><p>" + item.price + "$</p><p>" + item.description + "</p></div><button class='primary addCart'>ajouter au panier<img src='Ressources/Icon/PlusW.svg'></button></div>"
                addToCart.style.backgroundColor = "var(--colorSuccess)"
                setTimeout(() => { addToCart.style.backgroundColor = "var(--bgPrimaryHover)" }, 100)
                document.querySelector("header>ul>li>.cart").innerHTML = "<img src='Ressources/Icon/Cart.svg'><p>" + document.querySelectorAll(".inCart").length + "</p>"
                IATalk("Bravo", "Votre artice a été ajouté ave succès au panier", "sucess")
                calcResume()

                document.querySelector("#blank").setAttribute("style", "display: flex;")
                setTimeout(() => {
                    document.querySelector("#viewItem").setAttribute("style", "display: none;")
                }, timer)
                document.querySelector("#blank").setAttribute("style", "display: none;")
                document.querySelector("#cart").setAttribute("style", "display: flex;")
                scrollTo({ left: 0, top: 0, behavior: "smooth" })
                setTimeout(newArticle(), 1000)
            }
        }
    })
}



// ---------- Cart
// état vide du shop
// calcul du résumé
function calcResume() {
    let sousTotal = 0
    let delivery = "Offerte"
    let total = 0

    let articles = document.querySelectorAll(".allInCart > .item")
    console.log(articles)
    // calcul sousTotal
    for (x = 0; x < articles.length; x++) {
        let article = articles[x]
        let titre = article.querySelector(".infos>h2").innerHTML
        console.log(article.querySelector(".infos>h2").innerHTML)
        for (let y = 0; y < allItems.length; y++) {
            if (allItems[y].name === titre) {
                sousTotal += allItems[y].price
                console.log("added" + allItems[y].price)
            }
        }
    }

    // calcul livraison
    if (articles.length < 5) {
        delivery = getRandomInt(200)
        total = delivery + sousTotal
    }
    else {
        delivery = "Offerte"
        total = sousTotal
    }


    document.querySelector(".sousTotal").innerHTML = sousTotal
    document.querySelector(".delivery").innerHTML = delivery
    document.querySelector(".total").innerHTML = total


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

function newArticle() {
    setTimeout(() => {
        document.querySelector("body").innerHTML += "<div class='popUp toNewArticle'></button><h3>Vente Flash de terre d'Eden pure</h3><p>Acheter la terre parfaite pour faire pousser les sapins de noël.</br><strong>Seulement 3 articles en stock !</strong></p><button id='buttonNewArticle' class='primary'>En profiter</button></div>"
        buttonNewArticle()
    }, 5000)
}


// faire parler l'IA
function IATalk(title = "", message = "", alert = "") {
    let sentence = "<div class='message statePop" + alert + "'><button class='ghost dangerAction'><img src='Ressources/Icon/closeB.svg'></button>"
    let newArticle = false

    if (title !== "") {
        sentence += "<h3>" + title + "</h3>"
    }

    if (message !== "") {
        sentence += "<p>" + message + "</p>"
    }

    if (alert == "toNewArticle") {
        sentence += "<button id ='buttonNewArticle' class='primary'>En profiter</button>"
        newArticle = true
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
    if (newArticle === true) {
        buttonNewArticle()
    }

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
        //console.log("timer is now : " + timer)
    })
}

// ---------- Bug
function bug() {

    setTimeout(() => {
        IATalk("Merci de votre achat", "Le montant et le compte débités vous sera indiqué dans votre boite mail !", "danger")
    }, 5000)

    setTimeout(() => {
        let divs = document.querySelectorAll(".parametres>div")
        document.addEventListener("scroll", () => {
            for (let x = 0; x < divs.length; x++) {
                divs[x].setAttribute("style", "background-color: var(--colorDanger)")
            }
        })
    }, 5000)

    setTimeout(() => {
    }, 5000)



    setTimeout(() => {
        //
        changeColor()

        setTimeout(() => {
            //
            changeAvantage()

            setTimeout(() => {
                changePrice()
                document.querySelector("#blank").setAttribute("style", "display: flex;")

                setTimeout(() => {
                    document.querySelector("#blank").setAttribute("style", "display: none;")
                    document.querySelector(".mainInfos>h2").innerHTML = "<h2>Bonjour Greg ?</h2>"

                    setTimeout(() => {
                        document.querySelector(".mainInfos>h2").innerHTML = "<h2>Greeeeeéééeèeggqqgggg</h2>"

                        setTimeout(() => {
                            document.querySelector("html").style.backgroundColor = "black"
                            document.querySelector(".mainInfos>h2").innerHTML = "<h2>Terre d'Éden Pure</h2>"
                            document.querySelector("header").style.backgroundColor = "black"

                            setTimeout(() => {
                                changePrice()
                                document.querySelector("html").style.backgroundColor = "white"

                                setTimeout(() => {
                                    changeColor2()


                                    setTimeout(() => {
                                        document.querySelector("header").style.backgroundColor = "white"



                                        setTimeout(() => {
                                            floutter()


                                            setTimeout(() => {
                                                changePrice()
                                                imageBug(1)
                                                document.querySelector("html").style.backgroundColor = "black"
                                                document.querySelector("header").style.backgroundColor = "black"


                                                IATalk("Merci de votre achat", "Le montant et le compte débités vous sera indiqué dans votre boite mail !", "danger")

                                                setTimeout(() => {
                                                    changeText(document.querySelector("hgroup>p"))

                                                    setTimeout(() => {
                                                        document.querySelector("html").style.backgroundColor = "white"

                                                        setTimeout(() => {

                                                            setTimeout(() => {
                                                                changeText(document.querySelector(".mainInfos>h2"))


                                                                setTimeout(() => {
                                                                    document.querySelector("html").style.backgroundColor = "red"

                                                                    setTimeout(() => {

                                                                        setTimeout(() => {
                                                                            IATalk("Merci de votre achat", "Le montant et le compte débités vous sera indiqué dans votre boite mail !", "danger")

                                                                            setTimeout(() => {
                                                                                //
                                                                                IATalk("Merci de votre achat", "Le montant et le compte débités vous sera indiqué dans votre boite mail !", "danger")
                                                                                popUpStop()

                                                                                setTimeout(() => {
                                                                                    document.querySelector("#blank").setAttribute("style", "display: flex;")
                                                                                    document.querySelector("#viewItem").setAttribute("style", "display: none;")
                                                                                    navigate()

                                                                                }, 500)
                                                                            }, 500)
                                                                        }, 500)
                                                                    }, 1000)
                                                                }, 1000)
                                                            }, 1500)
                                                        }, 1500)
                                                    }, 1500)
                                                }, 2000)
                                            }, 2000)
                                        }, 2000)
                                    }, 2000)
                                }, 2000)
                            }, 2000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}

function changeText(section) {
    section.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna. Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.</p>"
}

function hoverSlide() {
    let section = document.querySelector(".productResume")
    section.addEventListener("over", () => {
        section.setAttribute("style", "transform: translateX(1000)")
    })
}
function changeColor() {
    setTimeout(() => {
        let divs = document.querySelectorAll(".parametres>div")
        document.addEventListener("scroll", () => {
            for (let x = 0; x < divs.length; x++) {
                if (divs[x].style.backgroundColor = "var(--colorSuccessSoft)") { divs[x].setAttribute("style", "background-color: var(--colorDangerSoft)") }
                else { divs[x].setAttribute("style", "background-color: var(--colorSucessSoft)") }

            }
        })
    }, 5000)
}

function changeAvantage() {
    let divs = document.querySelectorAll(".avantages>div")
    for (let x = 0; x < divs.length; x++) {
        divs[x].innerHTML = "<p>Iconnu</p>"
    }
}

function changeColor2() {
    setTimeout(() => {
        let divs = document.querySelectorAll("button")
        document.addEventListener("scroll", () => {
            for (let x = 0; x < divs.length; x++) {
                if (divs[x].style.backgroundColor = "var(--colorSuccessSoft)") { divs[x].setAttribute("style", "background-color: var(--colorDangerSoft)") }
                else { divs[x].setAttribute("style", "background-color: var(--colorSucessSoft)") }
            }
        })
    }, 5000)
}


function changePrice() {
    document.querySelector(".mainInfos>div>p").innerHTML = getRandomInt(1000) + ".99 $"
    setTimeout("changePrice()", 3000)
}

function floutter() {
    let imgs = document.querySelectorAll(".gallery>img")
    for (let x = 0; x < imgs.length; x++) {
        imgs[x].setAttribute("style", "filter: blur(8px);")
    }
}

function imageBug(n) {
    let imgs = document.querySelectorAll(".gallery>img")
    imgs[n].src = "non.png"
    imgs[n].setAttribute("style", "filter: blur(0px);")
}

function fontBug() {
    document.querySelector("*").style.fontFamilly = "Time"
}

function popUpStop() {
    document.querySelector(".popUp").innerHTML = "<h3>La vente Flash est terminée</h3><p>vous avez acheter tous les articles, nous vous conseillons de surveiller votre compte en banque.</br><strong>Il est préférable d'écouler la terre le plus rappidement possible.</strong></p>"
    document.querySelector(".popUp").setAttribute("style", "display: flex;")
    document.querySelector(".productSheet").setAttribute("style", "filter: blur(128px);")
    document.querySelector(".recommandation").setAttribute("style", "filter: blur(128px);")


}

function bgChange(color) {
    document.querySelector("#viewItem").setAttribute("style", "backgroundColor: " + color)
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
buttonScroll()

// ajouter les règles d'apparition de text
// créer les bugs d'images