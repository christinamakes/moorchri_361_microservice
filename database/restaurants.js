const db = require('./db');
const helper = require('../helper');
const config = require('./config');

async function getAllRestaurants(){
  const offset = helper.getOffset(config.listPerPage);
  const rows = await db.query(
    `SELECT GROUP_CONCAT(res_name ORDER BY res_name DESC) as Restaurants FROM Restaurants`
  );
  const data = helper.emptyOrRows(rows);
    db.release()
  return data[0]
}

async function compare(restaurant){
    const rows = await db.query(
      `SELECT res_name FROM Restaurants WHERE res_name=("${restaurant.name}")`
    );
    db.release()
    return rows[0]
  }

async function create(restaurant){
    const result = await db.query(
        `INSERT INTO Restaurants(res_name) VALUES ("${restaurant.name}")`
      );
  
    let message = 'Error';
  
    if (result.affectedRows) {
      message = 'Created successfully';
    }
    db.release()
    return {message};
  }

  async function remove(restaurant){
    const result = await db.query(
      `DELETE FROM Restaurants WHERE res_name='${restaurant.name}'`
    );
  
    let message = 'Error';
  
    if (result.affectedRows) {
      message = 'Deleted successfully';
    }
    db.release()
    return {message};
  }

  async function removeAll(){
    const result = await db.query(
      `DELETE FROM Restaurants;`
    );
  
    let message = 'Error';
  
    if (result.affectedRows) {
      message = 'Deleted successfully';
    }
    db.release()
    return {message};
  }

module.exports = {
    getAllRestaurants,
    create,
    remove,
    compare,
    removeAll
}