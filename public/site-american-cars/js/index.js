
document.querySelectorAll(".tocontacts_btn").forEach((button) => {
  const form = document.querySelector(".contacts__forms");

  button.addEventListener("click", function () {
    document.getElementById("contacts__info_id").scrollIntoView({
      behavior: "smooth",
    });

    form.classList.add("shine");
    setTimeout(() => {
        form.classList.remove('shine');
      }, 1500);
  });
});


function showToast(name) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText')
    toast.classList.remove('hidden'); 
    toast.classList.add('visible'); 
    toastText.textContent = `Сообщение отправлено, ${name}!`
    setTimeout(() => {
        toast.classList.remove('visible'); 
        toast.classList.add('hidden'); 
    }, 3000);
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const name = document.getElementById('contactsInputName').value;
    showToast(name);
});
