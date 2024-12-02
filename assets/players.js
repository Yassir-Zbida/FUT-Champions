const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

if (menuToggle && sidebar && closeSidebar) {
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
} else {
    console.warn('Sidebar menu elements are missing in the DOM.');
}

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

// Search function for players
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', playerSearch);

function playerSearch() {
  const keyword = searchInput.value.trim().toUpperCase();
  const filteredPlayers = storedPlayers.filter((player) =>
      player.name.toUpperCase().includes(keyword)
  );
  showPlayers(filteredPlayers);
}

// Filter function for players based on position
const filterPlayer = document.getElementById('positionFilter');
filterPlayer.addEventListener('change', filterPlayers);

function filterPlayers() {
  const filterPosition = filterPlayer.value;
  const filteredPlayers =
      filterPosition === 'all'
          ? storedPlayers
          : storedPlayers.filter((player) => player.position === filterPosition);
  showPlayers(filteredPlayers);
}

// Add Player to JSON file (localStorage)
const closeModal = document.getElementById('closeModal');
const openModal = document.getElementById('AddPlayer');
const addPlayerModal = document.getElementById('AddPlayerModal');
const playerForm = document.getElementById('playerForm');
const gkStatsDiv = document.getElementById('gkStats');
const playerStatsDiv = document.getElementById('playerStats');
const positionSelect = document.getElementById('position');

// Function to toggle stats inputs based on position
function toggleStatsInputs() {
  const selectedPosition = positionSelect.value;

  if (selectedPosition === 'GK') {
      gkStatsDiv.classList.remove('hidden');
      playerStatsDiv.classList.add('hidden');
  } else {
      playerStatsDiv.classList.remove('hidden');
      gkStatsDiv.classList.add('hidden');
  }
}

positionSelect.addEventListener('change', toggleStatsInputs);

closeModal.addEventListener('click', () => {
  addPlayerModal.classList.add('hidden');
});

openModal.addEventListener('click', () => {
  addPlayerModal.classList.remove('hidden');
});

function addNewPlayer(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const photo = document.getElementById('photo').value.trim();
  const position = positionSelect.value;
  const rating = parseInt(document.getElementById('rating').value, 10);
  const club = document.getElementById('club').value.trim();
  const nationality = document.getElementById('nationality').value.trim();

  let stats;

  if (position === 'GK') {
      stats = {
          diving: parseInt(document.getElementById('div').value, 10) || 0,
          handling: parseInt(document.getElementById('han').value, 10) || 0,
          kicking: parseInt(document.getElementById('kic').value, 10) || 0,
          reflexes: parseInt(document.getElementById('ref').value, 10) || 0,
          speed: parseInt(document.getElementById('spe').value, 10) || 0,
          positioning: parseInt(document.getElementById('pos').value, 10) || 0,
      };
  } else {
      stats = {
          pace: parseInt(document.getElementById('pac').value, 10) || 0,
          shooting: parseInt(document.getElementById('sho').value, 10) || 0,
          passing: parseInt(document.getElementById('pas').value, 10) || 0,
          dribbling: parseInt(document.getElementById('dri').value, 10) || 0,
          defending: parseInt(document.getElementById('def').value, 10) || 0,
          physical: parseInt(document.getElementById('phy').value, 10) || 0,
      };
  }

  const newPlayer = {
      name,
      photo,
      position,
      rating,
      club,
      nationality,
      ...stats,
  };

  // Update storedPlayers and sync with localStorage
  storedPlayers.push(newPlayer);
  localStorage.setItem('players', JSON.stringify(storedPlayers));
  showPlayers(storedPlayers);

  // Close modal and reset form
  addPlayerModal.classList.add('hidden');
  playerForm.reset();
  toggleStatsInputs(); 
}

playerForm.querySelector('button').addEventListener('click', addNewPlayer);

// Fetch players from localStorage
const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
showPlayers(storedPlayers);

