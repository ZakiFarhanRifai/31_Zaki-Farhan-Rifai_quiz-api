module.exports= (sequelize, Sequelize)=>{
  const User = sequelize.define('User', {
     username: {
         type: Sequelize.STRING,
         allowNull: false, // tambahkan validasi jika diperlukan
     },
     email: {
         type: Sequelize.STRING,
         allowNull: false,
         unique: true, // tambahkan validasi jika diperlukan
     },
     password: {
         type: Sequelize.STRING,
         allowNull: false,
     },
 }, {
     timestamps: true,
 });
 return User
 
 }