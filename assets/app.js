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


fetch('https://fut.codia-dev.com/data.json')
.then((response) => response.json())
.then((data)=> localStorage.setItem('players', JSON.stringify(data.players)))


// function showPlayer(player){
//     return `
//          <div class="w-full h-full grid grid-cols-2 items-center  ">
//               <div class=" mt-8 flex flex-col items-center justify-end w-full">
//                   <p>${player.rating}</p>
//                   <p>${player.position}</p>
//                   <img class="w-2 h-2" src="${player.logo}" alt="">
//               </div>
//               <div class="relative right-4 top-2 ">
//                   <img class="h-12 w-16" src="${player.photo}" alt="">
//               </div>
             
//           </div>
//           <div class="w-full h-full flex flex-col justify-center mb-2">
//               <div class="flex flex items-center justify-center gap-1 mt-[-10px]">
//                   <p>${player.name}</p>
//                   <img class="w-2 h-2" src="${player.flag}" alt="">
//               </div>
//               <div class=" flex w-full justify-evenly text-[6px]  	">
//                   <div class="flex flex-col">
//                       <div class="flex gap-1 leading-none ">
//                           <p>DIV</p>
//                           <p>${player.pace}</p>
//                       </div>
//                       <div class="flex gap-1 ">
//                           <p>HAN</p>
//                           <p>${player.shooting}</p>
//                       </div>
//                       <div class="flex gap-1 leading-none">
//                           <p>KIC</p>
//                           <p>${player.passing}</p>
//                       </div>
//                   </div>
//                   <div class="flex flex-col">   
//                       <div class="flex gap-1 leading-none">
//                           <p>REF</p>
//                           <p>${player.dribbling}</p>
//                       </div>
//                       <div class="flex gap-1">
//                           <p>DEF</p>
//                           <p>${player.defending}</p>
//                       </div>
//                       <div class="flex gap-1 leading-none">
//                           <p>PHY</p>
//                           <p>${player.physical}</p>
//                       </div>

//                   </div>
//                   </div>
           
//           </div>
//     `
// }
// const players  = JSON.parse(localStorage.getItem('players'))
// players.forEach(element => {
   
//     if(element.position == 'GK'){
//         document.getElementById('GK').innerHTML= `
//          <div class="w-full h-full grid grid-cols-2 items-center  ">
//               <div class=" mt-8 flex flex-col items-center justify-end w-full">
//                   <p>${element.rating}</p>
//                   <p>${element.position}</p>
//                   <img class="w-2 h-2" src="${element.logo}" alt="">
//               </div>
//               <div class="relative right-4 top-2 ">
//                   <img class="h-12 w-16" src="${element.photo}" alt="">
//               </div>
             
//           </div>
//           <div class="w-full h-full flex flex-col justify-center mb-2">
//               <div class="flex flex items-center justify-center gap-1 mt-[-10px]">
//                   <p>${element.name}</p>
//                   <img class="w-2 h-2" src="${element.flag}" alt="">
//               </div>
//               <div class=" flex w-full justify-evenly text-[6px]  	">
//                   <div class="flex flex-col">
//                       <div class="flex gap-1 leading-none ">
//                           <p>DIV</p>
//                           <p>${element.diving}</p>
//                       </div>
//                       <div class="flex gap-1 ">
//                           <p>HAN</p>
//                           <p>${element.handling}</p>
//                       </div>
//                       <div class="flex gap-1 leading-none">
//                           <p>KIC</p>
//                           <p>${element.kicking}</p>
//                       </div>
//                   </div>
//                   <div class="flex flex-col">   
//                       <div class="flex gap-1 leading-none">
//                           <p>REF</p>
//                           <p>${element.reflexes}</p>
//                       </div>
//                       <div class="flex gap-1">
//                           <p>DEF</p>
//                           <p>86</p>
//                       </div>
//                       <div class="flex gap-1 leading-none">
//                           <p>PHY</p>
//                           <p>98</p>
//                       </div>

//                   </div>
//                   </div>
           
//           </div>
//         `
//     }
//     else if ( element.position == 'CF'){
//         document.getElementById("CF").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'LW'){
//         document.getElementById("LW").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'LB'){
//         document.getElementById("LB").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'RB'){
//         document.getElementById("RB").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'RW'){
//         document.getElementById("RW").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'CM' ||element.position == 'CDM'){
//         document.getElementById("CM1").innerHTML = showPlayer(element)
//         document.getElementById("CM2").innerHTML = showPlayer(element)
//         document.getElementById("CM3").innerHTML = showPlayer(element)


//     }
//     else if ( element.position == 'CB1' ){
//         document.getElementById("CB1").innerHTML = showPlayer(element)
//         document.getElementById("CB2").innerHTML = showPlayer(element)


//     }
    
// });

