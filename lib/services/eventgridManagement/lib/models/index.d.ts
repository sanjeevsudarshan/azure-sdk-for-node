/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the EventSubscriptionDestination class.
 * @constructor
 * Information about the destination for an event subscription
 *
 * @member {string} endpointType Polymorphic Discriminator
 */
export interface EventSubscriptionDestination {
  endpointType: string;
}

/**
 * @class
 * Initializes a new instance of the EventSubscriptionFilter class.
 * @constructor
 * Filter for the Event Subscription
 *
 * @member {string} [subjectBeginsWith] An optional string to filter events for
 * an event subscription based on a resource path prefix.
 * The format of this depends on the publisher of the events.
 * Wildcard characters are not supported in this path.
 * @member {string} [subjectEndsWith] An optional string to filter events for
 * an event subscription based on a resource path suffix.
 * Wildcard characters are not supported in this path.
 * @member {array} [includedEventTypes] A list of applicable event types that
 * need to be part of the event subscription.
 * If it is desired to subscribe to all event types, the string "all" needs to
 * be specified as an element in this list.
 * @member {boolean} [isSubjectCaseSensitive] Specifies if the
 * SubjectBeginsWith and SubjectEndsWith properties of the filter
 * should be compared in a case sensitive manner. Default value: false .
 */
export interface EventSubscriptionFilter {
  subjectBeginsWith?: string;
  subjectEndsWith?: string;
  includedEventTypes?: string[];
  isSubjectCaseSensitive?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Definition of a Resource
 *
 * @member {string} [id] Fully qualified identifier of the resource
 * @member {string} [name] Name of the resource
 * @member {string} [type] Type of the resource
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the WebHookEventSubscriptionDestination class.
 * @constructor
 * Information about the webhook destination for an event subscription
 *
 * @member {string} [endpointUrl] The URL that represents the endpoint of the
 * destination of an event subscription.
 * @member {string} [endpointBaseUrl] The base URL that represents the endpoint
 * of the destination of an event subscription.
 */
export interface WebHookEventSubscriptionDestination extends EventSubscriptionDestination {
  endpointUrl?: string;
  readonly endpointBaseUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the EventHubEventSubscriptionDestination class.
 * @constructor
 * Information about the event hub destination for an event subscription
 *
 * @member {string} [resourceId] The Azure Resource Id that represents the
 * endpoint of an Event Hub destination of an event subscription.
 */
export interface EventHubEventSubscriptionDestination extends EventSubscriptionDestination {
  resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the EventSubscription class.
 * @constructor
 * Event Subscription
 *
 * @member {string} [topic] Name of the topic of the event subscription.
 * @member {string} [provisioningState] Provisioning state of the event
 * subscription. Possible values include: 'Creating', 'Updating', 'Deleting',
 * 'Succeeded', 'Canceled', 'Failed'
 * @member {object} [destination] Information about the destination where
 * events have to be delivered for the event subscription.
 * @member {string} [destination.endpointType] Polymorphic Discriminator
 * @member {object} [filter] Information about the filter for the event
 * subscription.
 * @member {string} [filter.subjectBeginsWith] An optional string to filter
 * events for an event subscription based on a resource path prefix.
 * The format of this depends on the publisher of the events.
 * Wildcard characters are not supported in this path.
 * @member {string} [filter.subjectEndsWith] An optional string to filter
 * events for an event subscription based on a resource path suffix.
 * Wildcard characters are not supported in this path.
 * @member {array} [filter.includedEventTypes] A list of applicable event types
 * that need to be part of the event subscription.
 * If it is desired to subscribe to all event types, the string "all" needs to
 * be specified as an element in this list.
 * @member {boolean} [filter.isSubjectCaseSensitive] Specifies if the
 * SubjectBeginsWith and SubjectEndsWith properties of the filter
 * should be compared in a case sensitive manner.
 * @member {array} [labels] List of user defined labels.
 */
export interface EventSubscription extends Resource {
  readonly topic?: string;
  readonly provisioningState?: string;
  destination?: EventSubscriptionDestination;
  filter?: EventSubscriptionFilter;
  labels?: string[];
}

/**
 * @class
 * Initializes a new instance of the EventSubscriptionUpdateParameters class.
 * @constructor
 * Properties of the Event Subscription update
 *
 * @member {object} [destination] Information about the destination where
 * events have to be delivered for the event subscription.
 * @member {string} [destination.endpointType] Polymorphic Discriminator
 * @member {object} [filter] Information about the filter for the event
 * subscription.
 * @member {string} [filter.subjectBeginsWith] An optional string to filter
 * events for an event subscription based on a resource path prefix.
 * The format of this depends on the publisher of the events.
 * Wildcard characters are not supported in this path.
 * @member {string} [filter.subjectEndsWith] An optional string to filter
 * events for an event subscription based on a resource path suffix.
 * Wildcard characters are not supported in this path.
 * @member {array} [filter.includedEventTypes] A list of applicable event types
 * that need to be part of the event subscription.
 * If it is desired to subscribe to all event types, the string "all" needs to
 * be specified as an element in this list.
 * @member {boolean} [filter.isSubjectCaseSensitive] Specifies if the
 * SubjectBeginsWith and SubjectEndsWith properties of the filter
 * should be compared in a case sensitive manner.
 * @member {array} [labels] List of user defined labels.
 */
export interface EventSubscriptionUpdateParameters {
  destination?: EventSubscriptionDestination;
  filter?: EventSubscriptionFilter;
  labels?: string[];
}

/**
 * @class
 * Initializes a new instance of the EventSubscriptionFullUrl class.
 * @constructor
 * Full endpoint url of an event subscription
 *
 * @member {string} [endpointUrl] The URL that represents the endpoint of the
 * destination of an event subscription.
 */
export interface EventSubscriptionFullUrl {
  endpointUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationInfo class.
 * @constructor
 * Information about an operation
 *
 * @member {string} [provider] Name of the provider
 * @member {string} [resource] Name of the resource type
 * @member {string} [operation] Name of the operation
 * @member {string} [description] Description of the operation
 */
export interface OperationInfo {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Represents an operation returned by the GetOperations request
 *
 * @member {string} [name] Name of the operation
 * @member {object} [display] Display name of the operation
 * @member {string} [display.provider] Name of the provider
 * @member {string} [display.resource] Name of the resource type
 * @member {string} [display.operation] Name of the operation
 * @member {string} [display.description] Description of the operation
 * @member {string} [origin] Origin of the operation
 * @member {object} [properties] Properties of the operation
 */
export interface Operation {
  name?: string;
  display?: OperationInfo;
  origin?: string;
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * Definition of a Tracked Resource
 *
 * @member {string} location Location of the resource
 * @member {object} [tags] Tags of the resource
 */
export interface TrackedResource extends Resource {
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Topic class.
 * @constructor
 * EventGrid Topic
 *
 * @member {string} [provisioningState] Provisioning state of the topic.
 * Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded',
 * 'Canceled', 'Failed'
 * @member {string} [endpoint] Endpoint for the topic.
 */
export interface Topic extends TrackedResource {
  readonly provisioningState?: string;
  readonly endpoint?: string;
}

/**
 * @class
 * Initializes a new instance of the TopicUpdateParameters class.
 * @constructor
 * Properties of the Topic update
 *
 * @member {object} [tags] Tags of the resource
 */
export interface TopicUpdateParameters {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the TopicSharedAccessKeys class.
 * @constructor
 * Shared access keys of the Topic
 *
 * @member {string} [key1] Shared access key1 for the topic.
 * @member {string} [key2] Shared access key2 for the topic.
 */
export interface TopicSharedAccessKeys {
  key1?: string;
  key2?: string;
}

/**
 * @class
 * Initializes a new instance of the TopicRegenerateKeyRequest class.
 * @constructor
 * Topic regenerate share access key key request
 *
 * @member {string} keyName Key name to regenerate key1 or key2
 */
export interface TopicRegenerateKeyRequest {
  keyName: string;
}

/**
 * @class
 * Initializes a new instance of the EventType class.
 * @constructor
 * Event Type for a subject under a topic
 *
 * @member {string} [displayName] Display name of the event type.
 * @member {string} [description] Description of the event type.
 * @member {string} [schemaUrl] Url of the schema for this event type.
 */
export interface EventType extends Resource {
  displayName?: string;
  description?: string;
  schemaUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the TopicTypeInfo class.
 * @constructor
 * Properties of a topic type info.
 *
 * @member {string} [provider] Namespace of the provider of the topic type.
 * @member {string} [displayName] Display Name for the topic type.
 * @member {string} [description] Description of the topic type.
 * @member {string} [resourceRegionType] Region type of the resource. Possible
 * values include: 'RegionalResource', 'GlobalResource'
 * @member {string} [provisioningState] Provisioning state of the topic type.
 * Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded',
 * 'Canceled', 'Failed'
 * @member {array} [supportedLocations] List of locations supported by this
 * topic type.
 */
export interface TopicTypeInfo extends Resource {
  provider?: string;
  displayName?: string;
  description?: string;
  resourceRegionType?: string;
  provisioningState?: string;
  supportedLocations?: string[];
}


/**
 * @class
 * Initializes a new instance of the EventSubscriptionsListResult class.
 * @constructor
 * Result of the List EventSubscriptions operation
 *
 */
export interface EventSubscriptionsListResult extends Array<EventSubscription> {
}

/**
 * @class
 * Initializes a new instance of the OperationsListResult class.
 * @constructor
 * Result of the List Operations operation
 *
 */
export interface OperationsListResult extends Array<Operation> {
}

/**
 * @class
 * Initializes a new instance of the TopicsListResult class.
 * @constructor
 * Result of the List Topics operation
 *
 */
export interface TopicsListResult extends Array<Topic> {
}

/**
 * @class
 * Initializes a new instance of the EventTypesListResult class.
 * @constructor
 * Result of the List Event Types operation
 *
 */
export interface EventTypesListResult extends Array<EventType> {
}

/**
 * @class
 * Initializes a new instance of the TopicTypesListResult class.
 * @constructor
 * Result of the List Topic Types operation
 *
 */
export interface TopicTypesListResult extends Array<TopicTypeInfo> {
}
