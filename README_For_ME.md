# First step is the initialization server

1.1 npm i -g @nestjs/cli
1.2 We have to check instalation nest to us computer with help command nest -h
1.3 nest new server
1.4 Write command in ther folder - src nest g mo users, src nest g co users, nest g service users

# Second step we install sequelize for connect server with database

2.1 npm i sequelize sequelize-cli sequelize-typescript @nestjs/sequelize

# Third step is we should write config files for connect to the mariadb and create table for database
# 4 create folder dto. We write data to the dto that will define data for entinity or his change
# 5 For work with session we install passport passport-local @nestjs/passport
# This package use on the server

# 6 Create documentation Swagger

6.1 npm i @nestjs/swagger

# 7 Create table boiler parts

7.1 nest g mo boiler-parts
7.2 nest g co boiler-parts
7.3 nest g service boiler-parts

# 8 MIGRATIONS https://sequelize.org/docs/v6/other-topics/migrations/

8.1 npx sequelize-cli init
8.2 Execute the model generation command
8.3 npx sequelize-cli model:generate --name BoilerParts --attributes name:string
8.4 npx sequelize-cli db:migrate
8.5 npx sequelize-cli seed:generate --name boiler-parts
8.6 npx sequelize-cli db:migrate
8.7 npx sequelize-cli db:seed:all