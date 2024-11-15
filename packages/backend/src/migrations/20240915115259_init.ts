import { vectorType } from 'pgvector/utils';

import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS vector');
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS cube');
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS earthdistance');

  await knex.schema.createTable('images', (table) => {
    table.string('id').primary();
    table.string('original').notNullable();
    table.string('small');
    table.string('medium');
    table.text('description').notNullable();
    table.jsonb('exif');
  });

  await knex.schema.createTable('locations', (table) => {
    table.increments('id').primary();
    table.string('uid').primary();
    table.string('title').notNullable();
    table.string('type');
    table.text('description');
    table.text('userDescription');
    table.string('keywords', 500);
    table.string('image').references('id').inTable('images');
    table.string('locationName');
    table.string('geohash').notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.float('altitude').notNullable();
    table.specificType('embedding', vectorType(768));
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('locations');
  knex.schema.dropTable('images');
}
