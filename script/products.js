//Footer: Current Year 
document.querySelector('#currentYear').innerHTML = new Date().getUTCFullYear()

let searchBar = document.querySelector('products-search') //note: add functionality for search
let sortBtn = document.querySelector('.btn') //sort function

//Products
// 'product-list', JSON)

// localStorage.setItem('products-list', JSON.stringify(books)) 
// let productItems = localStorage.getItem('products')? JSON.parse(localStorage.get('products')) : []

let books = [
    {
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

let products = JSON.parse(localStorage.getItem('productList')) ? JSON.parse(localStorage.getItem('productsList')): localStorage.setItem('productList', JSON.stringify(books));


//Functions
function productDisplay() {
    let wrapper = document.querySelector('#product-display');
    wrapper.innerHTML = '';
    if (books) {
        //loop through each element in books array
        // console.log(products)                                                                                                                                                         
        books.forEach( (x) => {
            console.log( x )
            wrapper.innerHTML += `
            <div class="item-card">
                      <img src="${x.image}" class="card-img-top " alt="">
                      <div class="card-body">
                          <h6 class="card-title">${x.name}</h6>
                          <h6 class="card-text">${x.author}</h6>
                          <p class="card-text">${x.cost}</p>
                          <a class="btn btn-primary" href="" role="button">Add to cart</a>
                      </div>
                  </div>`;
      });
    } else {
      wrapper.innerHTML = 'No products available';
    }
  }

 productDisplay()


