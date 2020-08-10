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
    define(['ApiClient', 'egoiSdk/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.ProductBulkRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.Product);
  }
}(this, function(ApiClient, Product) {
  'use strict';



  /**
   * The ProductBulkRequest model module.
   * @module egoiSdk/ProductBulkRequest
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>ProductBulkRequest</code>.
   * Product bulk request schema
   * @alias module:egoiSdk/ProductBulkRequest
   * @class
   * @param products {Array.<module:egoiSdk/Product>} Collection of products to import. Products having an incorrect format will be ignored
   */
  var exports = function(products) {
    var _this = this;

    _this['products'] = products;
  };

  /**
   * Constructs a <code>ProductBulkRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ProductBulkRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/ProductBulkRequest} The populated <code>ProductBulkRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Collection of products to import. Products having an incorrect format will be ignored
   * @member {Array.<module:egoiSdk/Product>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * How the import will be processed:  *                      'rewrite' - catalog content will be erased and then the imported products will be added  *                      'add' - adds imported products to the catalog without replacing any content. Duplicates will                         not be added  *                      'update' - adds imported products to the catalog and updates any duplicates found
   * @member {module:egoiSdk/ProductBulkRequest.ModeEnum} mode
   * @default 'update'
   */
  exports.prototype['mode'] = 'update';


  /**
   * Returns Collection of products to import. Products having an incorrect format will be ignored
   * @return {Array.<module:egoiSdk/Product>}
   */
  exports.prototype.getProducts = function() {
    return this['products'];
  }

  /**
   * Sets Collection of products to import. Products having an incorrect format will be ignored
   * @param {Array.<module:egoiSdk/Product>} products Collection of products to import. Products having an incorrect format will be ignored
   */
  exports.prototype.setProducts = function(products) {
    this['products'] = products;
  }


  /**
   * Returns How the import will be processed:  *                      'rewrite' - catalog content will be erased and then the imported products will be added  *                      'add' - adds imported products to the catalog without replacing any content. Duplicates will                         not be added  *                      'update' - adds imported products to the catalog and updates any duplicates found
   * @return {module:egoiSdk/ProductBulkRequest.ModeEnum}
   */
  exports.prototype.getMode = function() {
    return this['mode'];
  }

  /**
   * Sets How the import will be processed:  *                      'rewrite' - catalog content will be erased and then the imported products will be added  *                      'add' - adds imported products to the catalog without replacing any content. Duplicates will                         not be added  *                      'update' - adds imported products to the catalog and updates any duplicates found
   * @param {module:egoiSdk/ProductBulkRequest.ModeEnum} mode How the import will be processed:  *                      'rewrite' - catalog content will be erased and then the imported products will be added  *                      'add' - adds imported products to the catalog without replacing any content. Duplicates will                         not be added  *                      'update' - adds imported products to the catalog and updates any duplicates found
   */
  exports.prototype.setMode = function(mode) {
    this['mode'] = mode;
  }


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "rewrite"
     * @const
     */
    "rewrite": "rewrite",
    /**
     * value: "add"
     * @const
     */
    "add": "add",
    /**
     * value: "update"
     * @const
     */
    "update": "update"  };


  return exports;
}));


