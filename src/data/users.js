const users = [
  {
    id: 1,
    name: "Success",
    email: "success@gmail.com",
    password: "123456",
    accountNumber: "0123456789",
    balance: 5250000,

    transactions: [
      {
        id: 1,
        type: "debit",
        title: "Netflix Subscription",
        amount: 7500,
        date: "Today • 9:30 AM",
      },
      {
        id: 2,
        type: "credit",
        title: "Salary Payment",
        amount: 500000,
        date: "Yesterday • 8:00 AM",
      },
      {
        id: 3,
        type: "debit",
        title: "Electricity Bill",
        amount: 15000,
        date: "25 June • 2:45 PM",
      },
    ],

    monthlyData: [
      { month: "Jan", income: 800000, expenses: 200000 },
      { month: "Feb", income: 650000, expenses: 180000 },
      { month: "Mar", income: 900000, expenses: 300000 },
      { month: "Apr", income: 700000, expenses: 250000 },
      { month: "May", income: 850000, expenses: 350000 },
      { month: "Jun", income: 950000, expenses: 400000 },
    ],
  },

  {
    id: 2,
    name: "John",
    email: "john@gmail.com",
    password: "john123",
    accountNumber: "1234567890",
    balance: 800000,

    transactions: [
      {
        id: 1,
        type: "credit",
        title: "Transfer from Success",
        amount: 50000,
        date: "Today • 10:20 AM",
      },
    ],

    monthlyData: [
      { month: "Jan", income: 300000, expenses: 80000 },
      { month: "Feb", income: 350000, expenses: 120000 },
      { month: "Mar", income: 400000, expenses: 100000 },
      { month: "Apr", income: 500000, expenses: 140000 },
      { month: "May", income: 450000, expenses: 90000 },
      { month: "Jun", income: 600000, expenses: 180000 },
    ],
  },

  {
    id: 3,
    name: "Mary",
    email: "mary@gmail.com",
    password: "mary123",
    accountNumber: "9876543210",
    balance: 1200000,

    transactions: [
      {
        id: 1,
        type: "credit",
        title: "Salary Payment",
        amount: 400000,
        date: "Yesterday • 9:00 AM",
      },
    ],

    monthlyData: [
      { month: "Jan", income: 450000, expenses: 150000 },
      { month: "Feb", income: 500000, expenses: 120000 },
      { month: "Mar", income: 550000, expenses: 180000 },
      { month: "Apr", income: 600000, expenses: 200000 },
      { month: "May", income: 700000, expenses: 250000 },
      { month: "Jun", income: 750000, expenses: 300000 },
    ],
  },
];

export default users;
