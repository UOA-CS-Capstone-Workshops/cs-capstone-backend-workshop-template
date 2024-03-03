# CS Capstone workshops - Node.js, Express

In this workshop, we will learn the basics of using Node.js & Express as a backend for your Capstone projects. We will be creating a RESTful API for a service which allows users to create, retrieve, update, and delete items in a todo list.

We will also show how you can _call_ your REST API from frontend JavaScript code.

In this workshop, you will learn about the following concepts:

1. Node.js & Express basics
2. Creating a simple Express server from scratch
3. Routes
4. Routers & code organization
5. Some basic middleware (static files, cors), body parsing
6. HTTP methods & response codes
7. HTTP body, path params, query params(?)
8. [Postman](https://www.postman.com/) for testing
9. `fetch()` on the client-side

## Steps

We will go throught he following steps in this workshop:

### Step 0: A simple Express server

In this step, you will work with a _different_ project from this one - you will create a new project from scratch.

You will learn the following in this step:

- Creating a new node.js project with `npm init -y`
- Adding dependencies
- `nodemon`
- The simplest Express server (creating the server, creating a route, listening on a port)

### Step 1: Introduction to the project

From this step onwards, we will be working in _this_ project.

In this step, you will:

- Explore the code which is already here
- Learn about Express middleware
- Learn about environment variables
- Learn about Routers and code organization

### Step 2: Getting todo items

In this step, you will:

- Learn about common HTTP methods - `GET`, `POST`, `PATCH`, `PUT`, `DELETE` - and what they are used for in REST
- Learn about common HTTP response codes - `200`, `201`, `204`, `404`, `422`.
- Create a handler for `GET` requests to `/api/todos`, which will retrieve all routes.
- Test your API using Postman

### Step 3: Finishing the REST API

In this step, you will:

- Create three more routes (creating new todos, updating existing todos, deleting existing todos)
- Test these routes using Postman

### Step 4: Hooking up the frontend

In this step you will jump over to the [_frontend_](../frontend/) project, and use `fetch()` to connect with your API. The frontend is written in React, but you don't need to understand React to complete this step. Your teammates in the React workshop will be building out this app!
