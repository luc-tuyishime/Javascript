const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
        console.log('YOU CLICKED HERE');
        e.preventDefault();
        const shouldChangePage = confirm('Do you really wanna change');
        if (shouldChangePage) {
                window.location = e.currentTarget.href;
        }
});

const signup = document.querySelector('[name="signup"]');

signup.addEventListener('submit', function(event) {
        const name = event.currentTarget.name.value;
        if (name.includes('luc')) {
                alert('sorry bro');
                event.preventDefault();
        }
});
