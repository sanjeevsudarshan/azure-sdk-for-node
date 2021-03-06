/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * A metric describing the usage of a resource.
 *
 */
class UsageMetric {
  /**
   * Create a UsageMetric.
   * @member {object} [name] The name of the metric.
   * @member {string} [name.value] The system name of the metric.
   * @member {string} [name.localizedValue] The localized name of the metric.
   * @member {string} [unit] The units used for the metric.
   * @member {number} [currentValue] The current value of the metric.
   * @member {number} [limit] The quota limit for the metric.
   * @member {date} [nextResetTime] The time that the metric's value will
   * reset.
   * @member {string} [quotaPeriod] The quota period that determines the length
   * of time between value resets.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UsageMetric
   *
   * @returns {object} metadata of UsageMetric
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageMetric',
      type: {
        name: 'Composite',
        className: 'UsageMetric',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'MetricName'
            }
          },
          unit: {
            required: false,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          },
          currentValue: {
            required: false,
            serializedName: 'currentValue',
            type: {
              name: 'Number'
            }
          },
          limit: {
            required: false,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          nextResetTime: {
            required: false,
            serializedName: 'nextResetTime',
            type: {
              name: 'DateTime'
            }
          },
          quotaPeriod: {
            required: false,
            serializedName: 'quotaPeriod',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UsageMetric;
