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
