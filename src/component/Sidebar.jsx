import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="top-sidebar">
        <div className="top-sidebar-logo">

            LOGO 
        </div>

        <div className='top-sidebar-menu-bars'>
          <div className="menu">
            Overview
          </div>
          <div className="menu">
            Onboarding
          </div>
          <div className="menu active">
            Monitoring
          </div>
          <div className="menu">
            Flagging
          </div>
          <div className="menu">
            Source of Income
          </div>
          <div className="menu">
            UAR
          </div>
        </div>


    </div>
    <div className="bottom-sidebar">
        <img src='https://as2.ftcdn.net/v2/jpg/02/19/63/31/1000_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg' alt='profile'/>
        <div className="bottom-sidebar-details">
          <div className="details-name">Elon Musk</div>
          <div className="details-email">
            elon@twitter.com
          </div>
        </div>
    </div>
  </div>
  )
}

export default Sidebar