
exports.up = function(knex) {
    return knex.schema.createTable("infomation", function (table) {
        table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
        table.string("day", 255).notNullable();
        table.string("minh", 255).notNullable();
        table.string("phuong", 255).notNullable();
        table.string("nhung", 255).notNullable();
        table.string("hien", 255).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("infomation");
};
