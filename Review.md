# Review Questions

## What is Node.js?
node is a program that runs other programs. It allows us to run javascript apps outside the browser

## What is Express?
express is a framework that works with the node.js server, kinda like react but for back end. It adds extra functionality like routing, middleware and simpler API

## Mention two parts of Express that you learned about this week.
Middleware: functions that can operate on objects and return a response, or call the next middleware in line.

Routing: a way to devide your urls based on similarities. It allows us to break our code up into smaller files, therefore your code is cleaner and easier to read.

## What is Middleware?
answered in the above question

## What is a Resource?
a resource can be anything on the web, and is accessible via a unique URL. 

## What can the API return to help clients know if a request was successful?
HTTP status codes

## How can we partition our application into sub-applications?
using router

## What is express.json() and why do we need it?
built in middleware that parses JSON content out of the request body.