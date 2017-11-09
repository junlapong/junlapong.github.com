API Academy Bootcamp
====================

Day 2 (2017-11-01)

## Exercise: Hypermedia API TODO App

1. created
----------

```
method: POST (CREATE)
uri: http://server/todo/create
```

request:

```json
POST /todo/create
Content-Type: application/json

{
	"label": {label},
    "due_date": {due_date},
    "priorities": {priorities},
}
```

response: 

```json
HTTP Status Code: 200

{
    "status": "00",
    "description": "success",
    "task_id":{task_id},
    "_links": {
        "_search": "/todo/search"
    },
}
```

2. deleted
----------

request:

```
method: DELETE (DELETE)
uri: http://server/todo/delete/{task_id}
```

response:

```json
HTTP: 200
{
    "status": "00",
    "description": "success",
    "_links": {
        "_search": "/todo/search"
    },
}
```

3. marked completed
----------

request:

```
method: PUT (UPDATE)
uri: http://server/todo/marked/{task_id}
```

response:

```json
HTTP: 200
{
    "status": "00",
    "description": "success",
    "task_id":{task_id},
    "_links": {
        "_search": "/todo/search"
    },
}

```

4. search
----------

```
method: POST
uri: http://server/todo/search 
```

request:

```json
[
	{
		"label": {label1},
	    "due_date": {due_date1},
	    "priorities": {priorities1},
	},
	{
		"label": {label2},
	    "due_date": {due_date2},
	    "priorities": {priorities2},
	}
]
```

response:

```json
HTTP: 200
{
    "status": "00",
    "description": "success",
    "tasks : [
    	{
           "task_id": 1,
           "label": {label},
           "due_date": {due_date},
           "priorities": {priorities},
           "_links": {
           	"_marked": "/todo/marked/1",
           	"_delete": "/todo/delete/1",
           },
           "_data" : {
               "task_id: "integer",
               "label": "string",
               "due_date": "yyyymmdd",
               "priorities": "H|M|L"
           }
       },
       {
           "task_id": 2,
           "label": {label},
           "due_date": {due_date},
           "priorities": {priorities},
           "_links": {
           	"_marked": "/todo/marked/2",
           	"_delete": "/todo/delete/2",
           },
           "_data" : {
               "task_id: "integer",
               "label": "string",
               "due_date": "yyyymmdd",
               "priorities": "H|M|L"
           }
       }
       ]
    },
    "pagination" : {
        "prev": "/prev",
        "next": "
    	
    }
    	 
    },
    "_links": {
        "create": "/todo/create"
    },
}
```
