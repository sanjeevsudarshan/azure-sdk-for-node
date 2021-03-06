// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain4491/enableCustomHttps?api-version=2017-10-12')
  .reply(202, "{\r\n  \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Enabling\",\"customHttpsProvisioningSubstate\":\"SubmittingDomainControlValidationRequest\",\"validationData\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '280',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/865845b8-dfaa-4a3b-8a10-dc6c81678414/profileresults/cdnTestProfile4357/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomainresults/cdnTestCustomDomain4491?api-version=2017-10-12',
  'retry-after': '120',
  'x-ms-request-id': 'f3c9684e-bcb9-444b-9f40-a2fb4ddad5fd',
  'x-ms-client-request-id': 'cbcb494f-c1c3-4dc0-a27a-7a6a002c9ce6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/865845b8-dfaa-4a3b-8a10-dc6c81678414?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6e84aea1-3f21-4ef8-b36f-f4c8910bdc3e',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200521Z:6e84aea1-3f21-4ef8-b36f-f4c8910bdc3e',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:05:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain4491/enableCustomHttps?api-version=2017-10-12')
  .reply(202, "{\r\n  \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Enabling\",\"customHttpsProvisioningSubstate\":\"SubmittingDomainControlValidationRequest\",\"validationData\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '280',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/865845b8-dfaa-4a3b-8a10-dc6c81678414/profileresults/cdnTestProfile4357/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomainresults/cdnTestCustomDomain4491?api-version=2017-10-12',
  'retry-after': '120',
  'x-ms-request-id': 'f3c9684e-bcb9-444b-9f40-a2fb4ddad5fd',
  'x-ms-client-request-id': 'cbcb494f-c1c3-4dc0-a27a-7a6a002c9ce6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/865845b8-dfaa-4a3b-8a10-dc6c81678414?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6e84aea1-3f21-4ef8-b36f-f4c8910bdc3e',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200521Z:6e84aea1-3f21-4ef8-b36f-f4c8910bdc3e',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:05:21 GMT',
  connection: 'close' });
 return result; }]];