var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.mysqlDS;

dataSource.automigrate('funds', function(err) {
  if (err) throw err;
  var funds = app.models.funds;
  funds.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('instance', function(err) {
  if (err) throw err;
  var instance = app.models.instance;
  instance.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('inventory', function(err) {
  if (err) throw err;
  var inventory = app.models.inventory;
  inventory.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('items', function(err) {
  if (err) throw err;
  var items = app.models.items;
  items.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('items_inventory', function(err) {
  if (err) throw err;
  var items_inventory = app.models.items_inventory;
  items_inventory.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('project', function(err) {
  if (err) throw err;
  var project = app.models.project;
  project.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('project_instance', function(err) {
  if (err) throw err;
  var project_instance = app.models.project_instance;
  project_instance.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('project_sector', function(err) {
  if (err) throw err;
  var project_sector = app.models.project_sector;
  project_sector.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('project_staff', function(err) {
  if (err) throw err;
  var project_staff = app.models.project_staff;
  project_staff.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('staff', function(err) {
  if (err) throw err;
  var staff = app.models.staff;
  staff.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});

dataSource.automigrate('volunteer', function(err) {
  if (err) throw err;
  var volunteer = app.models.volunteer;
  volunteer.create(function(err) {
      if (err) return console.log(err);
        dataSource.disconnect();
      });
});