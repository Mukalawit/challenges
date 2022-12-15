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

    if (source.length === 1) {
      //find the next destination after the source
      for (let ticket of tickets) {
        if (source[source.length - 1] === ticket['source']) {
          source.push(ticket['destination']);
        }
      }
      console.log(source);
    } else if (source.length > 1) {
      console.log('Missing tickets');
    } else {
      console.log('Starting point is not defined');
    }
  } else {
    console.log('No tickets');
  }
}

const tickets = [
  { source: 'A', destination: 'B' },
  { source: 'B', destination: 'C' },
  { source: 'C', destination: 'D' },
  { source: 'D', destination: 'K' },
];

restoreUserTrip(tickets);
