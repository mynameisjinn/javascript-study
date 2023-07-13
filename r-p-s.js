const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

// result 에 값 넣어서 인덱스 값으로 접근 (0,1,2)
const result = ['가위', '바위', '보'];

const show = (user, computer, who) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = who;
}

const game = (user, computer) => {
    let message;
    if ( user === computer ) {
        message = '무승부'
        // alert('무승부');
    } else {
        switch (user + computer) {
            // 사용자가 이긴 경우 
            case '가위보':
            case '바위가위' :
            case '보바위' :
                message = '사용자 승리'
                // alert("사용자 승리");
                break;
            case '보가위':
            case '가위바위' :
            case '바위보' :
                message = '컴퓨터 승리'
                // alert("컴퓨터 승리");
                break;
        }
    }

    show(user,computer,message);
}


const play = (e) => {
    // 사용자 선택값 지정 
    const user = e.target.innerText;
    /* 컴퓨터 선택값 지정 
        -> Math.random() * 3 : 0, 1, 2 만 꺼내서 
        floor로 정수값만 가져오기 */
    const randomIndex = Math.floor(Math.random() * 3); 
    const computer = result[randomIndex];
    game(user,computer);

};

buttons.forEach((button) => {
    button.addEventListener('click', play);
});








































































