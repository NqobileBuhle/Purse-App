import React, { useState, useEffect } from 'react';
import ProfilePage from './Components/ProfilePage'
import Sidebar from './Components/sidebar'

function UserSettings() {


  return (
     <div className="">
        
             <Sidebar/>
          <ProfilePage/>
        </div>
   
  )
}

export default UserSettings