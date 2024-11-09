// БАЗА ДАННЫХ ПК
let pc = [
    {id: 0, name: "PCZONE ONE", img: 'img/pc1.jpg', videoCard: "Nvidia Geforce Gtx 1660 4 GB", processor: "Intel Core I5 10400f", motherBoard: "B760", price: 59.999},
    {id: 1, name: "PCZONE FURY", img: "img/pc2.jpg", videoCard: "Nvidia Geforce Rtx 2060 6 GB", processor: "Intel Core I5 12400f", motherBoard: "B760", price: 89.999},
    {id: 2, name: "PCZONE WARRIOR", img: "img/pc3.jpg", videoCard: "Nvidia Geforce Rtx 2070 6 GB", processor: "Intel Core I5 14400f", motherBoard: "Z790", price: 109.999},
    {id: 3, name: "PCZONE CHAMPION", img: "img/pc4.jpg", videoCard: "Nvidia Geforce Rtx 3060 8 GB", processor: "Intel Core I7 12700f", motherBoard: "Z790", price: 139.999},
    //.................................
];













// СИНХРОНИЗАЦИЯ ЦЕН ПК
const divId = document.querySelector(".info-buy-price");
const dataId = divId.getAttribute("data-id");

let pcPrice = pc.find(pcId => pcId.id == dataId);

if (pcPrice) {
    const divPriceP = document.createElement("p");
    divPriceP.innerText = pcPrice.price + "руб";
    divId.append(divPriceP);
}





// КНОПКА КОРЗИНА
function addBasket(dataId) {
    let localBasket = JSON.parse(localStorage.getItem("localBasket")) || [];

    let poiskOnPc = pc.find(pcId => pcId.id == dataId);
    basket.push(poiskOnPc);
    

    localBasket.push(poiskOnPc);
    localStorage.setItem("localBasket", JSON.stringify(localBasket));
    

    
    
}


// ЗАГРУЗИТЬ КОРЗИНУ
function loadBasket() {
    

    const getLS = JSON.parse(localStorage.getItem("localBasket"));
    console.log(getLS);

    let viewBasket = document.querySelector(".viewBasket");

    viewBasket.innerHTML = "";
    
    for (let i = 0; i < getLS.length; i++) {
        
        let divRow = document.createElement("div"); divRow.classList.add("divRow");
        let divH = document.createElement("div"); divH.classList.add("divH");

        let creatH3 = document.createElement("h3"); creatH3.innerText = getLS[i].name;
        let creatH4 = document.createElement("h4"); creatH4.innerText = "Цена: " + getLS[i].price + "руб";
        let creatH5 = document.createElement("h5"); creatH5.innerText = "Характеристики: " + getLS[i].processor + " | " + getLS[i].videoCard + " | " + getLS[i].motherBoard;

        divH.append(creatH3); divH.append(creatH4); divH.append(creatH5);
        
        let divImg = document.createElement("div"); divImg.classList.add("divImg");
        let imgOnDiv = document.createElement("img"); imgOnDiv.src = getLS[i].img;

        divImg.append(imgOnDiv);
        divRow.append(divImg);
        
        divRow.append(divH);
        viewBasket.append(divRow);


        
    }
}



// ОЧИСТИТЬ КОРЗИНУ
function clearBasket() {
    localStorage.clear();
    loadBasket();
}




