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
    


