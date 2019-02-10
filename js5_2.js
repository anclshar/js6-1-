function buildBasket(products) {
    var $basket = document.getElementById('basket')
    if (products && products.length) {
        for (var i = 0; i < products.length; i++) {
            var $div = document.createElement('div')
            $div.classList.add('product')
            var $elements = document.createElement('ul')
            for (var prop in products[i]) {
                var $element = document.createElement('li')
                $element.textContent = prop + ': ' + products[i][prop]
                $elements.appendChild($element)
            }
            basketPrice =0
            basketCount = 0
            basketPrice = basketPrice + productsList[i].itemPrice * productsList[i].itemCount
            basketCount = basketCount + productsList[i].itemCount
            $div.appendChild($elements)
            $basket.appendChild($div)
        }
        $basket.textContent = 'В вашей корзине: ' + basketCount + ' товаров на сумму ' + basketPrice + ' рублей.'
    } else {
        $basket.innerHTML = ''
        var $div = document.createElement('div')
        $div.classList.add('empty')
        $div.textContenet = 'Ваша корзина пуста'
        $basket.appendChild($div)
    }
}
var productsList = [ 
    {
        firstName: 'Синтезатор', 
        itemPrice: 12000, 
        itemCount: 1,
    },
    {
        item: 'Педаль',
        itemPrice: 1500,
        itemCount: 1,
    },
    {
        item: 'Нотные сборники',
        itemPrice: 1500,
        itemCount: 5,
    }
]
buildBasket(productsList)