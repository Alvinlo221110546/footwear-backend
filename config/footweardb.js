import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'footwear_db',
  username: process.env.DB_USER || 'web-sepatu-111',
  password: process.env.DB_PASS || 'P0qPrQoo0SLOsB',
  host: process.env.DB_HOST || '34.46.53.84', 
  dialect: 'mysql',
  port: process.env.DB_PORT || 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    connectTimeout: 10000,
  },
  logging: false,
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
    
    console.log('\n🔧 Troubleshooting Steps:');
    console.log('1. Check network connectivity to host:', sequelize.config.host);
    console.log('2. Verify credentials and permissions for user:', sequelize.config.username);
    console.log('3. Check if MySQL is running on port:', sequelize.config.port);
    console.log('4. Test with command:');
    console.log(`   mysql -h ${sequelize.config.host} -u ${sequelize.config.username} -p${sequelize.config.password.replace(/./g, '*')} -P ${sequelize.config.port} ${sequelize.config.database}`);
    
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