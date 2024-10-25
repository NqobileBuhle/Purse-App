


// types.ts
export interface Transaction {
    id: number;
    description: string;
    amount: number;
    type: 'income' | 'expense';
    category: string;
  }
  
  export interface AddTransactionProps {
    onAddTransaction: (transaction: Transaction) => void;
  }
  