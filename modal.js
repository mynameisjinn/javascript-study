const openButton = document.querySelector('.open');
const container = document.querySelector('.container');

openButton.addEventListener('click', () => {
    container.style.display = 'flex'
    openButton.style.display ='none';
});


const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    container.style.display = 'none'
    openButton.style.display ='block';
})

