const select = document.querySelector('select');

    select.onchange = () => {
      tabs.querySelector('.active').classList.remove('active');
      tabs.querySelectorAll('.tab')[select.options.selectedIndex].classList.add('active');
    }