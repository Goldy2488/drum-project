let arrDrum= document.getElementById("container");
// console.log(arrDrum)

arrDrum.addEventListener("click",(e)=>{
    let target=e.target.innerHTML;
    // console.log(target)
    createSound(target);
    createAnimation(target);
})


arrDrum.addEventListener("keydown",(e)=>{
    let target=e.key;
    
    let arrkey=["a","s","d","f","j","k","l"];
    if (!arrkey.includes(target)) {
        alert("Wrong Key Press");
        return;}
    // console.log(target)
    createSound(target);
    createAnimation(target);
});

const createSound=(key)=>{
    let sound=new Audio(`sounds/${key}.mp3`);
    sound.play()
}


const createAnimation = (key) => {
    let active = document.querySelector(`.${key}`);
    active.classList.add("press");
    
    setTimeout(() => {
        active.classList.remove("press");
    }, 1000);
}
