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
    card.addEventListener('click', () => {
        console.log('click');
        addPlayerModal.classList.remove('hidden');
    });
});

// Function to generate player HTML
function generatePlayerCard(player) {
    return `
      <div class="w-full flex h-[55%] pb-6">
        <div class="w-[60%] h-full flex justify-end items-end">
          <div class="flex flex-col items-center justify-center mr-1">
            <p>${player.rating}</p>
            <p>${player.position}</p>
            <img class="h-6 w-6" src="${player.logo}" alt="Club Logo">
          </div>
        </div>
        <div class="h-full w-full flex justify-center items-end">
          <div>
            <img class="h-24 w-18 relative right-4" src="${player.photo}" alt="Player Photo">
          </div>
        </div>
      </div>
      <div class="w-full h-[45%] flex flex-col">
        <div class="w-full h-[30%] flex justify-center gap-2 items-center">
          <p>${player.name}</p>
          <img class="h-4" src="${player.flag}" alt="Player Nationality">
        </div>
        <div class="w-full h-full flex gap-8">
          <div class="h-full w-[50%] flex flex-col items-end text-xs">
            <div class="flex gap-2">
              <p>${player.position === 'GK' ? 'DIV' : 'PAC'}</p>
              <p>${player.position === 'GK' ? player.diving : player.pace}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position === 'GK' ? 'HAN' : 'SHO'}</p>
              <p>${player.position === 'GK' ? player.handling : player.shooting}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position === 'GK' ? 'KIC' : 'PAS'}</p>
              <p>${player.position === 'GK' ? player.kicking : player.passing}</p>
            </div>
          </div>
          <div class="h-full w-[50%] flex flex-col items-start text-xs">
            <div class="flex gap-2">
              <p>${player.position === 'GK' ? 'REF' : 'DRI'}</p>
              <p>${player.position === 'GK' ? player.reflexes : player.dribbling}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position === 'GK' ? 'SPE' : 'DEF'}</p>
              <p>${player.position === 'GK' ? player.speed : player.defending}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position === 'GK' ? 'POS' : 'PHY'}</p>
              <p>${player.position === 'GK' ? player.positioning : player.physical}</p>
            </div>
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
        playerCard.classList.add('cardPlayers', 'p-2', 'text-white');
        playerCard.innerHTML = generatePlayerCard(player);
        playersContainer.appendChild(playerCard);
    });
  }

// Fetch players from localStorage
const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
showPlayers(storedPlayers);
