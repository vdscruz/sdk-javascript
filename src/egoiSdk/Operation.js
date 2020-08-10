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
    define(['ApiClient', 'egoiSdk/OperationOperationData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OperationOperationData'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.Operation = factory(root.egoiSdk.ApiClient, root.egoiSdk.OperationOperationData);
  }
}(this, function(ApiClient, OperationOperationData) {
  'use strict';



  /**
   * The Operation model module.
   * @module egoiSdk/Operation
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>Operation</code>.
   * Operation schema
   * @alias module:egoiSdk/Operation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Operation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/Operation} obj Optional instance to populate.
   * @return {module:egoiSdk/Operation} The populated <code>Operation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('operation_id')) {
        obj['operation_id'] = ApiClient.convertToType(data['operation_id'], 'Number');
      }
      if (data.hasOwnProperty('operation_data')) {
        obj['operation_data'] = OperationOperationData.constructFromObject(data['operation_data']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} operation_id
   */
  exports.prototype['operation_id'] = undefined;
  /**
   * @member {module:egoiSdk/OperationOperationData} operation_data
   */
  exports.prototype['operation_data'] = undefined;
  /**
   * Type of operation
   * @member {module:egoiSdk/Operation.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * State of the operation
   * @member {module:egoiSdk/Operation.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getOperationId = function() {
    return this['operation_id'];
  }

  /**
   * @param {Number} operationId
   */
  exports.prototype.setOperationId = function(operationId) {
    this['operation_id'] = operationId;
  }


  /**
   * @return {module:egoiSdk/OperationOperationData}
   */
  exports.prototype.getOperationData = function() {
    return this['operation_data'];
  }

  /**
   * @param {module:egoiSdk/OperationOperationData} operationData
   */
  exports.prototype.setOperationData = function(operationData) {
    this['operation_data'] = operationData;
  }


  /**
   * Returns Type of operation
   * @return {module:egoiSdk/Operation.TypeEnum}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets Type of operation
   * @param {module:egoiSdk/Operation.TypeEnum} type Type of operation
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
  }


  /**
   * Returns State of the operation
   * @return {module:egoiSdk/Operation.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets State of the operation
   * @param {module:egoiSdk/Operation.StatusEnum} status State of the operation
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getCreatedBy = function() {
    return this['created_by'];
  }

  /**
   * @param {Number} createdBy
   */
  exports.prototype.setCreatedBy = function(createdBy) {
    this['created_by'] = createdBy;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getCreated = function() {
    return this['created'];
  }

  /**
   * @param {Date} created
   */
  exports.prototype.setCreated = function(created) {
    this['created'] = created;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getStartDate = function() {
    return this['start_date'];
  }

  /**
   * @param {Date} startDate
   */
  exports.prototype.setStartDate = function(startDate) {
    this['start_date'] = startDate;
  }


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "import_contacts"
     * @const
     */
    "import_contacts": "import_contacts",
    /**
     * value: "export_contacts"
     * @const
     */
    "export_contacts": "export_contacts",
    /**
     * value: "export_reports"
     * @const
     */
    "export_reports": "export_reports",
    /**
     * value: "advanced_report"
     * @const
     */
    "advanced_report": "advanced_report",
    /**
     * value: "email"
     * @const
     */
    "email": "email",
    /**
     * value: "sms"
     * @const
     */
    "sms": "sms",
    /**
     * value: "smart_sms"
     * @const
     */
    "smart_sms": "smart_sms",
    /**
     * value: "voice"
     * @const
     */
    "voice": "voice",
    /**
     * value: "push"
     * @const
     */
    "push": "push",
    /**
     * value: "webpush"
     * @const
     */
    "webpush": "webpush",
    /**
     * value: "ads"
     * @const
     */
    "ads": "ads",
    /**
     * value: "segment_generation"
     * @const
     */
    "segment_generation": "segment_generation",
    /**
     * value: "mass_operation"
     * @const
     */
    "mass_operation": "mass_operation",
    /**
     * value: "unify"
     * @const
     */
    "unify": "unify"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "processing"
     * @const
     */
    "processing": "processing",
    /**
     * value: "executing"
     * @const
     */
    "executing": "executing",
    /**
     * value: "paused"
     * @const
     */
    "paused": "paused"  };


  return exports;
}));


