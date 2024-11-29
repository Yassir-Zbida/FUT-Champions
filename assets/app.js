// Mobile Sidebar Menu Function 
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('hidden');
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.add('hidden');
    }
});

// fetch json file
fetch('https://fut.codia-dev.com/data.json')
.then((response) => response.json())
.then((data)=> localStorage.setItem('players', JSON.stringify(data.players)))



// add player to bench modal 
const closeModal = document.getElementById('closeModal');
const openModalCards = document.querySelectorAll('.card');
const addPlayerModal = document.getElementById('AddPlayerModal');

closeModal.addEventListener('click', () => {
    addPlayerModal.classList.add('hidden');
});

openModalCards.forEach(card => {
    card.addEventListener('click', (event) => {
        const cardId = event.target.id;
        console.log(cardId);
        addPlayerModal.classList.remove('hidden');
    });
});

// Function to generate player HTML

function generatePlayerCard(player) {
    return `
      <div class="relative w-32 h-40 rounded-lg text-white overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full  opacity-80 bg-[url('./assets/images/cards/homecard.png')] bg-no-repeat"></div>
  
        <div class="absolute top-2 left-2 text-center">
          <p class="text-xl font-bold">${player.rating}</p>
          <p class="text-sm font-semibold">${player.position}</p>
          <img class="h-6 w-6 mt-1" src="${player.logo}" alt="Club Logo">
        </div>
  
        <div class="absolute bottom-10 ml-10  ">
          <img class="w-28 h-28 rounded-full object-cover" src="${player.photo}" alt="Player Photo">
        </div>
  
        <div class="absolute bottom-2 left-0 w-full text-center text-sm font-bold flex justify-between items-center">
          ${player.name}
          <div class="flex justify-center items-center mt-1">
            <img class="h-4 w-6 mr-1" src="${player.flag}" alt="Player Nationality">
          </div>
        </div>
      </div>
    `;
  }
  
// Show players in the grid section
function showPlayers(players) {
    const playersContainer = document.getElementById('playersGrid');
    playersContainer.innerHTML = '';

    players.forEach((player) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('cardPlayers2', 'p-2', 'text-white');
        playerCard.innerHTML = generatePlayerCard(player);
        playersContainer.appendChild(playerCard);

        playerCard.addEventListener('click', () => {
            const playerChossen = docu
            console.log(player.name); 
            addPlayerModal.classList.remove('hidden'); 
        });
    });

    const modalCards = addPlayerModal.querySelectorAll('.cardPlayers2');
    modalCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('MODAL CLOSED');
            addPlayerModal.classList.add('hidden');
        });
    });
}



// Fetch players from localStorage
const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
showPlayers(storedPlayers);
