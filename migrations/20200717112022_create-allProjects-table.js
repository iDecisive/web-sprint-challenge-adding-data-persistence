
exports.up = function(knex) {
  return knex.schema
		.createTable('project', (tbl) => {
			tbl.increments();
			tbl.text('name').notNullable().unique();
			tbl.text('description');
			tbl.boolean('completed').notNullable().defaultTo(false);
		})
		.createTable('task', (tbl) => {
			tbl.increments();
			tbl.text('description').notNullable();
			tbl.text('notes');
			tbl.boolean('completed').notNullable().defaultTo(false);
			tbl
				.integer('projectID')
				.unsigned()
				.notNullable()
				.references('project.id');
		})
		.createTable('resource', (tbl) => {
			tbl.increments();
			tbl.text('name').notNullable().unique();
			tbl.text('description');
		})
		.createTable('projectResourceJunction', (tbl) => {
			tbl.increments(); //Needed here?
			tbl
				.integer('projectID')
				.unsigned()
				.notNullable()
				.references('project.id');
			tbl
				.integer('resourceID')
				.unsigned()
				.notNullable()
				.references('resource.id');
		});
};

exports.down = function(knex) {
  	return knex.schema
			.dropTableIfExists('projectResourceJunction')
			.dropTableIfExists('resource')
			.dropTableIfExists('task')
			.dropTableIfExists('project');
};
