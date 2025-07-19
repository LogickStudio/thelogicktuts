import type { Part } from '../types';

export const part1Data: Part = {
  title: "Part 1: The Basics",
  description: "Start your journey here with the fundamentals of computer operation.",
  weeks: [
    {
      week: 1,
      title: "MEETING YOUR COMPUTER",
      lessons: [
        {
          id: 'w1d1', day: 1, title: "Meeting Your Laptop",
          objectives: ["Explain what a laptop is", "Identify the main physical parts of a laptop", "Describe the function of common ports (USB, HDMI)"], 
          materials: ["A laptop or computer for reference", "Interactive Diagram"],
          activities: [
            { 
              type: 'reading', 
              title: "Understanding the Laptop: Your Portable Powerhouse", 
              description: "A laptop is a type of personal computer that is small and light enough to be easily carried and used in various locations. Think of it as a powerful tool that can help you learn, create, and connect with the world. Unlike desktop computers, which usually stay in one place, laptops combine all their essential components into a single, portable unit.",
              details: [
                " Portability : The key feature of a laptop is its built-in battery and compact size, allowing you to work from almost anywhere.",
                " All-in-One : It includes a screen, keyboard, and touchpad, so you don't need separate accessories to get started.",
              ]
            },
            { 
              type: 'demonstration', 
              title: "Anatomy of Your Laptop", 
              description: "Let's look at the main parts of a laptop. The diagram below shows the key components you'll interact with every day. The main parts are the Screen, Keyboard, Touchpad, and Webcam.",
              diagramComponent: 'LaptopAnatomy'
            },
            {
              type: 'reading',
              title: 'Ports: Connecting to Other Devices',
              description: "On the sides of your laptop, you'll find several ports for connecting other devices. Common ones include:",
              details: [
                " USB (Universal Serial Bus) : Used for connecting a wide variety of devices, such as a mouse, keyboard, external storage (flash drive), or charging your phone.",
                " HDMI (High-Definition Multimedia Interface) : Used to connect your laptop to an external monitor, TV, or projector to show your screen on a larger display.",
                " Headphone Jack : A small, round port for connecting wired headphones or speakers."
              ]
            },
            { 
              type: 'interactive', 
              title: "Computer Scavenger Hunt", 
              description: "Now that you've seen the parts, let's find them! Click on the blinking areas of the laptop sketch to 'find' them and learn their names.", 
              interactiveComponent: 'ComponentHunt' 
            },
          ]
        },
        {
          id: 'w1d2', day: 2, title: "Power & The Desktop",
          objectives: ["Safely power on and shut down a computer", "Describe the 'booting up' process", "Identify the desktop, icons, taskbar, and Start Menu"],
          materials: ["A working computer", "Interactive Simulators"],
          activities: [
            { 
              type: 'reading', 
              title: "The Startup Sequence: Bringing Your Computer to Life", 
              description: "When you press the power button, your computer begins a process called 'booting up'. During this process, the computer's core software, the Operating System (OS), is loaded from the storage drive into the active memory (RAM). This allows the computer to become interactive and ready for your commands. Once booting is complete, you will see the Desktop.",
              details: [
                " Power On : Press the power button.",
                " Booting Up : The computer runs checks and loads the OS.",
                " Desktop : The main screen appears, ready for you to work."
              ]
            },
            { type: 'interactive', title: "The Startup Process", description: "Let's see the startup process in action. This animation shows what happens when you press the power button.", interactiveComponent: 'PowerOn' },
            { 
              type: 'demonstration', 
              title: "The Desktop Environment: Your Computer's Home Screen", 
              description: "Once your laptop has finished booting up, you'll see the desktop. This is your main workspace. It contains several key elements:",
              details: [
                  " Wallpaper : The background image of your desktop.",
                  " Icons : Small pictures that represent files, folders, or applications. Double-clicking an icon opens it.",
                  " Taskbar : The long bar at the bottom of the screen that shows open applications and system information.",
                  " Start Menu : A button (usually in the bottom-left corner) that opens a menu with access to all your programs, settings, and power options."
              ],
              diagramComponent: 'DesktopMetaphor'
            },
            { type: 'interactive', title: "Explore the Desktop", description: "Take a tour of your digital workspace. Click on the highlighted areas of the simulated desktop below to learn what they do.", interactiveComponent: 'DesktopExplorer' },
          ]
        },
        {
          id: 'w1d3', day: 3, title: "Keyboard & Touchpad Basics",
          objectives: ["Perform basic touchpad actions: point, click, right-click, drag-and-drop, and scroll", "Identify the main key groups on a keyboard", "Understand the function of common keys like Enter, Shift, Backspace, and Tab"],
          materials: ["Interactive Simulators"],
          activities: [
            { 
              type: 'demonstration', 
              title: "Using the Touchpad (Trackpad)", 
              description: "The touchpad allows you to control the mouse pointer (or cursor) on the screen. Mastering it is key to using your laptop efficiently. Main actions include:",
              details: [
                " Point : Move your finger across the surface to move the cursor.",
                " Click (Select) : Tap once with one finger or press the bottom-left area.",
                " Double-Click (Open) : Tap twice quickly with one finger.",
                " Right-Click (Context Menu) : Tap once with two fingers or press the bottom-right area. This opens a menu of options.",
                " Drag and Drop : Tap and hold an item, then drag your finger to move it. Release to drop.",
                " Scroll : Place two fingers on the touchpad and slide them up or down to scroll through pages."
              ],
              diagramComponent: 'MouseActions'
            },
            { type: 'interactive', title: "Mouse Operations Practice", description: "Let's practice the touchpad actions you just learned. The simulator will guide you through a series of tasks.", interactiveComponent: 'MousePractice' },
            { 
              type: 'demonstration', 
              title: "Using the Keyboard", 
              description: "The keyboard is your primary tool for typing text and entering commands. Keys are organized into groups based on their function. Beyond letters and numbers, some special keys are essential:",
              details: [
                " Enter/Return : Confirms a command or moves the cursor to the next line.",
                " Shift : Hold it down while pressing a letter key to type a capital letter. Also used for typing symbols on number keys.",
                " Backspace : Deletes the character to the left of the cursor.",
                " Caps Lock : Toggles continuous uppercase typing on and off.",
                " Tab : Moves the cursor to the next 'tab stop', often used for indenting text or moving between fields in a form."
              ],
              diagramComponent: 'KeyboardLayout'
            },
            { type: 'interactive', title: "Keyboard Key Tour", description: "Let's explore the main sections of the keyboard. Click on the highlighted key groups in the diagram below to see their name and function.", interactiveComponent: 'KeyboardExplorer' },
          ]
        },
        {
          id: 'w1d4', day: 4, title: "Concepts & Care", 
          objectives: ["Differentiate between Hardware and Software", "List two basic computer safety rules", "Describe how to clean a computer and practice good ergonomics"], 
          materials: ["Microfiber cloth"],
          activities: [
              { type: 'demonstration', title: "Hardware vs Software", description: "Hardware is any physical part of the computer you can touch (like the screen, mouse, or internal chips). Software is a set of instructions or programs that tells the hardware what to do (like a web browser, a game, or the operating system itself). They must work together for a computer to function.", diagramComponent: 'HardwareSoftware'},
              { type: 'reading', title: "Computer Safety", description: "Just like you care for your books, your computer needs care too. The two most important rules are: 1. Keep all food and drinks far away from it to prevent spills and damage. 2. Always handle it with clean, dry hands to keep it working perfectly and looking good." },
              { type: 'reading', title: "Keeping Your Computer Clean", description: "To clean the screen, use a soft, dry microfiber cloth (like one for eyeglasses). Never use harsh paper towels or spray liquids directly on the screen. For the keyboard, you can turn the computer off and gently shake out any crumbs, then wipe the keys with a slightly damp cloth." },
              { type: 'reading', title: "Ergonomics: Using Your Laptop Comfortably", description: "Using a laptop for long periods can cause strain. Practicing good ergonomics helps you stay comfortable and healthy.",
                details: [
                    " Posture : Sit up straight with your back supported. Your feet should be flat on the floor.",
                    " Screen Height : The top of your screen should be at or slightly below eye level.",
                    " Wrist Position : Keep your wrists straight, not bent up or down, when typing.",
                    " Take Breaks : Remember to stand up, stretch, and look away from the screen every 20-30 minutes."
                ]
              }
          ]
        },
      ],
      assessment: {
        title: "Topic 1 Competency Test",
        questions: [
          { question: "You can touch it, like the mouse or screen. What is it?", options: ["Software", "Hardware", "Internet", "An Icon"], correctAnswer: "Hardware" },
          { question: "What is the main screen area called where you see your icons and wallpaper?", options: ["The Start Menu", "The Desktop", "The File Explorer", "The Power Screen"], correctAnswer: "The Desktop" },
          { question: "To open a program from a desktop icon, you usually...", options: ["Single-click it", "Stare at it", "Double-click it", "Right-click and select 'Open'"], correctAnswer: "Double-click it" },
        ]
      }
    },
    {
      week: 2,
      title: "NAVIGATING THE OPERATING SYSTEM (OS)",
      lessons: [
        {
          id: 'w2d1',
          day: 1,
          title: "Understanding Your OS",
          objectives: [
            "Explain what an Operating System (OS) is and its main functions.",
            "Identify common OSes like Windows and macOS.",
            "Locate and open basic applications like Calculator and a text editor."
          ],
          materials: ["Individual computers"],
          activities: [
            {
              type: 'reading',
              title: "Introduction to the Operating System (OS)",
              description: "An Operating System (OS) is the most important software on your computer. It manages all the hardware and software, allowing you to use your laptop effectively. Think of it as the conductor of an orchestra, making sure all the different parts work together harmoniously. Its main jobs are managing memory, files, and allowing you to interact with the computer through a graphical user interface (GUI).\n\nCommon operating systems include Microsoft Windows, Apple's macOS, and Linux. For this guide, we will focus on examples from Windows."
            },
            {
              type: 'reading',
              title: "Basic Applications: Your Everyday Tools",
              description: "Your laptop comes with many pre-installed applications (programs). Here are some fundamental ones:\n\n• Web Browser: Your gateway to the internet (e.g., Google Chrome, Microsoft Edge).\n• Text Editor: A simple program for writing plain text (e.g., Notepad).\n• Calculator: For mathematical calculations.\n• File Explorer: To browse and manage your files and folders.\n\nTo open applications, you can double-click their desktop icon, single-click them on the taskbar, or find them in the Start Menu."
            },
             { 
              type: 'practice', 
              title: "Finding Your Tools", 
              description: "Time to practice! Try opening the Calculator and a text editor (like Notepad) on your computer using the Start Menu. This is a great way to get comfortable finding any program you need." 
            },
          ]
        },
        {
          id: 'w2d2',
          day: 2,
          title: "Full File Management",
          objectives: [
            "Create, rename, and delete files and folders.",
            "Move files using 'cut and paste' or drag-and-drop.",
            "Duplicate files using 'copy and paste'.",
            "Understand the purpose of the Recycle Bin."
          ],
          materials: ["File System Simulator"],
          activities: [
            {
              type: 'reading',
              title: "Organizing Your Digital Life",
              description: "Just like you organize school books in folders, computers use files and folders. Mastering how to manage them is a core computer skill. The basic operations are:",
              details: [
                " Create : Make a new, empty file or folder.",
                " Rename : Change the name of an existing file or folder.",
                " Copy/Paste : Create a duplicate of a file or folder in a new location.",
                " Cut/Paste : Move a file or folder from one location to another.",
                " Delete : Move a file or folder to the Recycle Bin."
              ]
            },
            {
              type: 'reading',
              title: 'The Recycle Bin: A Safety Net',
              description: "When you delete an item, it isn't gone forever right away. It's moved to the Recycle Bin (or Trash on macOS). This gives you a chance to restore it if you made a mistake. To permanently delete files and free up space, you must 'empty' the Recycle Bin."
            },
            {
              type: 'demonstration',
              title: "Visualizing Folder Structure",
              description: "Folders can be placed inside other folders to create a hierarchy or a 'tree' structure. This helps keep everything tidy and easy to find.",
              diagramComponent: 'FolderHierarchy'
            },
            {
              type: 'interactive',
              title: "File System Bootcamp",
              description: "Time for real practice! Use this full-featured file explorer. Right-click on the white space to create a 'School' folder. Open it, then create 'Maths' and 'English' folders inside. Create a file in 'Maths', then try dragging it to the 'English' folder!",
              interactiveComponent: 'FileSystem'
            }
          ]
        },
        {
            id: 'w2d3',
            day: 3,
            title: "Window Management Mastery",
            objectives: [
                "Identify and use the minimize, maximize, and close buttons.",
                "Move and resize a window.",
                "Switch between multiple open applications."
            ],
            materials: ["Window Management Simulator"],
            activities: [
                { 
                  type: 'demonstration', 
                  title: "Anatomy of a Window", 
                  description: "Every program you open appears in a box called a window. At the top-right corner, you'll see three important control buttons:",
                  details: [
                    " Minimize (_) : Hides the window from the screen without closing it. You can bring it back by clicking its icon on the taskbar.",
                    " Maximize ([]) : Makes the window fill the entire screen. When maximized, this button changes to 'Restore Down', which returns the window to its previous size.",
                    " Close (X) : Closes the application completely."
                  ],
                  diagramComponent: 'WindowControls' 
                },
                {
                  type: 'reading',
                  title: 'Multitasking with Windows',
                  description: 'You can have multiple windows open at the same time. You can move a window by clicking and dragging its title bar. You can resize it by dragging its corners or edges. To switch between open windows, you can click on their icon in the taskbar or use the Alt+Tab keyboard shortcut.'
                },
                { type: 'interactive', title: "Multi-Window Challenge", description: "Real work often means using more than one program at once. Practice opening, moving, and resizing these windows. Notice how the one you click always comes to the front? Try minimizing one and bringing it back from the taskbar.", interactiveComponent: 'WindowManagement' }
            ]
        },
        {
            id: 'w2d4',
            day: 4,
            title: "Settings and Personalization",
            objectives: [
                "Locate and open the main Settings application.",
                "Identify common settings categories like Display, Sound, and Personalization.",
                "Change the desktop wallpaper."
            ],
            materials: ["Settings App Simulator"],
            activities: [
                {
                    type: 'reading',
                    title: "Making Your Laptop Yours",
                    description: "Your OS lets you customize your laptop through a 'Settings' app (often a gear icon in the Start Menu). This is the control center for your computer's behavior and appearance.\n\nCommon Settings You Can Adjust:\n•  Display : Change screen brightness, text size (scaling), and resolution.\n•  Sound : Control volume levels for speakers and microphones, and select audio devices.\n•  Network & Internet : Manage Wi-Fi connections.\n•  Personalization : Change your desktop wallpaper, accent colors, and lock screen image.\n•  Apps : See a list of installed applications and uninstall them."
                },
                {
                    type: 'interactive',
                    title: 'Desktop Makeover',
                    description: "Let's practice changing settings. Use the simulator to change your desktop background. On a real computer, you can explore the other options we discussed!",
                    interactiveComponent: 'Settings'
                }
            ]
        }
      ],
      assessment: {
        title: "Topic 2 Competency Test",
        questions: [
          { question: "What is the main job of the Operating System (OS)?", options: ["To play videos", "To manage all hardware and software", "To connect to the internet", "To write documents"], correctAnswer: "To manage all hardware and software" },
          { question: "If you want to move a file (not copy it), which commands should you use?", options: ["Copy, then Paste", "Select, then Delete", "Cut, then Paste", "Open, then Save"], correctAnswer: "Cut, then Paste" },
          { question: "Which window control button makes a window fill the entire screen?", options: ["Minimize (_)", "Maximize ([])", "Close (X)", "The corner"], correctAnswer: "Maximize ([])" },
          { question: "If you delete a file by mistake, where should you look for it first?", options: ["The Documents folder", "The Settings app", "The Recycle Bin (or Trash)", "The Internet"], correctAnswer: "The Recycle Bin (or Trash)" }
        ]
      }
    }
  ]
};