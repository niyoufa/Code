//创建一个基本的管理员用户到test数据库 
db.addUser({user:"testUser",pwd:"test",roles:["readWrite","dbAdmin"]})

