const sales = [
    {
      user_id: 1,
      seller_id: 1,
      total_price: 100.00,
      delivery_address: '123 Main St.',
      delivery_number: 'Apt 2',
      sale_date: new Date(),
      status: 'pending',
    },
    {
      user_id: 1,
      seller_id: 2,
      total_price: 50.00,
      delivery_address: '456 Elm St.',
      delivery_number: 'Unit B',
      sale_date: new Date(),
      status: 'completed',
    },
    {
      user_id: 1,
      seller_id: 1,
      total_price: 75.00,
      delivery_address: '789 Oak St.',
      delivery_number: 'Suite 3',
      sale_date: new Date(),
      status: 'cancelled',
    },
    {
      user_id: 2,
      seller_id: 2,
      total_price: 125.00,
      delivery_address: '1011 Maple St.',
      delivery_number: 'Apt 4C',
      sale_date: new Date(),
      status: 'pending',
    },
    {
      user_id: 3,
      seller_id: 1,
      total_price: 200.00,
      delivery_address: '1213 Pine St.',
      delivery_number: 'Unit 5',
      sale_date: new Date(),
      status: 'completed',
    },
    {
      user_id: 3,
      seller_id: 2,
      total_price: 80.00,
      delivery_address: '1415 Cedar St.',
      delivery_number: 'Suite 6',
      sale_date: new Date(),
      status: 'cancelled',
    },
    {
      user_id: 3,
      seller_id: 1,
      total_price: 150.00,
      delivery_address: '1617 Spruce St.',
      delivery_number: 'Apt 7',
      sale_date: new Date(),
      status: 'pending',
    },
    {
      user_id: 3,
      seller_id: 2,
      total_price: 90.00,
      delivery_address: '1819 Birch St.',
      delivery_number: 'Unit 8',
      sale_date: new Date(),
      status: 'completed',
    },
    {
      user_id: 3,
      seller_id: 1,
      total_price: 175.00,
      delivery_address: '2021 Oak St.',
      delivery_number: 'Suite 9',
      sale_date: new Date(),
      status: 'cancelled',
    },
    {
      user_id: 3,
      seller_id: 2,
      total_price: 60.00,
      delivery_address: '2223 Maple St.',
      delivery_number: 'Apt 10B',
      sale_date: new Date(),
      status: 'pending',
    },
    {
      user_id: 3,
      seller_id: 1,
      total_price: 90.00,
      delivery_address: '2425 Pine St.',
      delivery_number: 'Unit 11',
      sale_date: new Date(),
      status: 'completed',
    },
    {
      user_id: 3,
      seller_id: 2,
      total_price: 100.00,
      delivery_address: '2627 Cedar St.',
      delivery_number: 'Suite 12',
      sale_date: new Date(),
      status: 'cancelled',
    },
  ];

const insertSale = async (queryInterface, sale) => {
  await queryInterface.bulkInsert('sales', [sale], {});
};

module.exports = {
  up: async (queryInterface) => {
    await Promise.all(sales.map((product) => insertSale(queryInterface, product)));
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
