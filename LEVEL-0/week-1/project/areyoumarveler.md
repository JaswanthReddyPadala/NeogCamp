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

- [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Eloquent Javascript book](https://eloquentjavascript.net/Eloquent_JavaScript.pdf)
- [Tanay Pratap's Javascript playlist](https://www.youtube.com/playlist?list=PLzvhQUIpvvuj9nN70USkHJrrSeQ9aiqdB)
- [You don't know javascript](https://github.com/getify/You-Dont-Know-JS)

Now, let's get into our simple javscript and nodejs project. In this simple project we build a simple Command Line Interface quiz. Eventually while doing the project let us build our project.

What we will be learning by doing this project?

- Taking inputs (using 'readline-sync' npm package)
- Printing output
- Using operators
- Usage of if and if-else
- Usage of for loops
- Usage of basic data structures like arrays, dictionary

Objective of creating this project is to create a quiz about MARVEL

### For taking user inputs we use a npm package called [**'readline-sync'**](https://www.npmjs.com/package/readline-sync)

### To use this package in your library type the below code to make it available for our project.

```
var readlineSync = require('readline-sync')
```

Now input the player_name and print welcome message. '\n' is an escape character. Know about escape characters in [strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

```
var playerName = readlineSync.question("Enter your name: ");
console.log("Welcome to the quiz ",playerName+"\n");
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
        correctAnswer: "c"

    },
    {
        question: "Who is the president of america?",
        a: "Jaswanth",
        b: "James Cameron",
        c: "Kamala Harris",
        d: "John Beiden",
        correctAnswer: "d"
    },
    {
        question: "Which is the largest continent?",
        a: "Asia",
        b: "Africa",
        c: "South America",
        d: "Europe",
        correctAnswer: "a"

    },
]
```

Wow, we used arrays and object as each item in an array. Now we need to print these questions for our player. So we use [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop to it now.

We need to use to for loop to iterate over each and every question and only if the answer is correct we can add 1 to player_score.

```
for (let i = 0; i < Quiz.length; i++) {
    console.log(`${i + 1}. ${Quiz[i].question}`);
    console.log(`          a: ${Quiz[i].a}`);
    console.log(`          c: ${Quiz[i].b}`);
    console.log(`          b: ${Quiz[i].c}`);
    console.log(`          d: ${Quiz[i].d)}`);
    var answer = readlineSync.question("Answer: ");
	console.log("\n");

    //now validate answer
    if (answer.toLowerCase() == Quiz[i].correctAnswer){
        playerScore = playerScore + 1;
    }
}
```

Now each every time the player answers correctly the score increases.

Now finally print the users score at last.

```
console.log("Woohooo!!, you scored "+playerScore);
```

## **OUTPUT**

![Output of above program](./images/output.JPG)

### CHECKOUT MY OTHER CLI QUIZ PROJECTS

YAY!! you have done a CLI project, Though it is simple this will help you in building you fundamentals good.
Hope you learnt some basics.
If you like this write me on [twitter](https://twitter.com/jaswanthreddyp2) | [Github](https://github.com/JaswanthReddyPadala/) | jaswanthreddypadala@gmail.com
