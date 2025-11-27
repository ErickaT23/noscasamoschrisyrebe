import { eventData } from './config.js';

document.addEventListener('DOMContentLoaded', () => {

  // --- Apertura del sobre ---
  const seal = document.getElementById('seal');
  const envelope = document.getElementById('envelope');
  const mainContent = document.querySelector('.main-content');
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPauseButton');

  seal.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
      envelope.style.display = 'none';
      mainContent.classList.remove('hidden');
      audioPlayer.play();
      playPauseButton.innerText = 'Pause';
    }, 1000);
  });

  // --- Cargar datos generales ---
  document.getElementById('couple-names').innerText = eventData.couple.names;
  document.getElementById('wedding-date').innerText = eventData.couple.date;
  document.getElementById('hero-image').src = eventData.couple.heroImage;

  // --- Música ---
  audioPlayer.src = eventData.song.file;
  document.getElementById('song-title').innerText = eventData.song.title;

  const progressBar = document.getElementById('progress-bar');
  const currentTime = document.getElementById('current-time');
  const durationTime = document.getElementById('duration-time');

  playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.innerText = 'Pause';
    } else {
      audioPlayer.pause();
      playPauseButton.innerText = 'Play';
    }
  });

  audioPlayer.addEventListener('loadedmetadata', () => {
    durationTime.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener('timeupdate', () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
  });

  progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

//--- Botón para añadir al calendario ---
window.addToCalendar = function () {
  const calendarURL ="https://calendar.google.com/calendar/render?action=TEMPLATE&text=La+boda+de+Chris+y+Rebe&dates=20260307/20260308&location=Eventos+Alux%2C+Guatemala&details=Celebremos+juntos+el+gran+d%C3%ADa+de+Chris+y+Rebe%20%E2%9D%A4%EF%B8%8F";
  window.open(calendarURL, "_blank");
}


  // --- Itinerario ---
  // --- Ceremonia ---
  document.getElementById('ceremony-place').innerText = eventData.ceremony.place;
  document.getElementById('ceremony-address').innerText = eventData.ceremony.address;
  document.getElementById('ceremony-date').innerText = eventData.ceremony.date;
  document.getElementById('ceremony-time').innerText = eventData.ceremony.time;
  document.getElementById('ceremony-map').onclick = () => window.open(eventData.ceremony.mapLink, '_blank');

  document.getElementById('abroad-gift-message').innerText = eventData.abroadGiftMessage;
  

  // --- Dress Code ---
  // DRESS CODE dinámico
const dresscode = eventData.dresscode;

document.getElementById('dresscode-image').src = dresscode.image;

document.getElementById('dresscode-details').innerHTML = `
  <p>${dresscode.description}</p>
`;


// ---- Render del carrusel (una imagen por slide)
const galleryContainer = document.getElementById('gallery-container');
galleryContainer.innerHTML = ''; // limpia si ya existía

eventData.gallery.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'gallery-slide';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Foto galería';
  img.loading = 'lazy';
  slide.appendChild(img);
  galleryContainer.appendChild(slide);
});

// ---- Lógica de carrusel
let index = 0;
const slides = Array.from(document.querySelectorAll('.gallery-slide'));
const total = slides.length;
const prevBtn = document.querySelector('.gallery-btn.prev');
const nextBtn = document.querySelector('.gallery-btn.next');

function showSlide(n){
  if (n < 0) index = total - 1;
  else if (n >= total) index = 0;
  else index = n;
  galleryContainer.style.transform = `translateX(${-index * 100}%)`;
}
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));
showSlide(0);

// Swipe (móvil)
let startX = 0, deltaX = 0;
galleryContainer.addEventListener('touchstart', (e)=> startX = e.touches[0].clientX, {passive:true});
galleryContainer.addEventListener('touchmove',  (e)=> deltaX = e.touches[0].clientX - startX, {passive:true});
galleryContainer.addEventListener('touchend',   ()=>{
  if (Math.abs(deltaX) > 45) deltaX < 0 ? showSlide(index + 1) : showSlide(index - 1);
  deltaX = 0;
});

// ---- Modal (click para ampliar)
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');

slides.forEach(slide=>{
  slide.addEventListener('click', ()=>{
    const img = slide.querySelector('img');
    modalImg.src = img.src;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal(){
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=> {
  if (e.target.classList.contains('modal-backdrop')) closeModal();
});
document.addEventListener('keydown', (e)=> { if (e.key === 'Escape') closeModal(); });



  // --- No niños ---
  document.getElementById('no-kids-policy').innerText = eventData.noKidsPolicy;

  // --- Final: Foto y Frase ---
  document.getElementById('final-photo').src = eventData.finalPhoto;
  document.getElementById('final-message').innerText = eventData.finalMessage;

  // --- Confirmaciones ---
  document.getElementById('rsvp-message').innerText = "Para nosotros es muy valiosa tu presencia, no olvides confirmar tu asistencia antes del 07 de enero de 2026, de lo contrario no podremos reservar tu espacio.";

  // --- Footer (redes sociales) ---
  const socialIcons = document.getElementById('social-icons');

socialIcons.innerHTML = `
  <a href="${eventData.footer.social.whatsapp}" target="_blank" aria-label="Whatsapp">
    <i class="fab fa-whatsapp"></i>
  </a>
  <a href="${eventData.footer.social.facebook}" target="_blank" aria-label="Facebook">
    <i class="fab fa-facebook"></i>
  </a>
  <a href="${eventData.footer.social.instagram}" target="_blank" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
`;

document.getElementById('footer-logo').src = eventData.footer.logo;


  // --- Animaciones Scroll (fade-in) ---
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // --- Contador regresivo ---
  const [day, month, year] = eventData.couple.date.split('.').map(s => s.trim());
  const weddingDate = new Date(`${year}-${month}-${day}T00:00:00`);
  const countdown = setInterval(() => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = "<h2>¡Hoy es el gran día!</h2>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);

});
function addToCalendar() {
    const title = encodeURIComponent('Boda de Mariano & Maritza');
    const details = encodeURIComponent('¡Acompáñanos en nuestra boda!');
    const location = encodeURIComponent('Guatemala City, Guatemala');
    const startDate = '20260727T170000Z'; // ⚡ Importante: Formato UTC YYYYMMDDTHHMMSSZ
    const endDate = '20260737T230000Z';   // ⚡ Final estimado
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;
  
    window.open(googleCalendarUrl, '_blank');
  }
  
  //RSVP
  const params = new URLSearchParams(window.location.search);
  const guestId = params.get("id");
  const guest = window.guests.find(g => g.id === guestId);
  
  if (guest) {
    const whatsappNumber = "50244809454";
  
    const message = guest.passes === 1
      ? `Gracias por reservar ${guest.passes} lugar para mí, confirmo mi asistencia. ${guest.name}. Nos vemos en su boda.`
      : `Gracias por los ${guest.passes} lugares reservados para nosotros, confirmamos nuestra asistencia. ${guest.name}. Nos vemos en su boda.`;
  
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    const confirmButton = document.getElementById('confirm-button');
    if (confirmButton) {
      confirmButton.onclick = () => window.open(whatsappURL, '_blank');
    }
  }
  
  

// --- CUENTAS ---
window.toggleBankInfo = function () {
  const info = document.getElementById("bank-info");
  info.classList.toggle("open");
};
