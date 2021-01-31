const db = require("../../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("diners as d")
    .join("roles as r", "d.role", "=", "r.id")
    .select("d.id", "d.username", "r.name as role");
}

function findBy(filter) {
  return db("diners as d")
    .join("roles as r", "d.role", "=", "r.id")
    .select("d.id", "d.username", "r.name as role", "d.password")
    .where(filter);
}

async function add(diner) {
  const [id] = await db("diners").insert(diner, "id");
  return findById(id);
}

function findById(id) {
  return db("diners as d")
    .join("roles as r", "d.role", "=", "r.id")
    .select("d.id", "d.username", "r.name as role")
    .where("d.id", id)
    .first();
}
