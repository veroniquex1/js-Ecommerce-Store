//Footer: Current Year 
document.querySelector('#currentYear').innerHTML = new Date().getUTCFullYear()

let searchBar = document.querySelector('products-search') //note: add functionality for search

let books = [{
        id: 1,
        name: 'The Lives Inside Your Head',
        author: 'Winston Brown',
        cost: 180,
        image: 'https://i.postimg.cc/Yq0hmFRP/book1.png'
    },
    {
        id: 2,
        name: 'Physics for Science and Engineering Student',
        author: 'Peter J Nolan',
        cost: 1300,
        image: 'https://i.postimg.cc/bvwPhwtf/download-1.jpg'
    },
    {
        id: 3,
        name: 'Harry Potter and the Philosopher\'s Stone',
        author: 'JK Rowling',
        cost: 200,
        image: 'https://i.postimg.cc/mkJs73jg/hp1.jpg'
    },
    {
        id: 4,
        name: 'Harry Potter and the Chamber of Secrets',
        author: 'JK Rowling',
        cost: 200,
        image: 'https://i.postimg.cc/nhn3vZpQ/hp2.webp'
    },
    {
        id: 5,
        name: 'Gray\'s Anatomy',
        author: 'Henry Gray',
        cost: 1500,
        image: 'https://i.postimg.cc/ZnJwyCFw/download-3.jpg'
    }
]

let products = JSON.parse(localStorage.getItem('productList')) ? JSON.parse(localStorage.getItem('productsList')) : localStorage.setItem('productList', JSON.stringify(books));


let wrapper = document.querySelector('#product-display');
//Functions
function productDisplay() {
    wrapper.innerHTML = '';
    if (books) {
        //loop through each element in books array
        // console.log(books)                                                                                                                                                         
        books.forEach((x) => {
            console.log(x)
            wrapper.innerHTML += `
            <div class="card ">
                        <img src="${x.image}" class="card-img-top" id="imgProductDisplay" alt="Your Image""></img>
                        <div class="card-body">
                            <h5 class="card-title text-center">${x.name}</h5>
                            <p class="card-text text-center">${x.author}</p>
                            <p class="card-text text-center">R${x.cost}</p>
                            <a href="#" class="btn btn-dark ">Add to Cart</a>
                        </div>
                    </div>`;
        });
    } else {
        wrapper.innerHTML = 'No products available';
    }
}

productDisplay()

let productSearch = document.querySelector('#products-search')
productSearch.addEventListener('keyup', function () {
    try {
        let searchResult = books.filter(x => {
                return x.name.toLowerCase().includes(productSearch.value.toLowerCase())
                // console.log(searchResult) 
        })
        if(searchResult.length > 0){
            wrapper.innerHTML = ""
            searchResult.forEach((item, i) => {
                wrapper.innerHTML +=`
                <div class="card ">
                <img src="${item.image}" class="card-img-top" id="imgProductDisplay"></img>
                <div class="card-body">
                    <h5 class="card-title teitemt-center">${item.name}</h5>
                    <p class="card-teitemt teitemt-center">${item.author}</p>
                    <p class="card-text text-center">R${item.cost}</p>
                    <a href="#" class="btn btn-dark ">Add to Cart</a>
                </div>
            </div>
                `
            })
        }
        else{
            wrapper.innerHTML = "Item not found"
        }

    } catch(e) {
        alert(e)
    }
})

let sortBtn = document.querySelector('#sort')
sortBtn.addEventListener('click', sorting)

function sorting(){
    sortedBooks = books.sort((item1, item2) => item1.cost - item2.cost)
    productDisplay()

}