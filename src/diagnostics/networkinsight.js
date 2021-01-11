'use strict';

const BaseClient = require('../base');

class NetflowInsightClient extends BaseClient {
    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getInterfaces:
     *   get:
     *     summary: Get interfaces
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    /**
     * Get interfaces
     *
     * @returns {Promise} Request promise
     */
    async getInterfaces () {
        return this.client.get('/diagnostics/networkinsight/getInterfaces');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getMetadata:
     *   get:
     *     summary: Get metadata
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    /**
     * Get metadata
     *
     * @returns {Promise} Request promise
     */
    async getMetadata () {
        return this.client.get('/diagnostics/networkinsight/getMetadata');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getProtocols:
     *   get:
     *     summary: Get protocols
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    /**
     * Get protocols
     *
     * @returns {Promise} Request promise
     */
    async getProtocols () {
        return this.client.get('/diagnostics/networkinsight/getProtocols');
    }

    /**
     * @openapi
     *
     * /diagnostics/networkinsight/getServices:
     *   get:
     *     summary: Get services
     *     tags:
     *       - diagnostics/networkinsight
     *     produces:
     *       - application/json
     */
    /**
     * Get services
     *
     * @returns {Promise} Request promise
     */
    async getServices () {
        return this.client.get('/diagnostics/networkinsight/getServices');
    }
}

module.exports = NetflowInsightClient;
