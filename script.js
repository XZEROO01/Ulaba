const thumbnails = document.querySelectorAll('.thumbnail');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const downloadHD = document.getElementById('download-hd');
const downloadSmall = document.getElementById('download-small');
const closeBtn = document.querySelector('.close');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    const full = img.getAttribute('data-full');
    const hd = img.getAttribute('data-hd');
    const small = img.getAttribute('data-small');

    popupImg.src = full;
    downloadHD.href = hd;
    downloadSmall.href = small;
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
