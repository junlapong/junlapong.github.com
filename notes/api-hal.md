Exercise: HAL API Design
------------------------

### Document
```json
{
	"title": <string>,
	"authors": <string>,
	"category": [],
	"document": <string>,
	"scanned_images": ,
	"subbmission_date": ,
}
```


### Category
```json
{
	"id": <GUID>,
	"name": <string> (contract, estate, civil, ...)
}
```

## Interaction

### 1. Retrieve a list of categories

Request:

```
GET /categories/list

```

Response:

```json
HTTP Status: 200 OK
Content-Type: application/hal+json

{
	"_links": {
		"self": { "href": "/categories/list"},
	},
	"categories": [
		{
			"id": 1,
			"name": <string>
			"_links": {
				"self": { "href": "/categories/{id}"},
				"all": { "href": "/categories/list"},
			}
		},
		{
			"id": 2,
			"name": <string>
			"_links": {
				"self": { "href": "/categories/{id}"},
				"all": { "href": "/categories/list"},
			}
		},
	]
}
```

### 2. Retrieve a list of documents by category

Request:

```
GET /documents/find?category=legal

```

Response:

```json
HTTP Status: 200 OK
Content-Type: application/hal+json

{
	"_embedded": [
		{
			"id": 1,
			"name": "document ...",
			"_links": {
				{ "self": { "href": "/documents/{id}" }
			}
			 
		},
	]
}
```













