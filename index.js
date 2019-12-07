function addingEventListener() {
    //node that will be doing the listening saved in variable
    const input = document.getElementById('input');
    //first arg - event name, second arg -callback function
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });
}