let num = Math.floor(Math.random() * 50) + 1;

function guess() {
    let check = document.querySelector('#number').value;
    if (check == num) {
        alert('Congratulations! You guessed the number');
    } else if (check > num) {
        alert('Try a smaller number');
    } else {
        alert('Try a bigger number');
    }
}