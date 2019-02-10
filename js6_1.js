function buildBasket(products) {
    var $basket = document.getElementById('basket')
    if (products && products.length) {
        for (var i = 0; i < products.length; i++) {
            var $div = document.createElement('div')
            $div.classList.add('product')
            var $elements = document.createElement('ul')
            $elements.classList.add('ul')
            for (var prop in products[i]) {
                var $element = document.createElement('li')
                $element.textContent = prop + ': ' + products[i][prop]
                $elements.appendChild($element)
            }
            var $button = document.createElement('button')
            $button.classList.add('button')
            $button.textContent = 'Добавить в корзину'
            $elements.appendChild($button)
            $div.appendChild($elements)
            $basket.appendChild($div)
            
        }
        var $cart = document.createElement('div')
        $cart.classList.add('cart')
            function handleButtonClick(event) {
                for (var prop in products[i]) {
                    $element = document.createElement('li')
                    $element.textContent = prop + ': ' + products[i][prop]
                    $elements.appendChild($element)
                }
            }
            $button.addEventListener('click', handleButtonClick)
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
        Товар: 'Синтезатор', 
        Цена: 12000, 
        Количество: 1,
    },
    {
        Товар: 'Педаль',
        Цена: 1500,
        Количество: 1,
    },
    {
        Товар: 'Нотные сборники',
        Цена: 1500,
        Количество: 5,
    }
]
buildBasket(productsList)