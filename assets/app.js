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

