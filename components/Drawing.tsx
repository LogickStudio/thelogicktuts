
import React from 'react';

const DiagramContainer = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
        <h4 className="text-center font-semibold text-slate-700 mb-4">{title}</h4>
        <div className="flex justify-center items-center">
            {children}
        </div>
    </div>
);

export const LaptopAnatomyDiagram = () => (
    <DiagramContainer title="Laptop Main Parts">
        <svg viewBox="0 0 300 200" className="w-full max-w-md" aria-labelledby="laptop-title" role="img">
            <title id="laptop-title">Diagram of a laptop with parts labeled</title>
            <g fill="#cbd5e1" stroke="#475569" strokeWidth="2">
                <rect x="20" y="20" width="260" height="150" rx="10" />
                <rect x="0" y="170" width="300" height="20" rx="5" />
            </g>
            <rect x="25" y="25" width="250" height="120" fill="#06b6d4" />
            <text x="150" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Screen</text>
            <text x="150" y="186" textAnchor="middle" fill="black" fontSize="10">Keyboard/Touchpad Area</text>
            <circle cx="150" cy="15" r="3" fill="#334155" />
            <text x="150" y="12" textAnchor="middle" fill="#334155" fontSize="8">Webcam</text>
        </svg>
    </DiagramContainer>
);

export const PowerFlowDiagram = () => (
    <DiagramContainer title="The Startup Process">
        <svg viewBox="0 0 400 100" className="w-full max-w-lg" aria-labelledby="powerflow-title" role="img">
             <title id="powerflow-title">Diagram showing computer startup sequence</title>
            <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2" />
                </marker>
            </defs>
            <g fontSize="12" textAnchor="middle" fill="#164e63">
                <rect x="10" y="30" width="80" height="40" rx="5" fill="#cffafe" stroke="#67e8f9" />
                <text x="50" y="55">Power On</text>
                <line x1="95" y1="50" x2="135" y2="50" stroke="#0891b2" strokeWidth="2" markerEnd="url(#arrow)" />

                <rect x="140" y="30" width="80" height="40" rx="5" fill="#cffafe" stroke="#67e8f9" />
                <text x="180" y="55">Booting Up</text>
                <line x1="225" y1="50" x2="265" y2="50" stroke="#0891b2" strokeWidth="2" markerEnd="url(#arrow)" />
                
                <rect x="270" y="30" width="120" height="40" rx="5" fill="#cffafe" stroke="#67e8f9" />
                <text x="330" y="55">Desktop Appears</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const DesktopMetaphorDiagram = () => (
    <DiagramContainer title="Your Digital Workspace">
        <svg viewBox="0 0 300 200" className="w-full max-w-sm" aria-labelledby="desktop-meta-title" role="img">
            <title id="desktop-meta-title">Diagram of a computer desktop environment</title>
            <rect width="300" height="200" fill="#a5f3fc" />
            <text x="150" y="100" textAnchor="middle" fill="#cffafe" fontSize="24" fontWeight="bold">Wallpaper</text>
            <g fill="#fbbf24">
                <rect x="20" y="20" width="30" height="30" rx="3" />
                <text x="35" y="60" textAnchor="middle" fontSize="10" fill="#164e63">Icon</text>
            </g>
             <g fill="#fbbf24">
                <rect x="20" y="70" width="30" height="30" rx="3" />
                <text x="35" y="110" textAnchor="middle" fontSize="10" fill="#164e63">Icon</text>
            </g>
            <rect y="170" width="300" height="30" fill="#164e63" />
            <text x="150" y="190" textAnchor="middle" fill="white" fontSize="14">Taskbar</text>
        </svg>
    </DiagramContainer>
);

export const MouseActionsDiagram = () => (
    <DiagramContainer title="Basic Mouse Actions">
        <svg viewBox="0 0 320 100" className="w-full max-w-md" aria-labelledby="mouse-actions-title" role="img">
            <title id="mouse-actions-title">Diagram illustrating mouse click, double click, and drag</title>
            <g transform="translate(0, 10)">
                <path d="M 40 10 C 40 0 60 0 60 10 L 60 30 C 60 40 40 40 40 30 Z" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
                <path d="M50 0 V 20" stroke="#6366f1" strokeWidth="1.5"/>
                <text x="50" y="55" textAnchor="middle" fontSize="12">Click</text>
                <text x="50" y="70" textAnchor="middle" fontSize="10" fill="#4338ca">(Selects)</text>
            </g>
            <g transform="translate(100, 10)">
                <path d="M 40 10 C 40 0 60 0 60 10 L 60 30 C 60 40 40 40 40 30 Z" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
                <path d="M50 0 V 20" stroke="#6366f1" strokeWidth="1.5"/>
                 <text x="25" y="15" fontSize="12" fill="#4338ca" fontWeight="bold">x2</text>
                <text x="50" y="55" textAnchor="middle" fontSize="12">Double-Click</text>
                <text x="50" y="70" textAnchor="middle" fontSize="10" fill="#4338ca">(Opens)</text>
            </g>
             <g transform="translate(200, 10)">
                <rect x="20" y="10" width="20" height="20" rx="2" fill="#a5b4fc"/>
                <rect x="80" y="10" width="20" height="20" rx="2" fill="#a5b4fc" opacity="0.4"/>
                <path d="M 42 20 Q 60 0 78 20" stroke="#6366f1" strokeDasharray="3,3" strokeWidth="1.5" fill="none"/>
                <text x="60" y="55" textAnchor="middle" fontSize="12">Drag & Drop</text>
                <text x="60" y="70" textAnchor="middle" fontSize="10" fill="#4338ca">(Moves)</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const KeyboardLayoutDiagram = () => (
    <DiagramContainer title="Keyboard Key Groups">
        <svg viewBox="0 0 300 120" className="w-full max-w-md" aria-labelledby="keyboard-title" role="img">
            <title id="keyboard-title">Simplified diagram of keyboard sections</title>
            <rect x="5" y="5" width="290" height="110" rx="10" fill="#e2e8f0"/>
            <g fontSize="10" textAnchor="middle" fill="#1e293b">
                <rect x="15" y="15" width="270" height="20" rx="3" fill="#a5f3fc" />
                <text x="150" y="29">Function Keys (F1-F12)</text>
                <rect x="35" y="45" width="230" height="25" rx="3" fill="#67e8f9" />
                <text x="150" y="62">Alphanumeric Keys (A-Z, 0-9)</text>
                <rect x="15" y="80" width="270" height="25" rx="3" fill="#22d3ee" />
                <text x="150" y="97">Modifier & Special Keys (Shift, Space, Enter)</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const FolderHierarchyDiagram = () => (
    <DiagramContainer title="Organizing with Folders">
        <svg viewBox="0 0 250 150" className="w-full max-w-xs" aria-labelledby="folder-title" role="img">
            <title id="folder-title">Tree diagram of a folder hierarchy</title>
            <g fill="#fbbf24" stroke="#d97706" strokeWidth="1">
                <rect x="85" y="10" width="80" height="30" rx="4" />
            </g>
            <text x="125" y="30" textAnchor="middle" fontSize="11">School (Parent)</text>

            <line x1="125" y1="40" x2="125" y2="60" stroke="#9ca3af" />
            <line x1="65" y1="60" x2="185" y2="60" stroke="#9ca3af" />
            
            <line x1="65" y1="60" x2="65" y2="80" stroke="#9ca3af" />
            <line x1="185" y1="60" x2="185" y2="80" stroke="#9ca3af" />
            
            <g fill="#fbbf24" stroke="#d97706" strokeWidth="1">
                <rect x="25" y="80" width="80" height="30" rx="4" />
                <rect x="145" y="80" width="80" height="30" rx="4" />
            </g>
            <text x="65" y="100" textAnchor="middle" fontSize="11">Maths (Child)</text>
            <text x="185" y="100" textAnchor="middle" fontSize="11">English (Child)</text>
        </svg>
    </DiagramContainer>
);

export const HardwareSoftwareDiagram = () => (
    <DiagramContainer title="Hardware vs. Software">
        <svg viewBox="0 0 300 150" className="w-full max-w-md" aria-labelledby="hw-sw-title" role="img">
            <title id="hw-sw-title">Diagram showing the difference between hardware and software</title>
            {/* Hardware side */}
            <rect x="10" y="10" width="130" height="130" rx="10" fill="#d1d5db" />
            <text x="75" y="30" textAnchor="middle" fontSize="14" fontWeight="bold">Hardware</text>
            <text x="75" y="45" textAnchor="middle" fontSize="10">(Physical Parts)</text>
            <rect x="30" y="60" width="90" height="50" rx="5" fill="#4b5563" />
            <rect x="35" y="65" width="80" height="35" fill="#60a5fa" />
            <text x="75" y="130" textAnchor="middle" fontSize="12" fill="#4b5563">You can touch it</text>

            {/* Software side */}
            <rect x="160" y="10" width="130" height="130" rx="10" fill="#cffafe" />
            <text x="225" y="30" textAnchor="middle" fontSize="14" fontWeight="bold">Software</text>
            <text x="225" y="45" textAnchor="middle" fontSize="10">(Programs/Apps)</text>
            <rect x="180" y="65" width="20" height="20" rx="3" fill="#06b6d4" />
            <rect x="210" y="65" width="20" height="20" rx="3" fill="#06b6d4" />
            <rect x="240" y="65" width="20" height="20" rx="3" fill="#06b6d4" />
            <text x="225" y="130" textAnchor="middle" fontSize="12" fill="#164e63">You use it</text>
        </svg>
    </DiagramContainer>
);

export const WindowControlsDiagram = () => (
    <DiagramContainer title="Window Control Buttons">
         <svg viewBox="0 0 300 80" className="w-full max-w-sm" aria-labelledby="win-ctrl-title" role="img">
            <title id="win-ctrl-title">Diagram of window minimize, maximize, and close buttons</title>
            <rect x="0" y="0" width="300" height="40" fill="#1e293b" />
            <g fill="black" textAnchor="middle" fontSize="10">
                {/* Minimize */}
                <circle cx="210" cy="20" r="10" fill="#facc15" />
                <rect x="205" y="24" width="10" height="2" />
                <text x="210" y="55" fill="#475569">Minimize</text>
                <text x="210" y="68" fontSize="8" fill="#475569">(Hide)</text>

                {/* Maximize */}
                <circle cx="245" cy="20" r="10" fill="#4ade80" />
                <rect x="241" y="16" width="8" height="8" stroke="black" strokeWidth="1.5" fill="none"/>
                <text x="245" y="55" fill="#475569">Maximize</text>
                <text x="245" y="68" fontSize="8" fill="#475569">(Full Screen)</text>

                {/* Close */}
                <circle cx="280" cy="20" r="10" fill="#f87171" />
                <path d="M 276 16 l 8 8 M 284 16 l -8 8" stroke="black" strokeWidth="1.5" />
                <text x="280" y="55" fill="#475569">Close</text>
                 <text x="280" y="68" fontSize="8" fill="#475569">(Exit)</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const InternetConnectionDiagram = () => (
    <DiagramContainer title="How You Connect to the Internet">
        <svg viewBox="0 0 450 150" className="w-full max-w-2xl" aria-labelledby="internet-conn-title" role="img">
            <title id="internet-conn-title">Flowchart showing how a laptop connects to the internet</title>
            <defs>
                <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
                </marker>
            </defs>
            <g textAnchor="middle" fontSize="12">
                {/* Laptop */}
                <text x="50" y="40">💻</text>
                <text x="50" y="60">Your Laptop</text>

                <line x1="80" y1="50" x2="130" y2="50" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow2)" />
                <text x="105" y="40" fontSize="10">Wi-Fi</text>
                
                {/* Router */}
                <text x="155" y="40">📡</text>
                <text x="155" y="60">Wi-Fi Router</text>
                
                <line x1="185" y1="50" x2="235" y2="50" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow2)" />

                {/* ISP */}
                <rect x="240" y="30" width="80" height="40" rx="5" fill="#cffafe" stroke="#67e8f9" />
                <text x="280" y="55">ISP</text>

                <line x1="325" y1="50" x2="375" y2="50" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow2)" />

                {/* Internet */}
                <text x="400" y="40">☁️</text>
                <text x="400" y="60">Internet</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const URLAnatomyDiagram = () => (
    <DiagramContainer title="Anatomy of a Web Address (URL)">
         <svg viewBox="0 0 400 100" className="w-full max-w-lg" aria-labelledby="url-title" role="img">
            <title id="url-title">Diagram breaking down the parts of a URL</title>
            <text x="5" y="40" fontSize="16" fontFamily="monospace">
                <tspan fill="#be185d">https://</tspan>
                <tspan fill="#059669">www.example.com</tspan>
                <tspan fill="#4f46e5">/path/to/page</tspan>
            </text>
            <g fontSize="10" fill="#444">
                <line x1="45" y1="45" x2="45" y2="60" stroke="#be185d" />
                <rect x="20" y="60" width="50" height="20" fill="#be185d" rx="3" />
                <text x="45" y="74" fill="white" textAnchor="middle">Protocol</text>

                <line x1="150" y1="45" x2="150" y2="60" stroke="#059669" />
                <rect x="105" y="60" width="90" height="20" fill="#059669" rx="3" />
                <text x="150" y="74" fill="white" textAnchor="middle">Domain Name</text>

                <line x1="290" y1="45" x2="290" y2="60" stroke="#4f46e5" />
                <rect x="265" y="60" width="50" height="20" fill="#4f46e5" rx="3" />
                <text x="290" y="74" fill="white" textAnchor="middle">Path</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const WordProcessorUIDiagram = () => (
    <DiagramContainer title="Generic Word Processor Layout">
        <svg viewBox="0 0 400 250" className="w-full max-w-xl" aria-labelledby="wp-ui-title" role="img">
            <title id="wp-ui-title">Diagram of a word processor interface</title>
            {/* Main window */}
            <rect x="5" y="5" width="390" height="240" rx="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"/>
            {/* Toolbar/Ribbon */}
            <rect x="10" y="10" width="380" height="50" fill="#e2e8f0" />
            <text x="200" y="40" textAnchor="middle" fontSize="14" fill="#475569" fontWeight="bold">Toolbar / Ribbon (Formatting Options)</text>
            {/* Document Area */}
            <rect x="20" y="70" width="360" height="170" fill="white" />
            <text x="200" y="150" textAnchor="middle" fontSize="16" fill="#a1a1aa">Document Area</text>
            {/* Cursor */}
            <line x1="40" y1="85" x2="40" y2="105" stroke="black" strokeWidth="2" />
            <text x="50" y="100" fontSize="12" fill="black">Cursor</text>
        </svg>
    </DiagramContainer>
);

export const SpreadsheetUIDiagram = () => (
    <DiagramContainer title="Anatomy of a Spreadsheet">
        <svg viewBox="0 0 400 250" className="w-full max-w-xl" aria-labelledby="ss-ui-title" role="img">
            <title id="ss-ui-title">Diagram of a spreadsheet interface</title>
            <rect x="5" y="5" width="390" height="240" rx="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"/>

            {/* Formula Bar */}
            <rect x="10" y="10" width="380" height="30" fill="#e2e8f0" />
            <rect x="15" y="15" width="25" height="20" fill="white" stroke="#bbf7d0" strokeWidth="2" />
            <text x="27.5" y="29" textAnchor="middle" fontSize="10" fontWeight="bold">fx</text>
            <rect x="45" y="15" width="340" height="20" fill="white" stroke="#cbd5e1"/>
            <text x="50" y="29" fontSize="10" fill="#64748b">=B2*C2</text>
            <text x="215" y="55" textAnchor="middle" fontSize="10" fill="#334155">Formula Bar</text>
            <line x1="215" y1="40" x2="215" y2="50" stroke="#334155" strokeDasharray="2 2" />

            {/* Grid */}
            <g>
                {/* Headers */}
                <rect x="40" y="65" width="350" height="20" fill="#dcfce7"/>
                <rect x="20" y="85" width="20" height="130" fill="#dcfce7"/>
                <g textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803d">
                    <text x="65" y="79">A</text>
                    <text x="115" y="79">B</text>
                    <text x="165" y="79">C</text>
                    <text x="30" y="100">1</text>
                    <text x="30" y="120">2</text>
                    <text x="30" y="140">3</text>
                </g>

                {/* Cells */}
                <g stroke="#a7f3d0">
                    <rect x="40" y="85" width="50" height="20" fill="white"/>
                    <rect x="90" y="85" width="50" height="20" fill="white"/>
                    <rect x="140" y="85" width="50" height="20" fill="white"/>
                    <rect x="40" y="105" width="50" height="20" fill="white"/>
                    <rect x="90" y="105" width="50" height="20" fill="#fef08a" stroke="#facc15" strokeWidth="2"/>
                    <rect x="140" y="105" width="50" height="20" fill="white"/>
                    <rect x="40" y="125" width="50" height="20" fill="white"/>
                    <rect x="90" y="125" width="50" height="20" fill="white"/>
                    <rect x="140" y="125" width="50" height="20" fill="white"/>
                </g>
                <text x="115" y="118" fontSize="10" textAnchor="middle">5</text>
                <text x="95" y="155" fontSize="10" fill="#334155">Cell (B2)</text>
                <path d="M115 125 L 115 150" stroke="#334155" strokeDasharray="2 2"/>
            </g>

            {/* Tabs */}
            <rect x="10" y="220" width="380" height="25" fill="#e2e8f0" />
            <rect x="15" y="222" width="60" height="23" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="45" y="236" textAnchor="middle" fontSize="10" fontWeight="bold">Sheet1</text>
            <text x="100" y="236" fontSize="10" fill="#64748b">Sheet2</text>
        </svg>
    </DiagramContainer>
);

export const EmailCompositionDiagram = () => (
    <DiagramContainer title="Anatomy of an Email">
        <svg viewBox="0 0 400 250" className="w-full max-w-xl" aria-labelledby="email-ui-title" role="img">
            <title id="email-ui-title">Diagram of an email composition window</title>
            <rect x="5" y="5" width="390" height="240" rx="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"/>

            <g fontSize="12" fontFamily="sans-serif">
                <text x="20" y="30" fill="#475569" fontWeight="bold">To:</text>
                <rect x="80" y="15" width="300" height="22" fill="white" stroke="#cbd5e1"/>
                <text x="85" y="30" fill="#64748b">recipient@example.com</text>
                
                <text x="20" y="60" fill="#475569" fontWeight="bold">Subject:</text>
                <rect x="80" y="45" width="300" height="22" fill="white" stroke="#cbd5e1"/>
                <text x="85" y="60" fill="#1e293b">Question about Homework</text>

                <rect x="15" y="75" width="370" height="2" fill="#e2e8f0" />

                <text x="20" y="100" fill="#64748b">This is the body of the email...</text>
                
                <rect x="15" y="205" width="80" height="30" rx="5" fill="#06b6d4"/>
                <text x="55" y="225" textAnchor="middle" fill="white" fontWeight="bold">Send</text>

                <path d="M 110 220 a 5 5 0 0 1 5 -5 h 15 a 5 5 0 0 0 0 -10 h -20 a 5 5 0 0 0 -5 5 v 15 a 5 5 0 0 0 5 5 h 5" stroke="#475569" strokeWidth="2" fill="none"/>
                <text x="145" y="225" fill="#475569">Attach File</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const CloudStorageDiagram = () => (
    <DiagramContainer title="How Cloud Storage Works">
        <svg viewBox="0 0 400 150" className="w-full max-w-lg" aria-labelledby="cloud-title" role="img">
            <title id="cloud-title">Diagram explaining cloud storage synchronization</title>
             <defs>
                <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5e9" />
                </marker>
             </defs>
            <g textAnchor="middle">
                {/* Cloud */}
                <text x="200" y="40" fontSize="40">☁️</text>
                <text x="200" y="70" fontSize="14" fontWeight="bold" fill="#0369a1">Cloud Storage</text>
                <text x="200" y="85" fontSize="10" fill="#0ea5e9">(e.g., Google Drive)</text>

                {/* Laptop */}
                <text x="50" y="110" fontSize="30">💻</text>
                <text x="50" y="140" fontSize="12">Your Laptop</text>

                {/* Phone */}
                <text x="350" y="110" fontSize="30">📱</text>
                <text x="350" y="140" fontSize="12">Your Phone</text>
                
                {/* Arrows */}
                <path d="M 70 110 Q 130 60 180 60" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="5 5" markerEnd="url(#arrow3)" markerStart="url(#arrow3)" />
                <path d="M 330 110 Q 270 60 220 60" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="5 5" markerEnd="url(#arrow3)" markerStart="url(#arrow3)" />
            </g>
        </svg>
    </DiagramContainer>
);

export const TeaMakingFlowchart = () => (
    <DiagramContainer title="Flowchart for Making Tea">
        <svg viewBox="0 0 250 500" className="w-full max-w-sm" aria-labelledby="tea-flow-title" role="img">
            <title id="tea-flow-title">Flowchart diagram illustrating the steps to make tea</title>
            <defs>
                <marker id="arrow4" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#164e63" />
                </marker>
            </defs>
            <g fontSize="11" textAnchor="middle" fill="#164e63">
                {/* Shapes */}
                <ellipse cx="125" cy="30" rx="60" ry="20" fill="#ecfeff" stroke="#a5f3fc" />
                <rect x="65" y="70" width="120" height="30" rx="5" fill="#ecfeff" stroke="#a5f3fc" />
                <rect x="65" y="120" width="120" height="30" rx="5" fill="#ecfeff" stroke="#a5f3fc" />
                <rect x="65" y="170" width="120" height="30" rx="5" fill="#ecfeff" stroke="#a5f3fc" />
                <rect x="65" y="220" width="120" height="30" rx="5" fill="#ecfeff" stroke="#a5f3fc" />
                <path d="M 125 270 L 185 300 L 125 330 L 65 300 Z" fill="#fef9c3" stroke="#fde047" />
                <rect x="15" y="350" width="120" height="30" rx="5" fill="#ecfeff" stroke="#a5f3fc" />
                <rect x="65" y="400" width="120" height="30" rx="5" fill="#ecfeff" stroke="#a5f3fc" />
                <ellipse cx="125" cy="450" rx="60" ry="20" fill="#ecfeff" stroke="#a5f3fc" />

                {/* Text */}
                <text x="125" y="34">Start</text>
                <text x="125" y="89">Boil water</text>
                <text x="125" y="139">Place tea bag in cup</text>
                <text x="125" y="189">Pour water in cup</text>
                <text x="125" y="239">Let steep</text>
                <text x="125" y="304">Want sugar/milk?</text>
                <text x="75" y="369">Add sugar & milk</text>
                <text x="125" y="419">Stir & Serve</text>
                <text x="125" y="454">End</text>
                
                {/* Lines */}
                <path d="M 125 50 V 65" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                <path d="M 125 100 V 115" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                <path d="M 125 150 V 165" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                <path d="M 125 200 V 215" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                <path d="M 125 250 V 265" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" />
                <path d="M 125 330 V 380 L 75 380 V 395" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" fill="none" />
                <text x="110" y="350" fontSize="10">No</text>
                <path d="M 75 330 L 75 345" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" fill="none" />
                <text x="60" y="345" fontSize="10">Yes</text>
                <path d="M 75 380 H 125 V 395" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" fill="none" />
                <path d="M 125 430 V 425" stroke="#164e63" strokeWidth="1.5" markerEnd="url(#arrow4)" />
            </g>
        </svg>
    </DiagramContainer>
);

export const LogicConceptsDiagram = () => (
    <DiagramContainer title="Core Logic Concepts">
        <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Sequence */}
            <div className="flex-1 p-2 border rounded-lg bg-white">
                <h5 className="font-bold text-center mb-2">Sequence</h5>
                <svg viewBox="0 0 100 150" className="w-full">
                    <defs>
                        <marker id="arrow-logic-seq" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2" />
                        </marker>
                    </defs>
                    <rect x="10" y="10" width="80" height="30" rx="3" fill="#ecfeff" stroke="#a5f3fc"/>
                    <text x="50" y="28" textAnchor="middle" fontSize="10">Step 1</text>
                    <path d="M 50 40 V 55" strokeWidth="1.5" stroke="#0891b2" markerEnd="url(#arrow-logic-seq)" />
                    <rect x="10" y="60" width="80" height="30" rx="3" fill="#ecfeff" stroke="#a5f3fc"/>
                    <text x="50" y="78" textAnchor="middle" fontSize="10">Step 2</text>
                    <path d="M 50 90 V 105" strokeWidth="1.5" stroke="#0891b2" markerEnd="url(#arrow-logic-seq)" />
                    <rect x="10" y="110" width="80" height="30" rx="3" fill="#ecfeff" stroke="#a5f3fc"/>
                    <text x="50" y="128" textAnchor="middle" fontSize="10">Step 3</text>
                </svg>
            </div>
            {/* Decision */}
            <div className="flex-1 p-2 border rounded-lg bg-white">
                <h5 className="font-bold text-center mb-2">Decision (If/Else)</h5>
                <svg viewBox="0 0 220 180" className="w-full">
                    <defs>
                        <marker id="arrow-logic-dec" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2" />
                        </marker>
                    </defs>
                    <path d="M 110 10 L 170 40 L 110 70 L 50 40 Z" fill="#fef9c3" stroke="#fde047" />
                    <text x="110" y="44" textAnchor="middle" fontSize="10">Condition?</text>
                    <path d="M 50 40 L 20 90" strokeWidth="1.5" stroke="#0891b2" markerEnd="url(#arrow-logic-dec)" fill="none"/>
                    <text x="40" y="70" fontSize="8">True</text>
                    <rect x="-15" y="90" width="70" height="30" rx="3" fill="#ecfeff" stroke="#a5f3fc"/>
                    <text x="20" y="108" textAnchor="middle" fontSize="10">Do This</text>
                    <path d="M 170 40 L 200 90" strokeWidth="1.5" stroke="#0891b2" markerEnd="url(#arrow-logic-dec)" fill="none"/>
                    <text x="180" y="70" fontSize="8">False</text>
                    <rect x="165" y="90" width="70" height="30" rx="3" fill="#ecfeff" stroke="#a5f3fc"/>
                    <text x="200" y="108" textAnchor="middle" fontSize="10">Do That</text>
                    <path d="M 20 120 V 140 H 110" strokeWidth="1.5" stroke="#0891b2" fill="none"/>
                    <path d="M 200 120 V 140 H 110" strokeWidth="1.5" stroke="#0891b2" markerEnd="url(#arrow-logic-dec)" fill="none"/>
                </svg>
            </div>
            {/* Loop */}
            <div className="flex-1 p-2 border rounded-lg bg-white">
                <h5 className="font-bold text-center mb-2">Loop (While)</h5>
                <svg viewBox="0 0 100 150" className="w-full">
                     <defs>
                        <marker id="arrow-logic-loop" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2" />
                        </marker>
                    </defs>
                    <path d="M 50 50 V 20" strokeWidth="1.5" stroke="#0891b2" markerEnd="url(#arrow-logic-loop)" fill="none"/>
                    <rect x="10" y="50" width="80" height="30" rx="3" fill="#ecfeff" stroke="#a5f3fc"/>
                    <text x="50" y="68" textAnchor="middle" fontSize="10">Do Action</text>
                    <path d="M 10 65 C -10 65, -10 25, 10 25 H 90 C 110 25, 110 65, 90 65" strokeWidth="1.5" stroke="#0891b2" fill="none"/>
                    <path d="M 50, 25 C 50, 30, 40, 35, 40, 40" markerEnd="url(#arrow-logic-loop)" strokeWidth="1.5" stroke="#0891b2" fill="none"/>
                    <text x="75" y="20" fontSize="8">While True</text>
                    <path d="M 50 80 V 100" strokeWidth="1.5" stroke="#0891b2" markerEnd="url(#arrow-logic-loop)" fill="none"/>
                    <text x="65" y="95" fontSize="8">If False</text>
                </svg>
            </div>
        </div>
    </DiagramContainer>
);

export const PythonInstallationFlow = () => (
    <DiagramContainer title="Python Installation Steps">
        <svg viewBox="0 0 500 100" className="w-full max-w-2xl" aria-labelledby="python-install-title" role="img">
            <title id="python-install-title">Flowchart for installing Python</title>
             <defs>
                <marker id="arrow-py" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                </marker>
            </defs>
            <g fontSize="11" textAnchor="middle" fill="#047857">
                <rect x="10" y="30" width="100" height="40" rx="5" fill="#d1fae5" stroke="#6ee7b7" />
                <text x="60" y="55">1. Download</text>
                <line x1="115" y1="50" x2="145" y2="50" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-py)" />

                <rect x="150" y="30" width="100" height="40" rx="5" fill="#d1fae5" stroke="#6ee7b7" />
                <text x="200" y="55">2. Run Installer</text>
                <line x1="255" y1="50" x2="285" y2="50" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-py)" />
                
                <rect x="290" y="30" width="100" height="40" rx="5" fill="#fef9c3" stroke="#fde047" />
                <text x="340" y="55">3. Add to PATH</text>
                <line x1="395" y1="50" x2="425" y2="50" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-py)" />

                <rect x="430" y="30" width="60" height="40" rx="5" fill="#d1fae5" stroke="#6ee7b7" />
                <text x="460" y="55">4. Finish</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const VariableBoxDiagram = () => (
    <DiagramContainer title="Variables are like Labeled Boxes">
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center text-center">
            {/* String Variable */}
            <div className="flex-1">
                <div className="p-4 border-2 border-dashed border-blue-400 bg-blue-50 rounded-lg min-h-[60px] flex items-center justify-center">
                    <p className="font-mono text-blue-800 text-lg">"Alice"</p>
                </div>
                <p className="mt-2 font-semibold">name</p>
                <p className="text-sm text-slate-500">(String / str)</p>
            </div>
            {/* Integer Variable */}
            <div className="flex-1">
                <div className="p-4 border-2 border-dashed border-green-400 bg-green-50 rounded-lg min-h-[60px] flex items-center justify-center">
                    <p className="font-mono text-green-800 text-lg">15</p>
                </div>
                <p className="mt-2 font-semibold">age</p>
                <p className="text-sm text-slate-500">(Integer / int)</p>
            </div>
            {/* Float Variable */}
            <div className="flex-1">
                <div className="p-4 border-2 border-dashed border-purple-400 bg-purple-50 rounded-lg min-h-[60px] flex items-center justify-center">
                     <p className="font-mono text-purple-800 text-lg">3.14</p>
                </div>
                <p className="mt-2 font-semibold">pi</p>
                <p className="text-sm text-slate-500">(Float)</p>
            </div>
        </div>
    </DiagramContainer>
);

export const UserInputFlowDiagram = () => (
    <DiagramContainer title="Handling User Input">
        <svg viewBox="0 0 350 150" className="w-full max-w-lg" aria-labelledby="input-flow-title" role="img">
            <title id="input-flow-title">Flowchart for handling user input in Python</title>
             <defs>
                <marker id="arrow-user" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#7e22ce" />
                </marker>
            </defs>
             <g fontSize="11" textAnchor="middle" fill="#4a044e">
                {/* Shapes */}
                <rect x="10" y="55" width="80" height="40" rx="5" fill="#f3e8ff" stroke="#c084fc" />
                <path d="M 120 10 L 160 50 L 120 90 L 80 50 Z" fill="#fef9c3" stroke="#fde047" />
                <rect x="190" y="10" width="100" height="40" rx="5" fill="#f3e8ff" stroke="#c084fc" />
                <rect x="190" y="70" width="100" height="40" rx="5" fill="#f3e8ff" stroke="#c084fc" />
                
                {/* Text */}
                <text x="50" y="78">user_age = input()</text>
                <text x="120" y="54">Need a number?</text>
                <text x="240" y="33">age = int(user_age)</text>
                <text x="240" y="93">Use user_age as text</text>

                {/* Lines */}
                <path d="M 90 75 H 100 L 115 60" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#arrow-user)" fill="none" />
                <path d="M 125 40 V 25 H 185" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#arrow-user)" fill="none" />
                <text x="160" y="20" fontSize="10">Yes</text>
                 <path d="M 125 60 V 85 H 185" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#arrow-user)" fill="none" />
                 <text x="160" y="100" fontSize="10">No</text>
             </g>
        </svg>
    </DiagramContainer>
);

export const ConditionalFlowDiagram = () => (
    <DiagramContainer title="If-Elif-Else Flow">
        <svg viewBox="0 0 300 300" className="w-full max-w-sm" aria-labelledby="cond-flow-title" role="img">
            <title id="cond-flow-title">Flowchart for an if-elif-else statement</title>
            <defs>
                <marker id="arrow-cond" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
                </marker>
            </defs>
            <g fontSize="10" textAnchor="middle" fill="#5b21b6">
                <path d="M 150 10 L 200 40 L 150 70 L 100 40 Z" fill="#f5d0fe" stroke="#d946ef" />
                <text x="150" y="44">IF Condition 1?</text>

                <path d="M 200 40 L 250 40 L 250 90" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-cond)" fill="none" />
                <text x="225" y="35">True</text>
                <rect x="215" y="90" width="70" height="30" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="250" y="108">Do Action 1</text>

                <path d="M 150 70 V 90" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-cond)" fill="none" />
                <text x="165" y="85">False</text>
                <path d="M 150 90 L 200 120 L 150 150 L 100 120 Z" fill="#f5d0fe" stroke="#d946ef" />
                <text x="150" y="124">ELIF Condition 2?</text>

                <path d="M 200 120 L 250 120 L 250 170" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-cond)" fill="none" />
                <text x="225" y="115">True</text>
                <rect x="215" y="170" width="70" height="30" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="250" y="188">Do Action 2</text>

                <path d="M 150 150 V 170" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-cond)" fill="none" />
                <text x="165" y="165">False</text>
                <rect x="115" y="170" width="70" height="30" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="150" y="188">ELSE Action</text>

                <path d="M 250 120 V 220 H 150" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
                <path d="M 150 200 V 220" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
                <path d="M 250 200 V 220" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
                <path d="M 150 220 V 240" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-cond)" fill="none" />

                <rect x="100" y="240" width="100" height="30" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="150" y="258">Continue</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const ForLoopDiagram = () => (
    <DiagramContainer title="For Loop Structure">
        <svg viewBox="0 0 300 200" className="w-full max-w-sm" aria-labelledby="for-loop-title" role="img">
            <title id="for-loop-title">Diagram of a for loop iterating over a list</title>
            <defs>
                <marker id="arrow-for" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
                </marker>
            </defs>
            <g fontSize="10" textAnchor="middle" fill="#5b21b6">
                <text x="60" y="20">for item in</text>
                <rect x="110" y="5" width="100" height="30" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="160" y="23">["A", "B", "C"]</text>

                <path d="M 160 35 V 50" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-for)" />

                <rect x="100" y="50" width="120" height="40" rx="3" fill="#f5d0fe" stroke="#d946ef"/>
                <text x="160" y="70">item = Next from List</text>
                <text x="160" y="82">(A, then B, then C)</text>

                <path d="M 160 90 V 105" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-for)" />

                <rect x="100" y="105" width="120" height="40" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="160" y="128">Do Something with item</text>
                
                <path d="M 100 125 H 40 V 35 H 110" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-for)" fill="none" />
                <text x="70" y="30" fontSize="9">Loop back</text>

                <path d="M 210 20 H 260 V 160" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-for)" fill="none" />
                <text x="240" y="15" fontSize="9">After list is done</text>
                <text x="260" y="175">Continue</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const WhileLoopDiagram = () => (
    <DiagramContainer title="While Loop Structure">
        <svg viewBox="0 0 250 250" className="w-full max-w-xs" aria-labelledby="while-loop-title" role="img">
            <title id="while-loop-title">Diagram of a while loop checking a condition</title>
             <defs>
                <marker id="arrow-while" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
                </marker>
            </defs>
            <g fontSize="10" textAnchor="middle" fill="#5b21b6">
                <path d="M 125 10 V 25" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-while)" />

                <path d="M 125 30 L 175 60 L 125 90 L 75 60 Z" fill="#f5d0fe" stroke="#d946ef" />
                <text x="125" y="64">While Condition is True?</text>

                <path d="M 175 60 H 220 V 130 H 160" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-while)" fill="none" />
                <text x="195" y="55">True</text>
                
                <rect x="90" y="130" width="70" height="40" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="125" y="150">Execute</text>
                <text x="125" y="162">Loop Body</text>

                <path d="M 90 150 H 40 V 45 H 75" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-while)" fill="none" />
                <text x="40" y="90" fontSize="9">Loop</text>

                <path d="M 125 90 V 200" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-while)" fill="none" />
                <text x="140" y="110">False</text>
                <text x="125" y="215">Continue Program</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const FunctionAnatomyDiagram = () => (
    <DiagramContainer title="Anatomy of a Python Function">
        <div className="font-mono text-sm bg-slate-800 text-white p-4 rounded-lg w-full max-w-md">
            <p>
                <span className="text-purple-400">def</span> <span className="text-yellow-400">add_numbers</span>(<span className="text-sky-400">num1</span>, <span className="text-sky-400">num2</span>):
                <span className="text-slate-500 italic block pl-2"># defines a function</span>
            </p>
            <div className="pl-4 border-l-2 border-slate-700">
                <p>
                    <span className="text-slate-400">result = num1 + num2</span>
                    <span className="text-slate-500 italic block"># function body (indented)</span>
                </p>
                <p className="mt-2">
                    <span className="text-purple-400">return</span> <span className="text-slate-400">result</span>
                    <span className="text-slate-500 italic block"># sends a value back</span>
                </p>
            </div>
        </div>
    </DiagramContainer>
);

export const VersionControlProblemDiagram = () => (
    <DiagramContainer title="Managing Project History">
        <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Without Git */}
            <div className="flex-1 p-3 border rounded-lg bg-red-50 border-red-200">
                <h5 className="font-bold text-center mb-2 text-red-800">Without Version Control</h5>
                <div className="relative h-40">
                    <p className="absolute top-2 left-4 text-sm bg-white p-1 rounded shadow">📄 report.docx</p>
                    <p className="absolute top-10 right-2 text-sm bg-white p-1 rounded shadow">📄 report_final.docx</p>
                    <p className="absolute top-20 left-10 text-sm bg-white p-1 rounded shadow">📄 report_final_v2.docx</p>
                    <p className="absolute top-28 right-8 text-sm bg-white p-1 rounded shadow text-red-600 font-bold">📄 report_FINAL_final.docx</p>
                </div>
            </div>
            {/* With Git */}
            <div className="flex-1 p-3 border rounded-lg bg-green-50 border-green-200">
                <h5 className="font-bold text-center mb-2 text-green-800">With Version Control (Git)</h5>
                <svg viewBox="0 0 150 150" className="w-full h-40">
                     <defs>
                        <marker id="arrow-git" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#15803d" />
                        </marker>
                    </defs>
                    <g fill="#15803d" textAnchor="middle" fontSize="9">
                        <line x1="10" y1="75" x2="140" y2="75" stroke="#15803d" strokeWidth="2" markerEnd="url(#arrow-git)"/>
                        <circle cx="20" cy="75" r="8" fill="#a7f3d0" stroke="#15803d"/>
                        <text y="95" x="20">Commit 1</text>
                        <circle cx="75" cy="75" r="8" fill="#a7f3d0" stroke="#15803d"/>
                        <text y="95" x="75">Commit 2</text>
                        <circle cx="130" cy="75" r="8" fill="#a7f3d0" stroke="#15803d"/>
                        <text y="95" x="130">Commit 3</text>
                    </g>
                </svg>
            </div>
        </div>
    </DiagramContainer>
);

export const GitWorkflowDiagram = () => (
    <DiagramContainer title="Basic Git Workflow">
        <svg viewBox="0 0 450 150" className="w-full max-w-xl" aria-labelledby="git-workflow-title" role="img">
            <title id="git-workflow-title">Diagram of Git workflow: working directory, staging, and repository</title>
             <defs>
                <marker id="arrow-git-flow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#be185d" />
                </marker>
            </defs>
            <g textAnchor="middle">
                {/* Working Directory */}
                <rect x="10" y="30" width="120" height="80" rx="5" fill="#f1f5f9" stroke="#94a3b8" />
                <text x="70" y="20" fontSize="12" fontWeight="bold">Working Directory</text>
                <text x="70" y="70" fontSize="24">📄</text>
                <text x="70" y="90" fontSize="11">Your files</text>

                <line x1="135" y1="70" x2="165" y2="70" stroke="#be185d" strokeWidth="2" markerEnd="url(#arrow-git-flow)" />
                <text x="150" y="60" fontSize="11" fill="#be185d" fontWeight="bold">git add</text>

                {/* Staging Area */}
                <rect x="170" y="30" width="120" height="80" rx="5" fill="#fce7f3" stroke="#f472b6" />
                <text x="230" y="20" fontSize="12" fontWeight="bold">Staging Area</text>
                <text x="230" y="70" fontSize="24">📋</text>
                <text x="230" y="90" fontSize="11">Tracked changes</text>
                
                <line x1="295" y1="70" x2="325" y2="70" stroke="#be185d" strokeWidth="2" markerEnd="url(#arrow-git-flow)" />
                <text x="310" y="60" fontSize="11" fill="#be185d" fontWeight="bold">git commit</text>

                {/* Repository */}
                <rect x="330" y="30" width="110" height="80" rx="5" fill="#d1fae5" stroke="#6ee7b7" />
                <text x="385" y="20" fontSize="12" fontWeight="bold">Repository (.git)</text>
                <text x="385" y="70" fontSize="24">💾</text>
                <text x="385" y="90" fontSize="11">Project History</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const ClientServerDiagram = () => (
    <DiagramContainer title="Client-Server Model">
        <svg viewBox="0 0 350 150" className="w-full max-w-lg" aria-labelledby="client-server-title" role="img">
            <title id="client-server-title">Diagram of client-server communication</title>
            <defs>
                <marker id="arrow-cs" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0369a1" />
                </marker>
            </defs>
            <g textAnchor="middle">
                {/* Client */}
                <text x="50" y="60" fontSize="40">💻</text>
                <text x="50" y="90" fontSize="14" fontWeight="bold">Client</text>
                <text x="50" y="105" fontSize="10">(Your Browser)</text>

                {/* Server */}
                <text x="300" y="60" fontSize="40">🏢</text>
                <text x="300" y="90" fontSize="14" fontWeight="bold">Server</text>
                <text x="300" y="105" fontSize="10">(Website Host)</text>

                {/* Arrows */}
                <path d="M 80 50 H 270" stroke="#0369a1" strokeWidth="2" fill="none" markerEnd="url(#arrow-cs)" />
                <text x="175" y="45" fontSize="12" fill="#0369a1">Request →</text>
                <path d="M 270 80 H 80" stroke="#0369a1" strokeWidth="2" fill="none" markerEnd="url(#arrow-cs)" />
                <text x="175" y="95" fontSize="12" fill="#0369a1">← Response</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const TracebackDiagram = () => (
    <DiagramContainer title="Reading a Python Traceback">
        <div className="font-mono text-xs bg-slate-900 text-white p-4 rounded-lg w-full max-w-lg">
            <p className="text-slate-400">Traceback (most recent call last):</p>
            <p className="pl-2">File <span className="text-green-400">"main.py"</span>, line <span className="text-orange-400">12</span>, in &lt;module&gt;</p>
            <p className="pl-4 text-cyan-400">run_app()</p>
            <p className="pl-2">File <span className="text-green-400">"main.py"</span>, line <span className="text-orange-400">8</span>, in run_app</p>
            <p className="pl-4 text-cyan-400">result = calculate_value("text")</p>
            <p className="pl-2">File <span className="text-green-400">"main.py"</span>, line <span className="text-orange-400">4</span>, in calculate_value</p>
            <p className="pl-4 text-cyan-400">return 100 / value</p>
            <p className="bg-red-900/50 border-l-2 border-red-500 px-2 py-1 mt-1">
                <span className="text-red-400 font-bold">TypeError:</span> <span className="text-red-300">unsupported operand type(s) for /: 'int' and 'str'</span>
            </p>
        </div>
    </DiagramContainer>
);

export const TryExceptFlowDiagram = () => (
    <DiagramContainer title="Try-Except Error Handling Flow">
        <svg viewBox="0 0 300 250" className="w-full max-w-sm" aria-labelledby="try-except-title" role="img">
            <title id="try-except-title">Flowchart for try-except block</title>
            <defs>
                <marker id="arrow-try" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
                </marker>
            </defs>
            <g fontSize="10" textAnchor="middle" fill="#5b21b6">
                <rect x="100" y="10" width="100" height="30" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="150" y="28">Start</text>

                <path d="M 150 40 V 55" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-try)" />

                <rect x="75" y="55" width="150" height="70" rx="3" fill="#e0f2fe" stroke="#7dd3fc" />
                <text x="150" y="70" fontWeight="bold">TRY Block</text>
                <rect x="100" y="80" width="100" height="30" rx="3" fill="white" stroke="#bae6fd" />
                <text x="150" y="98">Risky Code</text>

                <path d="M 225 90 H 260 V 150" stroke="#f87171" strokeWidth="1.5" markerEnd="url(#arrow-try)" fill="none" />
                <text x="240" y="85" fontSize="9" fill="#b91c1c">Error!</text>
                <rect x="225" y="150" width="70" height="30" rx="3" fill="#fee2e2" stroke="#fca5a5" />
                <text x="260" y="168" fill="#b91c1c">EXCEPT</text>

                <path d="M 75 90 H 40 V 150" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrow-try)" fill="none" />
                <text x="55" y="85" fontSize="9" fill="#14532d">Success</text>

                <path d="M 40 150 H 125" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
                <path d="M 225 165 H 175" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
                <path d="M 150 125 V 195" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-try)" fill="none" />

                <rect x="100" y="195" width="100" height="30" rx="3" fill="#e9d5ff" stroke="#a855f7"/>
                <text x="150" y="213">Continue</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const WebTechTrioDiagram = () => (
    <DiagramContainer title="The Web Technology Trio">
        <svg viewBox="0 0 350 200" className="w-full max-w-lg" aria-labelledby="web-trio-title" role="img">
            <title id="web-trio-title">Diagram of HTML, CSS, and JavaScript working together</title>
            <g textAnchor="middle">
                {/* Center Button */}
                <rect x="125" y="80" width="100" height="40" rx="5" fill="#06b6d4" />
                <text x="175" y="105" fill="white" fontWeight="bold">Click Me!</text>
                
                {/* HTML */}
                <rect x="10" y="10" width="80" height="40" rx="5" fill="#fff7ed" stroke="#fb923c"/>
                <text x="50" y="35" fontWeight="bold" fill="#c2410c">HTML</text>
                <path d="M 50 50 Q 100 70 140 80" stroke="#fb923c" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                <text x="80" y="70" fontSize="11" fill="#c2410c">Structure</text>
                
                {/* CSS */}
                <rect x="260" y="10" width="80" height="40" rx="5" fill="#eef2ff" stroke="#818cf8"/>
                <text x="300" y="35" fontWeight="bold" fill="#4338ca">CSS</text>
                <path d="M 300 50 Q 250 70 210 80" stroke="#818cf8" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                <text x="270" y="70" fontSize="11" fill="#4338ca">Style</text>
                
                {/* JS */}
                <rect x="135" y="150" width="80" height="40" rx="5" fill="#fef9c3" stroke="#facc15"/>
                <text x="175" y="175" fontWeight="bold" fill="#a16207">JavaScript</text>
                <path d="M 175 150 V 120" stroke="#facc15" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                <text x="175" y="140" fontSize="11" fill="#a16207">Behavior</text>
            </g>
        </svg>
    </DiagramContainer>
);

export const JSEventLoopDiagram = () => (
    <DiagramContainer title="JavaScript Event Model">
        <svg viewBox="0 0 300 250" className="w-full max-w-sm" aria-labelledby="js-event-title" role="img">
            <title id="js-event-title">Simplified diagram of a JavaScript event firing</title>
            <defs>
                <marker id="arrow-js" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ca8a04" />
                </marker>
            </defs>
            <g textAnchor="middle" fontSize="11">
                <text x="50" y="30" fontSize="30">🙋</text>
                <text x="50" y="55">User Action</text>

                <path d="M 50 65 V 80" stroke="#ca8a04" strokeWidth="1.5" markerEnd="url(#arrow-js)" />
                <text x="70" y="75" fontSize="10">e.g. Click</text>
                
                <rect x="25" y="80" width="50" height="25" rx="3" fill="#fef9c3" stroke="#fde047" />
                <text x="50" y="97">Button</text>

                <path d="M 75 92 H 110" stroke="#ca8a04" strokeWidth="1.5" markerEnd="url(#arrow-js)" />

                <rect x="110" y="80" width="80" height="25" rx="3" fill="#fef9c3" stroke="#fde047" />
                <text x="150" y="97">Event Listener</text>
                
                <path d="M 150 105 V 120" stroke="#ca8a04" strokeWidth="1.5" markerEnd="url(#arrow-js)" />
                <text x="130" y="115" fontSize="10">'click'</text>
                
                <rect x="110" y="120" width="80" height="35" rx="3" fill="#fef9c3" stroke="#fde047" />
                <text x="150" y="135">Run JS</text>
                <text x="150" y="147">Function</text>
                
                <path d="M 150 155 V 170" stroke="#ca8a04" strokeWidth="1.5" markerEnd="url(#arrow-js)" />

                <rect x="50" y="170" width="200" height="50" rx="3" fill="#e0f2fe" stroke="#7dd3fc"/>
                <text x="150" y="198">Change the Page</text>
            </g>
        </svg>
    </DiagramContainer>
);
