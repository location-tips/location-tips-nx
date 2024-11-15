import 'knex';

declare module 'knex' {
  namespace Knex {
    interface SchemaBuilder {
      enableExtension(extension: string): Knex.SchemaBuilder;
    }
    interface TableBuilder {
      vector(name: string, dimension: number): Knex.TableBuilder;
    }
    // interface ViewBuilder {
    //   functionName(): Knex.ViewBuilder;
    // }
    // interface ColumnBuilder {
    //   functionName(): Knex.ColumnBuilder;
    // }
  }
}
