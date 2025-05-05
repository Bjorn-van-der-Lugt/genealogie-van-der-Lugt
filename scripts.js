const button = document.getElementById("copyEmail");
const toast = document.getElementById("copyToast");

button.addEventListener("click", function () {
  const email = "genea.vdlugt@gmail.com"; 
  navigator.clipboard.writeText(email).then(() => {

    const rect = button.getBoundingClientRect();
    toast.style.top = `${rect.top - 35 + window.scrollY}px`;
    toast.style.left = `${rect.left + rect.width / 2 - 50}px`;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 1000);
  });
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".mobile-wrapper").classList.toggle("open");
  document.querySelector(".header").classList.toggle("open");
});


