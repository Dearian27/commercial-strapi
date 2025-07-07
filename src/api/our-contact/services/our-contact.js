'use strict';

/**
 * our-contact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-contact.our-contact');
