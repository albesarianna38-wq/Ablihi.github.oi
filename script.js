const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainGif = document.getElementById('main-gif');
const question = document.getElementById('question');

// 1. No Button "Runaway" Logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. The "Yes" Click Celebration
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th! Lab U ehe ❤️";
    
    // Switch the main image to your contractor picture
    mainGif.src = "https://i.pinimg.com/736x/59/ba/2c/59ba2c595b0bf1622f8d87836c512b53.jpg"; 
    
    // Hide buttons
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    // Trigger the raining effect
    startRaining();
});

// 3. The Raining Eminem Function
function startRaining() {
    const totalPics = 40; // Number of images falling
    for (let i = 0; i < totalPics; i++) {
        setTimeout(() => {
            createEminemDrop();
        }, i * 150); // Staggers the start of each image
    }
}

function createEminemDrop() {
    const drop = document.createElement('img');
    drop.src = "https://i.pinimg.com/736x/20/2d/2a/202d2a49d6cbfe51397623fcd1a21781.jpg";
    drop.classList.add('rain-drop');
    
    // Randomize position across the width of the screen
    drop.style.left = Math.random() * 100 + 'vw';
    
    // Randomize speed (3 to 6 seconds)
    drop.style.animationDuration = Math.random() * 3 + 3 + 's'; 
    
    // Randomize size (between 60px and 120px)
    const size = Math.random() * 60 + 60;
    drop.style.width = size + 'px';
    
    document.body.appendChild(drop);

    // Clean up the image after it finishes falling to save memory
    setTimeout(() => {
        drop.remove();
    }, 6000);
}