import express, { json } from 'express';
import cors from 'cors';
import { appendFileSync } from 'fs';

const app = express();
app.use(cors());
app.use(json());

app.post('/track', (req, res) => {
  const eventData = { ...req.body, timestamp: new Date().toISOString(), userId: req.body.userId };

  if (eventData.event === 'PageView') {
    console.log(`Page viewed: ${eventData.url} by user ${eventData.userId} from IP ${eventData.ip}`);
  }

  appendFileSync('analytics.log', JSON.stringify(eventData) + '\n');
  res.status(200).send({ message: 'Event received' });
});

app.listen(4000, () => console.log('Analytics service running on port 4000'));
