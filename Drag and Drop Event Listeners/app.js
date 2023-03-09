const king = document.querySelector('.chess-piece');
const squares = document.querySelectorAll('.square');
const infoDisplay = document.querySelector('#info')

king.addEventListener('dragstart', dragStart);
king.addEventListener('drag', dragging);

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
    
});

let beingDragged;

function dragStart(e){
    beingDragged = e.target
}

function dragging(){
    infoDisplay.textContent = `Moving a ${beingDragged.id}`
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.target.classList.add('highlight')
}

function dragLeave(e){
    e.target.classList.remove('highlight')
}

function dragDrop(e){
    e.target.append(beingDragged)
    e.target.classList.add('target')
    setTimeout(()=>{
        e.target.classList.remove('target')
        e.target.classList.remove('highlight')
    },100)
}

function dragEnd(){
    infoDisplay.textContent = "Move Again?";
}