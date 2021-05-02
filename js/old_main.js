function old_main_js() {
    $(document).ready(() => {

        //Покупка товаров перетаскиванием
        dragAndDrop();

        //Корзина, shopping-cart, модули jQuery UI: автозаполнение в search, перетаскивание Drag and Drop
        let cart = new Cart('responses/getCart.json');

        //Добавление товара
        $('.buyBtn').click(e => {
            cart.addProduct(e.currentTarget);
        });

        //Модуль отзывов
        let reviews = new Reviews('responses/feedback.json');

        //Автозавершение слов (для поиска)
        autocomplete();

    });
}

// Код ниже проверен, работает, но нашёл более подходящий метод
// // Выбираем целевой элемент
// var target = document.getElementById('observer');
//
// // Конфигурация observer (за какими изменениями наблюдать)
// const config = {
//     attributes: true,
//     childList: true,
//     subtree: true
// };
//
// // Колбэк-функция при срабатывании мутации
// const callback = function(mutationsList, observer) {
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//             old_main_js();
//             observer.disconnect();
//             break
//         } else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         } else if (mutation.type === 'subtree') {
//             console.log('The ' + mutation.attributeName + ' childe was modified.');
//         }
//     }
// };
//
// // Создаём экземпляр наблюдателя с указанной функцией колбэка
// const observer = new MutationObserver(callback);
//
// // Начинаем наблюдение за настроенными изменениями целевого элемента
// observer.observe(target, config);
//
// // // Позже можно остановить наблюдение
// // observer.disconnect();
