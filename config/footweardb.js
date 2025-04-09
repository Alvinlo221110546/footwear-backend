import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  database: 'footwear_db',
  username: 'web-sepatu-111',
  password: 'P0qPrQoo0SLOsB',
  host: '34.101.89.195',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
  retry: {
    max: 5,
    timeout: 6000,
    match: [/ETIMEDOUT/, /ECONNRESET/, /ECONNREFUSED/],
  },
  logging: (msg) => console.log('[Sequelize Log]', msg),
});

// Test koneksi dengan error handling lengkap
(async () => {
  try {
    console.log('🔌 Attempting to connect to the database...');
    await sequelize.authenticate();
    console.log('✅ Connected successfully to MySQL!');
    console.log('📍 Details:');
    console.log('   ↳ Database:', sequelize.config.database);
    console.log('   ↳ Host:', sequelize.config.host);
    console.log('   ↳ Port:', sequelize.config.port);
  } catch (err) {
    console.error('\n❌ Failed to connect to MySQL!');
    console.error('🧩 Error Details:');
    console.error(`   - Name: ${err.name}`);
    console.error(`   - Message: ${err.message}`);
    console.error(`   - Code: ${err.code || 'N/A'}`);
    console.error(`   - SQL State: ${err.sqlState || 'N/A'}`);

    console.error('\n🔧 Config Used:');
    console.error(`   - Host: ${sequelize.config.host}`);
    console.error(`   - Port: ${sequelize.config.port}`);
    console.error(`   - DB: ${sequelize.config.database}`);
    console.error(`   - User: ${sequelize.config.username}`);

    if (err.original) {
      console.error('\n🛠 Original Error:');
      console.error(`   - Code: ${err.original.code || 'N/A'}`);
      console.error(`   - Errno: ${err.original.errno || 'N/A'}`);
      console.error(`   - SQL Message: ${err.original.sqlMessage || 'N/A'}`);
      console.error(`   - SQL: ${err.original.sql || 'N/A'}`);
    }
  }
})();

export { sequelize, DataTypes };
