//Footer: Current Year 
document.querySelector('#currentYear').innerHTML = new Date().getUTCFullYear()


let checkoutData = JSON.parse(localStorage.getItem('shoppingCart')) || []
let checkoutWrapper = document.querySelector('[data-table-body]')

function displayCheckoutData() {
    checkoutWrapper.innerHTML = ""
    let uniqueData = Object.groupBy(checkoutData, item=> { return item.id})
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

let placeOrder = document.querySelector('#placeOrder')
placeOrder.addEventListener('click', orderPlaced)


function placeOrder(){

}

