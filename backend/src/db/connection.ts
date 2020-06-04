import Knex from 'knex';
import  path from   'path';

const connection = Knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'db.sqlite')
    }
})
export default connection