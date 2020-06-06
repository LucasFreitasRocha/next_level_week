import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('items', t => {
    t.increments('id').primary();
    t.string('image').notNullable();
    t.string('title').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}