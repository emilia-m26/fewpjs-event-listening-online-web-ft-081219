function addingEventListener() {
    //node that will be doing the listening
    const input = document.getElementById('input');
    //will be doing the listening
    //first arg - event name, second arg -callback function
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });
}