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
 * Definition of the link mapping of prediction.
 *
 */
class PredictionMappings {
  /**
   * Create a PredictionMappings.
   * @member {string} [score] The score of the link mapping.
   * @member {string} [grade] The grade of the link mapping.
   * @member {string} [reason] The reason of the link mapping.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PredictionMappings
   *
   * @returns {object} metadata of PredictionMappings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Prediction_mappings',
      type: {
        name: 'Composite',
        className: 'PredictionMappings',
        modelProperties: {
          score: {
            required: false,
            serializedName: 'score',
            type: {
              name: 'String'
            }
          },
          grade: {
            required: false,
            serializedName: 'grade',
            type: {
              name: 'String'
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PredictionMappings;
