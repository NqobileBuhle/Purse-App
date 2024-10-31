import React, { useState, useEffect } from 'react';
import ProfilePage from './Components/ProfilePage'
import Sidebar from './Components/sidebar'

function UserSettings() {
  // Check local storage for theme preference
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Add or remove the `dark` class based on the theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save theme choice in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
     <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <button 
                onClick={toggleTheme}
                className="pl-[50rem] p-2 bg-gray-800 text-white rounded-lg dark:bg-gray-200 dark:text-black"
            >
                Toggle Theme
            </button>
             <Sidebar/>
          <ProfilePage/>
        </div>
   
  )
}

export default UserSettings