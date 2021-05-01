Vue.component('goods-list', {
    template: `<div class="parent-product" v-for="(product, id) in goods"
                     :key="\`product_\${id}\`
                     :goods="goods">
                    <a class="product" href="shopping-cart.html">
                        <img :src="product.img_src" :alt="product.img_alt">
                        <p class="description-product">
                            {{ product.product_name }}</p>
                        <p class="price">\${{ product.price }}.00</p>
                    </a>
                    <div class="product-link-flex">
                        <a class="add-to-cart buyBtn" href="#">
                            <img src="img/cart-white.svg" alt="cart-white">
                            Add to Cart
                        </a>
                    </div>
                </div>`,
    props: ['goods']
    // data () {
    //     return {
    //         goods: "goods"
    //     }
    // }
    // props: {
    //     goods: {
    //         type: Array,
    //         required: false,
    //         default: () => [] // () => ({})
    //     }
    // }
});

const vm = new Vue({
    el: '#root',
    data: {
        products_href: 'https://raw.githubusercontent.com/radif-ru/JavaScriptProfessional-v2/master/responses/catalogData.json',
        goods: [],
        filtered_goods: []
    },
    computed: {},
    methods: {
        getData(products_href, err_counter = 5) {
            fetch(
                products_href,
                {
                    method: 'GET',
                    headers: {},
                    // body: ''
                }
            ).then(res => res.json()
            ).then(res => {
                this.goods = res;
                this.filtered_goods = res;
            }).catch(error => {
                if (err_counter > 1) {
                    setTimeout(
                        () => {
                            console.log('catch error!', error);
                            this.getData(products_href, err_counter -= 1);
                        },
                        3000
                    );
                }
            });
            return this.goods
        },
        filteredGoods(value) {
            const regexp = new RegExp(value, 'gmi');
            this.filtered_goods = this.getData(this.products_href, 5).filter(product => regexp.test(product.name));
            console.log(`filtered_goods ${this.filtered_goods}`);
            console.log(`goods ${this.goods}`);
        }
    },
    mounted() {
        this.getData(this.products_href, 5);
        this.filteredGoods('MANGO');
    }
});

console.log(vm);
