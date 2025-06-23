const thumbnails = document.querySelectorAll('.thumbnail');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const btnGratis = document.getElementById('btn-gratis');
const btnBerbayar = document.getElementById('btn-berbayar');
const closeBtn = document.querySelector('.close');
const popupInfo = document.getElementById('popup-info');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    const full = img.getAttribute('data-full');
    const gratis = img.getAttribute('data-gratis');
    const berbayar = img.getAttribute('data-berbayar');
    const foto = img.getAttribute('data-foto');
    const video = img.getAttribute('data-video');

    popupImg.src = full;
    btnGratis.href = gratis;
    btnBerbayar.href = berbayar;
    popupInfo.textContent = `Foto: ${foto} | Video: ${video}`;
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
