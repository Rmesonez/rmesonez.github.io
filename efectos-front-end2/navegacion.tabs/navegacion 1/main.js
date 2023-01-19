const container = document.getElementById('container');
const content__text = Array.from(document.querySelectorAll('.content__text'));

container.addEventListener('click', (e) => {
    let number = e.target.dataset.number;
    let value = e.target.classList.contains('btn');

    if (value) {
        search(number)
        return;
    }
});

const search = (value) => {
    content__text.map((index) => {
        index.classList.remove('block');
        index.dataset.section === value ? index.classList.add('block') : null;
});
};

