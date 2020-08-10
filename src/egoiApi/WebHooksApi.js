/**
 * APIv3 (Beta)
 *  # Introduction Just a quick peek!!! This is our new version of API. Remember, it is not stable yet!!! But we invite you play with it and give us your feedback ;) # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB. <security-definitions/>
 *
 * OpenAPI spec version: 3.0.0-beta
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'egoiSdk/BadRequest', 'egoiSdk/Forbidden', 'egoiSdk/InternalServerError', 'egoiSdk/ListCollection1', 'egoiSdk/NotFound', 'egoiSdk/Unauthorized', 'egoiSdk/UnprocessableEntity', 'egoiSdk/Webhook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../egoiSdk/BadRequest'), require('../egoiSdk/Forbidden'), require('../egoiSdk/InternalServerError'), require('../egoiSdk/ListCollection1'), require('../egoiSdk/NotFound'), require('../egoiSdk/Unauthorized'), require('../egoiSdk/UnprocessableEntity'), require('../egoiSdk/Webhook'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.WebHooksApi = factory(root.egoiSdk.ApiClient, root.egoiSdk.BadRequest, root.egoiSdk.Forbidden, root.egoiSdk.InternalServerError, root.egoiSdk.ListCollection1, root.egoiSdk.NotFound, root.egoiSdk.Unauthorized, root.egoiSdk.UnprocessableEntity, root.egoiSdk.Webhook);
  }
}(this, function(ApiClient, BadRequest, Forbidden, InternalServerError, ListCollection1, NotFound, Unauthorized, UnprocessableEntity, Webhook) {
  'use strict';

  /**
   * WebHooks service.
   * @module egoiApi/WebHooksApi
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new WebHooksApi. 
   * @alias module:egoiApi/WebHooksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createWebhook operation.
     * @callback module:egoiApi/WebHooksApi~createWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new webhook
     * Create a new webhook
     * @param {module:egoiSdk/Webhook} webhook Parameters for the webhook
     * @param {module:egoiApi/WebHooksApi~createWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/Webhook}
     */
    this.createWebhook = function(webhook, callback) {
      var postBody = webhook;

      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling createWebhook");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Webhook;

      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhook operation.
     * @callback module:egoiApi/WebHooksApi~deleteWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove webhook
     * Remove webhook information given its ID
     * @param {Number} webhookId ID of the Webhook
     * @param {module:egoiApi/WebHooksApi~deleteWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWebhook = function(webhookId, callback) {
      var postBody = null;

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhook");
      }


      var pathParams = {
        'webhook_id': webhookId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/webhooks/{webhook_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllWebhooks operation.
     * @callback module:egoiApi/WebHooksApi~getAllWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/ListCollection1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all webhooks
     * Returns all webhooks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoiApi/WebHooksApi~getAllWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/ListCollection1}
     */
    this.getAllWebhooks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ListCollection1;

      return this.apiClient.callApi(
        '/webhooks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
