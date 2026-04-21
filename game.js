const intro = document.getElementById("start-expo")
intro.addEventListener("click", function() {
intro.innerHTML = "Hello";
intro.style.color = "red";
localStorage.setItem(intro.true);
});