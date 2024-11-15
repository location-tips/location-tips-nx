import Knex from 'knex';
import { toSql, vectorType, halfvecType, sparsevecType } from 'pgvector/utils';

Knex.SchemaBuilder.extend('enableExtension', function (name) {
  return this.raw(`CREATE EXTENSION IF NOT EXISTS '${name}'`);
});

Knex.TableBuilder.extend('vector', function (name, options) {
  const dimensions =
    options && (Number.isInteger(options) ? options : options.dimensions);
  return this.specificType(name, vectorType(dimensions));
});

Knex.TableBuilder.extend('halfvec', function (name, options) {
  const dimensions =
    options && (Number.isInteger(options) ? options : options.dimensions);
  return this.specificType(name, halfvecType(dimensions));
});

Knex.TableBuilder.extend('sparsevec', function (name, options) {
  const dimensions =
    options && (Number.isInteger(options) ? options : options.dimensions);
  return this.specificType(name, sparsevecType(dimensions));
});

Knex.QueryBuilder.extend('l2Distance', function (column, value) {
  return this.client.raw('?? <-> ?', [column, toSql(value)]);
});

Knex.QueryBuilder.extend('maxInnerProduct', function (column, value) {
  return this.client.raw('?? <#> ?', [column, toSql(value)]);
});

Knex.QueryBuilder.extend('cosineDistance', function (column, value) {
  return this.client.raw('?? <=> ?', [column, toSql(value)]);
});

Knex.QueryBuilder.extend('l1Distance', function (column, value) {
  return this.client.raw('?? <+> ?', [column, toSql(value)]);
});

Knex.QueryBuilder.extend('hammingDistance', function (column, value) {
  return this.client.raw('?? <~> ?', [column, value]);
});

Knex.QueryBuilder.extend('jaccardDistance', function (column, value) {
  return this.client.raw('?? <%> ?', [column, value]);
});

export default Knex;
