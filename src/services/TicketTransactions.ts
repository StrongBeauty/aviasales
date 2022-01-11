import { TicketType, TripCardType } from '../store';

class TicketTransactions {
  userName: string;

  object: TripCardType[];

  constructor(object: TripCardType[], name: string) {
    this.object = object;
    this.userName = name;
  }

  getBookingTickets(num: number, classOrder: string) {
    switch (classOrder) {
      case 'Economy':
        if (this.getClassEconomy().length >= num) {
          const bookingTicketUser: TicketType[] = this.getClassEconomy().slice(0, num);
          for (let i = 0; i < bookingTicketUser.length; i += 1) {
            bookingTicketUser[i].orderStatus = true;
          }

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
          for (let i = 0; i < bookingTicketUser.length; i += 1) {
            bookingTicketUser[i].orderStatus = true;
          }
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

  getClassEconomy() {
    return Array.from(this.sortPrice().Economy);
  }

  getClassBusiness() {
    return Array.from(this.sortPrice().Business);
  }

  sortPrice() {
    return this.object.reduce((sum, current) => {
      const Business: TicketType[] = [];
      const Economy: TicketType[] = [];

      current.data.map((item) => {
        if (item.price >= 100 && !item.orderStatus) {
          return Business.push({ ...item });
        }
        if (item.price < 100 && !item.orderStatus) {
          return Economy.push({ ...item });
        }
        return '';
      });
      sum = { Business, Economy };
      return sum;
    }, {} as ResultType);
  }
}

export { TicketTransactions };

type ResultType = {
  Business: TicketType[];
  Economy: TicketType[];
};
