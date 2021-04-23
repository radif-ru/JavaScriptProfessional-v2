class Basket {
    constructor(goods_sum=0, goods=[]) {
        this.goods_sum = goods_sum;
        this.goods = goods;
    }
    goodSum() {
        for (let good in this.goods) {
            this.goods_sum += +good;
        }

    }
}

class ElementBasket extends Basket {

}