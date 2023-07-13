const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
    1. 삭제 버튼 추가
    2. 저장
    3. 삭제 버튼 -> 저장된 데이터 업데이트
*/


let todos =[];

const save = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
};


const delItem = (e) => {
    const target = e.target.parentElement;
    todos = todos.filter((todo)=> todo.id != target.id); 
                                 // !== : type값 까지 비교 != : 내용물만 비교
    save();
    target.remove();
};

const addItem = (todo) => {
    if(todo.text !== ''){
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');
        const p = document.createElement('p');

        p.innerText = '✅';
        li.appendChild(p);
        p.addEventListener('click', () => {
            const cancleLine = span.style.textDecoration;
            if ( cancleLine === "line-through") {
                span.style.textDecoration = "none";
            } else {
                span.style.textDecoration = "line-through";
            }
        })


        button.innerText = '삭제';
        button.addEventListener('click',delItem);
        span.innerText = todo.text;

        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
        li.id = todo.id; // 리스트에 값을 저장시키기위해 id값 주기 
    } 
};

const handler = (e) => {
    e.preventDefault();

    const todo = {
        id: Date.now(),
        text: input.value,
    };

    todos.push(todo);
    addItem(todo);
    save();

    input.value='';
};

const init = () => {
    const userTodos = JSON.parse(localStorage.getItem('todos'));
    // console.log(userTodos);
    if(userTodos){
        userTodos.forEach((todo) => {
            addItem(todo);
        });
        todos = userTodos;
    }
};

init();
form.addEventListener('submit',handler);



// localStorage 에 값 저장하고 빼내기
// localStorage.setItem('hello', 'world');
// const myData = localStorage.getItem('hello');
// console.log(myData);