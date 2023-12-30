import React from 'react'
import './videocard.css'

function VideoCard() {
  return (

      
  
      <div className='d-flex flex-wrap justify-content-center overflow-auto h-50'>

         
          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://www.pinkvilla.com/images/2023-06/990020216_thalapathy-vijay-leo-first-single-naa-ready-poster.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://logowik.com/content/uploads/images/sony-music-entertainment1999.jpg" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Leo - Naa Ready Song Video | Thalapathy vijay 
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://pbs.twimg.com/media/F8Wj6njXkAAt_Ec?format=jpg&name=large" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Portugal VS France | 2016 Euro final
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://m.media-amazon.com/images/S/pv-target-images/e7be6047f22ef3a6688450cb195d0bb9cbe6f0abd0273bb8d63b842998622120.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="data:image/png;base64,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" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Ready or Not | Red band Trailer
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://people.com/thmb/8YYsLmdYSNW8FYebOSV_ddfdX_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(779x319:781x321)/Stranger-Things-fff13b7e98494a6c855cf7f101c1a0a5.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                 Stranger Things Season 4 - Vol 1 Teaser trailer
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://pianobajao.com/wp-content/uploads/2021/08/Raatan-Lambiyan-Piano-Notes.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://logowik.com/content/uploads/images/sony-music-entertainment1999.jpg" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Raataan Lambiyan – Official Video | Shershaah 
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://wallpapers.com/images/featured/game-of-thrones-92acb30ilmkjbmu9.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://seeklogo.com/images/H/hbo-max-logo-8BD26F0EE7-seeklogo.com.png" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Game of Thrones | Official Series Trailer (HBO)
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://static.tnn.in/thumb/msid-97025693,thumbsize-109474,width-1280,height-720,resizemode-75/97025693.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://pbs.twimg.com/media/Fth6aQMXwQEb4NU.jpg" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                The Last of Us | Official Trailer | Max
                </h6>
            </div>
          </div>


          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://topleadindia.com/wp-content/uploads/2019/10/hrithik-war-thumb.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://logowik.com/content/uploads/images/sony-music-entertainment1999.jpg" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                WAR | Trailer | Hrithik Roshan | Tiger Shroff | Vaani Kapoor 
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="data:image/png;base64,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" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Grand Theft Auto V Trailer 
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Mojang_Studios_logo_2020.svg/1200px-Mojang_Studios_logo_2020.svg.png" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                I Built an EVERY Colour Biome in Minecraft Hardcore! 
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://www.hinditracks.in/wp-content/uploads/2017/07/hawayein.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://logowik.com/content/uploads/images/sony-music-entertainment1999.jpg" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Hawayein Lyric Video - Jab Harry Met Sejal 
                </h6>
            </div>
          </div>

          <div style={{width:'25rem'}} className='me-3 mb-5'>
            <div className='overflow-hidden' style={{height:'225px'}}>
              <img src="https://cdn1.epicgames.com/hellebore/offer/GameName_Edition_Capsule_1920X1080-1920x1080-3131a5c2e251c88843f63801db17885ae66ca44b.jpg" width='100%' className='rounded'/>
            </div>
            <div className='d-flex flex-row align-items-center mt-3'>

                <div className='circle-logo me-3'>
                  <img src="https://1000logos.net/wp-content/uploads/2020/07/Ubisoft-Logo-2003.png" alt="" className='logo'/>
                </div>
                <h6 className='text-white'>
                Far Cry 3 - Stranded Trailer [UK]
                </h6>
            </div>
          </div>
           

      </div>
        



  )
}

export default VideoCard