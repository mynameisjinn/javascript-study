const obj = {
    one : {
        two: {
            three: 'Bingo'
        },
    },
};

const bingo = obj.one.two.three;
console.log(bingo);

const arr = [1,2,3,4,5];

const [one, two, three] = arr;
console.log(one,two,three);

const obj2 = {
    x: 10,
    y: 20,
};

const {x,y} = obj2;
console.log(x,y);


const title = document.getElementById('title');
console.log(title);

const className = document.getElementsByClassName('title_class');
console.log(className);

const hello = document.querySelector('h2');

hello.innerText = '안녕하세요!';
hello.style.color = 'red';

const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerText = '새로운 친구'
h1.style.color ='blue';

body.appendChild(h1);
