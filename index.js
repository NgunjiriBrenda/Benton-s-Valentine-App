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
   

