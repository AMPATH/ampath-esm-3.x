[@openmrs/esm-framework](../API.md) / SpaConfig

# Interface: SpaConfig

The configuration passed to the app shell initialization function

## Table of contents

### Properties

- [apiUrl](SpaConfig.md#apiurl)
- [configUrls](SpaConfig.md#configurls)
- [env](SpaConfig.md#env)
- [offline](SpaConfig.md#offline)
- [spaPath](SpaConfig.md#spapath)

## Properties

### apiUrl

• **apiUrl**: `string`

The base path or URL for the OpenMRS API / endpoints.

#### Defined in

[packages/framework/esm-globals/src/types.ts:83](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L83)

___

### configUrls

• `Optional` **configUrls**: `string`[]

URLs of configurations to load in the system.

#### Defined in

[packages/framework/esm-globals/src/types.ts:96](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L96)

___

### env

• `Optional` **env**: [`SpaEnvironment`](../API.md#spaenvironment)

The environment to use.

**`default`** production

#### Defined in

[packages/framework/esm-globals/src/types.ts:92](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L92)

___

### offline

• `Optional` **offline**: `boolean`

Defines if offline should be supported by installing a service worker.

**`default`** true

#### Defined in

[packages/framework/esm-globals/src/types.ts:101](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L101)

___

### spaPath

• **spaPath**: `string`

The base path for the SPA root path.

#### Defined in

[packages/framework/esm-globals/src/types.ts:87](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-globals/src/types.ts#L87)
