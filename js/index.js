// Your code goes here



let logo = document.querySelector('.logo-heading');

window.addEventListener('scroll', function(e) {
    nav.style.backgroundColor = '#2F4F4F';

    setTimeout(function(e) {
        nav.style.backgroundColor = '';
    }, 1000);
});

// NAV 

let nav = document.querySelector('.main-navigation');
let navAnchor = document.querySelectorAll('.nav-link');

nav.addEventListener('mousedown', function(e){
    nav.style.backgroundColor = '#2F4F4F';
    logo.style.fontSize = '4em';
    navAnchor.forEach(navAnchor => navAnchor.style.fontSize = '2em');
});

nav.addEventListener('mousedown', function(e){
    nav.style.backgroundColor = '#2F4F4F';
    logo.style.fontSize = '5em';
    navAnchor.forEach(navAnchor => navAnchor.style.fontSize = '2em');
});


// LOGO 

logo.addEventListener('mousedown', function(e){
    e.stopPropagation();
    e.target.style.border = '1px solid #2F4F4F';
    e.target.style.borderRadius = '50%';
    e.target.style.backgroundColor = '#2F4F4F';
    TweenMax.to(logo, 2, {opacity:0});
    TweenMax.to(logo, 2, {x:300});
});

nav.addEventListener('mouseup', function(e){
    e.target.style.border = '';
    e.target.style.backgroundColor = '';
    TweenMax.to(logo, 1, {opacity:1});
    TweenMax.to(logo, 1, {x:0});
});

 navAnchor.forEach(function(index, i){
    navAnchor[i].addEventListener('mouseover', function(e) {
        e.target.style.color = '#2F4F4F';
        e.target.style.textShadow = '1px 1px 1px black';
        e.target.style.textDecoration = 'underline';
    });
});

navAnchor.forEach(function(index, i) {
    navAnchor[i].addEventListener('mouseout', function(e) {
        e.target.style.color = '';
        e.target.textShadow = '';
        e.target.style.textDecoration = 'none';
    });

    navAnchor[i].addEventListener("click", function(e){
        e.preventDefault();
    });
});

window.addEventListener('scroll', function(e) {
    nav.style.backgroundColor = '#2F4F4F';

    setTimeout(function(e) {
        nav.style.backgroundColor = '';
    }, 1000);
});


// MAIN CONTENT 

let intro = document.querySelector('.intro');

intro.addEventListener('mouseover', function(e){
    e.target.style.fontWeight = '900';
})

intro.addEventListener('mouseout', function(e){
    e.target.style.fontWeight = '';
})


var elem = document.querySelectorAll('h2');

elem.forEach(function(index, i) {
    elem[i].addEventListener('select', function(){
        alert('Selection changed!');
    });
});

let button = document.querySelectorAll('.btn');

button.forEach(function(index, i){
    button[i].addEventListener('click', function(e) {
            e.target.textContent = 'You\'re all Signed up!' 
        });
    });
    
    
button.forEach(function(index, i){
    button[i].addEventListener('dblclick', function(e){
        e.target.textContent = 'Youre NOT signed up!'
    });
});
