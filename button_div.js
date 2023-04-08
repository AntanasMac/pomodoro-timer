var myButton = document.getElementById('start_button');
var myDiv = document.getElementById('placeholder');

    myButton.addEventListener('click', {
        function : disappearFunction()
    } );

function disappearFunction () {
    myDiv.style.display = 'none';
    console.log('click recorded');
}