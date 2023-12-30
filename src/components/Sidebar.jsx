import React from 'react'
import "../App.css"
import "./sidebar.css"
 
function Sidebar() {
  return (
    <div className='d-flex flex-column align-items-center w-100 px-3 sidebarDiv h-50 pt-3 overflow-auto'>

        <p className='sidebarP px-3 py-2 rounded p-0' id='sidebarP'><i class="fa-solid fa-house me-4"></i><span>Home</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-staff-snake me-4"></i><span>Shorts</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-clapperboard me-4"></i><span>Subscription</span></p>

        <hr className='w-100 text-light mt-0'/>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-clock-rotate-left me-4"></i><span>History</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-regular fa-clock me-4"></i><span>Watch later</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-heart me-4"></i><span>Liked videos</span></p>

        <hr className='w-100 text-light mt-0'/>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-fire me-4"></i><span>Trending</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-bag-shopping me-4"></i><span>Shopping</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-music me-4"></i><span>Music</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-film me-4"></i><span>Movies</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-tower-broadcast me-4"></i><span>Lives</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-gamepad me-4"></i><span>Gaming</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-newspaper me-4"></i><span>News</span></p>

        <p className='sidebarP px-3 py-2 rounded p-0'><i class="fa-solid fa-volleyball me-4"></i><span>Sports</span></p>
    
    </div>
  )
}

export default Sidebar