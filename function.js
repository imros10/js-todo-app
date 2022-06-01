// get input value 
const inputValue = document.getElementById('input-value');
// get main section 
const mainArea =  document.getElementById('list-areas');
// first get add clcik function 
document.getElementById('add-items').addEventListener('click',function(){
// crate html elements 
const outputContainer = document.createElement('div');
outputContainer.setAttribute('class', 'lists');
// .create p and button 
const createP = document.createElement('p');
createP.setAttribute('class', 'text');
if(inputValue.value.length < 1){
alert('Please Write somthing')
}else{
    createP.innerText=inputValue.value;
const createButton = document.createElement('button');
createButton.setAttribute('id', 'delete-button');
createButton.innerText='Delete'
// append childs 
outputContainer.appendChild(createP);
outputContainer.appendChild(createButton);
mainArea.appendChild(outputContainer)
createButton.addEventListener('click',function(event){
    outputContainer.remove()
})
}
inputValue.value='';


})