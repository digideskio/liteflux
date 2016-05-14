/**
 * Copyright (c) Mainflux
 *
 * Liteflu is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

var lwm2m   = require ('../');
var coap    = require ('coap');

var server = lwm2m.server();

server.start();


