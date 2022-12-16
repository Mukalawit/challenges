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
## Test cases

Use these test cases
```
const testCases = [
    {tickets: [{ source: "Amsterdam", destination: "Berlin" },{ source: "Paris", destination: "London" },{ source: "London", destination: "Amsterdam" }], expected: 'Paris, London, Amsterdam, Berlin'},
    {tickets: [], expected: 'No tickets'},
    {tickets: [{source: 'A', destination: 'B'}], expected: 'A, B'},
    {tickets: [{source: 'A', destination: 'B'}, {source: 'B', destination: 'C'}], expected: 'A, B, C'},
    {tickets: [{source: 'B', destination: 'C'}, {source: 'A', destination: 'B'}], expected: 'A, B, C'},
    {tickets: [{source: 'A', destination: 'B'}, {source: 'B', destination: 'A'}], expected: 'Starting point is not defined'},
    {tickets: [{source: 'A', destination: 'B'}, {source: 'Q', destination: 'Y'}], expected: 'Missing tickets'},
    {tickets: [{source: 'A', destination: 'B'}, {source: 'A', destination: 'C'}], expected: 'Missing tickets'},
    {tickets: [{source: 'A', destination: 'B'}, {source: 'A', destination: 'B'}], expected: 'A, B'},];
    ```