// id generator: https://gist.github.com/gordonbrander/2230317
var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

productArray = [];

class Product {
    constructor(brand, name, price, imgSrc) {
        this.name = name;
        this._price = price;
        this.brand = brand;
        this.imgSrc = imgSrc;
        this.id = ID();
    }
    set price(newPrice) {
        if(typeof newPrice === 'number' && newPrice > 0) {
            this._price = newPrice;
        }
    }
    get price() {
        return this._price;
    }
    log() { 
        console.log(`product ${this.name} ${this.id}: ${this.price}`);
    }
    showPrice() {
        console.log(this.price);
    }
}

class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cart = [];
    }
    addCart(product) {
        this.cart.push(product);
    }
    showCart() {
        console.table(this.cart);
    }
}
 
class Admin extends User {
    constructor(name, email, age, isAdmin) {
        super(name, email, age);
        this.isAdmin = isAdmin;
    }
    checkUser() {
        return this.isAdmin;
    }
}   

let appendDiv = e =>{
    $("div.products").append(e);
}

let addCart = (e) => {
    
}

let addProduct = () =>{
    let brand = $('#brand').val();
    let model = $('#model').val();
    let price = $('#price').val();
    let imgSrc = $('#imgsrc').val();
    let temp = new Product(brand, model, price, imgSrc)
    let htmlStr = `
        <div class="item" id="${temp.id}">
            <ul>
            <li>${temp.brand} ${temp.name}</li>
            <li>${temp.price + "$"}</li>
            <li><img src="${temp.imgSrc}"></li>
            <li><button id="buyItem">Buy</button></li>
        </ul>
    </div>`;
    appendDiv(htmlStr);
    productArray.push(temp);
}

$("#buyItem").on('click', addCart); 

$("#addProduct").on('click', function(e){
    addProduct();
    e.preventDefault();
});

