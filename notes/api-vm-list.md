Exercise: In-Depth URI Style API Design
----------------------------------------


### Virtual Server Attributes

```json
{
	id: <GUID>,
	name: <string>,
	status: <string> (idle|running),
	created_date: <date>,
	running_time: <integer>
}
```

## API

###1. Retrieve a list of virtual servers

Request:

```json
GET /server/list?offset=10&page=1

```

Response:

```json
HTTP Status Code: 200 OK
Content-Type: application/json

{
	"servers": [
	]
}
```

###2. Create a new virtual server

Request:

```json
POST /server/create
Content-Type: application/json

{
	"name": <string>,
	"status": <string> [optional]
}
```

Response:

```json
HTTP Status Code: 201 Created
Content-Type: application/json

{
	"id": <GUID>,
	"name": <string>,
	"status": <string>,
	"created_date": <date>,
	"running_time": <integer>
}
```

###3. Clone a new virtual server

Request:

```json
POST /server/clone
Content-Type: application/json

{
	"from_id": <GUID>
	"name": <string>
}

```

Response:

```json
HTTP Status Code: 201 Created
Content-Type: application/json

{
	"status": (success|fail)
	...
}
```

###4. Stop and Start a virtual server

Request:

```json
PUT /server/<id>
Content-Type: application/json

{
	"status": (idle|running)
}

```

Response:

```json
HTTP Status Code: 200 OK | 50x
Content-Type: application/json

{
	"id": <GUID>,
	"name": <string>,
	"status": <string>,
	"created_date": <date>,
	"running_time": <integer>
}
```

###5. Delete a virtual server

Request:

```json
DELETE /server/delete/<id>
```

Response:

```json
HTTP Status Code: 200 OK | 50x
Content-Type: application/json

{
	"status": (success|fail)
	...
}
```

###6. Search for a virtual server

Request:

```json
GET /server/<id>

```

Response:

```json
HTTP Status Code: 200 OK | 404 Not Found
Content-Type: application/json

{
	"id": <GUID>,
	"name": <string>,
	"status": <string>,
	"created_date": <date>,
	"running_time": <integer>
}
```

