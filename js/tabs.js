document.querySelector('#a_background').addEventListener('change', function () {
    console.log('tab')
    console.log(document.querySelectorAll('.tabs__btn'))
    document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) { // выполняет функцию для каждого элемента
        console.log(tabsBtn) // одну и туже функцию мы выполняем для каждой кнопки (option) с классом tabs__btn
        // Каждый раз когда у tabsBtn происходит событие change вызывается функция у которой есть свой специальный
        // объект event
        tabsBtn.addEventListener('change', function (event) {
            const path = event.currentTarget.dataset.path
            console.log(path) // почему-то у меня ничего не выводится в консоль))
        })
    })
})