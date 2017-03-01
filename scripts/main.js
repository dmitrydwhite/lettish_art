'use strict';

require('handlebars');

var pieces = require('./pieces.json');

var galleryItem = $(gallery).html();

var galleryTemplate = Handlebars.compile(galleryItem);

$('#app').append(galleryTemplate(pieces));

