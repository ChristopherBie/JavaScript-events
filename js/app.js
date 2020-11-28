document.getElementById('hover').addEventListener('mouseover', function() {
    document.getElementById('hover').style.backgroundColor = 'skyblue';
});

document.getElementById('hover').addEventListener('mouseout', function() {
    document.getElementById('hover').style.backgroundColor = null;
});


document.getElementById('click').addEventListener('click', function() {
    document.querySelector('.message').innerText = 'Nothing happens!';
});


document.addEventListener('keypress', function(key) {
    if(key.keyCode == 32) {
        document.querySelector('body').style.backgroundColor = 'lightgreen';
    }
});