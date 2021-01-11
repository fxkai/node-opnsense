'use strict';

const BaseClient = require('../base');

class NetflowClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/netflow/cacheStats:
     *   get:
     *     summary: Get cache stats
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    /**
     * Get cache stats
     *
     * @returns {Promise} Request promise
     */
    async cacheStats () {
        return this.client.get('/diagnostics/netflow/cacheStats');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/getconfig:
     *   get:
     *     summary: Get config
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    /**
     * Get config
     *
     * @returns {Promise} Request promise
     */
    async getconfig () {
        return this.client.get('/diagnostics/netflow/getconfig');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/isEnabled:
     *   get:
     *     summary: Check enabled
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    /**
     * Check enabled
     *
     * @returns {Promise} Request promise
     */
    async isEnabled () {
        return this.client.get('/diagnostics/netflow/isEnabled');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/reconfigure:
     *   get:
     *     summary: Reconfigure
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    /**
     * Reconfigure
     *
     * @returns {Promise} Request promise
     */
    async reconfigure () {
        return this.client.get('/diagnostics/netflow/reconfigure');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/setconfig:
     *   get:
     *     summary: Set config
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    /**
     * Set config
     *
     * @returns {Promise} Request promise
     */
    async setconfig () {
        return this.client.get('/diagnostics/netflow/setconfig');
    }

    /**
     * @openapi
     *
     * /diagnostics/netflow/status:
     *   get:
     *     summary: Get status
     *     tags:
     *       - diagnostics/netflow
     *     produces:
     *       - application/json
     */
    /**
     * Get status
     *
     * @returns {Promise} Request promise
     */
    async status () {
        return this.client.get('/diagnostics/netflow/status');
    }
}

module.exports = NetflowClient;
