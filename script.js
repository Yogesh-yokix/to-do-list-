let add = document.getElementById('add');
let output = document.getElementById('output');
let inputfield = document.getElementById('inputfield');



const yogesh = () => {
    
    inputfield.placeholder = "Enter a task...";

    if (inputfield.value !== "") {        
        const taskRow = document.createElement('button');
        taskRow.className = "listButton";
        
        taskRow.onclick = function() {
            this.remove();
        }
        
        taskRow.textContent = inputfield.value;

        output.appendChild(taskRow);

        console.log(taskRow.innerHTML)
                  
        inputfield.value = '';
    } else {
        
        inputfield.placeholder = "Please enter a task!";
        
    }
}

add.addEventListener('click', yogesh);

inputfield.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        yogesh();
    }
});