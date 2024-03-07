## After Dowloading code make sure to run npm install

## Before using the api calls remember to set the ".env" file according to your configuration.

## Error Handling

### if validation error

{
"error":"message"
}

### for all other error messages it is

{
"msg":"errorMessage"
}

# Authorization

In authorization part we have 2 main api calls and one auxillary api call.

## 1. Register user

To register a user on a local machine:

api call = `localhost:8080/api/v1/auth/register`

eg:

```
await fetch('http://localhost:8080/api/v1/auth/register', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ username, password }),
});
```

Ensure that the body variables are named username and password. Both should be at least 8 characters long. Upon successful registration, the response will be:

```
{
user:{
username:username
},
token:token
}
```

with an HTTP status code of 200.

## 2. Login

To log in on a local machine:

API call: `localhost:8080/api/v1/auth/login`

eg:

```
await fetch('http://localhost:8080/api/v1/auth/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ username, password }),
});

```

Ensure that the body variables are named username and password. Both should be at least 8 characters long.

## Auxillary call to store category of user

By default, each user is assigned the category of 'Client.' Use this call to change the user category. Acceptable categories are 'Client' and 'Developer.'

API call: `localhost:8080/api/v1/auth/add-category`

eg:

```
await fetch('http://localhost:8080/api/v1/auth//add-category', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
body: JSON.stringify({ category }),
});

```

Ensure that the body variable is named category.

# Reviews

In review part we have 2 main api calls.

## Create a Review

To Create Review on a local machine:

API call: `localhost:8080/api/v1/review/create-review`

eg:

```
await fetch('http://localhost:8080/api/v1/review/create-review', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
body: JSON.stringify({ title,description,rating }),
});

```

Ensure that body variables are named 'title','description','rating'.

Upon success, the response the response will be

```
{
"msg": "Review Created",
"review": {
"reviewId": reviewId
}
}
```

## Get Reviews using pagination

To Get Reviews on a local machine:

API call: `localhost:8080/api/v1/review/get-reviews/?page=`

eg:

```
await fetch('http://localhost:8080/api/v1/review/get-reviews/?page=${pageNumber}', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
});
```

The default page should be given as one and should not be empty.

Upon success, the response will be

```
{
"reviews": [
{
"review_id": review_id,
"userId": userId,
"username": username,
"category": category,
"review_title": review_title,
"review_description": review_description,
"rating": rating
},
{
"review_id": review_id,
"userId": userId,
"username": username,
"category": category,
"review_title": review_title,
"review_description": review_description,
"rating": rating
},
...
],
"totalReviews": totalReviews
}
```

Each page will give 5 reviews by default if you want to change the value contact me.

In case of page is more than the number of reviews than you will get folllowing reponse

```
{
"msg": "No more reviews."
}
```

# Client

## Client Creation

To Create Client on a local machine:

API call: `localhost:8080/api/v1/client/create-client-profile`

eg:

```
await fetch('http://localhost:8080/api/v1/client/create-client-profile',
, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
body: JSON.stringify({ name,bio,dev_testimonial,project }),
});

```

example body :

```
{
    "name":"Test Test",
    "bio":"This is a test client",
    "dev_testimonial":"This is client has good reputation",
    "projects":[{
        "project_name":"project 1",
        "project_description":"project_description 1",
        "wage":100
    },
    {
        "project_name":"project 2",
        "project_description":"project_description 2",
        "wage":200
    }
    ]
}
```

Upon success, the response the response will be

```
{
"msg": "Client Profile Created",
}
```

## Get Client

To Get Client on a local machine:

API call: `localhost:8080/api/v1/client/get-client-profile`

eg:

```
await fetch('http://localhost:8080/api/v1/client/get-client-profile', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
});
```

Upon success, the response will be

```
{
    "client_id": 1,
    "client_name": "Test Test",
    "bio": "This is a test client",
    "dev_testimonial": "This is client has good reputation",
    "project": [
        {
            "project_id": 1,
            "project_name": "project 1",
            "project_description": "project_description 1",
            "wage": 100,
            "client_id": 1,
            "dev_id": null,
            "createdAt": "2024-03-07T16:26:17.000Z",
            "updatedAt": "2024-03-07T16:26:17.000Z"
        },
        {
            "project_id": 2,
            "project_name": "project 2",
            "project_description": "project_description 2",
            "wage": 200,
            "client_id": 1,
            "dev_id": null,
            "createdAt": "2024-03-07T16:26:17.000Z",
            "updatedAt": "2024-03-07T16:26:17.000Z"
        }
    ]
}
```

# Developer

## Developer Creation

To Create Developer on a local machine:

API call: `localhost:8080/api/v1/dev/create-dev-profile`

eg:

```
await fetch('http://localhost:8080/api/v1/dev/create-dev-profile',
, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
body: JSON.stringify({ name,bio,qualification,instituteName,experience,skill }),
});

```

example body :

```
{
    "name":"Shivam",
    "bio":"I am Aspiring flutter developer",
    "qualification":"B.Tech IT",
    "instituteName":"JEC Jabalpur",
    "experience":0,
    "skill":["S1","S15"]
}
```

Upon success, the response the response will be

```
{
"msg": "Developer Profile Created",
}
```

## Get Developer

To Get Developer on a local machine:

API call: `localhost:8080/api/v1/dev/get-dev-profile`

eg:

```
await fetch('http://localhost:8080/api/v1/dev/get-dev-profile', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
});
```

Upon success, the response will be

```
{
    "dev_id": 2,
    "dev_name": "DevName",
    "bio": "This is a bio",
    "qualification": "B.Tech IT",
    "institute_name": "JEC Jabalpur",
    "experience_year": 0,
    "skills": []
}
```
## Skill array code
```
[('S1', 'HTML'), ('S2', 'CSS'), ('S3', 'Javascript'), ('S4', 'React JS'), ('S5', 'Next.js'), ('S6', 'Wordpress'), ('S7', 'Shopify'), ('S8', 'Wix'), ('S9', 'Figma'), ('S10', 'Node.js'), ('S11', 'Express'), ('S12', 'MongoDB'), ('S13', 'MySQL'), ('S14', 'UI/UX'), ('S15', 'PHP'), ('S16', 'Bootstrap'), ('S17', 'JQuery');
]
```
