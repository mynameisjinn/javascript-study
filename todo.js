const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit',(event) => {
    event.preventDefault(); // submit 시 새로고침 막기
    // console.log(input.value);

    // input 창이 공백이 아닐 경우    
    if(input.value !== ''){
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
    
        input.value = ''; // 입력 후, 입력창 비우기
    } else {
        alert("할일을 입력해주세요")
    }
});