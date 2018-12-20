beginning clark take home project 12/1/2018 1:00pm 

Need node, docker(unknown), express, angular and node to complete. 
must figure out how to connect to this database in order to alter data. 

install docker 2:12pm 
docker installation successful, ran "docker-compose up" and getting message Admin database connected
seed.js command not working, database cannot be accessed from this js app. 

tried downloading mongodb directly but node modules already include mongodb 
and mongo db included in .json file. 
will start creating node app with express to test database connection on localhost:27017
**break** will resume later. 

9:00pm
watched video on building RESTful applications, took notes on the process and will attempt to 
recreate. 
self study mode on 10000%. woo. 

package.json file does not include express, or body-parser. 
Adding these dependencies.. 
app.js already set to main. lol
**Now I noticed something interesting, all the functions required for the Rest api are in the mongoConnector.ts file, Almost everything I need. The only issue now is that I don’t know how to use and access these functions. When I try to run the app.ts file I keep getting error messages about the <promise> and other things in the MongoConnectorFactory. Don’t know enough about typescript to troubleshoot this so I’ll continue with my main approach. But I feel like the real test/goal of this project is to utilize those functions.**
12/3/2012
accessing and modifying data in admin database from command line. 
now to create express app. 
Forgot to add mongoose to package.json. 

11:13| node app is running but getting the message " DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect."

11:18| Tested express app communication with "Hello there" message through res.send. 

1:30| fixed seed.js file, @example was removed from route to Mongodb. "sample task being added to db whenever seed.js is run. 

2:35pm| FINALLYYYY!! accessed the database and printed out sample categories to webpage. going to end on a good note here and come back to this later. 
Getting the PUT operator to work is a bit troubling but I’ll get it eventually. 
PUT’s still having trouble so I’ll work on Delete and come back to this later.
PUT and Delete are working now, FINALLY! 
Finished RestAPI CRUD operations with express which was a but easier than I thought. I should dive into Node a bit more. 
After this I need a break from angular, never want to touch it again. I’m divorcing the lavsnguage as a whole. 
CRUD Operations in Express REST API are finished, I’ll start the Angular front end tomorrow.
This is a lot.
12/5: I probably won’t be able to work on this again for another week and a half maybe, finals and Explosion are getting in the way. 
12/10: I’M BACK!! 
Getting the look and feel set early so I don’t have to worry about it too much later. 
There’s so much going on in angular, but it makes sense the way things are connected. 
Issue with access-control-allow-orgin, so I Downloaded CORS for google chrome. Working well so far. But localhost still needs http certificate.
12/11: Connection to the api is successful and printing the tasks to the front end works. Big issue, getting the tasks to print out within the categories is an issue since tasks are saved under the categories with an objectID that I would use to reference that task in the tasks collection. My problem is getting that ID and referencing the tasks collection to give me the text in the task. Might change the set up of the database. 
Switching up the database setup a little, instead of saving a refence to the task, save the task itself. **changing seed.js code** 
And all tasks saved under the Task collection will just be called general tasks. 
Printing tasks with actual text with frontEnd.
Gotta check out for finals. 
12/13: 
Let’s see what I can get done In the next few days. Need to figure out how to create a dialog box. 
There is toooooo much that goes into such a simple task. HTML doesn’t even feel like html. 
I’m only scratching the surface, but I can tell that the Angular library is MASSIVE. 

12/14: 
Thank GOD. Adding tasks to DB with the dialog box finally works, I can stop pulling out hairs. 
Adding categories works too, perfect. Onto deleting. 
Adding Icons to make things easier. I’ll work on visibility later. 
Deleting tasks and categories successfully. Need a break, Angular’s making my head hurt. Slowly hating this language. BackEnd development’s my thing. This isn’t for me.

12:15: 
Things that are simple in other languages seem so complicated with Angular.
BIG ISSUE. Updating a task from angular and adding a task to category from angular front end. 
Gotta check out for finals again. Hopefully I’ll finish. 

12/19/2018 1:14am After hours of searching for a simple way to extract data from the form and transfer to a component i finally succeeded. i didn't think something. so simple in other languages could ever get so complicated. Signing off on  a good note, i'll try my best to finish in the morning.

12/20 
I've done the best I can with the little info I know about Angular, I don't want to do a rush job and find code to add to this i'd rather learn and understand as I go like i've been doing so it's best that I end here. Unfinished but I can see that front-end, with Angular at least, isn't my thing. Working with Node and Express and Mongo for the API was more up my alley. 

**If i could do things differently, it would have been better for me to ignore the design initially and work on getting the use cases done, because the design with dialogs kind of tied my hands in areas where passing data to components was necessary.**

**All together, great experience, learned a alot**

**Didn't have time to set up proxy for the API calls!! CORS extension needed on Chrome**