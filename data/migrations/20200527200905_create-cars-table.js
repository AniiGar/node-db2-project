exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.text('make')
            .notNullable();

        tbl.text('model')
            .notNullable();

        tbl.text('vin')
            .unique()
            .notNullable();

        tbl.integer('mileage')
            .notNullable();

        tbl.text('transmission');

        tbl.text('title_status');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
