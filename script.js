

//products //
if (localStorage.getItem("cartProducts")) {
    CartItem.innerHTML = JSON.parse(localStorage.getItem("cartProducts")).length;
}
fetch('./products.json')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let allProducts = json;
        let newproducts = allProducts.filter(product => product.category == "laptops"|| product.category == "smartphones"|| product.category == "watch"|| product.category == "ipads");
        console.log(newproducts);
        let item ="";
        for(let i = 0; i<newproducts.length;i++){
         item += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3 ">

    <div class="card"  >
    <img src="${newproducts[i].images[0]}" style="width:100%;height:250px"  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${newproducts[i].brand}</h5>
      <p class="card-text">${newproducts[i].title}</p>
      <p class="card-text">${newproducts[i].description}</p>
      <h3 class="card-text">${newproducts[i].price} $</h3> 
     
      <div class="d-flex align-items-center justify-content-between">

      <a  class="btn btn-primary"  onclick="addProductToCart(${newproducts[i].id})">ADD TO CART</a>
      <a  class="btn btn-primary" onclick="displyViwe(${newproducts[i].id})">VIWE</a>
      </div>
     
    </div>
  </div>
</div>`;}
        ContainerProducts.innerHTML = item;
    })



//viwe product //
    function displyViwe(id){
        fetch('./products.json')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let allProducts = json;
            let newproducts = allProducts.filter(product => product.id==id);
            console.log(newproducts);
            localStorage.setItem("viweProducts" , JSON.stringify(newproducts))
        })    
            window.location="viweProducts.html";

    }





showAllProduct.addEventListener("click",function()
{
    fetch('./products.json')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let allProducts = json;
        let newproducts = allProducts.filter(product => product.category == "laptops"|| product.category == "smartphones"|| product.category == "watch");
        console.log(newproducts);
        let item ="";
        for(let i = 0; i<newproducts.length;i++){
         item += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3 ">

    <div class="card"  >
    <img src="${newproducts[i].images[0]}" style="width:100%;height:250px"  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${newproducts[i].brand}</h5>
      <p class="card-text">${newproducts[i].title}</p>
      <p class="card-text">${newproducts[i].description}</p>
      <h3 class="card-text">${newproducts[i].price} $</h3> 

      <div class="d-flex align-items-center justify-content-between">

      <a  class="btn btn-primary"  onclick="addProductToCart(${newproducts[i].id})">ADD TO CART</a>
      <a  class="btn btn-primary" onclick="displyViwe(${newproducts[i].id})">VIWE</a>

      </div>
    </div>
  </div>
</div>`;}
        ContainerProducts.innerHTML = item;
    })

})


showIphoneProduct.addEventListener("click",function()
{
    fetch('./products.json')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let allProducts = json;
        let newproducts = allProducts.filter(product =>  product.category == "smartphones");
        console.log(newproducts);
        let item ="";
        for(let i = 0; i<newproducts.length;i++){
         item += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3 ">

    <div class="card"  >
    <img src="${newproducts[i].images[0]}" style="width:100%;height:250px"  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${newproducts[i].brand}</h5>
      <p class="card-text">${newproducts[i].title}</p>
      <p class="card-text">${newproducts[i].description}</p>
      <h3 class="card-text">${newproducts[i].price} $</h3> 

      <div class="d-flex align-items-center justify-content-between">

      <a  class="btn btn-primary"  onclick="addProductToCart(${newproducts[i].id})">ADD TO CART</a>
      <a  class="btn btn-primary" onclick="displyViwe(${newproducts[i].id})">VIWE</a>
      </div>
    </div>
  </div>
</div>`;}
        ContainerProducts.innerHTML = item;
    })

})

showMacProduct.addEventListener("click",function()
{
    fetch('./products.json')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let allProducts = json;
        let newproducts = allProducts.filter(product =>  product.category == "laptops");
        console.log(newproducts);
        let item ="";
        for(let i = 0; i<newproducts.length;i++){
         item += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3 ">

    <div class="card"  >
    <img src="${newproducts[i].images[0]}" style="width:100%;height:250px"  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${newproducts[i].brand}</h5>
      <p class="card-text">${newproducts[i].title}</p>
      <p class="card-text">${newproducts[i].description}</p>
      <h3 class="card-text">${newproducts[i].price} $</h3> 

      <div class="d-flex align-items-center justify-content-between">

      <a  class="btn btn-primary"  onclick="addProductToCart(${newproducts[i].id})">ADD TO CART</a>
      <a  class="btn btn-primary" onclick="displyViwe(${newproducts[i].id})">VIWE</a>
      </div>
    </div>
  </div>
</div>`;}
        ContainerProducts.innerHTML = item;
    })

})


showWatchesProduct.addEventListener("click",function()
{
    fetch('./products.json')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let allProducts = json;
        let newproducts = allProducts.filter(product =>  product.category == "watch");
        console.log(newproducts);
        let item ="";
        for(let i = 0; i<newproducts.length;i++){
         item += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3 ">

    <div class="card"  >
    <img src="${newproducts[i].images[0]}" style="width:100%;height:250px"  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${newproducts[i].brand}</h5>
      <p class="card-text">${newproducts[i].title}</p>
      <p class="card-text">${newproducts[i].description}</p>
      <h3 class="card-text">${newproducts[i].price} $</h3> 

      <div class="d-flex align-items-center justify-content-between">

      <a  class="btn btn-primary"  onclick="addProductToCart(${newproducts[i].id})">ADD TO CART</a>
      <a  class="btn btn-primary" onclick="displyViwe(${newproducts[i].id})">VIWE</a>
      </div>
    </div>
  </div>
</div>`;}
        ContainerProducts.innerHTML = item;
    })

})


showIpadProduct.addEventListener("click",function()
{
    fetch('./products.json')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let allProducts = json;
        let newproducts = allProducts.filter(product =>  product.category == "ipads");
        console.log(newproducts);
        let item ="";
        for(let i = 0; i<newproducts.length;i++){
         item += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3 ">

    <div class="card"  >
    <img src="${newproducts[i].images[0]}" style="width:100%;height:250px"  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${newproducts[i].brand}</h5>
      <p class="card-text">${newproducts[i].title}</p>
      <p class="card-text">${newproducts[i].description}</p>
      <h3 class="card-text">${newproducts[i].price} $</h3> 

      <div class="d-flex align-items-center justify-content-between">

      <a  class="btn btn-primary"  onclick="addProductToCart(${newproducts[i].id})">ADD TO CART</a>
      <a  class="btn btn-primary" onclick="displyViwe(${newproducts[i].id})">VIWE</a>
      </div>
    </div>
  </div>
</div>`;}
        ContainerProducts.innerHTML = item;
    })

})

  // slidee



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// back to top bottun

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//form page - contact //

let errorsArray = [];
let notEroorArray = [];
subBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const gender = document.getElementsByName("gender");
    const sports = document.getElementsByName("soprts");
    const errorsP = document.getElementsByClassName("error");
    let errorIndex = 0;
    let notErrorIndex = 0;
    let sportsInc = 0;
    function errfun(num, array, index) {
        errorsArray[errorIndex] = num;
        errorIndex++;
    }
    function noerrfun(num) {
        notEroorArray[notErrorIndex] = num;
        notErrorIndex++;
    }
    (!/^[a-zA-xZ\s]{8,}$/g.test(nameInput.value)) ? errfun(0) : noerrfun(0);
    (!/^[a-z]{3,}\d*@(yahoo|gmail)(.com)$/.test(emailInput.value)) ? errfun(1) : noerrfun(1);
    (!/^\w{8,}$/.test(passwordInput.value)) ? errfun(2) : noerrfun(2);
    (!gender[0].checked || gender[1].checked) ? errfun(3) : noerrfun(3);
    for (let i = 0; i < sports.length; i++) {
        if (sports[i].checked) sportsInc++;
    }
    (sportsInc < 2) ? errfun(4) : noerrfun(4);
    (countryId.value == "") ? errfun(5) : noerrfun(5);
    for (let i = 0; i < errorsArray.length; i++) {
        errorsP[errorsArray[i]].style.display = "block";
    }
    for (let i = 0; i < notEroorArray.length; i++) {
        errorsP[notEroorArray[i]].style.display = "none";
    }
    errorsArray = [];
    notEroorArray = [];

})


// FORM  CONTACT PAGE///

let loginForm = document.querySelector(".my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log('Email:', email.value);
    console.log('Password:', password.value);
});

function onChange() {
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity('');
    } else {
        confirmPassword.setCustomValidity('Passwords do not match!');
    }
}

password.addEventListener('change', onChange);
confirmPassword.addEventListener('change', onChange);


// add to cart


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