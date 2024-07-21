const transactionData = [
    {
      "amount": 1200,
      "date": "2024-06-01",
      "time": "09:00",
      "timestamp": "2024-06-01T09:00:00.000Z",
      "category": "Housing",
      "subcategory": "Rent",
      "description": "Monthly rent payment",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f1"]
    },
    {
      "amount": 150,
      "date": "2024-06-02",
      "time": "12:00",
      "timestamp": "2024-06-02T12:00:00.000Z",
      "category": "Utilities",
      "subcategory": "Electricity",
      "description": "Electricity bill payment",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f2"]
    },
    {
      "amount": 300,
      "date": "2024-06-03",
      "time": "18:00",
      "timestamp": "2024-06-03T18:00:00.000Z",
      "category": "Food",
      "subcategory": "Groceries",
      "description": "Weekly groceries",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f3"]
    },
    {
      "amount": 50,
      "date": "2024-06-04",
      "time": "08:00",
      "timestamp": "2024-06-04T08:00:00.000Z",
      "category": "Transportation",
      "subcategory": "Fuel",
      "description": "Gas for car",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f4"]
    },
    {
      "amount": 75,
      "date": "2024-06-05",
      "time": "15:00",
      "timestamp": "2024-06-05T15:00:00.000Z",
      "category": "Healthcare",
      "subcategory": "Medicine",
      "description": "Prescription medicines",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f5"]
    },
    {
      "amount": 200,
      "date": "2024-06-06",
      "time": "10:00",
      "timestamp": "2024-06-06T10:00:00.000Z",
      "category": "Insurance",
      "subcategory": "Health Insurance",
      "description": "Monthly health insurance",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f6"]
    },
    {
      "amount": 60,
      "date": "2024-06-07",
      "time": "19:00",
      "timestamp": "2024-06-07T19:00:00.000Z",
      "category": "Entertainment",
      "subcategory": "Movies",
      "description": "Movie night with friends",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f7"]
    },
    {
      "amount": 40,
      "date": "2024-06-08",
      "time": "16:00",
      "timestamp": "2024-06-08T16:00:00.000Z",
      "category": "Recreation",
      "subcategory": "Gym",
      "description": "Monthly gym membership",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f8"]
    },
    {
      "amount": 500,
      "date": "2024-06-09",
      "time": "11:00",
      "timestamp": "2024-06-09T11:00:00.000Z",
      "category": "Travel",
      "subcategory": "Flight",
      "description": "Flight ticket to New York",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4f9"]
    },
    {
      "amount": 100,
      "date": "2024-06-10",
      "time": "13:00",
      "timestamp": "2024-06-10T13:00:00.000Z",
      "category": "Shopping",
      "subcategory": "Clothes",
      "description": "New clothes shopping",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4fa"]
    },
    {
      "amount": 200,
      "date": "2024-06-11",
      "time": "14:00",
      "timestamp": "2024-06-11T14:00:00.000Z",
      "category": "Debt Payments",
      "subcategory": "Credit Card",
      "description": "Credit card payment",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4fb"]
    },
    {
      "amount": 300,
      "date": "2024-06-12",
      "time": "17:00",
      "timestamp": "2024-06-12T17:00:00.000Z",
      "category": "Savings & Investments",
      "subcategory": "Stocks",
      "description": "Investment in stocks",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4fc"]
    },
    {
      "amount": 100,
      "date": "2024-06-13",
      "time": "09:00",
      "timestamp": "2024-06-13T09:00:00.000Z",
      "category": "Family",
      "subcategory": "Childcare",
      "description": "Daycare fees",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4fd"]
    },
    {
      "amount": 50,
      "date": "2024-06-14",
      "time": "15:00",
      "timestamp": "2024-06-14T15:00:00.000Z",
      "category": "Gifts & Donations",
      "subcategory": "Birthday Gift",
      "description": "Gift for friend's birthday",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4fe"]
    },
    {
      "amount": 30,
      "date": "2024-06-15",
      "time": "10:00",
      "timestamp": "2024-06-15T10:00:00.000Z",
      "category": "Personal Care",
      "subcategory": "Haircut",
      "description": "Haircut at salon",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef4ff"]
    },
    {
      "amount": 20,
      "date": "2024-06-16",
      "time": "08:00",
      "timestamp": "2024-06-16T08:00:00.000Z",
      "category": "Miscellaneous",
      "subcategory": "Stationery",
      "description": "Office supplies",
      "type": "Expense",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef500"]
    },
    {
      "amount": 2500,
      "date": "2024-06-17",
      "time": "12:00",
      "timestamp": "2024-06-17T12:00:00.000Z",
      "category": "Income",
      "subcategory": "Salary",
      "description": "Monthly salary",
      "type": "Income",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef501"]
    },
    {
      "amount": 200,
      "date": "2024-06-18",
      "time": "14:00",
      "timestamp": "2024-06-18T14:00:00.000Z",
      "category": "Income",
      "subcategory": "Freelance",
      "description": "Freelance project payment",
      "type": "Income",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef502"]
    },
    {
      "amount": 50,
      "date": "2024-06-19",
      "time": "11:00",
      "timestamp": "2024-06-19T11:00:00.000Z",
      "category": "Income",
      "subcategory": "Gift",
      "description": "Gift from a friend",
      "type": "Income",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef503"]
    },
    {
      "amount": 150,
      "date": "2024-06-20",
      "time": "10:00",
      "timestamp": "2024-06-20T10:00:00.000Z",
      "category": "Income",
      "subcategory": "Investment",
      "description": "Investment return",
      "type": "Income",
      "attachment": "",
      "contributors": ["60c72b2f9b1d4b3d88aef504"]
    }
  ]

  export{
    transactionData
  }