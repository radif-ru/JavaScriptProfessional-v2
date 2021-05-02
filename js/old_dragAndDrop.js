//jQuery UI
function dragAndDrop() {
    $('.parent-product, .buyBtn').draggable({
        revert: true
    });

    // $('.header-flex').droppable({
    $('.fixed-top').droppable({
        drop: (event, ui) => {
            if (ui.draggable.find('.buyBtn').length === 0) {
                this.addProduct(ui.draggable)
            } else {
                this.addProduct(ui.draggable.find('.buyBtn'))
            }
        }
    })
}