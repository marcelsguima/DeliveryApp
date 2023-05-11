const order1 = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
  },
  {
    id: 4,
    name: 'Brahma 600ml',
    price: 7.50,
  }];

const order2 = [
  {
    id: 5,
    name: 'Skol 269ml',
    price: 2.19,
  },
  {
    id: 6,
    name: 'Skol Beats Senses 313ml',
    price: 4.49,
  },
  {
    id: 7,
    name: 'Becks 330ml',
    price: 4.99,
  },
  {
    id: 8,
    name: 'Brahma Duplo Malte 350ml',
    price: 2.79,
  }];

const order3 = [
  {
    id: 9,
    name: 'Becks 600ml',
    price: 8.89,
  },
  {
    id: 10,
    name: 'Skol Beats Senses 269ml',
    price: 3.57,
  },
  {
    id: 11,
    name: 'Stella Artois 275ml',
    price: 3.49,
  },
];

const allOrders = [
  {
    order_id: 1,
    order_status: 'Pendente',
    order_date: '2020-11-11T00:00:00.000Z',
    order_value: 420.69,
    order_address: 'Rua dos Bobos, 0',
  },
  {
    order_id: 2,
    order_status: 'Enviado',
    order_date: '2020-11-12T00:00:00.000Z',
    order_value: 99.99,
    order_address: 'Avenida Paulista, 123',
  },
  {
    order_id: 3,
    order_status: 'Entregue',
    order_date: '2020-11-13T00:00:00.000Z',
    order_value: 799.99,
    order_address: 'Rua Augusta, 456',
  },
  {
    order_id: 4,
    order_status: 'Cancelado',
    order_date: '2020-11-14T00:00:00.000Z',
    order_value: 55.55,
    order_address: 'Praça da Sé, 789',
  },
];
export { order1, order2, order3, allOrders };
