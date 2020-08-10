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
    define(['ApiClient', 'egoiSdk/BasicSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BasicSender'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.AbstractCellphoneSender = factory(root.egoiSdk.ApiClient, root.egoiSdk.BasicSender);
  }
}(this, function(ApiClient, BasicSender) {
  'use strict';



  /**
   * The AbstractCellphoneSender model module.
   * @module egoiSdk/AbstractCellphoneSender
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>AbstractCellphoneSender</code>.
   * Abstract cellphone sender schema
   * @alias module:egoiSdk/AbstractCellphoneSender
   * @class
   * @extends module:egoiSdk/BasicSender
   * @implements module:egoiSdk/BasicSender
   * @param senderId {} 
   */
  var exports = function(senderId) {
    var _this = this;

    BasicSender.call(_this, senderId);
  };

  /**
   * Constructs a <code>AbstractCellphoneSender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/AbstractCellphoneSender} obj Optional instance to populate.
   * @return {module:egoiSdk/AbstractCellphoneSender} The populated <code>AbstractCellphoneSender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BasicSender.constructFromObject(data, obj);
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BasicSender.prototype);
  exports.prototype.constructor = exports;

  /**
   * Sender code type
   * @member {module:egoiSdk/AbstractCellphoneSender.TypeEnum} type
   */
  exports.prototype['type'] = undefined;

  // Implement BasicSender interface:
  /**
   * @member {Number} sender_id
   */
exports.prototype['sender_id'] = undefined;

  /**
   * Status of the sender
   * @member {module:egoiSdk/BasicSender.StatusEnum} status
   */
exports.prototype['status'] = undefined;


  /**
   * Returns Sender code type
   * @return {module:egoiSdk/AbstractCellphoneSender.TypeEnum}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets Sender code type
   * @param {module:egoiSdk/AbstractCellphoneSender.TypeEnum} type Sender code type
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
  }


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "alpha_numeric"
     * @const
     */
    "alpha_numeric": "alpha_numeric",
    /**
     * value: "numeric"
     * @const
     */
    "numeric": "numeric"  };


  return exports;
}));


