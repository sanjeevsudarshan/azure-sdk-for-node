// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'southcentralus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3d1cd7a8-b035-4563-9288-dbe706cd672e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031/listKeys?api-version=2016-01-29')
  .reply(200, "{\"key1\":\"UTFFDd5zu2EdxNE2UzuUp1QQStEJg6xo9sOzhFFJkrHy9RT49Gx89tg+QSJ3axtpACxzNsg6QC2IjS9JIOEDEw==\",\"key2\":\"eEFI6kIMzy0bf/wlcMiXsStzo+W/Hf9IFqU571y3ljJMMVFUJP4HL8NX61qSeoNwROT4iuc9aT0HRwvjVs+9Ww==\"}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: '63078a43-6d68-410d-ba96-3b2a97aaafb8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '3fefb4c4-41f9-46f3-8a68-2d2f4db8ac3b',
  'x-ms-correlation-request-id': '3fefb4c4-41f9-46f3-8a68-2d2f4db8ac3b',
  'x-ms-routing-request-id': 'WESTUS:20160519T164720Z:3fefb4c4-41f9-46f3-8a68-2d2f4db8ac3b',
  date: 'Thu, 19 May 2016 16:47:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031/listKeys?api-version=2016-01-29')
  .reply(200, "{\"key1\":\"UTFFDd5zu2EdxNE2UzuUp1QQStEJg6xo9sOzhFFJkrHy9RT49Gx89tg+QSJ3axtpACxzNsg6QC2IjS9JIOEDEw==\",\"key2\":\"eEFI6kIMzy0bf/wlcMiXsStzo+W/Hf9IFqU571y3ljJMMVFUJP4HL8NX61qSeoNwROT4iuc9aT0HRwvjVs+9Ww==\"}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: '63078a43-6d68-410d-ba96-3b2a97aaafb8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '3fefb4c4-41f9-46f3-8a68-2d2f4db8ac3b',
  'x-ms-correlation-request-id': '3fefb4c4-41f9-46f3-8a68-2d2f4db8ac3b',
  'x-ms-routing-request-id': 'WESTUS:20160519T164720Z:3fefb4c4-41f9-46f3-8a68-2d2f4db8ac3b',
  date: 'Thu, 19 May 2016 16:47:19 GMT',
  connection: 'close' });
 return result; }]];