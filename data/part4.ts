import type { Part } from '../types';

export const part4Data: Part = {
  title: "Part 4: Building Blocks of Development",
  description: "Dive deeper into Python with advanced data structures and learn essential developer tools like Git and the basics of web development.",
  weeks: [
    {
      week: 10,
      title: "DATA STRUCTURES AND MORE PYTHON",
      lessons: [
        {
          id: 'w10d1',
          day: 1,
          title: 'Working with Lists',
          objectives: ['Create a Python list', 'Access list items by index', 'Add and remove items from a list using methods', 'Get the length of a list'],
          materials: ['CodeEditor'],
          activities: [
            {
              type: 'reading',
              title: 'What is a List?',
              description: "A list is a data structure in Python that is a mutable, or changeable, ordered sequence of elements. Each element or value that is inside of a list is called an item. Lists are one of the most versatile data types in Python, great for storing collections of related items. Remember that list indices start at 0.",
            },
            {
              type: 'reading',
              title: 'Common List Methods',
              description: 'Lists come with built-in "methods" (functions that belong to the list) to modify them:',
              details: [
                "**`my_list.append(item)`**: Adds an item to the end of the list.",
                "**`my_list.pop()`**: Removes and returns the last item from the list.",
                "**`len(my_list)`**: A built-in function (not a method) that returns the number of items in the list."
              ]
            },
            {
              type: 'interactive',
              title: 'Practice with Lists',
              description: "Use the code editor to create a list of your favorite hobbies. Try printing the second hobby from the list (at index 1). Then, add a new hobby to the end of the list using `.append()` and print the whole list.",
              interactiveComponent: 'CodeEditor',
            }
          ]
        },
        {
          id: 'w10d2',
          day: 2,
          title: 'Understanding Dictionaries',
          objectives: ['Explain what a dictionary is', 'Create a dictionary with key-value pairs', 'Access, add, and update values using their keys'],
          materials: ['CodeEditor'],
          activities: [
            {
              type: 'reading',
              title: 'What is a Dictionary?',
              description: "A dictionary is an unordered collection of data values, used to store data values like a map, which, unlike other Data Types that hold only a single value as an element, Dictionary holds `key:value` pair. You can think of it like a real dictionary where you look up a word (the key) to find its definition (the value). Keys must be unique.",
            },
            {
                type: 'reading',
                title: 'Working with Dictionaries',
                description: 'You can easily access, add, or change items in a dictionary:',
                details: [
                    "**Accessing**: `my_dict['key']` returns the value for that key.",
                    "**Adding**: `my_dict['new_key'] = 'new_value'` adds a new key-value pair.",
                    "**Updating**: If the key already exists, assigning a new value will update the existing one: `my_dict['existing_key'] = 'updated_value'`."
                ]
            },
            {
              type: 'interactive',
              title: 'Practice with Dictionaries',
              description: "Create a dictionary to store information about yourself, like `{'name': 'YourName', 'city': 'YourCity'}`. Then, print just the value associated with the 'city' key. After that, add a new key 'language' with the value 'Python' and print the whole dictionary.",
              interactiveComponent: 'CodeEditor',
            }
          ]
        },
        {
          id: 'w10d3',
          day: 3,
          title: 'File Handling',
          objectives: ['Open a file using `with open()`', 'Understand file modes: read, write, and append', 'Write text to a file and read text from a file'],
          materials: ['CodeEditor'],
          activities: [
            {
              type: 'reading',
              title: 'Working with Files',
              description: "Python can be used to read from and write to files on your computer. This is essential for saving data permanently (persisting data) between program runs. The `with open(...)` syntax is the recommended way to work with files, as it handles closing the file automatically, even if errors occur."
            },
            {
                type: 'reading',
                title: 'File Modes',
                description: "When you open a file, you specify a mode:",
                details: [
                    "**`'r'` (Read)**: Default mode. Opens a file for reading, raises an error if the file does not exist.",
                    "**`'w'` (Write)**: Opens a file for writing. Creates the file if it does not exist, but **overwrites** the entire file if it does exist.",
                    "**`'a'` (Append)**: Opens a file for appending. Creates the file if it does not exist, and adds new content to the end of the file without overwriting existing content."
                ]
            },
            {
              type: 'interactive',
              title: 'Write and Read a File',
              description: "Use the editor to write a program that creates a file named 'greeting.txt' in write mode (`'w'`) and writes 'Hello from Python!' into it. Then, write code to open the same file in read mode (`'r'`) and print its contents to the console.",
              interactiveComponent: 'CodeEditor',
            }
          ]
        }
      ],
      assessment: {
        title: "Topic 10 Competency Test",
        questions: [
          { question: "How do you access the first item in a list named `my_list`?", options: ["my_list(0)", "my_list[0]", "my_list.first()", "my_list[1]"], correctAnswer: "my_list[0]" },
          { question: "A dictionary stores data in what kind of pairs?", options: ["Index-Value", "First-Last", "Key-Value", "Question-Answer"], correctAnswer: "Key-Value" },
          { question: "To open a file for writing, which creates the file if it doesn't exist, which mode do you use?", options: ["'r'", "'a'", "'w'", "'x'"], correctAnswer: "'w'" },
        ]
      }
    },
    {
      week: 11,
      title: "INTRODUCTION TO VERSION CONTROL (GIT)",
      lessons: [
        {
          id: 'w11d1',
          day: 1,
          title: "Basics of Version Control with Git",
          objectives: [
            "Explain what version control is and the problem it solves.",
            "Describe the basic Git workflow: modify, stage, and commit.",
            "Use `git init`, `git add`, and `git commit` to make a first commit."
          ],
          materials: ["Interactive Git Simulator"],
          activities: [
            {
              type: 'reading',
              title: 'What is Version Control?',
              description: "Have you ever saved a file, then saved a new version called `report_final.docx`, and then another called `report_final_v2.docx`? It can get very confusing! Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. Think of it as a 'super undo' button for your entire project. It allows you to revert files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, and collaborate with others effectively."
            },
            {
              type: 'demonstration',
              title: 'The Problem Git Solves',
              description: 'Without version control, managing project history is chaotic. With a system like Git, your history becomes a clean, manageable timeline.',
              diagramComponent: 'VersionControlProblemDiagram'
            },
            {
              type: 'reading',
              title: 'Introducing Git & The Basic Workflow',
              description: "Git is the most popular version control system. It works by keeping track of changes in a special folder named `.git` inside your project folder. The basic workflow involves three steps or areas:\n\n1.  **Working Directory**: This is your project folder with all your files.\n2.  **Staging Area**: This is an intermediate area where you list the specific changes you want to save. It lets you craft a precise 'snapshot'.\n3.  **Repository**: This is where Git permanently stores the history of your changes in 'snapshots' called commits.\n\nTo save your work, you first `add` files from your Working Directory to the Staging Area, and then you `commit` those staged files to the Repository. A good commit message is crucial - it should be a short, clear summary of the changes you made."
            },
            {
              type: 'demonstration',
              title: 'The Three Areas of Git',
              description: 'This diagram shows how your files move from your working folder, to the staging area, and finally into the permanent repository history.',
              diagramComponent: 'GitWorkflowDiagram'
            },
            {
              type: 'interactive',
              title: 'Your First Commit',
              description: "Let's practice the basic workflow in a simulated terminal. You don't need to install anything. Just follow the prompts in the simulator below to initialize a repository, create a file, stage it, and commit it.",
              interactiveComponent: 'GitSimulator'
            }
          ]
        }
      ],
      assessment: {
        title: 'Topic 11 Competency Test',
        questions: [
            { question: "What problem does version control primarily solve?", options: ["Managing project history and file changes", "Running code faster", "Writing HTML", "Connecting to the internet"], correctAnswer: "Managing project history and file changes" },
            { question: "What is the purpose of the `git add` command?", options: ["To save changes permanently", "To prepare changes to be saved (staging)", "To undo changes", "To create a new file"], correctAnswer: "To prepare changes to be saved (staging)" },
            { question: "Which command creates a permanent snapshot of your staged changes in the repository's history?", options: ["git init", "git add", "git save", "git commit"], correctAnswer: "git commit" },
            { question: "What command do you use to start tracking a new project with Git in a folder?", options: ["git start", "git project", "git init", "git new"], correctAnswer: "git init" }
        ]
      }
    },
    {
      week: 12,
      title: "Building Your First Website",
      lessons: [
        {
          id: 'w12d1',
          day: 1,
          title: 'The Core Trio: HTML, CSS & JavaScript',
          objectives: [
            'Define the roles of HTML (structure), CSS (style), and JavaScript (behavior).',
            'Understand how these three technologies work together to create interactive webpages.',
            'Experiment with HTML, CSS, and JS in a live playground.'
          ],
          materials: ["Interactive Web Playground"],
          activities: [
            {
              type: 'reading',
              title: 'The Three Pillars of the Web',
              description: "Every modern website is built with three core technologies. Think of them like building a person:\n\n- **HTML (HyperText Markup Language)**: Provides the core **structure** of the page. It's the skeleton, defining elements like headings, paragraphs, images, and links.\n- **CSS (Cascading Style Sheets)**: Controls the **presentation and style**. It's the clothing and appearance, defining colors, fonts, layout, and spacing.\n- **JavaScript (JS)**: Adds **interactivity and behavior**. It's the brain and muscles, handling user actions, animations, and dynamic content updates.",
            },
            {
              type: 'demonstration',
              title: 'How They Work Together',
              description: 'This diagram illustrates the relationship. HTML provides the raw structure, CSS makes it look good, and JavaScript makes it do things.',
              diagramComponent: 'WebTechTrioDiagram'
            },
            {
              type: 'interactive',
              title: 'Web Playground: Now with JavaScript!',
              description: "Let's experiment. We've added a JavaScript tab to our playground. Try writing `alert('Hello from JavaScript!');` in the JS tab. Notice how it runs when the page loads. Then, try changing the HTML and CSS as before.",
              interactiveComponent: 'WebPlayground'
            }
          ]
        },
        {
          id: 'w12d2',
          day: 2,
          title: 'Project: Your First Bio Page',
          objectives: [
            'Build a structured personal bio page using various HTML tags.',
            'Apply CSS rules to style the page with colors, fonts, and layout.',
            'Follow a checklist of tasks to complete a guided project.'
          ],
          materials: ["Portfolio Builder"],
          activities: [
            {
              type: 'reading',
              title: 'From Theory to Practice',
              description: "It's time to build something real! The best way to learn is by doing. We'll create a simple personal portfolio page. This project will combine your knowledge of HTML for content and CSS for design."
            },
            {
              type: 'interactive',
              title: 'DIY: Build Your Portfolio',
              description: "Use the Portfolio Builder below. It has an editor and a checklist. Your goal is to write the HTML and CSS to match the example preview. The checklist will guide you through the required elements.",
              interactiveComponent: 'PortfolioBuilder'
            }
          ]
        },
        {
          id: 'w12d3',
          day: 3,
          title: 'Adding Interactivity',
          objectives: [
            'Understand what an event and an event listener are.',
            'Write a simple JavaScript function to modify the page.',
            'Connect a button click to a JavaScript function.'
          ],
          materials: ["Interactive Portfolio"],
          activities: [
            {
              type: 'reading',
              title: 'Making Your Page Dynamic',
              description: "Static pages are great, but the modern web is interactive. JavaScript allows us to respond to user actions. This is done with events and event listeners.",
              details: [
                  "**Event**: An action that occurs on the webpage, such as a user clicking a button, hovering over an element, or pressing a key.",
                  "**Event Listener**: A piece of code that 'listens' for a specific event on a specific HTML element. When the event happens, it triggers a JavaScript function."
              ]
            },
            {
              type: 'demonstration',
              title: 'The JavaScript Event Model',
              description: "This diagram shows what happens when you click a button on a webpage. An event listener is waiting for the 'click' event. When it happens, it triggers a function that can then change the page.",
              diagramComponent: 'JSEventLoopDiagram'
            },
            {
              type: 'interactive',
              title: 'Project Task: Make it Interactive!',
              description: "Let's add a button to your portfolio that shows and hides some details. Use the interactive editor to add the HTML for the button and the JavaScript code to make it work. The comments in the JavaScript editor will guide you.",
              interactiveComponent: 'InteractivePortfolio'
            }
          ]
        }
      ],
      assessment: {
        title: 'Topic 12 Competency Test',
        questions: [
          { question: "Which technology is responsible for the structure and content of a webpage?", options: ["CSS", "JavaScript", "HTML", "Python"], correctAnswer: "HTML" },
          { question: "What is JavaScript's primary role on a webpage?", options: ["To define the page layout and colors", "To add interactivity and behavior", "To store the website files", "To structure the content"], correctAnswer: "To add interactivity and behavior" },
          { question: "In JavaScript, what do you use to detect a user action like a button click?", options: ["A CSS class", "An HTML tag", "An event listener", "A variable"], correctAnswer: "An event listener" }
        ]
      }
    }
  ]
};