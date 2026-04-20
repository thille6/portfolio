const profileImage = document.getElementById("profile-image");
if (profileImage) {
  profileImage.addEventListener(
    "error",
    () => {
      profileImage.src = "profilbild Patrik T).jpg";
    },
    { once: true }
  );
}

const contactFab = document.getElementById("contact-fab");
if (contactFab) {
  contactFab.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}
