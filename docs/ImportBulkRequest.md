# egoiSdk.ImportBulkRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | Add new contacts only (&#39;add&#39;) or add and replace existing ones (&#39;update&#39;) | 
**compareField** | **String** | Field ID which will be mapped for comparison to prevent duplicates) | 
**contacts** | [**[ContactBulk]**](ContactBulk.md) | Array of contacts to import | 
**forceEmpty** | **Boolean** | If &#39;true&#39; accepts empty values and erases those fields | [optional] [default to false]
**notify** | **[Number]** | Array of IDs of the users to notify | [optional] 
**callbackUrl** | **String** | Url to receive the report | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `add` (value: `"add"`)

* `update` (value: `"update"`)




