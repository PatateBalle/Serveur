
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
document.body.style.background = " url('au.png')  ";
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        document.body.style.background = " url('au.png')  ";
        body.style.color = 'black';
        body.style.transition = '0.5s';
    }else{
        document.body.style.background = " url('bu.png')  ";
        body.style.transition = '0.5s';
    }
});