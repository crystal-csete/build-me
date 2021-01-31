
exports.up = function(knex) {
  return knex.schema
  .createTable('roles', tbl => {
      tbl.increments()

      tbl.string('name', 128).notNullable().unique();
  })
  .createTable('diners', tbl => {
      tbl.increments()

      tbl.string('username', 128).notNullable().unique().index();
      tbl.string('password', 256).notNullable();

      tbl
      .integer('role')
      .unsigned()
      .references('roles.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      .defaultTo(2);
  })
  .createTable('operator', tbl => {
    tbl.increments()

    tbl.string('username', 128).notNullable().unique().index()
    tbl.string('password', 256).notNullable()
    tbl.string('owned_trucks')

    tbl
      .integer('role')
      .unsigned()
      .references('roles.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      .defaultTo(2);
  })
  .createTable('trucks', tbl => {
    tbl.increments()

    tbl.string('truck_name')
    tbl.string('description')
    tbl.string('imageUrl')

    tbl.integer('price_range').unsigned()
    tbl.integer('customer_rating').unsigned()
    tbl.integer('avg_customer_rating').unsigned()

    tbl.string('location')
    tbl.string('departure_time')
  })
  .createTable('menu', tbl => {
    tbl.increments()

    tbl.string('menu_item_name')
    tbl.string('description')
    tbl.string('imageUrl')
  
    tbl.integer('menu_price').unsigned()
    tbl.integer('customer_rating').unsigned()
    tbl.integer('avg_customer_rating').unsigned()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('roles')
  .dropTableIfExists('diners')
  .dropTableIfExists('operator')
  .dropTableIfExists('trucks')
  .dropTableIfExists('menu')
};



