/* 
   Filename: complex_code.js

   Description: This code demonstrates a complex JavaScript program that solves a real-world problem.
                It is a ticket management system for a multiplex theater.
*/

// Ticket class to represent a single ticket
class Ticket {
  constructor(movie, showtime, seatNumber) {
    this.movie = movie;
    this.showtime = showtime;
    this.seatNumber = seatNumber;
  }

  printTicketInfo() {
    console.log(`Movie: ${this.movie}`);
    console.log(`Showtime: ${this.showtime}`);
    console.log(`Seat Number: ${this.seatNumber}`);
  }
}

// Theater class to manage the ticket booking and cancellation process
class Theater {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.tickets = [];
  }

  checkAvailability() {
    return this.capacity - this.tickets.length;
  }

  bookTicket(movie, showtime, seatNumber) {
    if (this.checkAvailability() > 0) {
      const newTicket = new Ticket(movie, showtime, seatNumber);
      this.tickets.push(newTicket);
      console.log('Ticket booked successfully!');
    } else {
      console.log('Sorry, no seats available.');
    }
  }

  cancelTicket(ticket) {
    const index = this.tickets.indexOf(ticket);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      console.log('Ticket canceled successfully!');
    }
  }

  printAllTickets() {
    if (this.tickets.length === 0) {
      console.log('No tickets booked yet.');
    } else {
      console.log('List of booked tickets:');
      this.tickets.forEach(ticket => ticket.printTicketInfo());
    }
  }
}

// Create a theater object
const myTheater = new Theater('Multiplex Cinema', 100);

// Book some tickets
myTheater.bookTicket('Avengers: Endgame', '09:00 AM', 'A1');
myTheater.bookTicket('Avengers: Endgame', '09:00 AM', 'A2');
myTheater.bookTicket('Avengers: Endgame', '09:00 AM', 'B1');

// Print the list of tickets
myTheater.printAllTickets();

// Cancel a ticket
const ticketToCancel = myTheater.tickets[1];
myTheater.cancelTicket(ticketToCancel);

// Print the updated list of tickets
myTheater.printAllTickets();