import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  // public getBalance({ income, outcome, total }: Balance): Balance {
  //   const value = this.transactions.reduce(
  //     (income, outcome) => income + outcome;
  //   );

  //   return value;
  // }

  public create({ title, value, type }: RequestDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
