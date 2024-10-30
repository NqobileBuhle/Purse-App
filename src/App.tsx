import React from 'react';
import SignUp from './Components/SignUp';
// import AddTransaction from './Components/AddTransaction';

const App = () => {
  const currentUser = {
    name: "Elizabeth Gatalskaya",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s",
  };
  return (
    <div>
      <SignUp/>
      {/* <AddTransaction/> */}
      
    </div>
  )
}

export default App



