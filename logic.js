var banner = document.getElementById('banner');
var text = document.getElementById('hex');
var button = document.getElementById('changer');


function change(){
    let color = Math.floor(Math.random()*167772).toString(16);
    text.innerText = '#' + '0'.repeat(6 - color.length) + color;
    document.body.style.backgroundColor = '#' + '0'.repeat(6 - color.length) + color;
    button.style.color = '#' + '0'.repeat(6 - color.length) + color;
    banner.style.backgroundColor = 'white';
}