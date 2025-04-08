import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  database: 'footwear_db',
  username: 'web-sepatu-111',
  password: 'P0qPrQoo0SLOsB',
  host: '34.46.53.84',
  dialect: 'mysql',
  port: 3306,
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

// Test koneksi
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected successfully to MySQL!');
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    console.log('\n🔍 Troubleshooting Steps:');
    console.log('1. Pastikan IP Cloud Run diizinkan di Authorized Networks MySQL.');
    console.log('2. Coba koneksi manual: mysql -h 34.46.53.84 -u web-sepatu-111 -p');
    console.log('3. Jika pakai Cloud SQL, coba koneksi dengan Cloud SQL Proxy.');
    console.log('4. Tes port dengan: nc -vz 34.46.53.84 3306');
    console.log('5. Jika pakai VPC Connector, pastikan firewall memperbolehkan koneksi ke 3306.');
  }
})();

export { sequelize, DataTypes };
