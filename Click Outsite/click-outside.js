const cardButton = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

const handleButtonClick = event => {
        const button = event.currentTarget;
        const card = button.closest('.card');
        // POPULATE THE MODAL WITH THE NEW INFO
        const imgSrc = card.querySelector('img').src;
        const desc = card.dataset.description;
        const name = document.querySelector('h2').textContent;
        // POPULATE THE MODAL WITH THE NEW INFO
        modalInner.innerHTML = `
         <img src="${imgSrc.replace('200', '600')}" alt="${name}" />
         <p>${desc}</p>
       `;
        // SHOW THE MODAL
        modalOuter.classList.add('open');
};

const closeModal = () => {
        modalOuter.classList.remove('open');
};

cardButton.forEach(button => {
        button.addEventListener('click', handleButtonClick);
});

modalOuter.addEventListener('click', function(e) {
        const isOutside = !e.target.closest('.modal-inner');
        return isOutside ? closeModal() : '';
});

const EscapeCloseModal = event => {
        if (event.key === 'Escape') {
                closeModal();
        }
};

window.addEventListener('keydown', EscapeCloseModal);
