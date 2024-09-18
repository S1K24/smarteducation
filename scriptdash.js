let body=document.body;

let sideBar=document.querySelector('.side-bar'); 
document.querySelector('#menu-btn').onclick = () =>{

    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}


document.querySelector('#close-side-bar-cl').onclick = () =>{

    sideBar.classList.remove('active');
    body.classList.remove('active');
}


window.onscroll = () =>{
    profile.classList.remove('active');
}
