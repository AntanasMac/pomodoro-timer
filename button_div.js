const myButton = document.getElementById('start_button');
const myDiv = document.getElementById('placeholder');
const myDiv2 = document.getElementById('text_flash')

myButton.addEventListener('click', function() {
    myDiv.style.display = "none";
    myDiv2.style.display = "flex";

    setTimeout(function() {
        myDiv2.style.display = "none";
      }, 1000);

});