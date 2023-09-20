 let products = []; // list product

    //desply product
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (data.products) {
          products = data.products;
          displayProducts();
        }
      })
      .catch(error => console.log('Error :', error));

    function displayProducts() {
      const productsContainer = document.getElementById('products-container');
      productsContainer.innerHTML = '';
      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const name = document.createElement('div');
        name.classList.add('product-name');
        name.textContent = product.name;

        const brand = document.createElement('div');
        brand.classList.add('product-info');
        brand.textContent = ` Mark Prudoct : ${product.brand}`;

        const category = document.createElement('div');
        category.classList.add('product-info');
        category.textContent = `category : ${product.category}`;

        const description = document.createElement('div');
        description.classList.add('product-description');
        description.textContent = `Description : ${product.description}`;

        const price = document.createElement('div');
        price.classList.add('product-info');
        price.textContent = `price: ${product.price} $`;

        const image = document.createElement('img');
        image.classList.add('product-image');
        image.src = product.image;
        image.alt = product.name;

        card.appendChild(name);
        card.appendChild(brand);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(image);
        productsContainer.appendChild(card);
      });
    }

    function showNewProductForm() {
      const addProductButton = document.querySelector('.add-product-button');
      const newProductForm = document.getElementById('new-product-form');

      addProductButton.style.display = 'none';
      newProductForm.style.display = 'block';
    }

    function cancelAddProduct() {
      const addProductButton = document.querySelector('.add-product-button');
      const newProductForm = document.getElementById('new-product-form');

      addProductButton.style.display = 'block';
      newProductForm.style.display = 'none';
    }

    function addProduct() {
      const nameInput = document.getElementById('name');
      const brandInput = document.getElementById('brand');
      const categoryInput = document.getElementById('category');
      const descriptionInput = document.getElementById('description');
      const priceInput = document.getElementById('price');
      const imageInput = document.getElementById('image');

      const newProduct = {
        name: nameInput.value,
        brand: brandInput.value,
        category: categoryInput.value,
        description: descriptionInput.value,
        price: priceInput.value,
        image: imageInput.value,
      };

      products.push(newProduct); 
      displayProducts();

      // 
      nameInput.value = '';
      brandInput.value = '';
      categoryInput.value = '';
      descriptionInput.value = '';
      priceInput.value = '';
      imageInput.value = '';

      cancelAddProduct();
    }
 