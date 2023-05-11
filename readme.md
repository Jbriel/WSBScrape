This is a project to attempt to find correlation behind large single day traffic referring to a single stock on certain subreddits(WSB,Investing,Stocks, etc) and the stock price in the short term. 
More simply creating an alert when a meme stock starts to blow up to try and catch it early. 

The WSB subreddit drove gamestop stock price from ~$30 to ~$400 in a matter of a few days with a mob mentality and fomo. 
The assumption is the more posts there were on the subreddit the more stock price went up to a certain point.
The goal here is to get in as early as possible without catching a false mania, and then to get out at the top or on the beginning of the downward trend.
This is because the artifical stock growth is unsustainable. The exit plan would assume when posting decelerates the sell point has been reached.
The theory is the subreddit posts about the stock increase before the price increase allowing a bot to predict the mania without gambling like the original posters.
 
First thought is to use previous meme stocks to build a model. (gamestop, bed bath and beyond, amc, etc)
Maybe something simple like references to a stock exceeding a certain percantage of the total posts is a purchase point and dipping below a different threshold is a sell point.
eg: buy when a stock hits over 40% and sell when that stock dips below 30%

Phase 1: Create a model with WSB and the meme stocks gamestop, bed bath and beyond and amc. 
1. Get dates starting a few days before till a few days after of each meme event.
2. Use reddit api to get posts/comments from those dates
3. Filter out some kind percentage of total of mentions of stock/ticker from those days (preferably with some time fidelity like by the hour)
4. compare this movement of total reference to the price of the stock in the same period to try to find correlation and a confidence level
5. Take learnings from these three stocks to create a model

Phase 2: Create a general stock scraper
1. Create a daily scraper that checks for the top ~10,000 or so stocks in these subreddits
2. Use the model above to check if any of these stocks go above a post percentage threshold
3. Give a live alert(email or text message) when a stock breaks one of these thresholds
4. User can then give due dilligence and decide if the stock is worth buying. 



To Run:

rename `config/sample_default.json` to `config/default.json` with the api variables filled properly

npm start