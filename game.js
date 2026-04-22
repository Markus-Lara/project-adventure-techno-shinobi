const intro = document.getElementById("startexpo")
intro.addEventListener("click", function() {
intro.innerHTML = "It's the year 2150, and like any other normal day in Japan, I am on my way to my personal augmentation business, Augmentation Revelation. Here in my business, I do my usual: watch over my employees, do personal augmentations for VIPs, and then I head home, let my robot chef cook me some dinner, go to bed and sleep, wake up, repeat.";
intro.style.color = "red";
localStorage.setItem(startexpo, true);
});


