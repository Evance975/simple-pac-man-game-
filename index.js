// Get the pacman element
var pacman = document.querySelector('.pacman');

// Set initial direction
var direction = 'right';

// Move the pacman
function movePacman() {
    // Get current position
    var currentPosition = parseInt(window.getComputedStyle(pacman).getPropertyValue('left'));

    // Move right
    if (direction === 'right') {
        pacman.style.left = currentPosition + 10 + 'px';
        pacman.style.transform = 'rotate(45deg)';
    }

    // Move left
    if (direction === 'left') {
        pacman.style.left = currentPosition - 10 + 'px';
        pacman.style.transform = 'rotate(225deg)';
    }

    // Move up
    if (direction === 'up') {
        pacman.style.top = parseInt(pacman.style.top) - 10 + 'px';
        pacman.style.transform = 'rotate(315deg)';
    }

    // Move down
    if (direction === 'down') {
        pacman.style.top = parseInt(pacman.style.top) + 10 + 'px';
        pacman.style.transform = 'rotate(135deg)';
    }
}

// Change direction based on key press
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight') {
        direction = 'right';
    } else if (event.code === 'ArrowLeft') {
        direction = 'left';
    } else if (event.code === 'ArrowUp') {
        direction = 'up';
    } else if (event.code === 'ArrowDown') {
        direction = 'down';
    }
});

// Move the pacman every 50 milliseconds
setInterval(movePacman, 50);