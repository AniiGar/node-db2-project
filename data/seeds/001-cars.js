
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, make: 'Audi', model: 'A6', vin: 'ASDF1234', mileage: 86789, transmission: 'Auto', title_status: 'Clean'},
        {id: 2, make: 'Ford', model: 'Escort', vin: 'jklh7890', mileage: 150230, transmission: 'Manual'},
        {id: 3, make: 'Acura', model: 'TL', vin: 'qwerty789', mileage: 109398}
      ]);
    });
};
