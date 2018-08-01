
exports.up = function(knex, Promise) {
	// console.log('table');
	return knex.schema.createTable('user', function (t) {
    t.increments('id').primary()
    t.string('username').notNullable()
    t.string('city').notNullable()
    t.string('password').notNullable()
    t.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};