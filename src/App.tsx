// import SignUp from './Components/SignUp';
// import AddTransaction from './Components/AddTransaction';
// import { Transaction } from './Components/types';
import TransactionDashboard from './Components/AddTransaction';

const App = () => {
  return (
    <div>
      {/* <SignUp/> */}
      {/* <AddTransaction onAddTransaction={function (_transaction: Transaction): void {
        throw new Error('Function not implemented.');
      } }/> */}
      <TransactionDashboard/>
      
    </div>
  );
}

export default App;


