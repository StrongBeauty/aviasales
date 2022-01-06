import React from 'react';

export class TicketTransactions extends React.Component {
  constructor(object, name) {
    super();
    this.object = object;
    this.userName = name;
  }

  getBookingTickets(num, classOrder) {
    switch (classOrder) {
      case 'Economy':
        if (this.getClassEconomy().length >= num) {
          const bookingTicketUser = this.getClassEconomy().slice(0, num);
          bookingTicketUser.forEach(
            // eslint-disable-next-line no-return-assign,no-param-reassign
            (item) => (item.orderStatus = true)
          );

          return {
            name: this.userName,
            tripId: this.object[0].tripId,
            ticket: bookingTicketUser,
          };
        }
        return null;
      case 'Business':
        if (this.getClassBusiness().length >= num) {
          const bookingTicketUser = this.getClassBusiness().slice(0, num);
          bookingTicketUser.forEach(
            // eslint-disable-next-line no-return-assign,no-param-reassign
            (item) => (item.orderStatus = true)
          );
          return {
            name: this.userName,
            tripId: this.object[0].tripId,
            ticket: bookingTicketUser,
          };
        }
        return null;
      default:
        return null;
    }
  }

  sortPrice() {
    return this.object.reduce((sum, current) => {
      const [Business, Economy] = [[], []];

      // eslint-disable-next-line array-callback-return
      current.data.map((item) => {
        if (item.price >= 100 && !item.orderStatus) {
          Business.push({ ...item });
        } else if (item.price < 100 && !item.orderStatus) {
          Economy.push({ ...item });
        }
      });
      // eslint-disable-next-line no-param-reassign
      sum = { Business, Economy };
      return sum;
    }, {});
  }

  getClassEconomy() {
    return Array.from(this.sortPrice().Economy);
  }

  getClassBusiness() {
    return Array.from(this.sortPrice().Business);
  }
}
