//Footer: Current Year 
document.querySelector('#currentYear').innerHTML = new Date().getUTCFullYear()


let checkoutData = JSON.parse(localStorage.getItem('shoppingCart')) || []
let checkoutWrapper = document.querySelector('[data-table-body]')

function displayCheckoutData() {
    checkoutWrapper.innerHTML = ""
    let uniqueData = Object.groupBy(checkoutData, item=> item.id)
    for(let key in uniqueData) {
        checkoutWrapper.innerHTML +=`
            <tr>
                <td>${uniqueData[key][0].name}</td>
                <td>${uniqueData[key][0].author}</td>
                <td>${uniqueData[key].length}</td>
                <td>R${uniqueData[key][0].cost}</td>
                <td>R${eval(`${uniqueData[key][0].cost} * ${uniqueData[key].length}`)}</td>
            </tr>
        `
    }
}
displayCheckoutData()


let clearBtn = document.querySelector('#clearCheckout')
clearBtn.addEventListener('click', () =>{
    localStorage.removeItem('shoppingCart');
    checkoutWrapper.innerHTML = `
    <p>Place New Order</p>`
    
})

let placeOrder = document.querySelector('#placeOrder')
placeOrder.addEventListener('click', orderPlaced)


function orderPlaced(){
    checkoutWrapper.innerHTML =
    `<div class="alert alert-success d-flex align-items-center" role="alert">
     <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
     <div> Order Placed. Check email for confirmation. </div>
     </div>`

}

//Order Total

let orderTotal = document.querySelector('#orderTotal')
orderTotal.addEventListener('click', totaledOrder)

let totalCost = 0;
    for(let i in total){
        let items = itemTotal[i];
        let totalAmount = items.length * items[0].amount;
        totalCost += totalAmount

    }
    orderTotal.innerHTML += `R${totalCost}`



// function totaledOrder(){

// }