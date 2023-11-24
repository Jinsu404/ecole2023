const images = document.querySelectorAll(".slider img");
    const prevBtn = document.querySelector(".slider button.prev");
    const nextBtn = document.querySelector(".slider button.next");
    let currentIndex = 0;
    
    function showImage(index) {
        images.forEach((image) => image.classList.remove("active"));
        images[index].classList.add("active");
    }

    setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
        currentIndex = 0;
        }
        showImage(currentIndex);
    }, 2000);