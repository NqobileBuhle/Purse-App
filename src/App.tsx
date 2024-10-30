import { FilterDay } from './Components/FilterDay'
import TransactionsReport from './Pages/TransactionsReport';
import AddTransaction from './Components/AddTransaction';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

const App = () => {
  const currentUser = {
    name: "Elizabeth Gatalskaya",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s",
  };
  return (
    <div className='App'>
      <SignUp/>
      <SignIn/>
      <FilterDay currentUser= {currentUser} />
      <TransactionsReport/>
      <AddTransaction/>
      
    </div>
  )
}

export default App;
