const add = document.getElementById('add-btn')



add.addEventListener('click', ()=>{
  let input = document.querySelector('#text').value;
  if(input === '' || undefined){
  alert('please insert some text')
  }else{
    //container class list-container
    let container = document.querySelector('#list-container')
    //elements to append
    let subContainer = document.createElement('div')
    let textP = document.createElement('p');
    let trash = document.createElement('button');
    let check = document.createElement('button');
    //add the text
    textP.innerText = document.querySelector('#text').value;
    //add class list
    subContainer.classList.add('sub-container')
    textP.classList.add('list-p');
    trash.classList.add('far','fa-trash-alt');
    check.classList.add('fas','fa-check');
    //append child to sub contianer
    subContainer.appendChild(textP);
    subContainer.appendChild(trash);
    subContainer.appendChild(check);
    container.appendChild(subContainer);
    //add event listener to trash
    trash.addEventListener('click', ()=>{
      trash.parentElement.classList.remove('sub-container')
      trash.parentElement.classList.add('trash-container')
    })
    //check 
    check.addEventListener('click', ()=>{
      check.parentElement.classList.add('line')
    })
    //empty input value
    document.querySelector('#text').value = '';
  }
})


document.querySelector('#text').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add-btn").click();
  }
});