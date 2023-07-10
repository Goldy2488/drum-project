let drum= document.getElementById("container")
drum.addEventListener("Click",(e)=>{
    let target=e.target.innerHTML;
    creatSound(target);//for sound
})


function createSound(a){
    document.getElementsByClassName(a);
}