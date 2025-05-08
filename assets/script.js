const screenshots = document.querySelectorAll('.screenshot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showScreenshot(index) {
      screenshots.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % screenshots.length;
      showScreenshot(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
      showScreenshot(currentIndex);
    });

    