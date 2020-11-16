# **SIMPLE QUIZ PROJECT USING COMMAND LINE INTERFACE** 

`Learn to appreciate yourself and celebrate small wins` --- This helps you in keep on motivating
## **Setting up the project**
1. Go to [repl](https://repl.it/) (explore repl, it is an intresting web app to use). 
![Main Page of repl](./images/repl-login.png)

2. Now, if you are new to repl then create a new account.

3. Open a new repl and select node.js under node.js
![New repl](./images/new-repl.png)
4. Now you will enter into Javascript with node.js console.
![New repl](./images/new-console.png)
5. Don't get confused it will take time to get used with it. Explore repl in your free time.

## **Basics of Javascript**
Click here, to know the history of **[Javascript](https://en.wikipedia.org/wiki/JavaScript)**

Best resources to learn **Javascript**
* [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Eloquent Javascript book](https://eloquentjavascript.net/Eloquent_JavaScript.pdf)
* [Tanay Pratap's Javascript playlist](https://www.youtube.com/playlist?list=PLzvhQUIpvvuj9nN70USkHJrrSeQ9aiqdB)

Now, let's get into our simple javscript and nodejs project. In this simple project we build a simple Command Line Interface quiz. Eventually while doing the project let us build our project.

What we will be learning by doing this project?
* Taking inputs (using 'readline-sync' npm package)
* Printing output
* Using operators
* Usage of if and if-else
* Usage of for loops
* Usage of basic data structures like arrays, dictionary

Objective of creating this project is to create a quiz about MARVEL

### For taking user inputs we use a npm package called [**'readline-sync'**](https://www.npmjs.com/package/readline-sync) 
### To use this package in your library type the below code to make it available for our project.

```
var readlineSync = require('readline-sync')
```

Now input the player_name and print welcome message
```
var playerName = readlineSync.question("Enter your name: ");   
console.log("Welcome to the quiz ",playerName);
```
Now initialize player_score
```
var playerScore = 0;
```
Let's create a sample [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of 3 question[objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
```
const Quiz = [
    {
        question: "Who is the prime minister of india?",
        a: "Tanay Pratap",
        b: "Bumrah",
        c: "Narendra Modi",
        d: "Dhoni",
        correctanswer: "c"

    },
    {
        question: "Who is the president of america?",
        a: "Jaswanth",
        b: "James Cameron",
        c: "Kamala Harris",
        d: "John Beiden",
        correctanswer: "d"
    },
    {
        question: "Which is the largest continent?",
        a: "Asia",
        b: "Africa",
        c: "South America",
        d: "Europe",
        correctanswer: "a"

    },
]
```
Wow, we used arrays and object as each item in an array. Now we need to print these questions for our player. So we use [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop to it now.

```

```