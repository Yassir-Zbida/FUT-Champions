// Function to generate player HTML
function generatePlayerCard(player) {
    return `
      <div class="w-full flex h-[55%] ">
        <div class="w-[60%] h-full flex justify-end items-end ">
          <div class="flex flex-col items-center justify-center mr-1">
            <p>${player.rating}</p>
            <p>${player.position}</p>
            <img class="h-6" src="${player.logo}" alt="">
          </div>
        </div>
        <div class="h-full w-full flex justify-center items-end">
          <div>
            <img class="h-24 w-16 relative right-4" src="${player.photo}" alt="">
          </div>
        </div>
      </div>
      <div class="w-full h-[45%] flex flex-col">
        <div class="w-full h-[30%] flex justify-center gap-2 items-center">
          <p>${player.name}</p>
          <img class="h-4" src="${player.flag}" alt="">
        </div>
        <div class="w-full h-full flex gap-8">
          <div class="h-full w-[50%] flex flex-col items-end text-xs">
            <div class="flex gap-2">
              <p>${player.position == 'GK' ? 'DIV' : 'PAC'}</p>
              <p>${player.position == 'GK' ? player.diving : player.pace}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position == 'GK' ? 'HAN' : 'SHO'}</p>
              <p>${player.position == 'GK' ? player.handling : player.shooting}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position == 'GK' ? 'KIC' : 'PAS'}</p>
              <p>${player.position == 'GK' ? player.kicking : player.passing}</p>
            </div>
          </div>
          <div class="h-full w-[50%] flex flex-col items-start text-xs">
            <div class="flex gap-2">
              <p>${player.position == 'GK' ? 'REF' : 'DRI'}</p>
              <p>${player.position == 'GK' ? player.reflexes : player.dribbling}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position == 'GK' ? 'SPE' : 'DEF'}</p>
              <p>${player.position == 'GK' ? player.speed : player.defending}</p>
            </div>
            <div class="flex gap-2">
              <p>${player.position == 'GK' ? 'POS' : 'PHY'}</p>
              <p>${player.position == 'GK' ? player.positioning : player.physical}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Show players in grid section
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
  const storedPlayers = JSON.parse(localStorage.getItem('players'));
  if (storedPlayers && Array.isArray(storedPlayers)) {
    showPlayers(storedPlayers);
  } else {
    console.error("No players found in localStorage.");
  }
  