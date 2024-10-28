import { FilterDay } from './Components/FilterDay'

const App = () => {
  const currentUser = {
    name: "Elizabeth Gatalskaya",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s",
  };
  return (
    <div className='App'>
      <FilterDay currentUser= {currentUser} />
    </div>
  )
}

export default App


