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
      if (detectConflicts(tickets, source))
        return console.log('Missing tickets');

      const trips = doIteration(tickets, source);
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

function doIteration(tickets, trip) {
  for (let ticket of tickets) {
    if (trip[trip.length - 1] === ticket['source']) {
      trip.push(ticket['destination']);
      if (tickets.length !== trip.length - 1) {
        doIteration(tickets, trip);
      }
    }
  }

  return trip;
}

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function detectConflicts(tickets, arr) {
  const conflicts = [];
  for (let ticket of tickets) {
    if (ticket['source'] === arr[0]) {
      conflicts.push([ticket['source'], ticket['destination']]);
    }
  }

  const sourceImage = conflicts[0];

  //if any other conflicts array items  are not identical to the image
  //we have a source-destination conflict
  for (let image of conflicts) {
    if (image[0] === sourceImage[0] && image[1] === sourceImage[1]) {
    } else {
      return true;
    }
  }
}
const tickets = [
  { source: 'A', destination: 'B' },
  { source: 'A', destination: 'C' },
];
// const tickets = [
//   { source: 'D', destination: 'K' },
//   { source: 'B', destination: 'C' },
//   { source: 'C', destination: 'D' },
//   { source: 'A', destination: 'B' }

// ];

restoreUserTrip(tickets);
