const db = require('./db');
const helper = require('../helper');
const config = require('./config');

async function getAllRestaurants(){
  const offset = helper.getOffset(config.listPerPage);
  const rows = await db.query(
    `SELECT GROUP_CONCAT(res_name) as Restaurants FROM Restaurants`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(restaurant){
    const result = await db.query(
        `INSERT INTO Restaurants(res_name) VALUES ("${restaurant.name}")`
      );
  
    let message = 'Error';
  
    if (result.affectedRows) {
      message = 'Created successfully';
    }
    console.log('post')
    return {message};
  }

module.exports = {
    getAllRestaurants,
    create
}