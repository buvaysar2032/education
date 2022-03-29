const fetchForm = document.querySelector('.form')


fetchForm.addEventListener('submit', () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET'
    })

    .then(resp => {
        if (resp.ok) {
            return resp.json()
        }   throw new Error('Что-то не так')
    })

    .then(data => {
        console.log(data)
    })

    .catch(err => {
        console.log(err)
    })
})