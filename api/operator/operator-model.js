const db = require("../../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("operators as o")
    .join("roles as r", "o.role", "=", "r.id")
    .select("o.id", "o.username", "r.name as role");
}

function findBy(filter) {
  return db("operators as o")
    .join("roles as r", "o.role", "=", "r.id")
    .select("o.id", "o.username", "r.name as role", "o.password")
    .where(filter);
}

async function add(operator) {
  const [id] = await db("operators").insert(operator, "id");
  return findById(id);
}

function findById(id) {
  return db("operators as o")
    .join("roles as r", "o.role", "=", "r.id")
    .select("o.id", "o.username", "r.name as role")
    .where("o.id", id)
    .first();
}
