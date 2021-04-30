const app = new Vue({
    el: '#root',
    data: {
        products_href: 'https://raw.githubusercontent.com/radif-ru/JavaScriptProfessional-v2/master/responses/catalogData.json',
        goods: [],
        filter_goods: []
    },
    computed: {},
    methods: {
        getData(products_href) {
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
                // this.filter_goods = res;
            });
        },
        filterGoods(value) {
            const regexp = new RegExp(value, 'gmi');
            this.filter_goods = this.goods.filter(product => regexp.test(product.name));
            console.log(`filter_goods ${this.filter_goods}`);
            console.log(`goods ${this.goods}`);
        }
    },
    mounted() {
        this.getData(this.products_href);
        this.filterGoods('MANGO');
    }
});

console.log(app);