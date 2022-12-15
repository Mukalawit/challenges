function generateTicketCSV(tickets){
let ticketsCSV = [];
if(!tickets.length) return console.log(`tickets should be an array of the format tickets:[{source: 'source', destination:'destination'}]`);

for(let ticket of tickets){

    if(ticket.hasOwnProperty('source') && ticket.hasOwnProperty('destination')){
       ticketsCSV.push(ticket['source'] , ticket['destination']);
    }
    else{
        return console.log(`All tickets should be an object of the format {source: 'source', destination:'destination'}`);
    }
}
return console.log(`'${ticketsCSV.join(',')}'`);
}
const tickets =[
    {source:'source1',destination:'destination1'},
    {source:'source2',destination: 'destination2'}
];
generateTicketCSV(tickets);