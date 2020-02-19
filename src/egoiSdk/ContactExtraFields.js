/**
 * APIv3 (Beta)
 *  # Introduction Just a quick peek!!! This is our new version of API. Remember, it is not stable yet!!! But we invite you play with it and give us your feedback ;) # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services. * <b><a href='https://github.com/E-goi/sdk-java'>Java</a></b> * <b><a href='https://github.com/E-goi/sdk-php'>PHP</a></b> * <b><a href='https://github.com/E-goi/sdk-python'>Python</a></b>  <security-definitions/>
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
    define(['ApiClient', 'egoiSdk/ContactExtraFieldCellphone', 'egoiSdk/ContactExtraFieldDate', 'egoiSdk/ContactExtraFieldEmail', 'egoiSdk/ContactExtraFieldNumber', 'egoiSdk/ContactExtraFieldOptions', 'egoiSdk/ContactExtraFieldPhone', 'egoiSdk/ContactExtraFieldText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactExtraFieldCellphone'), require('./ContactExtraFieldDate'), require('./ContactExtraFieldEmail'), require('./ContactExtraFieldNumber'), require('./ContactExtraFieldOptions'), require('./ContactExtraFieldPhone'), require('./ContactExtraFieldText'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.ContactExtraFields = factory(root.egoiSdk.ApiClient, root.egoiSdk.ContactExtraFieldCellphone, root.egoiSdk.ContactExtraFieldDate, root.egoiSdk.ContactExtraFieldEmail, root.egoiSdk.ContactExtraFieldNumber, root.egoiSdk.ContactExtraFieldOptions, root.egoiSdk.ContactExtraFieldPhone, root.egoiSdk.ContactExtraFieldText);
  }
}(this, function(ApiClient, ContactExtraFieldCellphone, ContactExtraFieldDate, ContactExtraFieldEmail, ContactExtraFieldNumber, ContactExtraFieldOptions, ContactExtraFieldPhone, ContactExtraFieldText) {
  'use strict';



  /**
   * The ContactExtraFields model module.
   * @module egoiSdk/ContactExtraFields
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>ContactExtraFields</code>.
   * @alias module:egoiSdk/ContactExtraFields
   * @class
   * @implements module:egoiSdk/ContactExtraFieldDate
   * @implements module:egoiSdk/ContactExtraFieldText
   * @implements module:egoiSdk/ContactExtraFieldCellphone
   * @implements module:egoiSdk/ContactExtraFieldPhone
   * @implements module:egoiSdk/ContactExtraFieldNumber
   * @implements module:egoiSdk/ContactExtraFieldEmail
   * @implements module:egoiSdk/ContactExtraFieldOptions
   */
  var exports = function() {
    var _this = this;

    ContactExtraFieldDate.call(_this);
    ContactExtraFieldText.call(_this);
    ContactExtraFieldCellphone.call(_this);
    ContactExtraFieldPhone.call(_this);
    ContactExtraFieldNumber.call(_this);
    ContactExtraFieldEmail.call(_this);
    ContactExtraFieldOptions.call(_this);
  };

  /**
   * Constructs a <code>ContactExtraFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ContactExtraFields} obj Optional instance to populate.
   * @return {module:egoiSdk/ContactExtraFields} The populated <code>ContactExtraFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ContactExtraFieldDate.constructFromObject(data, obj);
      ContactExtraFieldText.constructFromObject(data, obj);
      ContactExtraFieldCellphone.constructFromObject(data, obj);
      ContactExtraFieldPhone.constructFromObject(data, obj);
      ContactExtraFieldNumber.constructFromObject(data, obj);
      ContactExtraFieldEmail.constructFromObject(data, obj);
      ContactExtraFieldOptions.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ContactExtraFieldDate interface:
  /**
   * @member {Number} field_id
   */
exports.prototype['field_id'] = undefined;

  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldDate.FormatEnum} format
   */
exports.prototype['format'] = undefined;

  /**
   * Extra field value
   * @member {Date} value
   */
exports.prototype['value'] = undefined;

  // Implement ContactExtraFieldText interface:
  /**
   * @member {Number} field_id
   */
exports.prototype['field_id'] = undefined;

  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldText.FormatEnum} format
   */
exports.prototype['format'] = undefined;

  /**
   * Extra field value
   * @member {String} value
   */
exports.prototype['value'] = undefined;

  // Implement ContactExtraFieldCellphone interface:
  /**
   * @member {Number} field_id
   */
exports.prototype['field_id'] = undefined;

  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldCellphone.FormatEnum} format
   */
exports.prototype['format'] = undefined;

  /**
   * Extra field value
   * @member {String} value
   */
exports.prototype['value'] = undefined;

  /**
   * Extra field status
   * @member {module:egoiSdk/ContactExtraFieldCellphone.StatusEnum} status
   */
exports.prototype['status'] = undefined;

  // Implement ContactExtraFieldPhone interface:
  /**
   * @member {Number} field_id
   */
exports.prototype['field_id'] = undefined;

  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldPhone.FormatEnum} format
   */
exports.prototype['format'] = undefined;

  /**
   * Extra field value
   * @member {String} value
   */
exports.prototype['value'] = undefined;

  /**
   * Extra field status
   * @member {module:egoiSdk/ContactExtraFieldPhone.StatusEnum} status
   */
exports.prototype['status'] = undefined;

  // Implement ContactExtraFieldNumber interface:
  /**
   * @member {Number} field_id
   */
exports.prototype['field_id'] = undefined;

  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldNumber.FormatEnum} format
   */
exports.prototype['format'] = undefined;

  /**
   * Extra field value
   * @member {String} value
   */
exports.prototype['value'] = undefined;

  // Implement ContactExtraFieldEmail interface:
  /**
   * @member {Number} field_id
   */
exports.prototype['field_id'] = undefined;

  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldEmail.FormatEnum} format
   */
exports.prototype['format'] = undefined;

  /**
   * Extra field value
   * @member {String} value
   */
exports.prototype['value'] = undefined;

  /**
   * Extra field status
   * @member {module:egoiSdk/ContactExtraFieldEmail.StatusEnum} status
   */
exports.prototype['status'] = undefined;

  // Implement ContactExtraFieldOptions interface:
  /**
   * @member {Number} field_id
   */
exports.prototype['field_id'] = undefined;

  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldOptions.FormatEnum} format
   */
exports.prototype['format'] = undefined;

  /**
   * Extra field value
   * @member {Array.<Number>} value
   */
exports.prototype['value'] = undefined;



  return exports;
}));

