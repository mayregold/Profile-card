document.addEventListener("DOMContentLoaded", () => {
  const followBtn = document.querySelector("[id='btn-follow']");
  const messageBtn = document.querySelector("[id='btn-message']");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  let isFollowing = false;

  followBtn.addEventListener("click", () => {
    isFollowing = !isFollowing;

    followBtn.textContent = isFollowing ? "Following" : "Follow";
    followBtn.setAttribute("aria-pressed", isFollowing.toString());

    console.log(isFollowing ? "You are now following Mariam Abiodun" : "You unfollowed Mariam Abiodun.");
  });

  messageBtn.addEventListener("click", () => {
    alert("Message feature coming soon!");
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});