// const goods = {
//     price: 100,
//     name: 'T-short',
//     size: 'L',
//     color: 'red'
// };

class Goods {
    constructor(price, name) {
        this.price = price;
        this.name = name;
        // this.color = color;
        // this.size = size;

        this.store = 10;
        this.element = undefined;
    }

    buy(count = 1) {
        this.store -= count;
    }

    getHtml() {
        return `
       <div class="parent-product">
            <a class="product" href="shopping-cart.html">
                <img src="img/product-1.jpg" alt="product-1">
                <p class="description-product">${this.name}</p>
                <p class="price">$${this.price}</p>
            </a>
            <div class="product-link-flex">
                <a class="add-to-cart buyBtn" href="#">
                    <img src="img/cart-white.svg" alt="cart-white">
                    Add to Cart
                </a>
            </div>
        </div>
       `;
    }

    render() {
        const item = document.createElement('div');
        item.classList.add('parent-product');

        const a_prod = document.createElement('a');
        a_prod.classList.add('product');
        a_prod.href = 'shopping-cart.html';
        item.appendChild(a_prod);

        const img = document.createElement('img');
        img.src = 'img/product-1.jpg';
        img.alt = 'product-1';
        a_prod.appendChild(img);

        const p_description = document.createElement('p');
        p_description.classList.add('description-product');
        p_description.innerText = `${this.name}`;
        a_prod.appendChild(p_description);

        const p_price = document.createElement('p');
        p_price.classList.add('price');
        p_price.innerText = `$${this.price}`;
        a_prod.appendChild(p_price);


        const div_prod_link = document.createElement('div');
        div_prod_link.classList.add('product-link-flex');
        item.appendChild(div_prod_link)

        const a_add = document.createElement('a');
        a_add.classList.add('add-to-cart', 'buyBtn');
        a_add.href = '#';
        div_prod_link.appendChild(a_add);

        const img_add = document.createElement('img');
        img_add.src = 'img/cart-white.svg';
        img_add.alt = 'cart-white';
        a_add.appendChild(img_add);

        a_add.insertAdjacentText('beforeend','Add to Cart');

        this.element = item;

        return this.element;
    }
}

const product_box = document.getElementById('product-box');

const func = () => {
    fetch(
        'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        {
            method: 'GET',
            headers: {},
            // body: ''
        }
    ).then(res => {
        console.log('fetch', res);
        // throw new Error('For test');
        return res.json();
    }).then(res => {
        console.log('json res', res);
        let arr = [];
        for (let i of res) {
            const item = new Goods(i.price, i.product_name);
            product_box.appendChild(item.render());
            arr.push(item);
        }


    }).catch(error => {
        setTimeout(
            () => {
                console.log('catch error!', error);
                func();
            },
            5000
        );
    });
};

 func();


class Cart {
    constructor() {
    }

    addItem() {
        /*
         Этот метод добавляет переданный товар в корзину
        */
    }

    /**
     * Удалят товар из корзины
     * @param id int - идентификатор товара
     * @return bool - успешность удаления
     */
    removeItem(id) {
        // TODO
        throw new Error('Need remove code');
    }
}

/**
 * Функция подсчета суммы товаров
 * @param goods Goods[] - массив товаров
 * @return float - сумма всех переданных товаров
 */
function goodsSum(goods) {
    // Считаем сумму товаров
    // И возвращаем
}

// [...document.getElementsByClassName('class-name')].forEach();
// (new Array(...document.getElementsByClassName('class-name'))).forEach();
