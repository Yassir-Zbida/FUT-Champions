// Mobile Sidebar Menu Function
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
}


fetch('https://fut.codia-dev.com/data.json')
    .then((response) => response.json())
    .then((data) => {
        if (data.players) {
            let players = JSON.parse(localStorage.getItem('players')) || [];
            players = [...players, ...data.players];
            localStorage.setItem('players', JSON.stringify(players));
            showPlayers(players); 
        } else {
            console.log('Players data is missing in the JSON response.');
        }
    })
    .catch((error) => console.log('Failed to fetch players:', error));


// Modal for adding a player to the bench
const closeModal = document.getElementById('closeModal');
const openModalCards = document.querySelectorAll('.card');
const addPlayerModal = document.getElementById('AddPlayerModal');
let cardId = null;

if (closeModal && addPlayerModal) {
    closeModal.addEventListener('click', () => {
        addPlayerModal.classList.add('hidden');
    });

    openModalCards.forEach((card) => {
        card.addEventListener('click', (event) => {
            cardId = event.currentTarget.id; 
            console.log("Card ID:", cardId);
            addPlayerModal.classList.remove('hidden');
            showPlayers(storedPlayers); 
        });
    });
}

// Function to generate player HTML
function generatePlayerCard(player) {
    return `
        <div class="relative w-32 h-40 rounded-lg text-white overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-80 bg-[url('./assets/images/cards/homecard.png')] bg-no-repeat"></div>
            <div class="absolute top-2 left-2 text-center">
                <p class="text-xl font-bold">${player.rating}</p>
                <p class="text-sm font-semibold">${player.position}</p>
                <img class="h-6 w-6 mt-1" src="${player.logo}" alt="Club Logo">
            </div>
            <div class="absolute bottom-10 ml-10">
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

// Function to show players in the grid section
function showPlayers(players) {
    const playersContainer = document.getElementById('playersGrid');
    playersContainer.innerHTML = '';  

    const filteredPlayers = cardId 
        ? players.filter(player => player.position === cardId) 
        : players;

    filteredPlayers.forEach((player) => {
        const playerCard = document.createElement('div');
        // playerCard.classList.add('cardPlayers2', 'p-2', 'text-white');
        playerCard.innerHTML = generatePlayerCard(player);
        playersContainer.appendChild(playerCard);

        playerCard.addEventListener('click', () => {
            const selectedPlayerName = player.name;
            console.log(selectedPlayerName);

            addPlayerModal.classList.add('hidden');
            const selectedCard = document.getElementById(cardId);
            
            if (selectedCard) {
                selectedCard.classList.remove('card');
                selectedCard.innerHTML = `
                    <div id="${player.id}" class="relative w-32 h-40 rounded-lg text-white overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-full opacity-80 bg-[url('./assets/images/cards/homecard.png')] bg-no-repeat"></div>
                        <div class="absolute top-2 left-2 text-center">
                            <p class="text-xl font-bold">${player.rating}</p>
                            <p class="text-sm font-semibold">${player.position}</p>
                            <img class="h-6 w-6 mt-1" src="${player.logo}" alt="Club Logo">
                        </div>
                        <div class="absolute bottom-10 ml-10">
                            <img class="w-28 h-28 rounded-full object-cover" src="${player.photo}" alt="Player Photo">
                        </div>
                        <div class="absolute bottom-2 left-0 w-full text-center text-sm font-bold">
                            ${player.name}
                        </div>
                        <i class="absolute ri-delete-bin-6-line text-[#991314] text-sm bottom-2 left-0 cursor-pointer" data-id="${player.id}" id="deleteBtn"></i>
                    </div>
                `;
                attachDeleteEvent(player.id, selectedCard);
            }
        });
    });
}

// delete function
function attachDeleteEvent(playerId, cardElement) {
    const deleteBtn = cardElement.querySelector('#deleteBtn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log("Deleting Player ID:", playerId);
            cardElement.innerHTML = ''; 
            cardElement.classList.add('card');
        });
    }
}

// Fetch players from localStorage and display them
const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
if (storedPlayers.length > 0) {
    showPlayers(storedPlayers); 
} else {
    console.log('No players found in localStorage.');
}
