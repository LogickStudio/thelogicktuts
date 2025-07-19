import type { Part } from '../types';

export const part3Data: Part = {
  title: "Part 3: Introduction to Programming",
  description: "Now that you are comfortable with the basics of operating a computer and using essential applications, it's time to embark on the exciting journey of programming! Programming is the art of giving instructions to a computer to perform specific tasks. It's like teaching your computer to do exactly what you want it to do. Before we dive into writing code, we need to learn how to think like a programmer, which involves logic and problem-solving.",
  weeks: [
    {
      week: 6,
      title: "THINKING LIKE A PROGRAMMER",
      lessons: [
        {
          id: 'w6d1',
          day: 1,
          title: "Logic and Problem Solving",
          objectives: ["Define what an algorithm is and its properties", "Use flowcharts and pseudocode to plan logic", "Identify the three basic logic concepts: sequence, decision, and loop"],
          materials: ["Pen and paper (for drawing flowcharts)"],
          activities: [
            {
              type: 'reading',
              title: "Introduction to Algorithms",
              description: "Programming is not just about writing lines of code; it's fundamentally about solving problems. Before you can tell a computer what to do, you need to figure out the exact steps to solve a problem yourself.\n\nAn algorithm is a set of well-defined, step-by-step instructions to solve a problem or accomplish a task. Think of it as a recipe for a computer. Just like a recipe tells you exactly how to bake a cake, an algorithm tells a computer exactly how to perform a task.\n\nAlgorithms must be:\n\n• **Clear and Unambiguous**: Each step must be precise and leave no room for confusion.\n• **Finite**: The algorithm must end after a certain number of steps.\n• **Effective**: Each step must be simple enough to be carried out.\n• **Correct**: The algorithm must produce the correct output for all valid inputs."
            },
            {
              type: 'demonstration',
              title: "Planning an Algorithm: The Tea Example",
              description: "Let's consider a simple everyday task: making a cup of tea. Programmers use tools like Flowcharts and Pseudocode to plan out the steps.\n\nA **Flowchart** is a diagram that visually represents the process. A **Pseudocode** is a plain language description.\n\nHere is the pseudocode:\n\nSTART\n    BOIL WATER\n    PLACE TEA BAG IN CUP\n    POUR BOILED WATER INTO CUP\n    STEEP TEA FOR 3 TO 5 MINUTES\n    REMOVE TEA BAG\n    IF user wants sugar AND milk THEN\n        ADD SUGAR\n        ADD MILK\n    END IF\n    STIR TEA\n    SERVE TEA\nEND",
              diagramComponent: 'TeaMakingFlowchart'
            },
            {
               type: 'demonstration',
               title: "The Building Blocks of Logic",
               description: "At the heart of programming are a few fundamental logic concepts that allow computers to make decisions and repeat actions.\n\n1. **Sequences**: A series of steps that are performed in a specific order, one after the other. This is the most basic structure.\n2. **Decisions (Selection)**: Allows a program to choose between different paths based on a condition (e.g., using `if-else`). This enables programs to respond differently to different inputs or situations.\n3. **Loops (Repetition/Iteration)**: Allows a program to repeat a set of instructions multiple times, either for a fixed count or until a condition is met. This avoids writing the same code over and over.",
               details: [
                   "Example of a decision: IF it is raining THEN take an umbrella, ELSE wear sunglasses.",
                   "Example of a loop: WHILE there are dirty plates, WASH one plate."
               ],
               diagramComponent: 'LogicConceptsDiagram'
            },
            {
               type: 'interactive',
               title: "Algorithm Challenge",
               description: "Choose a simple everyday task (e.g., brushing your teeth, preparing for school, charging a phone). Try to write an algorithm for it using the interactive builder below. Think about any decisions or repetitions involved in the task.",
               interactiveComponent: 'AlgorithmBuilder'
            }
          ]
        }
      ],
      assessment: {
        title: "Topic 6 Competency Test",
        questions: [
          { question: "A set of well-defined, step-by-step instructions to solve a problem is called:", options: ["A Flowchart", "A Program", "An Algorithm", "Pseudocode"], correctAnswer: "An Algorithm" },
          { question: "In a flowchart, what shape represents a decision point (e.g., Yes/No)?", options: ["Rectangle", "Oval", "Diamond", "Parallelogram"], correctAnswer: "Diamond" },
          { question: "Repeating a set of instructions while a condition is true is an example of which logic concept?", options: ["Sequence", "Decision", "Loop", "Variable"], correctAnswer: "Loop" }
        ]
      }
    },
    {
      week: 7,
      title: "YOUR FIRST PROGRAMMING LANGUAGE - PYTHON",
      lessons: [
        {
          id: 'w7d1',
          day: 1,
          title: "Getting Started with Python",
          objectives: ["Explain why Python is a good first language", "Set up a Python development environment", "Write and run a 'Hello, World!' program"],
          materials: ["Computer with internet access", "Visual Studio Code (recommended)"],
          activities: [
            {
              type: 'reading',
              title: "Why Python?",
              description: "Python is an excellent choice for your first programming language for several reasons:\n\n• **Easy to Learn**: Python's syntax (the rules for writing code) is very similar to English, making it easy to read and understand, even for beginners.\n• **Versatile**: Python can be used for many different things: building websites, analyzing data, creating games, developing artificial intelligence, and much more.\n• **Large Community**: Python has a huge community of users and developers. This means there are many resources, tutorials, and people who can help you if you get stuck.\n• **High Demand**: Python is one of the most in-demand programming languages in the job market today."
            },
            {
              type: 'interactive',
              title: 'Setting up Python: Getting Ready to Code',
              description: "Before you can write and run Python code, you need to install Python and a code editor on your computer. Follow the steps in the interactive guide to get set up. The most important step is checking the box to 'Add Python to PATH' during installation.",
              interactiveComponent: 'PythonSetupGuide'
            },
            {
              type: 'interactive',
              title: 'Hello World!: Your First Program',
              description: "It's a tradition in programming to start with a \"Hello, World!\" program. This simple program just prints the words \"Hello, World!\" on the screen. It's a great way to confirm your setup is working. The editor below shows the single line of code needed.",
              interactiveComponent: 'HelloWorldCodeEditor'
            }
          ]
        },
        {
          id: 'w7d2',
          day: 2,
          title: "Python Fundamentals: Variables & I/O",
          objectives: ["Define variables to store information", "Identify basic data types: string, integer, float, boolean", "Use print() for output", "Use input() to get information from the user"],
          materials: ["A working Python environment"],
          activities: [
            {
              type: 'reading',
              title: 'Variables and Data Types: Storing Information',
              description: "In programming, a variable is like a container or a labeled box that holds a piece of information. You give the box a name, and you can put different types of information inside it. Python automatically figures out the data type based on the value you assign.",
              details: [
                  "**String (str)**: Text, enclosed in quotes. e.g., `name = \"Alice\"`",
                  "**Integer (int)**: Whole numbers. e.g., `age = 15`",
                  "**Float (float)**: Numbers with a decimal point. e.g., `price = 99.95`",
                  "**Boolean (bool)**: Represents truth values, either `True` or `False`."
              ],
              diagramComponent: 'VariableBoxDiagram'
            },
            {
              type: 'interactive',
              title: 'Exploring Variables in Code',
              description: "Let's see variables in action. The editor below shows how to create variables of different types (string for text, integer for whole numbers, float for decimals) and how to check their type using the built-in `type()` function.",
              interactiveComponent: 'VariableExplorer'
            },
            {
              type: 'demonstration',
              title: 'Basic Input and Output: Interacting with the User',
              description: "Programs become truly powerful when they can interact with the user. In Python, you use `print()` to display information and `input()` to get information.\n\nAn important concept is that `input()` always gives you a string. If you need to do math with a user's number, you must first convert it to a numeric type, like an integer using `int()`.",
              diagramComponent: 'UserInputFlowDiagram'
            },
            {
              type: 'interactive',
              title: 'Create an Info Card',
              description: 'Time to write your own program! Use the code editor below. Write a Python script that asks the user for their name, their favorite color, and their age. Then, print a message using all this information, for example: "Hello [Name]! Your favorite color is [Color] and you are [Age] years old."',
              interactiveComponent: 'CodeEditor'
            }
          ]
        }
      ],
      assessment: {
        title: "Topic 7 Competency Test",
        questions: [
          { question: "In Python, what is the correct way to create a variable to store your name?", options: ["my name = 'John'", "name = 'John'", "string name = 'John'", "Name = John"], correctAnswer: "name = 'John'" },
          { question: "Which function is used to get text input from the user?", options: ["get()", "read()", "input()", "text()"], correctAnswer: "input()" },
          { question: "The input() function always returns data as which type?", options: ["Integer", "Float", "String", "Boolean"], correctAnswer: "String" },
          { question: "If you get a user's age with `input()`, what must you do before using it in math calculations?", options: ["Nothing, it works automatically", "Convert it to a string using str()", "Convert it to an integer using int()", "Convert it to a boolean using bool()"], correctAnswer: "Convert it to an integer using int()" }
        ]
      }
    },
    {
      week: 8,
      title: "CONTROL FLOW AND FUNCTIONS",
      lessons: [
        {
          id: 'w8d1',
          day: 1,
          title: "Making Decisions in Code",
          objectives: ["Use if, elif, and else to control program flow", "Apply comparison and logical operators to create conditions", "Write nested conditional statements"],
          materials: ["Python environment", "Interactive Explorer"],
          activities: [
            {
              type: 'reading',
              title: "Conditional Statements: Making Decisions",
              description: "Just like in real life, programs often need to make decisions based on certain conditions. In Python, we use the `if`, `elif` (else if), and `else` statements. The program checks the `if` condition first. If it's false, it checks the `elif` condition. If all are false, the `else` block is executed.\n\nImportant: Python uses indentation (spaces) to define which code belongs to which block. A colon `:` is required after each condition."
            },
            {
              type: 'demonstration',
              title: 'Conditional Logic Flow',
              description: 'This flowchart shows how the computer decides which path to take. It checks each condition in order until one is true, or it reaches the final `else` case.',
              diagramComponent: 'ConditionalFlowDiagram'
            },
            {
              type: 'interactive',
              title: 'Conditional Logic Explorer',
              description: 'Use the slider to change the value of the `age` variable and see which block of code is highlighted and executed. This demonstrates the `if-elif-else` chain in action.',
              interactiveComponent: 'ConditionalLogicExplorer'
            },
            {
              type: 'reading',
              title: 'Complex Conditions',
              description: 'To create more complex conditions, you can use logical operators:\n\n• **Comparison**: `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater or equal), `<=` (less or equal)\n• **Logical**: `and` (both conditions must be true), `or` (at least one condition must be true), `not` (reverses the result from True to False or vice-versa).\n\nExample: `if age > 12 and age < 20:` checks if someone is a teenager.',
            },
            {
              type: 'practice',
              title: 'Positive, Negative, or Zero?',
              description: 'On your computer, write a Python program that asks the user for a number. Use an `if-elif-else` statement to check if the number is positive, negative, or zero, and print an appropriate message.'
            }
          ]
        },
        {
          id: 'w8d2',
          day: 2,
          title: "Repeating Actions with Loops",
          objectives: ["Use for loops to iterate over sequences like lists", "Use the range() function to loop a specific number of times", "Use while loops to repeat code based on a condition", "Differentiate between for and while loops"],
          materials: ["Python environment", "Interactive Visualizer"],
          activities: [
            {
              type: 'reading',
              title: 'Introduction to Loops',
              description: "Loops are used to execute a block of code repeatedly. This is incredibly useful for tasks that involve doing the same thing multiple times. Python has two main types of loops: `for` loops and `while` loops."
            },
            {
              type: 'demonstration',
              title: 'The "for" loop: Iterating over a Sequence',
              description: "A `for` loop is used for iterating over a sequence (like a list of items or numbers from `range()`). It's best used when you know exactly how many times you want to loop.",
              details: [
                "**`range(5)`** generates numbers from 0 up to (but not including) 5: 0, 1, 2, 3, 4.",
                "**`range(1, 6)`** generates numbers from 1 up to 6: 1, 2, 3, 4, 5.",
              ],
              diagramComponent: 'ForLoopDiagram'
            },
            {
              type: 'interactive',
              title: 'Loop Visualizer',
              description: 'Click the button to see how a `for` loop assigns each item from the list to the `name` variable one by one.',
              interactiveComponent: 'LoopVisualizer'
            },
            {
              type: 'demonstration',
              title: 'The "while" loop: Looping on a Condition',
              description: "A `while` loop executes a block of code as long as a certain condition is true. It's best used when you don't know how many times you need to loop, but you know when to stop.\n\n**Caution**: Be careful with `while` loops! You must include code inside the loop that can eventually make the condition false. Otherwise, the loop will run forever, creating an infinite loop.",
              diagramComponent: 'WhileLoopDiagram'
            },
            {
              type: 'practice',
              title: 'Even Numbers Challenge',
              description: 'On your computer, create a `for` loop that uses the `range()` function to print all the even numbers from 0 to 10 (inclusive).'
            }
          ]
        },
        {
          id: 'w8d3',
          day: 3,
          title: 'Organizing Code with Functions',
          objectives: ["Define a function using the def keyword", "Understand the difference between parameters and arguments", "Create functions that accept parameters and return values"],
          materials: ["Python environment", "Interactive Builder"],
          activities: [
            {
              type: 'reading',
              title: 'Introduction to Functions',
              description: "A function is a block of organized, reusable code that performs a single, related action. Functions help make your code more organized, reusable, and easier to debug. This follows the **DRY (Don't Repeat Yourself)** principle of programming."
            },
            {
              type: 'reading',
              title: 'Parameters vs. Arguments',
              description: "These terms can be confusing, but the difference is simple:",
              details: [
                "A **parameter** is the variable listed inside the parentheses in the function definition. It's a placeholder for the data the function expects.",
                "An **argument** is the actual value that is sent to the function when it is called."
              ]
            },
            {
              type: 'demonstration',
              title: 'Anatomy of a Function',
              description: "You define a function using the `def` keyword, followed by the function name, parentheses `()` for parameters, and a colon `:`. The `return` keyword sends a value back from the function, which can then be stored in a variable.",
              diagramComponent: 'FunctionAnatomyDiagram'
            },
            {
              type: 'interactive',
              title: 'Function Builder',
              description: 'Enter values (arguments) for the `length` and `width` parameters. When you click "Run Function", see how these inputs are processed by the function to produce a return value.',
              interactiveComponent: 'FunctionBuilder'
            },
            {
              type: 'practice',
              title: 'Area Calculator Function',
              description: 'On your computer, define a function called `calculate_area` that takes two parameters, `length` and `width`, and returns the area of a rectangle. Then, call this function with some example values and print the result.'
            }
          ]
        }
      ],
      assessment: {
        title: "Topic 8 Competency Test",
        questions: [
          { question: "What will be the output of: `x = 5; if x > 10: print('A') else: print('B')`", options: ["A", "B", "Nothing", "Error"], correctAnswer: "B" },
          { question: "How many times will 'Hello' be printed by: `for i in range(3): print('Hello')`", options: ["2", "3", "4", "0"], correctAnswer: "3" },
          { question: "What keyword is used to send a value back from a function?", options: ["send", "output", "return", "give"], correctAnswer: "return" },
          { question: "What is the primary risk of a `while` loop if its condition never becomes false?", options: ["It runs once and stops", "It skips the code block", "It creates an infinite loop", "It returns an error"], correctAnswer: "It creates an infinite loop" }
        ]
      }
    }
  ]
};