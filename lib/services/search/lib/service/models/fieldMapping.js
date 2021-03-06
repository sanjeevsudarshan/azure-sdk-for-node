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
 * Defines a mapping between a field in a data source and a target field in an
 * index.
 *
 */
class FieldMapping {
  /**
   * Create a FieldMapping.
   * @member {string} sourceFieldName The name of the field in the data source.
   * @member {string} [targetFieldName] The name of the target field in the
   * index. Same as the source field name by default.
   * @member {object} [mappingFunction] A function to apply to each source
   * field value before indexing.
   * @member {string} [mappingFunction.name] The name of the field mapping
   * function.
   * @member {object} [mappingFunction.parameters] A dictionary of parameter
   * name/value pairs to pass to the function. Each value must be of a
   * primitive type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of FieldMapping
   *
   * @returns {object} metadata of FieldMapping
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FieldMapping',
      type: {
        name: 'Composite',
        className: 'FieldMapping',
        modelProperties: {
          sourceFieldName: {
            required: true,
            serializedName: 'sourceFieldName',
            type: {
              name: 'String'
            }
          },
          targetFieldName: {
            required: false,
            serializedName: 'targetFieldName',
            type: {
              name: 'String'
            }
          },
          mappingFunction: {
            required: false,
            serializedName: 'mappingFunction',
            type: {
              name: 'Composite',
              className: 'FieldMappingFunction'
            }
          }
        }
      }
    };
  }
}

module.exports = FieldMapping;
