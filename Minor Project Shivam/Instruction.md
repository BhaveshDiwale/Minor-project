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

# Developer

## Creation of Developer

Make sure that the user is logged in and has the category of Developer.

API call:`localhost:8080/api/v1/dev/create-dev-profile`

eg:

```
await fetch('http://localhost:8080/api/v1/dev/create-dev-profile', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization':'Bearer ${token}'
},
body: JSON.stringify({ name, bio, qualification, instituteName, experience, skill }),
});

```

here skill is an array which contains the skill id
as follows:

('S1', 'HTML'),
('S2', 'CSS'),
('S3', 'Javascript'),
('S4', 'React JS'),
('S5', 'Next.js'),
('S6', 'Wordpress'),
('S7', 'Shopify'),
('S8', 'Wix'),
('S9', 'Figma'),
('S10', 'Node.js'),
('S11', 'Express'),
('S12', 'MongoDB'),
('S13', 'MySQL'),
('S14', 'UI/UX'),
('S15', 'PHP'),
('S16', 'Bootstrap'),
('S17', 'JQuery');

Remember to pass only the Skill Id in skill array like

```
skill=['S1','S2']

```

it will give following response on successfull creation

```
{ msg: 'Developer Profile Created' }
```

## Fetching developer info

make sure that user is logged in and the category is Developer otherwise both creation and fetching won't work

API call:`localhost:8080/api/v1/dev/get-dev-profile`

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

on success the response will contain following json

```
{
    "dev_id": dev_id,
    "dev_name": dev_name,
    "bio": bio,
    "qualification": qualification,
    "institute_name": institute_name,
    "experience_year": work Experince in years,
    "skills": array of skills in string
}
```
