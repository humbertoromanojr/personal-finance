import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Rental',
          type: 'withdraw',
          category: 'Home',
          amount: 500,
          createdAt: new Date('2021-08-10 09:00:00'),
        },
        {
          id: 2,
          title: 'Internet',
          type: 'withdraw',
          category: 'Home',
          amount: 150,
          createdAt: new Date('2021-08-10 09:00:00'),
        },
        {
          id: 3,
          title: 'NuBank',
          type: 'withdraw',
          category: 'Home',
          amount: 1150,
          createdAt: new Date('2021-08-22 12:00:00'),
        },
        {
          id: 4,
          title: 'Freelance de App',
          type: 'deposit',
          category: 'Freela',
          amount: 8700,
          createdAt: new Date('2021-01-12 09:00:00'),
        },
        {
          id: 5,
          title: 'Card Vee',
          type: 'deposit',
          category: 'Work',
          amount: 1057,
          createdAt: new Date('2021-01-12 09:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')      
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

