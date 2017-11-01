API Academy Bootcamp
====================

Day 2 (2017-11-01)

## Exercise: API Design for a TODO App

1. created
----------

request:

```
method: POST (CREATE)
uri: http://server/todo/create?label={label}&due_date={due_date}&priorities={priorities}
```

response: 

```json
HTTP: 200
{
    "status": "00",
    "description": "success",
    "task_id":{task_id}
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
    "description": "success"
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
    "task_id":{task_id}
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
           "task_id":{task_id},
           "label": {label},
           "due_date": {due_date},
           "priorities": {priorities}
       },
       {
           "task_id":{task_id},
           "label": {label},
           "due_date": {due_date},
           "priorities": {priorities}
       }
       ]
    }
}
```
