
function makeYellow(){
    document.body.style.backgroundColor = "yellow"
}


const greenBtn = document.getElementById('green-btn');
greenBtn.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green'
}


function makePurple(){
   document.body.style.backgroundColor = 'purple'
}
const purpleBtn = document.getElementById('purple-btn');
purpleBtn.onclick = makePurple;



document.querySelector('input').addEventListener('keypress', function(e){
    console.log(e.key)
})

// chage the title

document.getElementById('title-btn')
.addEventListener('click', function(){
    const title = document.getElementById('title');
    title.innerText = "Page Title Changed"     
})


 document.getElementById('update-btn').addEventListener('click', function(){
            let input = document.getElementById('input-field').value;
            document.getElementById('text-update').innerText = input;
             
})












//  window events:
window.addEventListener('load', function(){
    // alert('window loading.......')
})

// window.addEventListener('resize', function(){console.log('window resizing')})
// window.addEventListener('scroll', function(){console.log('scrolling........')})