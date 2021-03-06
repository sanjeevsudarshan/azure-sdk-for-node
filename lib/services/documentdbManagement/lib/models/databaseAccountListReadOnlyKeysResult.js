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

/**
 * @class
 * Initializes a new instance of the DatabaseAccountListReadOnlyKeysResult class.
 * @constructor
 * The read-only access keys for the given database account.
 *
 * @member {string} [primaryReadonlyMasterKey] Base 64 encoded value of the
 * primary read-only key.
 *
 * @member {string} [secondaryReadonlyMasterKey] Base 64 encoded value of the
 * secondary read-only key.
 *
 */
class DatabaseAccountListReadOnlyKeysResult {
  constructor() {
  }

  /**
   * Defines the metadata of DatabaseAccountListReadOnlyKeysResult
   *
   * @returns {object} metadata of DatabaseAccountListReadOnlyKeysResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseAccountListReadOnlyKeysResult',
      type: {
        name: 'Composite',
        className: 'DatabaseAccountListReadOnlyKeysResult',
        modelProperties: {
          primaryReadonlyMasterKey: {
            required: false,
            readOnly: true,
            serializedName: 'primaryReadonlyMasterKey',
            type: {
              name: 'String'
            }
          },
          secondaryReadonlyMasterKey: {
            required: false,
            readOnly: true,
            serializedName: 'secondaryReadonlyMasterKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseAccountListReadOnlyKeysResult;
