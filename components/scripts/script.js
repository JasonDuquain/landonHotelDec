/***FULLHEIGHT******/
let arrHeights = [document.documentElement.clientHeight, window.innerHeight];
let wheight = Math.max(...arrHeights);
let fullheight = document.querySelectorAll('.fullheight');

fullheight.forEach((el) => {
    el.style.height = `${wheight}px`;
});

window.addEventListener('resize', () => {
    arrHeights = [document.documentElement.clientHeight, window.innerHeight];
    wheight = Math.max(...arrHeights);
    
    fullheight.forEach((el) => {
        el.style.height = `${wheight}px`;
    });
    
});

/*******EQUAL HEIGHT CONTENT IN 2 IMAGES*******/
let content = document.querySelectorAll('#events .content');
let highest = 0;

if (window.innerWidth > 650) {
    
    content.forEach((el) => {
        let contentHeight = el.getBoundingClientRect().height;
        if (contentHeight > highest) {
            highest = contentHeight;
        }
    });

    content.forEach((el) => {
        el.style.height = `${highest}px`;   
    }); 
    
}
  
window.addEventListener('resize', () => {

    if (window.innerWidth > 650) {
    
        content.forEach((el) => {
            let contentHeight = el.getBoundingClientRect().height;
            if (contentHeight > highest) {
                highest = contentHeight;
            }
        });

        content.forEach((el) => {
            el.style.height = `${highest}px`;   
        }); 
    
    } else {
         content.forEach((el) => {
            el.style.height = '';   
         });
    }
    
});    
    
/*****BACK TO TOP BUTTON*****/
let docBody = document.body;
let docElem = document.documentElement;
let bttBtn = document.querySelector('#back-to-top');
let heights = [docBody.scrollHeight, docBody.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight];
let highestHeight = Math.max(...heights);


window.addEventListener('scroll', () => {
    let scrolltop = Math.max(docBody.scrollTop, docElem.scrollTop);
    if (scrolltop >= (highestHeight / 3)) {
        bttBtn.classList.add('visible');
    } else {
        bttBtn.classList.remove('visible');
    }
    
});

bttBtn.addEventListener('click', function(e) {
    e.preventDefault();
    docElem.scrollTop = 0;
});

/******STICKY HEADER*******/
let nav = document.querySelector('#nav');
let header = document.querySelector('#intro');

function stick() {

    if (header.getBoundingClientRect().bottom <= 0) {
        nav.classList.add('fixed');
        docBody.style.paddingTop = nav.getBoundingClientRect().height + 'px';
    } else {
        nav.classList.remove('fixed');
        docBody.style.paddingTop = 0;
    }
    
}

window.addEventListener('scroll', stick);


/******HIGHTLIGHT ON SCROLL******/
/**The navs and sects do not equal each other as there is an initial 'welome sect so adjust the comparison accordingly ALSO LOOP THRU THE NAVS INSTEAD OF THE SECTS TO KEEP FROM GETTING THE 'type errs: cannot read propery getAttribute of undefined' in the console..still not sure why that fixes it? but it does ALSO IT LOOKS LIKE THIS WAS NVR NEEDED?:

if ((sects[i+1]).getAttribute('id') === navs[i].getAttribute('href').slice(1)) ...
	
**/
let sects = document.querySelectorAll('.scene:not(:only-of-type)'); //dont include footer
let navs = document.querySelectorAll('a.icon')

function highlight() {
    navs.forEach((el, i) => {
        
            if (sects[i+1].getBoundingClientRect().top <=0 && sects[i+1].getBoundingClientRect().bottom >= 0) {
                navs[i].classList.add('active');
            } else {
                navs[i].classList.remove('active');
            }
        
    });
}


window.addEventListener('scroll', highlight);

