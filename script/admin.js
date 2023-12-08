//Footer: Current Year 
document.querySelector('#currentYear').innerHTML = new Date().getUTCFullYear()

let productsAdmin = JSON.parse(localStorage.getItem('productList'))

let adminWrapper = document.querySelector('.table-group-divider');
//Functions
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
                <button class="btn " value="${i}">Add New Item</button>
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

// uptdating localstorage
function update() {
    localStorage.setItem('productList', JSON.stringify(productsAdmin))
    productsAdmin = JSON.parse(localStorage.getItem('productList'))
}

//Delete Function

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
