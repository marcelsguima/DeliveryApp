module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
      },
    });

    await queryInterface.addColumn('sales', 'delivery_address', {
      type: Sequelize.STRING(100),
    });

    await queryInterface.addColumn('sales', 'delivery_number', {
      type: Sequelize.STRING(50),
    });

    await queryInterface.addColumn('sales', 'sale_date', {
      type: Sequelize.DATE,
    });

    await queryInterface.addColumn('sales', 'status', {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn('sales', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    });

    await queryInterface.addColumn('sales', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    });

    await queryInterface.addConstraint('sales', {
      type: 'foreign key',
      name: 'sales_user_id_fk',
      fields: ['user_id'],
      references: {
        table: 'users',
        field: 'id',
      },
    });

    await queryInterface.addConstraint('sales', {
      type: 'foreign key',
      name: 'sales_seller_id_fk',
      fields: ['seller_id'],
      references: {
        table: 'users',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  },
};
