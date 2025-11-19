const guests = [
  { id: "1", name: "Familia Sandoval Castillo", passes: 3, gender: "mixto" },
];


document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const guestId = queryParams.get("id");
  const guest = guests.find(g => g.id === guestId);

  if (guest) {
    const nameBold = `<span class="guest-name-bold">${guest.name}</span>`;
    let invitationText = `¡${nameBold}, `;

    if (guest.passes === 1) {
      invitationText += guest.gender === "femenino" ? "estás invitada!" : "estás invitado!";
    } else {
      invitationText += guest.gender === "femenino" ? "están invitadas!" : "están invitados!";
    }

    document.getElementById('guest-name').innerHTML = invitationText; // 👈 usa innerHTML porque hay HTML
    document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    document.getElementById('guest-table').textContent = guest.table;
  } else {
    document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
    const invitationInfo = document.querySelector('.invitation-info-section');
    if (invitationInfo) invitationInfo.style.display = 'none';
  }
});


window.guests = guests;