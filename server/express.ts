import express, { Request, Response, NextFunction } from 'express';

import bodyParser from 'body-parser';

const data = require('./data/data.json');

const app = express();
const port = process.env.PORT || 8080;

const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

interface DataId {
  id: number;
  flightId: number;
  seat: string;
  price: number;
  orderStatus: boolean;
}

interface Item {
  time: Time;
  tailNumber: string;
  tripId: number;
  numberOfFreeTickets: number;
  note: string;
  data: DataId;
}

app.use((req: Request, res: Response, next: NextFunction) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/v1/trips', urlencodedParser, (req: Request, res: Response) => {
  try {
    res.status(200).send(JSON.stringify([data, req.query]));
  } catch (err) {
    res.status(404).send(JSON.stringify(err));
    // eslint-disable-next-line no-console
    console.log(err);
  }
});

app.post('/api/v1/trips/:trip', urlencodedParser, (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line no-console
    console.log(JSON.parse(req.body.data));
    res.send('Success!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});

app.get('/api/v1/trips/:trip/:id', urlencodedParser, (req: Request, res: Response) => {
  try {
    const trip = data.find((item: Item) => item.tripId === Number(req.params.trip));
    const dataId = trip.data.find((item: DataId) => item.id === Number(req.params.id));
    if (dataId) {
      return res.send(JSON.stringify(dataId));
    }
    return res.status(404).send('Error: not data id');
  } catch (err) {
    // eslint-disable-next-line no-console
    return console.log(err);
  }
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`));
