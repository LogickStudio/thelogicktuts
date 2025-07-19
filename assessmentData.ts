import type { PartAssessment } from './types';

export const assessmentsData: PartAssessment[] = [
  // PART 1
  {
    part: 1,
    title: "Part 1 Assessment: Computer Fundamentals - The Foundation",
    weeklyAssessments: [
      {
        week: 1,
        title: "Week 1 Assessment: Getting Started with Your Laptop",
        reviewQuestions: [
          "What are the main components of a laptop?",
          "Describe the difference between turning off and putting to sleep.",
          "How do you perform a right-click on a touchpad?",
        ],
        practicalExercises: [
          { description: "Practice turning your laptop on and off correctly.", interactiveComponent: 'PowerOn' },
          { description: "Use the touchpad to open and close applications.", interactiveComponent: 'MousePractice' },
          { description: "Identify and name at least five different keys on your keyboard and explain their function.", interactiveComponent: 'KeyboardExplorer' },
        ],
      },
      {
        week: 2,
        title: "Week 2 Assessment: Navigating the Operating System (OS)",
        reviewQuestions: [
          "What is an operating system?",
          "Explain the difference between a file and a folder.",
          "How do you rename a file in your OS?",
        ],
        practicalExercises: [
          { description: "Create a new folder on your desktop, name it \"My Practice Files\". Inside it, create three new text files (e.g., note1.txt, note2.txt, note3.txt). Rename note1.txt to important_note.txt. Move note2.txt to your Documents folder. Delete note3.txt.", interactiveComponent: 'FileSystem'},
          { description: "Practice minimizing, maximizing, and moving application windows.", interactiveComponent: 'WindowManagement' },
        ],
      },
    ],
  },
  // PART 2
  {
    part: 2,
    title: "Part 2 Assessment: Digital Literacy and Productivity",
    weeklyAssessments: [
      {
        week: 3,
        title: "Week 3 Assessment: Internet and Networking Basics",
        reviewQuestions: [
          "What is an ISP?",
          "What is a URL and what are its main parts?",
          "What is the difference between the Internet and the World Wide Web?",
        ],
        practicalExercises: [
          { description: "Connect your laptop to a new Wi-Fi network (if available, or simulate by disconnecting and reconnecting to your current one)." },
          { description: "Open your web browser and navigate to www.wikipedia.org. Search for \"Nigeria\" and read the first paragraph. Bookmark the page.", interactiveComponent: 'WebBrowserSimulator' },
        ],
      },
      {
        week: 4,
        title: "Week 4 Assessment: Online Communication & Safety",
        reviewQuestions: [
            "What is the difference between 'To', 'Cc', and 'Bcc' in an email?",
            "List two rules for staying safe online.",
            "What is a phishing attempt and how can you recognize one?",
        ],
        practicalExercises: [
            { description: "Compose an email to your teacher (or a trusted adult) with the subject \"My Progress in Computer Studies\".", interactiveComponent: 'EmailSimulator' },
            { description: "Take the online safety quiz to test your knowledge of common threats.", interactiveComponent: 'OnlineSafetyQuiz' },
        ],
      },
      {
        week: 5,
        title: "Week 5 Assessment: Productivity Applications",
        reviewQuestions: [
            "What is a word processor?",
            "Define cell, row, and column in a spreadsheet.",
            "How do you start a formula in a spreadsheet?",
            "Name two benefits of cloud storage.",
        ],
        practicalExercises: [
            { description: "Open a word processor. Type a short story (at least 100 words). Use bold for the title, italics for emphasis, and change the font size. Save the document.", interactiveComponent: 'WordProcessorSimulator' },
            { description: "Create a new spreadsheet. List five items, their quantities, and prices. Write a formula to calculate the total cost for each item. Then calculate the grand total using the SUM() function.", interactiveComponent: 'SpreadsheetSimulator' },
            { description: "Upload a file to the cloud storage simulator.", interactiveComponent: 'CloudStorageSimulator' },
        ],
      },
    ],
  },
  // PART 3
  {
    part: 3,
    title: "Part 3 Assessment: Introduction to Programming",
    weeklyAssessments: [
      {
        week: 6,
        title: "Week 6 Assessment: Thinking Like a Programmer",
        reviewQuestions: [
            "What is an algorithm?",
            "What are the three fundamental logic concepts in programming?",
            "Draw a flowchart for the process of deciding whether to wear a jacket (if temperature is below 20 degrees, wear jacket, else don't).",
        ],
        practicalExercises: [
            { description: "Choose a simple daily routine (e.g., preparing breakfast). Write down the steps as an algorithm. Identify any decisions or repetitions in your algorithm.", interactiveComponent: 'AlgorithmBuilder' },
        ],
      },
      {
        week: 7,
        title: "Week 7 Assessment: Python Basics",
        reviewQuestions: [
            "Why is Python a good first programming language?",
            "What is a variable?",
            "What is the difference between an int and a str data type?",
        ],
        practicalExercises: [
            { description: "Write a Python program that asks the user for their favorite animal and then prints a message like \"Your favorite animal is a [animal]! That's interesting!\". Save the program and run it.", interactiveComponent: 'CodeEditor' },
        ],
      },
      {
        week: 8,
        title: "Week 8 Assessment: Control Flow and Functions",
        reviewQuestions: [
            "Explain the purpose of an if statement.",
            "What is an infinite loop and how can you avoid it?",
            "How do functions help organize code?",
        ],
        practicalExercises: [
            { description: "Write a Python program that asks for a user's age. If the age is 18 or older, print \"You are an adult.\" Otherwise, print \"You are a minor.\"", interactiveComponent: 'ConditionalLogicExplorer' },
            { description: "Write a for loop that prints the numbers from 1 to 10.", interactiveComponent: 'LoopVisualizer' },
            { description: "Define a function called multiply_numbers that takes two numbers as parameters and returns their product. Call the function with 7 and 8, and print the result.", interactiveComponent: 'FunctionBuilder' },
        ],
      },
    ],
  },
  // PART 4
  {
    part: 4,
    title: "Part 4 Assessment: Building Blocks of Development",
    weeklyAssessments: [
      {
        week: 10,
        title: "Week 10 Assessment: Data Structures and More Python",
        reviewQuestions: [
            "What is a Python list and how is it different from a dictionary?",
            "How do you add an item to the end of a list?",
            "Why is file handling important and which file mode overwrites a file's content?",
        ],
        practicalExercises: [
            { description: "Create a Python dictionary to store information about a book: title, author, year. Print the author of the book.", interactiveComponent: 'CodeEditor' },
            { description: "Write a Python program that creates a text file named my_notes.txt and writes \"Today I learned about Python.\" into it. Then, read the content and print it to the console.", interactiveComponent: 'CodeEditor' },
        ],
      },
      {
        week: 11,
        title: "Week 11 Assessment: Introduction to Version Control (Git)",
        reviewQuestions: [
            "What problem does version control solve?",
            "What is the purpose of git commit?",
            "Describe the three main areas in the Git workflow.",
        ],
        practicalExercises: [
            { description: "Create a new folder named my_project. Initialize a Git repository inside it.", interactiveComponent: 'GitSimulator' },
            { description: "Create a new text file README.md, add it to the staging area, and commit it with the message \"Initial commit\".", interactiveComponent: 'GitSimulator' },
        ],
      },
      {
        week: 12,
        title: "Week 12 Assessment: Basic Web Concepts",
        reviewQuestions: [
            "Briefly explain how a web browser gets a webpage from a server.",
            "What is HTML used for?",
            "What is CSS used for?",
        ],
        practicalExercises: [
            { description: "Create a simple HTML file named my_webpage.html with a heading (<h1>) and a paragraph (<p>).", interactiveComponent: 'WebPlayground' },
            { description: "Add basic CSS to your my_webpage.html file to change the color of your heading to blue.", interactiveComponent: 'WebPlayground' },
        ],
      },
    ],
  },
  // PART 5
  {
    part: 5,
    title: "Part 5 Assessment: Growth, Testing, and the Developer Journey",
    weeklyAssessments: [
      {
        week: 13,
        title: "Week 13 Assessment: Debugging and Error Handling",
        reviewQuestions: [
            "What is debugging?",
            "Give an example of a common Python error and what it means.",
            "Why is a try-except block useful?",
        ],
        practicalExercises: [
            { description: "You are given a Python program with a deliberate error. Run it, read the error message, and fix the bug.", interactiveComponent: 'DebuggingChallenge' },
            { description: "Write a Python program that asks the user to enter a number. Use a try-except block to handle cases where the user enters text instead of a number.", interactiveComponent: 'ErrorHandlingSimulator' },
        ],
      },
      {
        week: 14,
        title: "Week 14 Assessment: Testing Your Code",
        reviewQuestions: [
            "Why is testing important in programming?",
            "What are 'edge cases' in testing?",
            "Describe a simple way to test a program.",
        ],
        practicalExercises: [
            { description: "Take one of your previous Python programs (e.g., the age checker). Think of at least three different inputs you would use to test it (including edge cases). Run the program with each input and verify the output." },
        ],
      },
      {
        week: 15,
        title: "Week 15 Assessment: The Developer's Path",
        reviewQuestions: [
            "Name two online resources for learning programming.",
            "Why is community important for developers?",
            "What is project-based learning and why is it effective?",
        ],
        practicalExercises: [
            { description: "Find an online tutorial for a simple Python concept you haven't covered yet. Follow the tutorial and try to implement the example code." },
            { description: "Think of a small project idea that you could build using the Python skills you've learned so far. Outline the steps you would take to build it.", interactiveComponent: 'AlgorithmBuilder' },
        ],
      },
    ],
  },
];
