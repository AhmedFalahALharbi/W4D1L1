let box = document.getElementById('box')
let reset = document.getElementById(`reset`)
let btn = document.getElementById('btn')

btn.addEventListener('click' , () => {
    let widthBox = document.getElementById('width').value
    let heightHeight = document.getElementById('height').value
    let BG = document.getElementById('BG').value

    box.style.backgroundColor = BG;
    box.style.width = widthBox +`vw`;
    box.style.height = heightHeight +`vh`;
})
reset.addEventListener(`click`, ()=>{
    box.style.backgroundColor = `skyblue`;
    box.style.width = `30%`;
    box.style.height =  `40%`;
})


