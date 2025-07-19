import type { Part } from '../types';

export const part2Data: Part = {
  title: "Part 2: The Digital World",
  description: "Explore the internet, learn to communicate safely, and use powerful applications.",
  weeks: [
    {
      week: 3,
      title: "THE INTERNET AND THE WEB",
      lessons: [
        {
          id: 'w3d1', day: 1, title: "What is the Internet?",
          objectives: ["Explain the difference between the Internet and the World Wide Web.", "Describe how data travels across the internet using clients, servers, and routers.", "Identify what an ISP (Internet Service Provider) does."],
          materials: ["Diagrams"],
          activities: [
            { 
              type: 'reading', 
              title: "The Network of Networks", 
              description: "The Internet is a massive, global network connecting millions of computers, allowing them to share information. It's the physical infrastructure (cables, satellites, routers). The World Wide Web (or 'the web') is the system of public websites and pages that you access using the internet. Think of the Internet as the roads and the Web as the houses and shops along those roads." 
            },
            {
              type: 'reading',
              title: 'Clients, Servers, and Routers',
              description: 'Information travels across the internet in a client-server model:',
              details: [
                " Client : Your device (e.g., your laptop's web browser) that requests information.",
                " Server : A powerful computer that stores websites or data and 'serves' it to clients that request it.",
                " Routers : Devices that act like traffic police, directing the data packets between clients and servers across the internet to ensure they reach the correct destination."
              ]
            },
            { 
              type: 'demonstration', 
              title: "How You Connect", 
              description: "To get online, your computer connects to a Wi-Fi Router. This router is connected (via cable or other means) to your Internet Service Provider (ISP) - a company you pay for internet access. The ISP then connects you to the global internet, allowing you to communicate with servers worldwide.", 
              diagramComponent: 'InternetConnectionDiagram' 
            },
          ]
        },
        {
          id: 'w3d2', day: 2, title: "Using a Web Browser",
          objectives: ["Define what a web browser is.", "Identify the parts of a URL (web address).", "Use browser features like tabs, bookmarks, and history.", "Practice navigating to a website."],
          materials: ["Web Browser Simulator"],
          activities: [
            { 
              type: 'reading', 
              title: "Your Window to the Web", 
              description: "A web browser is a software application for accessing information on the World Wide Web. Common examples include Google Chrome, Mozilla Firefox, and Microsoft Edge. You use them to visit websites." 
            },
            { 
              type: 'demonstration', 
              title: "Anatomy of a Web Address", 
              description: "Every website has a unique address called a URL (Uniform Resource Locator). It tells your browser exactly where to go.", 
              diagramComponent: 'URLAnatomyDiagram' 
            },
            {
              type: 'reading',
              title: 'Essential Browser Features',
              description: 'Modern browsers have features to make surfing the web easier:',
              details: [
                " Tabs : Allow you to have multiple web pages open in a single browser window.",
                " Bookmarks/Favorites : Let you save the addresses of your favorite websites for quick access later.",
                " History : A log of the websites you have recently visited.",
                " Back/Forward Buttons : To navigate between the pages you have visited in a tab."
              ]
            },
            { 
              type: 'interactive', 
              title: "Browser Practice", 
              description: "Let's use a simulated web browser. Try typing 'www.google.com' into the address bar and pressing Enter. Use the back and forward buttons.", 
              interactiveComponent: 'WebBrowserSimulator' 
            },
          ]
        },
      ],
      assessment: {
        title: "Topic 3 Competency Test",
        questions: [
          { question: "What is the primary job of an ISP?", options: ["To make websites", "To sell computers", "To provide you with access to the Internet", "To fix your Wi-Fi router"], correctAnswer: "To provide you with access to the Internet" },
          { question: "In the URL 'https://www.example.com/page', what is 'www.example.com' called?", options: ["The Path", "The Protocol", "The Domain Name", "The Extension"], correctAnswer: "The Domain Name" },
        ]
      }
    },
    {
      week: 4,
      title: "ONLINE COMMUNICATION & SAFETY",
      lessons: [
         {
          id: 'w4d1', day: 1, title: "Introduction to Email",
          objectives: ["Explain what email is used for.", "Identify the parts of an email (To, Subject, Body).", "Understand basic email etiquette.", "Compose a simple email."],
          materials: ["Email Simulator"],
          activities: [
            { 
              type: 'reading', 
              title: "Digital Letters", 
              description: "Email (Electronic Mail) is a way to send and receive messages over the internet. It's a fast, efficient way to communicate with people anywhere in the world, for both personal and professional purposes." 
            },
            { 
              type: 'demonstration', 
              title: "Composing an Email", 
              description: "An email has a few key parts: the 'To' field (recipient's address), the 'Subject' line (a brief summary), the 'Body' (your main message), and an optional 'Attachment' for sending files.", 
              diagramComponent: 'EmailCompositionDiagram' 
            },
            {
              type: 'reading',
              title: 'Email Etiquette',
              description: 'When writing emails, especially formal ones, it is good practice to follow some simple rules:',
              details: [
                " Clear Subject Line : Make the subject descriptive (e.g., 'Question about Homework' instead of 'hi').",
                " Greeting : Start with a polite greeting (e.g., 'Dear Mr. John,', 'Hello Sarah,').",
                " Be Concise : Get to the point quickly and clearly.",
                " Sign-off : End with a closing (e.g., 'Sincerely,', 'Best regards,') followed by your name.",
                " Proofread : Check for spelling and grammar mistakes before sending."
              ]
            },
            { 
              type: 'interactive', 
              title: "Send a Practice Email", 
              description: "Use the simulator below to write a practice email. Fill in the fields and see how it works.", 
              interactiveComponent: 'EmailSimulator' 
            },
          ]
        },
        {
          id: 'w4d2', day: 2, title: "Basic Online Safety",
          objectives: ["Explain the importance of strong passwords.", "Identify potential signs of a phishing attempt.", "Understand what personal information should not be shared online.", "Recognize the importance of software updates."],
          materials: ["Quiz"],
          activities: [
            { 
              type: 'reading', 
              title: "Staying Safe Online", 
              description: "The internet is a wonderful tool, but it's important to be cautious. Strong, unique passwords are your first line of defense. A strong password includes a mix of upper and lowercase letters, numbers, and symbols." 
            },
            {
              type: 'reading',
              title: 'Recognizing Threats',
              description: 'Be aware of common online dangers:',
              details: [
                " Phishing : Emails, texts, or websites designed to trick you into giving away personal information (like passwords or credit card numbers). Signs include urgent requests, threats, bad grammar, and suspicious links.",
                " Malware : Malicious software (like viruses) that can harm your computer or steal your data. Be careful about what you download and click on.",
                " Information Oversharing : Be mindful of what you post on social media. Never share private data like your full address, phone number, or financial details publicly."
              ]
            },
            {
              type: 'reading',
              title: 'Keeping Your Defenses Up',
              description: "One of the best ways to stay safe is to keep your software updated. Updates for your operating system (like Windows Update) and your web browser often include critical security patches that protect you from the latest threats."
            },
            { 
              type: 'interactive', 
              title: "Safety Check-up", 
              description: "Let's test your knowledge with a few common online safety scenarios.", 
              interactiveComponent: 'OnlineSafetyQuiz' 
            },
          ]
        },
      ],
      assessment: {
        title: "Topic 4 Competency Test",
        questions: [
          { question: "What part of an email tells the recipient what the message is about?", options: ["The 'To' field", "The 'Body'", "The 'Signature'", "The 'Subject'"], correctAnswer: "The 'Subject'" },
          { question: "An email from your 'bank' asks you to click a link and enter your password immediately. What should you do?", options: ["Click the link and do it", "Reply with your password", "Ignore and delete the email, as it's likely phishing", "Forward it to all your friends"], correctAnswer: "Ignore and delete the email, as it's likely phishing" },
        ]
      }
    },
    {
      week: 5,
      title: "PRODUCTIVITY APPLICATIONS",
      lessons: [
        {
          id: 'w5d1', day: 1, title: "Word Processors",
          objectives: ["Describe the purpose of a word processor.", "Use basic formatting options (bold, italic, font size, alignment).", "Understand the difference between 'Save' and 'Save As'."],
          materials: ["Word Processor Simulator"],
          activities: [
            { 
              type: 'reading', 
              title: "Creating Documents", 
              description: "A word processor (like Microsoft Word or Google Docs) is an application for creating, editing, and formatting text documents, such as letters, reports, and essays. It offers many more features than a simple text editor." 
            },
            { 
              type: 'demonstration', 
              title: "Word Processor Interface", 
              description: "Most word processors have a toolbar or 'ribbon' at the top with formatting options (like font style, size, color, bold, alignment) and a large document area for your text.", 
              diagramComponent: 'WordProcessorUIDiagram' 
            },
            {
              type: 'reading',
              title: 'Saving Your Work',
              description: "It's crucial to save your documents frequently.",
              details: [
                " Save : Updates the current file with your latest changes.",
                " Save As : Creates a new copy of the file, allowing you to give it a new name or save it in a different location or format (like PDF)."
              ]
            },
            { 
              type: 'interactive', 
              title: "Practice Typing", 
              description: "Use the simple word processor below to type a sentence. Try using the bold and italic buttons.", 
              interactiveComponent: 'WordProcessorSimulator' 
            },
          ]
        },
        {
          id: 'w5d2', day: 2, title: "Spreadsheets",
          objectives: ["Explain what a spreadsheet is used for.", "Define 'cell', 'row', and 'column'.", "Write a simple formula to perform calculations.", "Understand that cells can hold text or numbers."],
          materials: ["Spreadsheet Simulator"],
          activities: [
            { 
              type: 'reading', 
              title: "Organizing Data", 
              description: "A spreadsheet (like Microsoft Excel or Google Sheets) is an application for organizing, analyzing, and visualizing data in tables. It's incredibly powerful for tasks involving numbers, like budgeting, tracking inventory, or creating charts." 
            },
            { 
              type: 'demonstration', 
              title: "Spreadsheet Interface", 
              description: "A spreadsheet is a grid. Columns are labeled with letters (A, B, C) and rows with numbers (1, 2, 3). The intersection is a cell, which has an address like B2. You can enter text, numbers, or formulas into cells.", 
              diagramComponent: 'SpreadsheetUIDiagram' 
            },
            {
              type: 'reading',
              title: 'The Power of Formulas',
              description: "The true power of spreadsheets comes from formulas. A formula allows you to perform calculations on data in other cells.",
              details: [
                "All formulas start with an equals sign (=).",
                "You can use standard math operators (+, -, *, /).",
                "You can reference other cells (e.g., `=A1+B1` will add the values in cells A1 and B1).",
                "There are built-in functions like `SUM()` to add up a range of cells."
              ]
            },
            { 
              type: 'interactive', 
              title: "Explore a Spreadsheet", 
              description: "Click on the different cells in the simulator below. Notice how their names (like A1, C3) change. Try entering some numbers and a simple formula.", 
              interactiveComponent: 'SpreadsheetSimulator' 
            },
          ]
        },
        {
          id: 'w5d3', day: 3, title: "Cloud Storage",
          objectives: ["Explain the concept of cloud storage.", "List the benefits of using cloud storage (accessibility, backup, collaboration).", "Differentiate it from local storage."],
          materials: ["Cloud Storage Simulator"],
          activities: [
            { 
              type: 'reading', 
              title: "Files in the Cloud", 
              description: "Cloud storage means saving your files on remote servers accessed via the Internet, instead of just on your computer's hard drive (local storage). Think of it as your personal hard drive on the internet." 
            },
            {
              type: 'reading',
              title: 'Benefits of the Cloud',
              description: 'Using cloud storage services like Google Drive, Dropbox, or OneDrive has several advantages:',
              details: [
                " Accessibility : Access your files from any device (laptop, phone, tablet) with an internet connection.",
                " Backup : Your files are safe even if your computer breaks or is lost.",
                " Collaboration : Easily share files and work on them with others in real-time.",
                " Synchronization : Changes made on one device are automatically updated on all your other devices."
              ]
            },
            { 
              type: 'demonstration', 
              title: "How Cloud Sync Works", 
              description: "When you use a service like Google Drive or Dropbox, a folder on your computer is 'synced' with the cloud. Any changes you make in that folder are automatically uploaded and reflected across your other devices.", 
              diagramComponent: 'CloudStorageDiagram' 
            },
            { 
              type: 'interactive', 
              title: "Cloud Sync in Action", 
              description: "The simulator below shows files being kept in sync with the cloud. Notice the status icons.", 
              interactiveComponent: 'CloudStorageSimulator' 
            },
          ]
        }
      ],
      assessment: {
        title: "Topic 5 Competency Test",
        questions: [
          { question: "Which application is best for writing a school report?", options: ["Spreadsheet", "Word Processor", "File Explorer", "Web Browser"], correctAnswer: "Word Processor" },
          { question: "In a spreadsheet, what is the box called where a row and column intersect?", options: ["A Box", "A Formula", "A Cell", "A Sheet"], correctAnswer: "A Cell" },
          { question: "What is a major advantage of cloud storage?", options: ["It's the only way to save files", "It makes your computer faster", "You can access your files from multiple devices", "It doesn't use the internet"], correctAnswer: "You can access your files from multiple devices" }
        ]
      }
    }
  ]
};