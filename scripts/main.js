let btnActive = document.querySelectorAll('.nav-link');

btnActive.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        removeAllActive(index);
    });
});

function removeAllActive(index){
    for(let i = 1; i < btnActive.length; i++){
        i === index ? btnActive[i].classList.add('active') : btnActive[i].classList.remove('active');
    }
}