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
    idle: 10000
  },
  dialectOptions: {
    connectTimeout: 60000, 
  },
  retry: {
    max: 5,
    timeout: 6000,
    match: [/ETIMEDOUT/, /ECONNRESET/, /ECONNREFUSED/]
  },
  logging: console.log 
});

// Test koneksi dengan error logging yang lebih detail
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected successfully to MySQL!');
    console.log('   Database:', sequelize.config.database);
    console.log('   Host:', sequelize.config.host);
    console.log('   Port:', sequelize.config.port);
  } catch (err) {
    console.error('❌ Connection failed:', err);
    console.error('\n🔍 Error Details:');
    console.error('- Name:', err.name);
    console.error('- Message:', err.message);
    console.error('- Code:', err.code || 'N/A');
    console.error('- SQL State:', err.sqlState || 'N/A');
    console.error('- Parameters:', {
      host: sequelize.config.host,
      port: sequelize.config.port,
      database: sequelize.config.database,
      username: sequelize.config.username
    });
        
    if (err.original) {
      console.error('\n⚠️ Original Error Details:');
      console.error('- Code:', err.original.code || 'N/A');
      console.error('- Errno:', err.original.errno || 'N/A');
      console.error('- SQL Message:', err.original.sqlMessage || 'N/A');
      console.error('- SQL:', err.original.sql || 'N/A');
    }
  }
})();

export { sequelize, DataTypes };