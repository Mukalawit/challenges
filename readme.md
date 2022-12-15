## Description of challenge
One travel agency faced a problem with a corrupted database, containing customers' trips. IT department was able to recover tickets linked to specific users.
Unfortunately, tickets contain only source and destination countries without any other information. Help travel agency to restore original trip for specific users.

Task:
Write a function that accepts array of tickets, where ticket has format {source: string, destination: string} and returns string of comma separated countries as it was originally planned.
```
Example:
tickets: [
  {source: 'Amsterdam', destination: 'Berlin'},
  {source: 'Paris', destination: 'London'},
  {source: 'London', destination: 'Amsterdam'},
]
result: 'Paris, London, Amsterdam, Berlin'
```
## How to run
```
node index.js

```