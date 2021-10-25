const secupdate=document.getElementById('sec');
const minupdate=document.getElementById('min');
const hourupdate=document.getElementById('hour');

setInterval(updateclock,1000);

function updateclock(){
    let date=new Date();
    let sec =date.getSeconds()/60;
    let min =(date.getMinutes()+sec)/60;
    let hour=(date.getHours()+min)/12;
    secupdate.style.transform="rotate(" + ( sec * 360 ) + "deg)";
    minupdate.style.transform="rotate(" + ( min * 360 ) + "deg)";
    hourupdate.style.transform="rotate("+(hour*360) + "deg)";
    
}
/*------------login js */
document.querySelector('.show-login').addEventListener('click',function()
{
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".center").classList.add("actives");
    
    
});

document.querySelector(".popup .close-btn").addEventListener('click',
function()
{
    document.querySelector(".center").classList.remove("actives");
    document.querySelector(".popup").classList.remove("active");
});
