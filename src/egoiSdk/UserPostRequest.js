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
    define(['ApiClient', 'egoiSdk/ComplexUser', 'egoiSdk/Language'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ComplexUser'), require('./Language'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.UserPostRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.ComplexUser, root.egoiSdk.Language);
  }
}(this, function(ApiClient, ComplexUser, Language) {
  'use strict';



  /**
   * The UserPostRequest model module.
   * @module egoiSdk/UserPostRequest
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>UserPostRequest</code>.
   * User post request schema
   * @alias module:egoiSdk/UserPostRequest
   * @class
   * @extends module:egoiSdk/ComplexUser
   * @implements module:egoiSdk/ComplexUser
   */
  var exports = function() {
    var _this = this;

    ComplexUser.call(_this);
  };

  /**
   * Constructs a <code>UserPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/UserPostRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/UserPostRequest} The populated <code>UserPostRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ComplexUser.constructFromObject(data, obj);
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('password_confirmation')) {
        obj['password_confirmation'] = ApiClient.convertToType(data['password_confirmation'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ComplexUser.prototype);
  exports.prototype.constructor = exports;

  /**
   * User password
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * User password confirmation
   * @member {String} password_confirmation
   */
  exports.prototype['password_confirmation'] = undefined;

  // Implement ComplexUser interface:
  /**
   * @member {} user_id
   */
exports.prototype['user_id'] = undefined;

  /**
   * User login
   * @member {} username
   */
exports.prototype['username'] = undefined;

  /**
   * True if user is admin, false otherwise
   * @member {} is_admin
   * @default false
   */
exports.prototype['is_admin'] = false;

  /**
   * First name of the user
   * @member {} first_name
   */
exports.prototype['first_name'] = undefined;

  /**
   * Last name of the user
   * @member {} last_name
   */
exports.prototype['last_name'] = undefined;

  /**
   * Email of the user
   * @member {} email
   */
exports.prototype['email'] = undefined;

  /**
   * User's phone (may be cellphone or phone)
   * @member {} phone
   */
exports.prototype['phone'] = undefined;

  /**
   * User's profile image
   * @member {} profile_image
   */
exports.prototype['profile_image'] = undefined;

  /**
   * User status
   * @member {} status
   */
exports.prototype['status'] = undefined;

  /**
   * The date and time
   * @member {} created
   */
exports.prototype['created'] = undefined;

  /**
   * The date and time
   * @member {} updated
   */
exports.prototype['updated'] = undefined;

  /**
   * @member {} language
   */
exports.prototype['language'] = undefined;

  /**
   * User timezone
   * @member {} timezone
   */
exports.prototype['timezone'] = undefined;

  /**
   * True if the user can see removed contacts, false otherwise
   * @member {} show_removed_contacts
   * @default true
   */
exports.prototype['show_removed_contacts'] = true;

  /**
   * User gender
   * @member {} gender
   */
exports.prototype['gender'] = undefined;


  /**
   * Returns User password
   * @return {String}
   */
  exports.prototype.getPassword = function() {
    return this['password'];
  }

  /**
   * Sets User password
   * @param {String} password User password
   */
  exports.prototype.setPassword = function(password) {
    this['password'] = password;
  }


  /**
   * Returns User password confirmation
   * @return {String}
   */
  exports.prototype.getPasswordConfirmation = function() {
    return this['password_confirmation'];
  }

  /**
   * Sets User password confirmation
   * @param {String} passwordConfirmation User password confirmation
   */
  exports.prototype.setPasswordConfirmation = function(passwordConfirmation) {
    this['password_confirmation'] = passwordConfirmation;
  }



  return exports;
}));


