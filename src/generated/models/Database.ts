/* tslint:disable */
/* eslint-disable */
/**
 * Bloomerang API
 * Private-key API for Bloomerang CRM
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@bloomerang.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Database
 */
export interface Database {
    /**
     * Internal Bloomerang database ID
     * @type {string}
     * @memberof Database
     */
    id?: string;
    /**
     * Organization name
     * @type {string}
     * @memberof Database
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    flavor?: DatabaseFlavorEnum;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    baseLicenseProvider?: DatabaseBaseLicenseProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    accountingIntegration?: DatabaseAccountingIntegrationEnum;
}

/**
* @export
* @enum {string}
*/
export enum DatabaseFlavorEnum {
    Customer = 'Customer',
    Conversions = 'Conversions',
    Demo = 'Demo'
}
/**
* @export
* @enum {string}
*/
export enum DatabaseBaseLicenseProviderEnum {
    Bloomerang = 'Bloomerang',
    Firespring = 'Firespring',
    Benevon = 'Benevon'
}
/**
* @export
* @enum {string}
*/
export enum DatabaseAccountingIntegrationEnum {
    Aplos = 'Aplos',
    QuickBooksDesktop = 'QuickBooks Desktop',
    QuickBooksOnline = 'QuickBooks Online',
    None = 'None'
}


/**
 * Check if a given object implements the Database interface.
 */
export function instanceOfDatabase(value: object): value is Database {
    return true;
}

export function DatabaseFromJSON(json: any): Database {
    return DatabaseFromJSONTyped(json, false);
}

export function DatabaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Database {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'flavor': json['Flavor'] == null ? undefined : json['Flavor'],
        'baseLicenseProvider': json['BaseLicenseProvider'] == null ? undefined : json['BaseLicenseProvider'],
        'accountingIntegration': json['AccountingIntegration'] == null ? undefined : json['AccountingIntegration'],
    };
}

export function DatabaseToJSON(json: any): Database {
    return DatabaseToJSONTyped(json, false);
}

export function DatabaseToJSONTyped(value?: Database | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Name': value['name'],
        'Flavor': value['flavor'],
        'BaseLicenseProvider': value['baseLicenseProvider'],
        'AccountingIntegration': value['accountingIntegration'],
    };
}

export const DatabasePropertyValidationAttributesMap: {
    [property: string]: {
        maxLength?: number,
        minLength?: number,
        pattern?: string,
        maximum?: number,
        exclusiveMaximum?: boolean,
        minimum?: number,
        exclusiveMinimum?: boolean,
        multipleOf?: number,
        maxItems?: number,
        minItems?: number,
        uniqueItems?: boolean
    }
} = {
}

