const guests = [
  { id: "1", name: "Familia Sandoval Castillo", passes: 3, gender: "mixto" },
  { id: "2", name: "Esposos Contreras Oliva", passes: 2, gender: "mixto" },
  { id: "3", name: "Esposos Contreras Sánchez", passes: 2, gender: "mixto" },
  { id: "4", name: "Josué Contreras", passes: 1, gender: "masculino" },
  { id: "5", name: "Fernanda Contreras", passes: 1, gender: "femenino" },
  { id: "6", name: "David Contreras", passes: 1, gender: "masculino" },
  { id: "7", name: "Alejandro Contreras", passes: 1, gender: "masculino" },
  { id: "8", name: "Familia López", passes: 5, gender: "mixto" },
  { id: "9", name: "Allan Dubón", passes: 1, gender: "masculino" },
  { id: "10", name: "Doménica Dubón", passes: 1, gender: "femenino" },
  { id: "11", name: "Esposos Dubón", passes: 2, gender: "mixto" },
  { id: "12", name: "Familia Sandoval González", passes: 3, gender: "mixto" },
  { id: "13", name: "Esposos Navas", passes: 2, gender: "mixto" },
  { id: "14", name: "Esposos Barrientos García", passes: 2, gender: "mixto" },
  { id: "15", name: "Esposos Barrientos Echeverría", passes: 2, gender: "mixto" },
  { id: "16", name: "Rosita Alvarez", passes: 1, gender: "femenino" },
  { id: "17", name: "Esposos López Najarro", passes: 2, gender: "mixto" },
  { id: "18", name: "Esposos Fuentes Hernández", passes: 2, gender: "mixto" },
  { id: "19", name: "Esposos Peña Roca", passes: 2, gender: "mixto" },
  { id: "20", name: "Ana María González", passes: 1, gender: "femenino" },
  { id: "21", name: "Aracely Guzmán", passes: 1, gender: "femenino" },
  { id: "22", name: "Esposos Cuyán Orellana", passes: 2, gender: "mixto" },
  { id: "23", name: "Dennis González", passes: 1, gender: "masculino" },
  { id: "24", name: "Carol Mayén", passes: 1, gender: "femenino" },
  { id: "25", name: "Esposos Oscal Barrios", passes: 2, gender: "mixto" },
  { id: "26", name: "Elder Pérez", passes: 1, gender: "masculino" },
  { id: "27", name: "Familia Téllez", passes: 3, gender: "mixto" },
  { id: "28", name: "Familia Castañeda", passes: 4, gender: "mixto" },
  { id: "29", name: "Flavio Quina", passes: 1, gender: "masculino" },
  { id: "30", name: "Esposos Espinoza Hernández", passes: 2, gender: "mixto" },
  { id: "31", name: "Jessica Hernández", passes: 1, gender: "femenino" },
  { id: "32", name: "Familia Tenas Lucero", passes: 2, gender: "mixto" },
  { id: "33", name: "Adrián Paíz", passes: 1, gender: "masculino" },
  { id: "34", name: "Fermín Tenas", passes: 1, gender: "masculino" },
  { id: "35", name: "Carol Tenas", passes: 1, gender: "femenino" },
  { id: "36", name: "Evelyn Tenas", passes: 1, gender: "femenino" },
  { id: "37", name: "Familia Bolaños Tenas", passes: 4, gender: "mixto" },
  { id: "38", name: "Familia Orozco Méndez", passes: 3, gender: "mixto" },
  { id: "39", name: "William Tenas", passes: 1, gender: "masculino" },
  { id: "40", name: "Esposos Lucero Soto", passes: 2, gender: "mixto" },
  { id: "41", name: "Priscila Lucero", passes: 1, gender: "femenino" },
  { id: "42", name: "Melissa Lucero", passes: 2, gender: "mixto" },
  { id: "43", name: "Ana Ruth Estrada", passes: 2, gender: "mixto" },
  { id: "44", name: "Esposos Castillo López", passes: 2, gender: "mixto" },
  { id: "45", name: "Carolina Aguilar", passes: 2, gender: "mixto" },
  { id: "46", name: "Esposos Gutierrez López", passes: 2, gender: "mixto" },
  { id: "47", name: "Laura Rodríguez", passes: 2, gender: "mixto" },
  { id: "48", name: "Yazmin Florian", passes: 1, gender: "femenino" },
  { id: "49", name: "Jesley Roque", passes: 1, gender: "femenino" },
  { id: "50", name: "Abigail Girón", passes: 1, gender: "femenino" },
  { id: "51", name: "Marietta Lau", passes: 1, gender: "femenino" },
  { id: "52", name: "Esposos Mijangos Crespo", passes: 2, gender: "mixto" },
  { id: "53", name: "Flory Toledo", passes: 1, gender: "femenino" },
  { id: "54", name: "Diana Martinez", passes: 2, gender: "femenino" },
  { id: "55", name: "Julissa Mendoza", passes: 1, gender: "femenino" },
  { id: "56", name: "Jenniffer Monterroso", passes: 2, gender: "mixto" },
  { id: "57", name: "Paola Quintana", passes: 2, gender: "mixto" },
  { id: "58", name: "Emily Reyes", passes: 1, gender: "femenino" },
  { id: "59", name: "Christa Gomez", passes: 2, gender: "mixto" },
  { id: "60", name: "Monica Meza", passes: 1, gender: "femenino" },
  { id: "61", name: "Andrea Barillas", passes: 2, gender: "mixto" },
  { id: "62", name: "Ana Ruth Monroy", passes: 2, gender: "mixto" },
  { id: "63", name: "Sindy Sagastume", passes: 2, gender: "mixto" },
  { id: "64", name: "Alejandra Blanco", passes: 1, gender: "femenino" },
  { id: "65", name: "Angie García", passes: 1, gender: "femenino" },
  { id: "66", name: "Gabriela Villagran", passes: 1, gender: "femenino" },
  { id: "67", name: "Daniela Rodriguez", passes: 1, gender: "femenino" },
  { id: "68", name: "Familia Chavéz", passes: 4, gender: "mixto" },
  { id: "69", name: "Luisa Rivera", passes: 1, gender: "femenino" },
  { id: "70", name: "Lucía Barrera", passes: 2, gender: "mixto" },
  { id: "71", name: "Familia Aguirre", passes: 5, gender: "mixto" },
  { id: "72", name: "Elisa García", passes: 1, gender: "femenino" },
  { id: "73", name: "Linda Mazariegos", passes: 1, gender: "femenino" },
  { id: "74", name: "Linda Rodríguez", passes: 1, gender: "femenino" },
  { id: "75", name: "Esposos Martínez", passes: 2, gender: "mixto" }
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