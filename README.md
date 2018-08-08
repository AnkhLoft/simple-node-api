# simple-node-api

Simple node API that prints the numbers from 1 to 100 by default upon receiving a single request with no parameters.
For multiples of 3, print the word 'Pé', for multiples of 5 print the word 'Do'. For multiples of both 3 and 5, print 'Pédo'

## Todos

- Single request with no parameters return numbers from 1 to 100 including the words 'Pé' and 'Do'
- Define interval of numbers to print in the request (only positive numbers)
- Create documentation
    - ~~Installation~~
    - Swagger to document the API
- Testing

## Installation

**Inside the project folder**  

Install the dependencies by running
```
$ npm install
```

## Run the server
In your terminal run
```
$ npm start
```

## Change the server port number
By default is set to 3000, you can change it by running

```
$ export PORT=<number> // Unix systems
```