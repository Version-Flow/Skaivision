const modal = new bootstrap.Modal(document.getElementById('myModal'));
const closeButton = document.querySelector('.modal-close');

if (closeButton) {
  closeButton.addEventListener('click', () => {
    modal.hide();
   
  });
}
