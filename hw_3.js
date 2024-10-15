
const logo = DocumentFragment.querySelector("#logo");

logo.addEventListener( 'click', function(){
    console.log("KH");
} );

function f01(){
    location.href='https://kh-academy.co.kr/main/main.kh';
};

const engineer = DocumentFragment.querySelector("#engineer");

engineer.addEventListener( 'mouseover' , function(){
    window.open('www.naver.com','팝업','width=500,height=500');
} ) ; 


function f02(){
    location.href='/resources/img/kh-logo.png';
}

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.close_btn');

modalOpen.addEventListener('click',function(){
    modal.style.display = 'block';
});


function fgit(){
    return confirm ("깃으로 이동?");
}

function copy(){
    onclick="copyToClipboard('yj9826@gmail.com');"
    id="email_btn"

    alert("메일 복사 완료");
}

