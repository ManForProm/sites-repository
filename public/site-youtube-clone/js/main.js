

document.querySelector('.header__input').addEventListener('click', function() {
    // const headerSearch = document.querySelector('.header__search')
    this.classList.add('active');
});

document.querySelector('.search__textfield-input').addEventListener('blur', function() {
    document.querySelector('.header__input').classList.remove('active');
});