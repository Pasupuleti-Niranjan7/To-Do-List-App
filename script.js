const input = document.getElementById('input-field'); //To Acessing the input field
const listContainer = document.querySelector('.list-container'); //To Accessing the task storing container


// Function to add the task by using the input field
function addTask() {

    if(input.value === '') { //If input is empty
        alert('Please add the task');
    }
    else { //If input is not empty
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "&#10005";
        li.appendChild(span);
        input.value = '';
    }
    saveTheData();
    list();
}


// Adding the eventlistener to listcontainer to perform the event
listContainer.addEventListener('click', function(e) {

    if(e.target.tagName === 'LI') { //Action to perform if we click on the task
        e.target.classList.toggle('checked');
        saveTheData(); 
    }
    else if(e.target.tagName === 'SPAN') { //Action to perform if we click on the delete (x) symbol 
        e.target.parentElement.remove();
        saveTheData(); 
    }

}, false);



// To Enable Scroll bar for the tasks
function list() {

    if(listContainer.innerHTML !== '') {
        listContainer.classList.add('task-container');
    }
    else if(listContainer.innerHTML === '') {
        listContainer.classList.remove('task-container');
    }

}


// To save the data in the Browser using the localstorage
function saveTheData() {
    localStorage.setItem('data', listContainer.innerHTML);
}


// To getting the data that is stored in the browser by using the localstorage
function showTheData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTheData();