if (localStorage.getItem("cartProducts")) {
    CartItem.innerHTML = JSON.parse(localStorage.getItem("cartProducts")).length;
}


let product = JSON.parse(localStorage.getItem("viweProducts"));

console.log(product);

ProductImggSlider.src=product[0].images[0];
ProducName.innerHTML = product[0].title;
ProductNewPrice.innerHTML = product[0].price+"$";
about.innerHTML = product[0].description;
ProductCategory.innerHTML = product[0].category;
addToCart.addEventListener("click",function(){

addProductToCart(product[0].id);

});
function addProductToCart(id) {
    fetch("./products.json")
        .then((response) => response.text())
        .then((json) => (products = JSON.parse(json)))
        .then((products) => {
            console.log(products);
            let specificProduct = products.filter(ele => ele.id == id);
            let cartProducts = [];
            if (localStorage.getItem("cartProducts")) {
                cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
                let productIsFound = false;
                cartProducts.map(product => {
                    if (product.id == id) {
                        productIsFound = true;
                        return;
                    }
                });
                console.log("productIsFound ", productIsFound);
                if (productIsFound) {
                    cartProducts = cartProducts.map(product => {
                        if (product.id == id) {
                            product.quantity += 1;
                            return product;
                        } else {
                            return product
                        }
                    })
                } else {
                    specificProduct[0].quantity = 1;
                    cartProducts = [...cartProducts, ...specificProduct];
                }
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                CartItem.innerHTML = cartProducts.length;
            } else {
                specificProduct[0].quantity = 1;
                localStorage.setItem("cartProducts", JSON.stringify(specificProduct));
                CartItem.innerHTML = 1;
            }
        })
        .catch((error) => { console.log(error) })
}
