# FomoFactory Assignment
- Polls real-time data every 2 minutes for 5 crypto currencies ('BTC', 'ETH', 'LTC', 'XRP', 'BCH').
- Uses free APIs offered by LiveCoinWatch.
- Stores that data in a mongoDB database
- Exposes an API to fetch latest 20 records from database based on crypto code provided. Please refer to curl --location 'http://localhost:3000/coin/:id'

## Installation
To run the project, run the following command:

   ```
   npm install
   npm start
   ```

### Before Running
Before running the project, you need to provide the following configurations:
1. Go to https://www.livecoinwatch.com/tools/api.
2. Click generate key.
3. Copy the key and replace liveCoinWatchAPIKey in .env



