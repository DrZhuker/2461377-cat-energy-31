var e=document.querySelector(".main-nav"),s=document.querySelector(".main-header__button"),i=document.querySelector(".main-header"),n=document.querySelector(".main-header__open"),a=document.querySelector(".main-header__close");i.classList.remove("main-header--nojs");s.addEventListener("click",()=>{e.classList.contains("main-nav--show")?(e.classList.remove("main-nav--show"),a.classList.add("main-header__invisible"),n.classList.remove("main-header__invisible")):(e.classList.add("main-nav--show"),a.classList.remove("main-header__invisible"),n.classList.add("main-header__invisible"))});
