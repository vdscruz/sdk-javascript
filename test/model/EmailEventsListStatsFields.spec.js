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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.egoiSdk);
  }
}(this, function(expect, egoiSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new egoiSdk.EmailEventsListStatsFields();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EmailEventsListStatsFields', function() {
    it('should create an instance of EmailEventsListStatsFields', function() {
      // uncomment below and update the code to test EmailEventsListStatsFields
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be.a(egoiSdk.EmailEventsListStatsFields);
    });

    it('should have the property opens (base name: "opens")', function() {
      // uncomment below and update the code to test the property opens
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property clicks (base name: "clicks")', function() {
      // uncomment below and update the code to test the property clicks
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property complaints (base name: "complaints")', function() {
      // uncomment below and update the code to test the property complaints
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribes (base name: "unsubscribes")', function() {
      // uncomment below and update the code to test the property unsubscribes
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property bounces (base name: "bounces")', function() {
      // uncomment below and update the code to test the property bounces
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property forwards (base name: "forwards")', function() {
      // uncomment below and update the code to test the property forwards
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property forwardsConversion (base name: "forwards_conversion")', function() {
      // uncomment below and update the code to test the property forwardsConversion
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property fbLikes (base name: "fb_likes")', function() {
      // uncomment below and update the code to test the property fbLikes
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property fbShares (base name: "fb_shares")', function() {
      // uncomment below and update the code to test the property fbShares
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property twShares (base name: "tw_shares")', function() {
      // uncomment below and update the code to test the property twShares
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

    it('should have the property socialShares (base name: "social_shares")', function() {
      // uncomment below and update the code to test the property socialShares
      //var instance = new egoiSdk.EmailEventsListStatsFields();
      //expect(instance).to.be();
    });

  });

}));
