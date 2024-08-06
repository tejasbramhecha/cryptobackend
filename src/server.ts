import { app } from './app';
import { DatabaseConnect } from './config/DatabaseConnect';
import { CryptoScheduler } from './schedulers/CryptoScheduler';

try {
  app.listen(process.env.PORT, async () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
    // Connect to database.
    const dbInstance = new DatabaseConnect();
    dbInstance.connectToMongoDb();
    // Create a cron job.
    const schedulerInstance = new CryptoScheduler();
    schedulerInstance.addCryptoScheduler();
  });
} catch (err) {
  console.error({
    message: 'Could not start server',
    error: err
  });
}