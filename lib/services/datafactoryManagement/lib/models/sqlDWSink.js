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
 * A copy activity SQL Data Warehouse sink.
 *
 * @extends models['CopySink']
 */
class SqlDWSink extends models['CopySink'] {
  /**
   * Create a SqlDWSink.
   * @member {object} [preCopyScript] SQL pre-copy script. Type: string (or
   * Expression with resultType string).
   * @member {object} [allowPolyBase] Indicates to use PolyBase to copy data
   * into SQL Data Warehouse when applicable. Type: boolean (or Expression with
   * resultType boolean).
   * @member {object} [polyBaseSettings] Specifies PolyBase-related settings
   * when allowPolyBase is true.
   * @member {string} [polyBaseSettings.rejectType] Reject type. Possible
   * values include: 'value', 'percentage'
   * @member {object} [polyBaseSettings.rejectValue] Specifies the value or the
   * percentage of rows that can be rejected before the query fails. Type:
   * number (or Expression with resultType number), minimum: 0.
   * @member {object} [polyBaseSettings.rejectSampleValue] Determines the
   * number of rows to attempt to retrieve before the PolyBase recalculates the
   * percentage of rejected rows. Type: integer (or Expression with resultType
   * integer), minimum: 0.
   * @member {object} [polyBaseSettings.useTypeDefault] Specifies how to handle
   * missing values in delimited text files when PolyBase retrieves data from
   * the text file. Type: boolean (or Expression with resultType boolean).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SqlDWSink
   *
   * @returns {object} metadata of SqlDWSink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SqlDWSink',
      type: {
        name: 'Composite',
        className: 'SqlDWSink',
        modelProperties: {
          writeBatchSize: {
            required: false,
            serializedName: 'writeBatchSize',
            type: {
              name: 'Object'
            }
          },
          writeBatchTimeout: {
            required: false,
            serializedName: 'writeBatchTimeout',
            type: {
              name: 'Object'
            }
          },
          sinkRetryCount: {
            required: false,
            serializedName: 'sinkRetryCount',
            type: {
              name: 'Object'
            }
          },
          sinkRetryWait: {
            required: false,
            serializedName: 'sinkRetryWait',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          preCopyScript: {
            required: false,
            serializedName: 'preCopyScript',
            type: {
              name: 'Object'
            }
          },
          allowPolyBase: {
            required: false,
            serializedName: 'allowPolyBase',
            type: {
              name: 'Object'
            }
          },
          polyBaseSettings: {
            required: false,
            serializedName: 'polyBaseSettings',
            type: {
              name: 'Composite',
              className: 'PolybaseSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = SqlDWSink;
