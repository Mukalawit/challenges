function restoreUserTrip(tickets) {
  if (tickets.length) {
    let source = [];
    let fail = 0;
    for (let ticket of tickets) {
      //identify the source
      //iterate the array of tickets to check if source exists anywhere as destination
      for (let check of tickets) {
        if (ticket['source'] === check['destination']) {
          fail++;
        }
      }
      if (!fail) {
        source.push(ticket['source']);
      }

      fail = 0;
    }
    source = removeDuplicates(source);
    if (source.length === 1) {
      const trips = doIteration(tickets,source);
      console.log(trips);
    } else if (source.length > 1) {
      console.log('Missing tickets');
    } else {
      console.log('Starting point is not defined');
    }
  } else {
    console.log('No tickets');
  }
}

function doIteration(tickets , source){
    for (let ticket of tickets) {
        if (source[source.length - 1] === ticket['source']) {
          source.push(ticket['destination']);
          if(ticket.length !== (source.length-1)){
            doIteration(tickets , source);
          }
        }
      }

    return source;
}

function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}

const tickets = [
  { source: 'A', destination: 'B' },
  { source: 'B', destination: 'C' },
  { source: 'C', destination: 'D' },
  { source: 'D', destination: 'K' },
];

restoreUserTrip(tickets);

