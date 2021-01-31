const db = require("../../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
   return db('trucks');
}

function findBy(filter) {
  return db('trucks').where(filter);
}

async function add(truck, operatorId) {
    const newTruck = {
      ...truck,
      operator_id: operatorId
    };
    await db('trucks').insert(newTruck)
    return find()
  }

function findById(id) {
  
}