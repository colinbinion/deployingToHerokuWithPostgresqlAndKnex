
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('amphibians').del(),

    // Inserts seed entries
    knex('amphibians').insert({id: 1, type: 'frog'}),
    knex('amphibians').insert({id: 2, type: 'salamander'}),
    knex('amphibians').insert({id: 3, type: 'newt'})
  );
};
