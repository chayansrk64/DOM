

document.getElementById('post-btn').addEventListener('click', function(){
    let textArea = document.getElementById('textarea');
    let newComment = textArea.value;
    let container = document.getElementById('container')
    let p = document.createElement('p');
    p.classList.add('text')
    p.innerText = newComment;
    container.appendChild(p);
    textArea.value = "";
})