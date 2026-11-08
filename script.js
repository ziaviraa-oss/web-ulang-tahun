// --- PIN CODE SYSTEM ---
let enteredPin = "";
const correctPin = "021107"; // PIN Rahasia Alicia

function pressPin(num) {
    if (enteredPin.length < 6) {
        enteredPin += num;
        updateDots();
    }
}

function clearPin() {
    enteredPin = "";
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < enteredPin.length) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function checkPin() {
    if (enteredPin === correctPin) {
        document.getElementById('pin-screen').classList.add('hidden');
        document.getElementById('gift-screen').classList.remove('hidden');
    } else {
        alert("Kode salah, coba lagi ya bestie! ❤️");
        clearPin();
    }
}

// --- GIFT BOX & AUTOMATIC BACKGROUND MUSIC ---
let isPlaying = false;
const bgMusic = document.getElementById('bg-music');

function openGift() {
    document.getElementById('gift-screen').classList.add('hidden');
    document.getElementById('main-dashboard').classList.remove('hidden');
    
    // Autoplay musik latar & putar piringan hitam
    const vinyl = document.getElementById('vinyl');
    const playBtn = document.getElementById('play-btn');

    bgMusic.play().then(() => {
        vinyl.classList.add('spin');
        playBtn.innerText = "⏸️ Pause";
        isPlaying = true;
    }).catch(err => {
        console.log("Autoplay ditahan oleh browser, ketuk tombol play secara manual.");
    });
}

// --- TOGGLE PLAY / PAUSE BACKGROUND MUSIC ---
function togglePlayPause() {
    const vinyl = document.getElementById('vinyl');
    const playBtn = document.getElementById('play-btn');

    if (isPlaying) {
        bgMusic.pause();
        vinyl.classList.remove('spin');
        playBtn.innerText = "▶️ Play";
        isPlaying = false;
    } else {
        bgMusic.play();
        vinyl.classList.add('spin');
        playBtn.innerText = "⏸️ Pause";
        isPlaying = true;
    }
}

// --- BLOW CANDLE ---
function blowCandle() {
    const flame = document.getElementById('flame');
    if (flame) {
        flame.style.display = 'none';
        alert("Buku lilin telah ditiup! Semoga semua harapan Alicia tercapai ✨🎉");
    }
}

// --- DIGITAL BOUQUET ---
function showFlowerMsg(msg) {
    document.getElementById('flower-message').innerText = msg;
}

// --- GALLERY REVEAL ---
function revealPhoto(element) {
    const placeholder = element.querySelector('.polaroid-placeholder');
    const img = element.querySelector('img');
    
    if (placeholder && img) {
        placeholder.style.display = 'none';
        img.classList.remove('hidden-img');
    }
}

// --- REASONS / JAR NOTES (Diperbarui) ---
const notes = [
    "Aku bersyukur banget bisa kenal dan berteman sama kamu. ❤️",
    "kangenn duduk sebangku barengg whenn yhh ketemu lagii!",
    "Setiap momen dan tawa bareng kamu itu kenangan yang berharga banget.",
    "Jangan pernah berubah ya, tetap jadi diri kamu yang autentik dan keren!",
    "Semoga tahun ini membawa banyak hal baik dan alasan buat kamu tersenyum."
];

function drawNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    document.getElementById('jar-note-text').innerText = `"${notes[randomIndex]}"`;
}

// --- SPECIAL SURPRISE COUPLE CARDS ---
function openCoupleCard(cardElement) {
    const front = cardElement.querySelector('.card-front');
    const back = cardElement.querySelector('.card-back');

    if (front && back) {
        front.classList.add('hidden');
        back.classList.remove('hidden');
        cardElement.style.borderStyle = 'solid';
    }
}