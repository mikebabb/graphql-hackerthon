#!/bin/bash
until mysql -h mysql1 -u root -p Pa$$w0rd! -e 'select 1'; do
        echo "still waiting for mysql"; sleep 1; done

# exec node ./db/scripts/generateSequelizeCLIConfig.js
# exec node_modules/sequelize-cli/bin/sequelize db:migrate
# exec node_modules/sequelize-cli/bin/sequelize db:seed:all
exec npm run db-reset
exec npm start
