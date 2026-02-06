const flowerContainer = document.querySelector(".flowers");

        setInterval(() => {
            const flower = document.createElement("span");
            flower.innerHTML = "🌸";
            flower.style.left = Math.random() * 100 + "vw";
            flower.style.animationDuration = 5 + Math.random() * 3 + "s";
            flowerContainer.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 8000);
        }, 500);

      
        document.body.addEventListener("click", () => {
            const music = document.getElementById("bgMusic");
            music.play();
        }, { once: true });
   

const flowersContainer = document.querySelector(".flowers");
setInterval(() => {
    const flower = document.createElement("span");
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 5 + Math.random() * 3 + "s";
    flowerContainer.appendChild(flower);
    setTimeout(() => { flower.remove(); }, 8000);
}, 500);


const sparkleContainer = document.querySelector(".sparkles");
setInterval(() => {
    const sparkle = document.createElement("span");
    sparkle.innerHTML = "✨";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 3 + Math.random() * 2 + "s";
    sparkle.style.fontSize = 5 + Math.random() * 6 + "px";
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 5000);
}, 400);


const descriptions = {
    photo1: "Your beautiful smile lights up my day 💜",
    photo2: "Remember this fun moment together? 😍",
    photo3: "I love how you make everything better ✨",
    photo4: "You are my sunshine and happiness 🌸"
};

function showDescription(photoId){
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');
    modalText.textContent = descriptions[photoId];
    modal.classList.remove('hidden');
}


document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});

 const messages = [
      "This smile right here? It melts me every single time 😌💜",
      "Every time I see this photo, I fall for you all over again 😍😩",
      "You are so beautiful princess and i'm ever proud of you 😝✨ ",
      "Moments like this make me wish I could freeze time with you 🌸💜"
    ];

    function openModal(index) {
      document.getElementById("modalText").innerText = messages[index];
      document.getElementById("modal").classList.add("active");
    }

    function closeModal() {
      document.getElementById("modal").classList.remove("active");
    }


const noBtn=document.getElementbyId('no-btn');
        noBtn.addEventListener('mouseenter', () => {
            const maxX = window.innerWidth - noBtn.offsetWidth -20;
            const maxY = window.innerHeight - noBtn.offsetHeight - 20;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
        });