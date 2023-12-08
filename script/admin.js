//Footer: Current Year 
document.querySelector('#currentYear').innerHTML = new Date().getUTCFullYear()

let productsAdmin = JSON.parse(localStorage.getItem('productList'))

let adminWrapper = document.querySelector('.table-group-divider');
//Display function
function productDisplay() {
    adminWrapper.innerHTML = '';
    if (productsAdmin) {
        (productsAdmin)                                                                                                                      
        productsAdmin.forEach((item, i) => {
            adminWrapper.innerHTML += `
            <tr class="white-text">
                <td class="white-text">${item.name}</td>
                <td>${item.author}</td>
                <td>${item.cost}</td>
                <td>
                <button class="btn " value="${i}">Edit</button>
                <button class="btn delete" value="${i}">Delete</button>
                </td>
            </tr>
        `;
        });
    } else {
        adminWrapper.innerHTML = 'No products available';
    }
}

productDisplay()

// updating localstorage
function update() {
    localStorage.setItem('productList', JSON.stringify(productsAdmin))
    productsAdmin = JSON.parse(localStorage.getItem('productList'))
}

//Delete Button Function

function clear(x){
    productsAdmin.splice(x, 1)
    update()
    productDisplay()
}

function deleteItem(){
    if(event.target.classList.contains("delete")){
        clear(event.target.value, productDisplay())
    }
}

let table = document.querySelector('[data-table-body]')

table.addEventListener('click',deleteItem)

/*
function editProducts(index) {
  let editName = document.querySelector("[data-edit-name]");
  let editMake = document.querySelector("[data-edit-make]");
  let editDescription = document.querySelector("[data-edit-description]");
  let editPrice = document.querySelector("[data-edit-price]");
  let editImg = document.querySelector("[data-edit-img]");
  editName.value = products[index].name;
  editMake.value = products[index].make;
  editDescription.value = products[index].description;
  editPrice.value = products[index].price;
  editImg.value = products[index].img;
  // Store the index in a data attribute for later use
  document.querySelector("#productEdit").setAttribute("data-edit-index", index);
}
// Add this function to save changes when the "Save changes" button is clicked
function saveChanges() {
  // Retrieve values from inputs
  let editedName = document.querySelector("[data-edit-name]").value;
  let editedMake = document.querySelector("[data-edit-make]").value;
  let editedDescription = document.querySelector(
    "[data-edit-description]"
  ).value;
  let editedPrice = document.querySelector("[data-edit-price]").value;
  let editedImg = document.querySelector("[data-edit-img]").value;
  // Retrieve the index from the data attribute
  // let index = document.querySelector('#productEdit').getAttribute('data-edit-index');
  let index = document.querySelector("[data-edit]").value;
  // Update data in your array
  products[index].name = editedName;
  products[index].make = editedMake;
  products[index].description = editedDescription;
  products[index].price = editedPrice;
  products[index].img = editedImg;
  // Update the localStorage
  update();
}
productDisplay.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit")) {
    editProducts(event.target.value);
  }
  update();
});
document.querySelector("[data-saveEdited-prod]").addEventListener(
  "click",
  saveChanges,
  update,
  display
); */
