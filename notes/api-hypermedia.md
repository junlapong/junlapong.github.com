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

```
Content-Type: application/json
```

```json
{
	"label": {label},
    "due_date": {due_date},
    "priorities": {priorities},
}
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

request:

```
method: GET (READ)
1. uri: http://server/todo/search/{id}
2. uri: http://server/todo/search?label={label}&due_date={due_date}&&priorities={priorities}
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
    "_links": {
        "create": "/todo/create"
    },
}
```
