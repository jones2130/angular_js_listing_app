global.jQuery = require('jquery');

require("angular");
require("bootstrap");
require("./modules/listing");
require("./services/listingServices");
require("./filters/listingFilters");

var app = angular.module('listingApp', ['listing.module']);