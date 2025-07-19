import type { Part } from '../types';

export const part5Data: Part = {
  title: "Part 5: Growth, Testing, and the Developer Journey",
  description: "Take the next step in your coding journey by learning how to debug your code, handle errors gracefully, and understand the path to becoming a developer.",
  weeks: [
    {
        week: 13,
        title: "Chapter 13: Debugging and Error Handling",
        lessons: [
            {
                id: 'w13d1',
                day: 1,
                title: 'Debugging and Error Handling',
                objectives: [
                    'Define debugging and identify common Python errors.',
                    'Read a Python traceback to locate an error.',
                    'Use try-except blocks to handle potential errors gracefully.'
                ],
                materials: ['Interactive Simulators'],
                activities: [
                    {
                        type: 'reading',
                        title: 'What is Debugging?',
                        description: "Bugs are errors or flaws in a program that cause it to produce an incorrect or unexpected result, or to behave in unintended ways. Debugging is the process of finding and fixing these bugs. It's a critical skill for every programmer. When your program crashes or misbehaves, Python provides a 'traceback' message that helps you hunt down the source of the problem."
                    },
                    {
                        type: 'reading',
                        title: 'Common Python Error Types',
                        description: "Understanding common errors helps you fix them faster:",
                        details: [
                            " SyntaxError : You broke a grammar rule of Python, like a missing colon or parenthesis.",
                            " NameError : You tried to use a variable that hasn't been defined yet.",
                            " TypeError : You tried to perform an operation on a data type that doesn't support it (e.g., adding a number to a string).",
                            " ValueError : The data type is right, but the value is inappropriate (e.g., trying `int('hello')`).",
                            " IndexError : You tried to access an item in a list at an index that doesn't exist."
                        ]
                    },
                    {
                        type: 'demonstration',
                        title: 'Reading a Python Traceback',
                        description: "A traceback is your map to finding the bug. Read it from the bottom up. The last line tells you the type of error and a description. The lines above it show the exact file and line number where the error occurred.",
                        diagramComponent: 'TracebackDiagram'
                    },
                    {
                        type: 'interactive',
                        title: 'Debugging Challenge',
                        description: 'This code has a bug! Run it to see the traceback message. Can you figure out the error and fix the code in the editor to make it work?',
                        interactiveComponent: 'DebuggingChallenge'
                    },
                    {
                        type: 'reading',
                        title: 'Graceful Error Handling with Try-Except',
                        description: "Sometimes you can anticipate errors, especially when dealing with user input. Instead of letting your program crash, you can 'catch' these errors and handle them gracefully using a `try-except` block. The code that might cause an error goes in the `try` block. If an error occurs, the code in the `except` block is executed."
                    },
                    {
                        type: 'demonstration',
                        title: 'The Try-Except Flow',
                        description: "This diagram shows how the `try-except` block works. If the 'try' block succeeds, the 'except' block is skipped. If it fails, the program jumps to the 'except' block instead of crashing.",
                        diagramComponent: 'TryExceptFlowDiagram'
                    },
                    {
                        type: 'interactive',
                        title: 'Input Error Simulator',
                        description: "This program asks for a number. Try entering text (like 'hello') instead of a number to see the `try-except` block in action. Then try entering a valid number.",
                        interactiveComponent: 'ErrorHandlingSimulator'
                    }
                ]
            }
        ],
        assessment: {
            title: 'Topic 13 Competency Test',
            questions: [
                { question: 'The process of finding and fixing errors in a program is called what?', options: ['Compiling', 'Executing', 'Debugging', 'Deploying'], correctAnswer: 'Debugging' },
                { question: "In a try-except block, which part contains the code that runs only if an error occurs?", options: ['The `try` block', 'The `except` block', 'The `finally` block', 'The `error` block'], correctAnswer: 'The `except` block' },
                { question: "If you try to use a variable that has not been defined, what type of error will Python raise?", options: ['TypeError', 'SyntaxError', 'ValueError', 'NameError'], correctAnswer: 'NameError' }
            ]
        }
    },
    {
      week: 14,
      title: "Chapter 14: Testing Your Code",
      lessons: [
        {
          id: 'w14d1',
          day: 1,
          title: 'Testing Your Code',
          objectives: [
            'Explain the importance of testing in programming.',
            'Describe manual testing and the concept of edge cases.',
            'Test a program with various inputs to verify its behavior.'
          ],
          materials: ['A previously written Python program'],
          activities: [
            {
              type: 'reading',
              title: 'Why is Testing Important?',
              description: "Testing is the process of checking if your program works as expected. It's crucial because it helps you find and fix bugs early, ensures your program is reliable, and gives you confidence that your code does what it's supposed to do. A simple way to test is to run your program with different inputs and check if the output is correct."
            },
            {
              type: 'reading',
              title: 'Manual Testing and Edge Cases',
              description: 'Manually testing your code is a great first step. When you test, think about not just the "happy path" (normal input), but also "edge cases" - inputs at the extreme ends of a range or that are unusual.',
              details: [
                " Example : If your program asks for an age (1-100), you should test:",
                "A normal value (e.g., 25)",
                "The minimum value (1)",
                "The maximum value (100)",
                "An invalid value (e.g., 0, 101, or text like 'hello')"
              ]
            },
            {
              type: 'interactive',
              title: 'Practical Exercise: Test the Typing Tutor',
              description: "Let's test your typing skills. Try to type the sentence provided. This is a form of manual testing where you verify the output (your typing) matches the expected input (the sentence).",
              interactiveComponent: 'TypingTutor'
            }
          ]
        }
      ],
      assessment: {
        title: 'Topic 14 Competency Test',
        questions: [
          { question: 'Why is it important to test a program with different kinds of inputs?', options: ['To make the code run faster', 'To find bugs and ensure it works in all scenarios', 'To make the code shorter', 'To add more comments'], correctAnswer: 'To find bugs and ensure it works in all scenarios' },
          { question: 'Testing a program by running it with different inputs yourself and checking the output is called:', options: ['Automatic testing', 'Manual testing', 'Syntax checking', 'Deployment'], correctAnswer: 'Deployment' },
        ]
      }
    },
    {
      week: 15,
      title: "Chapter 15: The Developer's Path",
      lessons: [
        {
          id: 'w15d1',
          day: 1,
          title: "The Developer's Path: Continuous Learning",
          objectives: [
            'Identify resources for continuous learning.',
            'Understand the value of community and project-based learning.',
            'Brainstorm a personal project idea and understand the value of a portfolio.'
          ],
          materials: ['Internet access'],
          activities: [
            {
              type: 'reading',
              title: 'Continuous Learning & Community',
              description: "Programming is a field of constant learning. New technologies emerge all the time. Great online resources include tutorial websites (like W3Schools, freeCodeCamp, MDN Web Docs), video platforms (YouTube), and forums for asking questions (Stack Overflow, Reddit's r/learnprogramming). Engaging with the developer community is important because it helps you learn from others, get help when you're stuck, and stay motivated."
            },
            {
              type: 'reading',
              title: 'Project-Based Learning and Your Portfolio',
              description: "Project-based learning is one of the best ways to solidify your skills. It involves choosing a project that interests you and applying what you've learned to build it from start to finish. This makes learning more engaging and gives you something tangible to show for your efforts. A collection of your best projects forms your  portfolio , which is essential for showcasing your skills to potential employers or collaborators."
            },
            {
              type: 'interactive',
              title: 'Practical Exercise: Explore and Plan',
              description: "1.  Find a Tutorial : Use the simulated browser to find an online tutorial for a simple Python topic.\n\n2.  Plan Your Own Project : Think of a small project idea and use the algorithm builder to outline the steps and features. This is the first step in project-based learning!",
              interactiveComponent: 'ExternalComponentExplorer'
            }
          ]
        }
      ],
      assessment: {
        title: 'Topic 15 Competency Test',
        questions: [
          { question: "Which of the following is an effective way to continue learning programming?", options: ["Only reading books", "Memorizing syntax rules", "Building personal projects", "Waiting for new instructions"], correctAnswer: "Building personal projects" },
          { question: "Why is community important for developers?", options: ["It provides a way to get help and learn from others", "It's a requirement for all programming jobs", "It makes your code run faster", "It is not important"], correctAnswer: "It provides a way to get help and learn from others" }
        ]
      }
    }
  ]
};