//Show Number Of Cart Products
if (localStorage.getItem("cartProducts")) {
    productCartContainer.style.display = "block";
    noFoundContainer.style.display = "none";
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    CartItem.innerHTML = products.length;
    console.log(products);
    let allItems = "";
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        let { id, title, description, price, images, brand ,quantity} = products[i];
        totalPrice += (price * quantity);
        allItems += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3">
        <div class="bg-light pb-2 Item h-100">
            <div class="Item-img-content rounded-2 position-relative overflow-hidden">
                <img class="img-fluid" src="${images[0]}" style="width:100%;height:250px"  alt="member img" />
            </div>
            <h6 class="fs-4 my-2 fw-bold Item-Name">${title.split(" ").slice(0, 2).join(" ")}</h6>
            <p class="fs-6 text-muted Item-Category">${description}</p>
            <p class="fs-12 Item-Price" style="color:#10cab7;">${price}&dollar;</p>
            <p class="fs-12 Item-Price">Item Quantity <i class="fa-brands fa-shopify"></i> <strong>${quantity}</strong></p>
        </div>
    </div>`;
    }
    TotalPrice.innerHTML = `Total Price: ${totalPrice}$`;
    SectionProductRow.innerHTML = allItems;
} else {
    productCartContainer.style.display = "none";
    noFoundContainer.style.display = "block";
}