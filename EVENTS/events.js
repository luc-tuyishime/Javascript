const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool-btn');

const handleClick = () => {
        console.log('it got clicked....');
};

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

const btnAll = document.querySelectorAll('.btn-buy');

const handlebtnAll = () => {
        console.log('You are buying it!');
};

btnAll.forEach(btn => btn.addEventListener('click', handlebtnAll));

const image = document.querySelector('.limage');
image.addEventListener('mouseover', function(e) {
        console.log(e.currentTarget);
});
