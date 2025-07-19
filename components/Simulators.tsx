
import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';
import type { FSFile, FSFolder, FSNode } from '../types';

// --- ICONS (copied for standalone components) ---

const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.25l-3.3-3.3a.75.75 0 0 0-.53-.22H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Z" />
    </svg>
);

const FileIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a.375.375 0 0 1-.375-.375V6.75A3.75 3.75 0 0 0 9 3H5.625Z" />
        <path d="M12.971 2.25a2.25 2.25 0 0 1 2.249 2.03l.001.12v1.875h1.875a2.25 2.25 0 0 1 2.25 2.25v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-.75-.75h-2.625a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 1 0-1.5h1.5Z" />
    </svg>
);

const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.006a.75.75 0 0 1-.744.734H8.084a.75.75 0 0 1-.744-.734L6.331 6.63l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 4.5a.75.75 0 1 0 1.499-.058l-.346-4.5Zm5.318 0a.75.75 0 1 0-1.498.058l-.347 4.5a.75.75 0 1 0 1.5-.058l.346-4.5Z" clipRule="evenodd" /></svg>
);

const PencilIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" /><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" /></svg>
);

const ClipboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.5 3A2.25 2.25 0 0 0 8.25 5.25v.041c.224.013.448.032.675.058v-.1a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v.1c.227-.026.45-.045.675-.058V5.25A2.25 2.25 0 0 0 13.5 3h-3Zm-2.625 3c-.244.02-.486.045-.724.074v10.652A2.25 2.25 0 0 0 9.375 19.5h5.25a2.25 2.25 0 0 0 2.224-2.024V6.074c-.238-.029-.48-.054-.724-.074H7.875Zm-1.5 0h-.375c-.622 0-1.125.503-1.125 1.125v11.25c0 .622.503 1.125 1.125 1.125h9.75c.622 0 1.125-.503 1.125-1.125V7.125c0-.622-.503-1.125-1.125-1.125h-.375V6a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v.375Z" clipRule="evenodd" /></svg>
);
const ScissorsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M2.213 2.924a.75.75 0 0 1 1.06 0l8.25 8.25-.823 1.234a.75.75 0 0 1-1.22-.812l.147-.22-1.06-1.06a.75.75 0 0 1 0-1.06l-4.72-4.72a.75.75 0 0 1 0-1.06Zm18.528 1.06a.75.75 0 0 0-1.06 0l-4.72 4.72a.75.75 0 0 0 0 1.06l-1.06 1.06.147.22a.75.75 0 1 0 1.22.812l-.823-1.234 8.25-8.25a.75.75 0 0 0 0-1.06Zm-11.77 8.03a.75.75 0 0 1 0 1.06l-4.72 4.72a.75.75 0 0 1-1.06 0l-1.125-1.125a.75.75 0 0 1 0-1.06l4.72-4.72a.75.75 0 0 1 1.06 0l1.125 1.125Zm12.827-1.125a.75.75 0 0 0-1.06 0l-1.125 1.125a.75.75 0 0 0 0 1.06l4.72 4.72a.75.75 0 0 0 1.06 0l1.125-1.125a.75.75 0 0 0 0-1.06l-4.72-4.72ZM10.5 7.125a3.375 3.375 0 1 0 0 6.75 3.375 3.375 0 0 0 0-6.75Zm-8.625 3.375a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0Z" clipRule="evenodd" /></svg>
);
const DuplicateIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M17.663 3.118c.225.015.45.038.673.069v-.001c1.036 0 1.875.84 1.875 1.875v14.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 6.375 21V6.75c0-1.036.84-1.875 1.875-1.875h1.125c.224-.03.448-.054.673-.069v-.001h.337c.365 0 .692.052.999.145H15c.307-.093.634-.145.999-.145h.337c.225.015.45.038.673.069Zm-2.913 2.58H9.375v13.5h8.25v-13.5Z" clipRule="evenodd" /><path d="M5.625 2.25c-1.036 0-1.875.84-1.875 1.875v14.25c0 1.035.84 1.875 1.875 1.875h.375V6.75c0-2.071 1.679-3.75 3.75-3.75h4.125V2.25c0-.14-.012-.278-.035-.412A2.252 2.252 0 0 0 12 1.5H5.625Z" /></svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

const WindowMinimizeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
);

const WindowMaximizeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3.75 3.75A1.5 1.5 0 0 1 5.25 2.25h13.5A1.5 1.5 0 0 1 20.25 3.75v13.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75Zm1.5 0V17.25h13.5V3.75H5.25Z" clipRule="evenodd" /></svg>
);

const WindowRestoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 8.25A1.5 1.5 0 0 1 4.5 6.75h10.5A1.5 1.5 0 0 1 16.5 8.25v10.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 18.75V8.25Zm1.5 0V18.75h10.5V8.25H4.5Z" clipRule="evenodd" /><path d="M7.5 3.75A1.5 1.5 0 0 1 9 2.25h10.5A1.5 1.5 0 0 1 21 3.75v10.5A1.5 1.5 0 0 1 19.5 15.75h-1.5V9a.75.75 0 0 0-.75-.75H7.5V3.75Z" /></svg>
);


const BoldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.219 4.344c1.172 0 2.234.344 3.187 1.031 1.016.719 1.531 1.641 1.531 2.766 0 .719-.219 1.391-.656 2.016a3.13 3.13 0 0 1-1.828 1.437v.094c.906.25 1.656.75 2.25 1.5.625.75.938 1.688.938 2.813 0 1.344-.563 2.5-1.688 3.469-1.094.969-2.516 1.453-4.266 1.453H6V4.344h7.219Zm-3.188 3.531H8.125v4.063h2.125c.938 0 1.688-.281 2.25-.844.594-.562.891-1.313.891-2.25 0-.906-.313-1.641-.938-2.188-.625-.547-1.391-.812-2.313-.812Zm-.219 6.281H8.125V19.5h2.281c1.125 0 2.016-.313 2.672-.938.688-.625 1.031-1.469 1.031-2.531 0-1.031-.359-1.875-1.078-2.531-.719-.656-1.641-.984-2.766-.984Z"/></svg>
);

const ItalicIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.938 4.344h6.812V6.5H13.625L10.5 17.5h2.938v2.156H6.188V17.5H9.25L12.375 6.5H9.938V4.344Z" /></svg>
);

const UnderlineIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4.344v7.312c0 1.688.547 3.125 1.641 4.313C8.734 17.156 10.219 18 12 18s3.266-.844 4.359-2.031c1.094-1.188 1.641-2.625 1.641-4.313V4.344H15.5V11.5c0 1.094-.25 2-.75 2.688-.5.688-1.219 1.031-2.156 1.031-1 0-1.766-.344-2.313-1.031-.547-.688-.812-1.594-.812-2.688V4.344H6Zm-1.656 15v2.312h15.312V19.344H4.344Z" /></svg>
);

const TerminalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 3.75A1.5 1.5 0 0 1 4.5 2.25h15A1.5 1.5 0 0 1 21 3.75v16.5A1.5 1.5 0 0 1 19.5 21.75h-15A1.5 1.5 0 0 1 3 20.25V3.75Zm3.402 4.125a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06L8.844 12 6.402 9.563a.75.75 0 0 1 0-1.061Zm4.848-.312a.75.75 0 0 1 .848.525l2.25 6.75a.75.75 0 0 1-1.45.486l-2.25-6.75a.75.75 0 0 1 .602-1.011Z" clipRule="evenodd" /></svg>
);

const PaperClipIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 1 .97 1.054l-5.25 4.5a.75.75 0 0 1-1.018-1.092l5.298-4.512Zm-7.48 4.5a.75.75 0 0 1 1.054.043l5.25 6a.75.75 0 0 1-1.1_1.02l-5.25-6a.75.75 0 0 1 .046-1.063Zm12.067 8.25-.22.22a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 0 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" /><path d="M11.25 5.25a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-1.5a3 3 0 0 1-3-3V8.25a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v10.5a.75.75 0 0 0 1.5 0V8.25a3 3 0 0 0-3-3h-1.5a3 3 0 0 0-3 3v10.5a4.5 4.5 0 0 0 4.5 4.5h1.5a4.5 4.5 0 0 0 4.5-4.5V8.25a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5v.03Z" /></svg>
);

const RefreshIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-4.512a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.44a9 9 0 0 0-15.059 4.01l-1.903-1.903a.75.75 0 1 1 1.06-1.06l1.903 1.903Zm14.49 3.891a.75.75 0 1 1-1.06 1.06l-1.903-1.903a7.5 7.5 0 0 1-12.548 3.364l-1.903-1.903h4.512a.75.75 0 0 1 .75.75V19.5a.75.75 0 0 1-1.5 0v-2.44a9 9 0 0 0 15.059-4.01l1.903 1.903a.75.75 0 0 1-1.06 1.06l-1.903-1.903Z" clipRule="evenodd" /></svg>
);

const ArrowUturnLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
);

const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a.375.375 0 0 1-.375-.375V6.75A3.75 3.75 0 0 0 9 3H5.625Z" />
        <path d="M12.971 2.25A2.25 2.25 0 0 1 15.12 4.37v1.875h1.875a2.25 2.25 0 0 1 2.25 2.25v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-.75-.75h-2.625a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 1 0-1.5h1.5Z" />
    </svg>
);

const CheckBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 0 1-1.307 3.498 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.491 4.491 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
);


// --- ALREADY IMPLEMENTED SIMULATORS (MOVED HERE) ---

export const ComponentHunt = () => {
    const parts = useMemo(() => [
        { id: 'screen', name: 'Screen', hotspot: { x: 25, y: 25, width: 250, height: 120 }, labelPos: { x: 150, y: 90 } },
        { id: 'keyboard', name: 'Keyboard', hotspot: { x: 40, y: 175, width: 220, height: 35 }, labelPos: { x: 150, y: 195 } },
        { id: 'touchpad', name: 'Touchpad', hotspot: { x: 100, y: 215, width: 100, height: 30 }, labelPos: { x: 150, y: 230 } },
        { id: 'webcam', name: 'Webcam', hotspot: { x: 145, y: 10, width: 10, height: 10 }, labelPos: { x: 150, y: 8 } },
    ], []);

    const [foundParts, setFoundParts] = useState<string[]>([]);
    const allFound = foundParts.length === parts.length;

    const handlePartClick = (partId: string) => {
        if (!foundParts.includes(partId)) {
            setFoundParts([...foundParts, partId]);
        }
    };

    const handleReset = () => {
        setFoundParts([]);
    };
    
    return (
        <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 w-full max-w-lg mx-auto flex flex-col justify-center items-center">
            {!allFound ? (
                <>
                    <p className="text-center font-semibold text-slate-700 mb-2">Click the glowing parts to identify them!</p>
                    <p className="text-center text-sm text-slate-500 mb-4">Found {foundParts.length} of {parts.length}</p>
                    <div className="relative w-full max-w-md">
                        <svg viewBox="0 0 300 260" aria-labelledby="laptop-hunt-title" role="img">
                            <title id="laptop-hunt-title">Interactive laptop diagram for the scavenger hunt</title>
                            {/* Base laptop structure */}
                            <g fill="#cbd5e1" stroke="#475569" strokeWidth="2">
                                <rect x="20" y="20" width="260" height="150" rx="10" />
                                <path d="M 0 170 H 300 V 250 H 0 Z" style={{ "transform": "perspective(300px) rotateX(-50deg)", "transformOrigin": "center 170px" }} />
                            </g>
                            
                            {/* Clickable hotspots and visual parts */}
                            {parts.map(part => {
                                const isFound = foundParts.includes(part.id);
                                const hotspot = part.hotspot;
                                let visualElement;

                                switch (part.id) {
                                    case 'screen':
                                        visualElement = <rect {...hotspot} fill="#06b6d4" className={!isFound ? "animate-pulse-slow" : ""} />;
                                        break;
                                    case 'keyboard':
                                        visualElement = <rect {...hotspot} fill="#94a3b8" className={!isFound ? "animate-pulse-slow" : ""} />;
                                        break;
                                    case 'touchpad':
                                        visualElement = <rect {...hotspot} fill="#64748b" className={!isFound ? "animate-pulse-slow" : ""} />;
                                        break;
                                    case 'webcam':
                                        visualElement = <circle cx={hotspot.x + hotspot.width/2} cy={hotspot.y + hotspot.height/2} r="5" fill="#334155" className={!isFound ? "animate-pulse-slow" : ""} />;
                                        break;
                                }

                                return (
                                    <g key={part.id} onClick={() => handlePartClick(part.id)} className="cursor-pointer" role="button" aria-label={`Find the ${part.name}`}>
                                        {visualElement}
                                        {/* Invisible click area to make it easier to click small parts */}
                                        <rect {...hotspot} fill="transparent" /> 
                                        {isFound && (
                                            <text x={part.labelPos.x} y={part.labelPos.y} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" className="pointer-events-none animate-in">
                                                {part.name}
                                            </text>
                                        )}
                                    </g>
                                );
                            })}
                        </svg>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center flex-grow text-center animate-in min-h-[300px]">
                    <p className="text-2xl font-bold text-green-600 mb-4">You found them all!</p>
                    <p className="text-slate-600 mb-6">Great job identifying the main parts of the laptop.</p>
                    <button
                        onClick={handleReset}
                        className="px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-semibold transition-colors"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export const DesktopExplorer = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const icons = [
        { id: 'docs', name: 'Documents', icon: '📁', description: "The 'Documents' folder is a common place to save your personal files, like homework, letters, or reports." },
        { id: 'trash', name: 'Recycle Bin', icon: '🗑️', description: "The 'Recycle Bin' is where deleted files are temporarily stored before being permanently removed. It's a safety net in case you delete something by accident." },
        { id: 'browser', name: 'Web Browser', icon: '🌐', description: "A 'Web Browser' is an application used to access and view websites on the Internet. Common examples are Chrome, Firefox, and Edge." }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto border-2 border-slate-300 rounded-lg bg-blue-200 aspect-[16/10] overflow-hidden relative font-sans" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover' }}>
            {/* Desktop Icons */}
            <div className="p-4 flex flex-col items-start gap-4">
                {icons.map(item => (
                    <button key={item.id} onClick={() => setActiveModal(item.id)} className="flex flex-col items-center gap-1 text-white text-shadow-lg p-2 rounded-lg hover:bg-white/20 focus:bg-white/30 transition-colors" aria-label={`Open ${item.name}`}>
                        <span className="text-4xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>{item.icon}</span>
                        <span className="text-xs font-semibold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{item.name}</span>
                    </button>
                ))}
            </div>

            {/* Modal */}
            {activeModal && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4 animate-in z-20">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-sm text-slate-800 animate-in-slow">
                        <header className="p-4 border-b flex justify-between items-center">
                            <h3 className="font-bold text-lg">{icons.find(i => i.id === activeModal)?.name}</h3>
                            <button onClick={() => setActiveModal(null)} className="p-1 text-slate-500 hover:text-slate-800"><XIcon className="w-6 h-6"/></button>
                        </header>
                        <main className="p-4">
                            <p>{icons.find(i => i.id === activeModal)?.description}</p>
                        </main>
                        <footer className="p-2 flex justify-end">
                             <button onClick={() => setActiveModal(null)} className="px-4 py-2 bg-accent-500 text-white rounded-md font-semibold text-sm">OK</button>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
};

export const KeyboardExplorer = () => {
    const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
    const keyGroups = {
        function: { name: 'Function Keys', description: 'These keys (F1-F12) perform special functions defined by the operating system or the active program.' },
        alphanumeric: { name: 'Alphanumeric Keys', description: 'The main block of keys for typing letters, numbers, and symbols, similar to a typewriter.' },
        modifiers: { name: 'Modifier Keys', description: 'Keys like Shift, Ctrl, Alt, and the OS key (e.g., Windows key) are used in combination with other keys to perform shortcuts and special actions.' },
        navigation: { name: 'Navigation Keys', description: 'The arrow keys, Home, End, Page Up, and Page Down are used to move the cursor or view within a document or page.' },
        numpad: { name: 'Numeric Keypad', description: 'A calculator-style block of keys for entering numbers quickly. Often includes math operators.' },
    };

    const handleSelectGroup = (group: string) => {
        setSelectedGroup(selectedGroup === group ? null : group);
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4 bg-slate-200 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Keyboard Diagram */}
                <div className="flex-1">
                    <svg viewBox="0 0 300 120" className="w-full h-auto bg-slate-800 rounded-lg p-2" aria-labelledby="keyboard-title">
                        <title id="keyboard-title">Interactive Keyboard Diagram</title>
                        <g onClick={() => handleSelectGroup('function')} className={`cursor-pointer transition-opacity ${selectedGroup && selectedGroup !== 'function' ? 'opacity-30' : ''}`}>
                            <rect x="5" y="5" width="290" height="15" rx="2" fill="#64748b" />
                            <text x="150" y="16" textAnchor="middle" fontSize="8" fill="white">Function Keys</text>
                        </g>
                        <g onClick={() => handleSelectGroup('alphanumeric')} className={`cursor-pointer transition-opacity ${selectedGroup && selectedGroup !== 'alphanumeric' ? 'opacity-30' : ''}`}>
                             <rect x="40" y="25" width="180" height="50" rx="2" fill="#94a3b8" />
                             <text x="130" y="55" textAnchor="middle" fontSize="8" fill="white">Alphanumeric</text>
                        </g>
                        <g onClick={() => handleSelectGroup('modifiers')} className={`cursor-pointer transition-opacity ${selectedGroup && selectedGroup !== 'modifiers' ? 'opacity-30' : ''}`}>
                             <rect x="5" y="80" width="290" height="20" rx="2" fill="#475569" />
                             <text x="150" y="92" textAnchor="middle" fontSize="8" fill="white">Modifier & Special Keys</text>
                        </g>
                        <g onClick={() => handleSelectGroup('navigation')} className={`cursor-pointer transition-opacity ${selectedGroup && selectedGroup !== 'navigation' ? 'opacity-30' : ''}`}>
                            <rect x="225" y="25" width="30" height="35" rx="2" fill="#64748b" />
                            <text x="240" y="45" textAnchor="middle" fontSize="6" fill="white">Nav</text>
                        </g>
                        <g onClick={() => handleSelectGroup('numpad')} className={`cursor-pointer transition-opacity ${selectedGroup && selectedGroup !== 'numpad' ? 'opacity-30' : ''}`}>
                            <rect x="260" y="25" width="35" height="50" rx="2" fill="#64748b" />
                            <text x="277.5" y="53" textAnchor="middle" fontSize="6" fill="white">Numpad</text>
                        </g>
                    </svg>
                </div>
                {/* Info Box */}
                <div className="md:w-1/3 p-4 bg-white rounded-lg flex items-center justify-center min-h-[100px]">
                    {selectedGroup ? (
                        <div className="text-center animate-in">
                            <h4 className="font-bold text-slate-800">{keyGroups[selectedGroup as keyof typeof keyGroups].name}</h4>
                            <p className="text-sm text-slate-600 mt-1">{keyGroups[selectedGroup as keyof typeof keyGroups].description}</p>
                        </div>
                    ) : (
                        <p className="text-slate-500 font-semibold text-center">Click a key group to learn about it.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- FILE SYSTEM COMPONENT START ---
const fsInitialState: { tree: FSFolder } = {
  tree: {
    id: 0,
    name: 'C:',
    type: 'folder',
    modified: Date.now(),
    children: [
      { id: 1, name: 'Documents', type: 'folder', children: [
        { id: 10, name: 'report.docx', type: 'file', modified: Date.now() },
      ], modified: Date.now() },
      { id: 2, name: 'Downloads', type: 'folder', children: [
          { id: 3, name: 'installer.exe', type: 'file', modified: Date.now() },
      ], modified: Date.now() },
      { id: 4, name: 'system.dll', type: 'file', modified: Date.now() },
    ],
  },
};

let nextId = 11;

type FSState = {
  tree: FSFolder;
  currentPath: number[];
  selectedNodeId: number | null;
  renamingNodeId: number | null;
  contextMenu: { x: number; y: number; nodeId: number | null } | null;
  clipboard: { action: 'copy' | 'cut'; node: FSNode } | null;
  draggingNodeId: number | null;
};

type FSAction =
  | { type: 'NAVIGATE_TO'; payload: number[] }
  | { type: 'SELECT_NODE'; payload: number | null }
  | { type: 'START_RENAME'; payload: number }
  | { type: 'FINISH_RENAME'; payload: { nodeId: number; newName: string } }
  | { type: 'DELETE_NODE'; payload: number }
  | { type: 'CREATE_NODE'; payload: { type: 'file' | 'folder' } }
  | { type: 'OPEN_CONTEXT_MENU'; payload: { x: number; y: number; nodeId: number | null } }
  | { type: 'CLOSE_CONTEXT_MENU' }
  | { type: 'SET_CLIPBOARD'; payload: { action: 'copy' | 'cut'; nodeId: number } }
  | { type: 'PASTE_NODE' }
  | { type: 'START_DRAG'; payload: number }
  | { type: 'DROP_NODE'; payload: { dragId: number, dropId: number | null} };

// Helper function to recursively find a node by ID
const findNode = (root: FSFolder, id: number): FSNode | null => {
  if (root.id === id) return root;
  for (const child of root.children) {
    if (child.id === id) return child;
    if (child.type === 'folder') {
      const found = findNode(child, id);
      if (found) return found;
    }
  }
  return null;
};

const _getCurrentFolder = (tree: FSFolder, path: number[]): FSFolder => {
    let current: FSFolder | null = tree;
    for (let i = 1; i < path.length; i++) {
        const nextFolder = current.children.find(c => c.id === path[i] && c.type === 'folder');
        if (nextFolder && nextFolder.type === 'folder') {
            current = nextFolder;
        } else {
            break; 
        }
    }
    return current!;
};

const findParent = (root: FSFolder, id: number): FSFolder | null => {
    for (const child of root.children) {
        if (child.id === id) return root;
        if (child.type === 'folder') {
            const found = findParent(child, id);
            if (found) return found;
        }
    }
    return null;
}

// Immutable manipulation helpers
const removeNodeFromTree = (root: FSFolder, id: number): FSFolder => {
  const newChildren = root.children.filter(child => child.id !== id);
  if (newChildren.length !== root.children.length) {
    return { ...root, children: newChildren };
  }
  return {
    ...root,
    children: root.children.map(child =>
      child.type === 'folder' ? removeNodeFromTree(child, id) : child
    ),
  };
};

const addNodeToTree = (root: FSFolder, parentId: number, newNode: FSNode): FSFolder => {
  if (root.id === parentId) {
    // Check for name conflicts
    let finalName = newNode.name;
    let counter = 1;
    while(root.children.some(c => c.name === finalName)){
        const parts = newNode.name.split('.');
        if(parts.length > 1 && newNode.type === 'file'){
            const ext = parts.pop();
            finalName = `${parts.join('.')} (${counter}).${ext}`;
        } else {
            finalName = `${newNode.name} (${counter})`;
        }
        counter++;
    }
    newNode.name = finalName;

    return { ...root, children: [...root.children, newNode] };
  }
  return {
    ...root,
    children: root.children.map(child =>
      child.type === 'folder' ? addNodeToTree(child, parentId, newNode) : child
    ),
  };
};

const updateNodeInTree = (root: FSFolder, id: number, updates: Partial<FSNode>): FSFolder => {
    if (root.id === id) {
        return { ...root, ...updates } as FSFolder;
    }
    return {
        ...root,
        children: root.children.map(child => {
            if (child.id === id) return { ...child, ...updates } as FSNode;
            if (child.type === 'folder') return updateNodeInTree(child, id, updates);
            return child;
        })
    };
}


const fsReducer = (state: FSState, action: FSAction): FSState => {
  switch (action.type) {
    case 'NAVIGATE_TO':
      return { ...state, currentPath: action.payload, selectedNodeId: null };
    case 'SELECT_NODE':
      return { ...state, selectedNodeId: action.payload, renamingNodeId: null };
    case 'START_RENAME':
      return { ...state, renamingNodeId: action.payload, contextMenu: null, selectedNodeId: action.payload };
    case 'FINISH_RENAME': {
        if(!action.payload.newName.trim()) return {...state, renamingNodeId: null};
        const parentId = state.currentPath[state.currentPath.length - 1];
        const parentNode = findNode(state.tree, parentId) as FSFolder;
        if(parentNode.children.some(c => c.name === action.payload.newName && c.id !== action.payload.nodeId)) {
            // Name conflict
            return {...state, renamingNodeId: null};
        }
        const newTree = updateNodeInTree(state.tree, action.payload.nodeId, { name: action.payload.newName });
        return { ...state, tree: newTree, renamingNodeId: null };
    }
    case 'DELETE_NODE': {
        const newTree = removeNodeFromTree(state.tree, action.payload);
        return { ...state, tree: newTree, selectedNodeId: null, contextMenu: null };
    }
    case 'CREATE_NODE': {
        const parentId = state.currentPath[state.currentPath.length - 1];
        const newNode: FSNode = action.payload.type === 'folder' 
            ? { id: nextId++, name: 'New Folder', type: 'folder', children: [], modified: Date.now() }
            : { id: nextId++, name: 'New File.txt', type: 'file', modified: Date.now() };
        
        const newTree = addNodeToTree(state.tree, parentId, newNode);
        return { ...state, tree: newTree, renamingNodeId: newNode.id, selectedNodeId: newNode.id, contextMenu: null };
    }
    case 'OPEN_CONTEXT_MENU':
        return { ...state, contextMenu: action.payload };
    case 'CLOSE_CONTEXT_MENU':
        return { ...state, contextMenu: null };
    case 'SET_CLIPBOARD': {
        const node = findNode(state.tree, action.payload.nodeId);
        if(!node) return state;
        return { ...state, clipboard: { action: action.payload.action, node }, contextMenu: null };
    }
    case 'PASTE_NODE': {
        if(!state.clipboard) return state;
        const parentId = state.currentPath[state.currentPath.length - 1];
        let newTree = state.tree;
        
        const nodeToPaste: FSNode = JSON.parse(JSON.stringify(state.clipboard.node)); // Deep copy
        
        const assignNewIds = (node: FSNode): FSNode => {
            node.id = nextId++;
            if(node.type === 'folder'){
                node.children = node.children.map(assignNewIds);
            }
            return node;
        }
        
        const newPastedNode = assignNewIds(nodeToPaste);

        if (state.clipboard.action === 'cut') {
            newTree = removeNodeFromTree(newTree, state.clipboard.node.id);
        }
        newTree = addNodeToTree(newTree, parentId, newPastedNode);
        
        const newClipboard = state.clipboard.action === 'cut' ? null : state.clipboard;
        return { ...state, tree: newTree, clipboard: newClipboard, contextMenu: null };
    }
    case 'START_DRAG':
        return { ...state, draggingNodeId: action.payload };
    case 'DROP_NODE': {
        const { dragId, dropId } = action.payload;
        if(dragId === dropId || dragId === null) return { ...state, draggingNodeId: null };
        
        const dropTarget = dropId !== null ? findNode(state.tree, dropId) : _getCurrentFolder(state.tree, state.currentPath);
        if (dropTarget?.type !== 'folder') { // Can't drop on a file
            return { ...state, draggingNodeId: null };
        }
        
        const newParentId = dropId !== null ? dropId : state.currentPath[state.currentPath.length - 1];

        const draggedNode = findNode(state.tree, dragId);
        if(!draggedNode) return { ...state, draggingNodeId: null };

        // Prevent dropping a folder into itself or its children
        if(draggedNode.type === 'folder' && dropId !== null) {
            let tempId: number | null = dropId;
            while(tempId !== null) {
                if(tempId === dragId) return { ...state, draggingNodeId: null }; // Invalid drop
                const parent = findParent(state.tree, tempId);
                tempId = parent ? parent.id : null;
            }
        }
        
        let newTree = removeNodeFromTree(state.tree, dragId);
        newTree = addNodeToTree(newTree, newParentId, { ...draggedNode });

        return { ...state, tree: newTree, draggingNodeId: null };
    }

    default:
      return state;
  }
};

export const FileSystem = () => {
    const [state, dispatch] = useReducer(fsReducer, {
        tree: fsInitialState.tree,
        currentPath: [0],
        selectedNodeId: null,
        renamingNodeId: null,
        contextMenu: null,
        clipboard: null,
        draggingNodeId: null,
    });
    
    const mainPanelRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
             if (mainPanelRef.current && !mainPanelRef.current.contains(e.target as Node)) {
                dispatch({ type: 'SELECT_NODE', payload: null });
            }
            dispatch({ type: 'CLOSE_CONTEXT_MENU' });
        };
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const getPathObjects = (): FSFolder[] => {
        const getFolderById = (id: number) => findNode(state.tree, id) as FSFolder;
        return state.currentPath.map(getFolderById).filter(Boolean);
    };

    const currentFolder = _getCurrentFolder(state.tree, state.currentPath);
    const pathObjects = getPathObjects();

    const handleNodeClick = (e: React.MouseEvent, nodeId: number) => {
        e.stopPropagation();
        dispatch({ type: 'SELECT_NODE', payload: nodeId });
    };

    const handleNodeDoubleClick = (node: FSNode) => {
        if (node.type === 'folder') {
            dispatch({ type: 'NAVIGATE_TO', payload: [...state.currentPath, node.id] });
        }
    };

    const handleContextMenu = (e: React.MouseEvent, nodeId: number | null = null) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'OPEN_CONTEXT_MENU', payload: { x: e.clientX, y: e.clientY, nodeId } });
        if(nodeId) dispatch({ type: 'SELECT_NODE', payload: nodeId });
    };

    const handleRenameSubmit = (e: React.FormEvent<HTMLFormElement>, nodeId: number) => {
        e.preventDefault();
        const input = (e.currentTarget.elements.namedItem('newName') as HTMLInputElement).value;
        dispatch({ type: 'FINISH_RENAME', payload: { nodeId, newName: input } });
    }

    const findFullPath = (root: FSFolder, targetId: number, currentPath: number[]): number[] | null => {
        if (root.id === targetId) return currentPath;
        for (const child of root.children) {
            if (child.type === 'folder') {
                const foundPath = findFullPath(child, targetId, [...currentPath, child.id]);
                if (foundPath) return foundPath;
            }
        }
        return null;
    }

    const FolderTreeView = ({ folder, level = 0 }: { folder: FSFolder, level?: number }) => {
        const fullPath = findFullPath(state.tree, folder.id, [state.tree.id]);
        return (
            <div style={{ paddingLeft: `${level * 16}px` }}>
                <button
                    onClick={() => { if(fullPath) dispatch({type: 'NAVIGATE_TO', payload: fullPath})}}
                    className={`w-full text-left px-2 py-1 rounded flex items-center gap-2 ${currentFolder.id === folder.id ? 'bg-accent-100 text-accent-700 font-semibold' : 'hover:bg-slate-200'}`}
                >
                    <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
                    <FolderIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="truncate">{folder.name}</span>
                </button>
                 {folder.children.filter(c => c.type === 'folder').map(child => (
                    <FolderTreeView key={child.id} folder={child as FSFolder} level={level + 1} />
                ))}
            </div>
        );
    };
    
    const ContextMenu = () => {
        if (!state.contextMenu) return null;
        const { x, y, nodeId } = state.contextMenu;
        const targetNode = nodeId ? findNode(state.tree, nodeId) : null;

        const menuStyle: React.CSSProperties = { top: y, left: x, position: 'fixed', zIndex: 50 };

        return (
            <div style={menuStyle} className="bg-white shadow-lg rounded-md p-1 border border-slate-200 w-40 text-sm animate-in-fast">
                {targetNode && (
                    <>
                        <button onClick={() => dispatch({ type: 'START_RENAME', payload: nodeId! })} className="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 flex items-center gap-2"><PencilIcon className="w-4 h-4" /> Rename</button>
                        <button onClick={() => dispatch({ type: 'SET_CLIPBOARD', payload: { action: 'cut', nodeId: nodeId! } })} className="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 flex items-center gap-2"><ScissorsIcon className="w-4 h-4" /> Cut</button>
                        <button onClick={() => dispatch({ type: 'SET_CLIPBOARD', payload: { action: 'copy', nodeId: nodeId! } })} className="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 flex items-center gap-2"><DuplicateIcon className="w-4 h-4" /> Copy</button>
                        <button onClick={() => dispatch({ type: 'DELETE_NODE', payload: nodeId! })} className="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 text-red-600 flex items-center gap-2"><TrashIcon className="w-4 h-4" /> Delete</button>
                        <div className="h-px bg-slate-200 my-1"></div>
                    </>
                )}
                <button disabled={!state.clipboard} onClick={() => dispatch({ type: 'PASTE_NODE' })} className="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 disabled:opacity-50 disabled:bg-transparent flex items-center gap-2"><ClipboardIcon className="w-4 h-4" /> Paste</button>
                <div className="h-px bg-slate-200 my-1"></div>
                <button onClick={() => dispatch({ type: 'CREATE_NODE', payload: { type: 'file' } })} className="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 flex items-center gap-2"><FileIcon className="w-4 h-4" /> New File</button>
                <button onClick={() => dispatch({ type: 'CREATE_NODE', payload: { type: 'folder' } })} className="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 flex items-center gap-2"><FolderIcon className="w-4 h-4" /> New Folder</button>
            </div>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto h-[600px] bg-slate-50 border-2 border-slate-300 rounded-lg flex flex-col font-sans text-slate-800 shadow-lg">
            {/* Toolbar */}
            <div className="flex-shrink-0 h-14 bg-slate-100 border-b-2 border-slate-300 flex items-center px-4 gap-2">
                 <button className="p-1 hover:bg-slate-200 rounded disabled:opacity-50" disabled={state.currentPath.length <= 1} onClick={() => dispatch({ type: 'NAVIGATE_TO', payload: state.currentPath.slice(0, -1) })}>
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <div className="flex items-center bg-white border border-slate-300 rounded px-2 py-1 text-sm flex-grow">
                   {pathObjects.map((folder, index) => (
                       <React.Fragment key={folder.id}>
                          <button onClick={() => dispatch({ type: 'NAVIGATE_TO', payload: state.currentPath.slice(0, index + 1) })} className="px-1 hover:bg-slate-100 rounded">{folder.name}</button>
                           {index < pathObjects.length - 1 && <span className="px-1 text-slate-400">/</span>}
                       </React.Fragment>
                   ))}
                </div>
            </div>

            <div className="flex flex-grow min-h-0">
                {/* Sidebar Tree View */}
                {!isMobile && (
                    <div className="w-56 flex-shrink-0 bg-slate-100 border-r-2 border-slate-300 p-2 overflow-y-auto">
                        <FolderTreeView folder={state.tree} />
                    </div>
                )}
                {/* Main Panel */}
                <div ref={mainPanelRef} onContextMenu={(e) => handleContextMenu(e)} className="flex-grow p-4 overflow-y-auto" onDragOver={(e) => e.preventDefault()} onDrop={() => dispatch({ type: 'DROP_NODE', payload: { dragId: state.draggingNodeId!, dropId: null }})}>
                    {currentFolder.children.length === 0 ? (
                        <div className="text-center text-slate-500 mt-10">This folder is empty.</div>
                    ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                            {currentFolder.children.map(node => (
                                <div
                                    key={node.id}
                                    draggable={state.renamingNodeId !== node.id}
                                    onDragStart={(e) => { e.stopPropagation(); dispatch({ type: 'START_DRAG', payload: node.id })}}
                                    onDrop={(e) => {
                                        e.stopPropagation();
                                        if(node.type === 'folder') {
                                            dispatch({ type: 'DROP_NODE', payload: { dragId: state.draggingNodeId!, dropId: node.id }})
                                        }
                                    }}
                                    onDragOver={(e) => { if(node.type === 'folder') e.preventDefault(); }}
                                    onClick={(e) => handleNodeClick(e, node.id)}
                                    onDoubleClick={() => handleNodeDoubleClick(node)}
                                    onContextMenu={(e) => handleContextMenu(e, node.id)}
                                    className={`flex flex-col items-center p-2 rounded-lg cursor-pointer ${state.selectedNodeId === node.id ? 'bg-accent-100' : 'hover:bg-slate-200'} ${state.draggingNodeId === node.id ? 'opacity-50' : ''}`}
                                >
                                    {node.type === 'folder' ? <FolderIcon className="w-16 h-16 text-yellow-500"/> : <FileIcon className="w-16 h-16 text-slate-500"/>}
                                    {state.renamingNodeId === node.id ? (
                                        <form onSubmit={(e) => handleRenameSubmit(e, node.id)} className="w-full">
                                            <input
                                                name="newName"
                                                defaultValue={node.name}
                                                autoFocus
                                                onBlur={(e) => dispatch({ type: 'FINISH_RENAME', payload: { nodeId: node.id, newName: e.target.value } })}
                                                onKeyDown={(e) => { if (e.key === 'Escape') dispatch({ type: 'SELECT_NODE', payload: null }); }}
                                                className="w-full text-center text-xs p-1 border border-accent-400 rounded"
                                            />
                                        </form>
                                    ) : (
                                        <span className="text-xs text-center break-all w-full mt-1">{node.name}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <ContextMenu />
        </div>
    );
};
// --- END FILE SYSTEM COMPONENT ---


export const PowerOn = () => {
    const [status, setStatus] = useState<'off' | 'booting' | 'on'>('off');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer: number;
        if (status === 'booting') {
            timer = window.setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(timer);
                        setStatus('on');
                        return 100;
                    }
                    return prev + 5;
                });
            }, 150);
        }
        return () => clearInterval(timer);
    }, [status]);

    const handlePowerOn = () => {
        setStatus('booting');
        setProgress(0);
    };

    const handleReset = () => {
        setStatus('off');
        setProgress(0);
    }
    
    return (
        <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 w-full max-w-lg mx-auto flex flex-col justify-center items-center text-white h-64">
            {status === 'off' && (
                <div className="text-center animate-in">
                    <p className="text-slate-300 mb-4">The computer is off. Press the power button to start.</p>
                    <button onClick={handlePowerOn} className="p-4 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors focus:ring-2 focus:ring-accent-400 focus:outline-none" aria-label="Power on computer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 3.5a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5z" />
                            <path d="M8.005 4.495a.75.75 0 01.99 1.01l-2.25 4.5a.75.75 0 01-1.01-.99l2.25-4.5zM12.995 5.505a.75.75 0 01.99-1.01l2.25 4.5a.75.75 0 11-1.01.99l-2.25-4.5z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}
            {status === 'booting' && (
                <div className="w-full text-center animate-in">
                    <p className="font-mono text-green-400 mb-2">[BIOS] System Check... OK</p>
                    <p className="font-mono text-green-400 mb-4 animate-fadeIn">Loading OS...</p>
                    <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                        <div className="bg-accent-500 h-4 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.15s linear' }}></div>
                    </div>
                    <p className="mt-2 text-sm font-mono">{progress}%</p>
                </div>
            )}
             {status === 'on' && (
                <div className="text-center animate-in">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Welcome to your Desktop!</h3>
                    <p className="text-slate-300 mt-2">The computer has successfully started up.</p>
                     <button onClick={handleReset} className="mt-6 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors">
                        Shut Down & Retry
                    </button>
                </div>
            )}
        </div>
    );
};

export const MousePractice = () => {
    type Task = 'click' | 'doubleClick' | 'drag' | 'rightClick';
    const [currentTask, setCurrentTask] = useState<Task>('click');
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const [feedback, setFeedback] = useState('');

    const showFeedback = (msg: string) => {
        setFeedback(msg);
        setTimeout(() => setFeedback(''), 1500);
    }

    const handleTaskComplete = (task: Task) => {
        if(completedTasks.includes(task)) return;
        setCompletedTasks(prev => [...prev, task]);
        showFeedback("Great job!");
        
        const taskOrder: Task[] = ['click', 'doubleClick', 'drag', 'rightClick'];
        const currentIndex = taskOrder.indexOf(task);
        if (currentIndex < taskOrder.length - 1) {
            setCurrentTask(taskOrder[currentIndex + 1]);
        }
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const target = document.getElementById('drag-target');
        if (target) {
            const rect = target.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                handleTaskComplete('drag');
            } else {
                showFeedback("Not quite, try again!");
            }
        }
    };
    
    const handleReset = () => {
        setCurrentTask('click');
        setCompletedTasks([]);
        setFeedback('');
    };

    const getInstructions = (task: Task) => ({
        click: "Click the blue circle.",
        doubleClick: "Now, double-click the green square to 'open' it.",
        drag: "Next, drag the orange triangle into the drop zone.",
        rightClick: "Finally, right-click the purple star to see its options."
    }[task]);

    return (
        <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 w-full max-w-lg mx-auto flex flex-col items-center">
            <h3 className="font-bold text-lg text-slate-800">Mouse Practice</h3>
            <p className="text-slate-600 min-h-[2rem]">{getInstructions(currentTask)}</p>
            <div className="relative w-full h-64 bg-white mt-4 rounded-lg border border-slate-300 overflow-hidden flex items-center justify-center">
                {/* Task elements */}
                {currentTask === 'click' && !completedTasks.includes('click') && (
                    <div onClick={() => handleTaskComplete('click')} className="w-20 h-20 bg-blue-500 rounded-full cursor-pointer animate-pulse-slow" aria-label="Click target"></div>
                )}
                {currentTask === 'doubleClick' && !completedTasks.includes('doubleClick') && (
                    <div onDoubleClick={() => handleTaskComplete('doubleClick')} className="w-20 h-20 bg-green-500 cursor-pointer animate-pulse-slow" aria-label="Double-click target"></div>
                )}
                {currentTask === 'drag' && !completedTasks.includes('drag') && (
                    <>
                        <div id="drag-target" className="absolute top-1/2 -translate-y-1/2 right-4 w-24 h-24 border-2 border-dashed border-slate-400 rounded-lg flex items-center justify-center text-slate-400">Drop Here</div>
                        <div draggable onDragEnd={handleDragEnd} className="w-0 h-0 border-l-[40px] border-l-transparent border-b-[70px] border-b-orange-500 border-r-[40px] border-r-transparent cursor-grab animate-pulse-slow" aria-label="Drag target"></div>
                    </>
                )}
                {currentTask === 'rightClick' && !completedTasks.includes('rightClick') && (
                    <div onContextMenu={(e) => { e.preventDefault(); handleTaskComplete('rightClick'); }} className="text-purple-500 text-7xl cursor-context-menu animate-pulse-slow" aria-label="Right-click target">★</div>
                )}

                {/* Completion Message */}
                {completedTasks.length === 4 && (
                    <div className="text-center animate-in">
                        <p className="text-2xl font-bold text-green-600">All tasks complete!</p>
                        <p className="text-slate-600 mt-2">You've mastered the basic mouse actions.</p>
                    </div>
                )}

                {/* Feedback Message */}
                {feedback && (
                     <div className="absolute bottom-4 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm animate-in">
                        {feedback}
                    </div>
                )}

            </div>
             {completedTasks.length === 4 && (
                 <button onClick={handleReset} className="mt-4 px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-semibold transition-colors">
                    Practice Again
                </button>
             )}
        </div>
    );
};

// --- NEWLY IMPLEMENTED SIMULATORS ---

export const TypingTutor = () => {
    const sentences = useMemo(() => [
        "The quick brown fox jumps over the lazy dog.",
        "Programming is the art of telling a computer what to do.",
        "Practice makes perfect when learning a new skill.",
        "The sun always shines brighter after the rain.",
        "A journey of a thousand miles begins with a single step."
    ], []);

    const [targetText, setTargetText] = useState(sentences[0]);
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [isFinished, setIsFinished] = useState(false);

    const handleReset = useCallback(() => {
        const newIndex = Math.floor(Math.random() * sentences.length);
        setTargetText(sentences[newIndex]);
        setUserInput('');
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
        setIsFinished(false);
    }, [sentences]);

    useEffect(() => {
        if (userInput.length === 1 && !startTime) {
            setStartTime(Date.now());
        }

        if (userInput.length > 0 && !isFinished) {
            let errors = 0;
            for (let i = 0; i < userInput.length; i++) {
                if (userInput[i] !== targetText[i]) {
                    errors++;
                }
            }
            const currentAccuracy = ((userInput.length - errors) / userInput.length) * 100;
            setAccuracy(parseFloat(currentAccuracy.toFixed(2)));

            if (startTime) {
                const elapsedMinutes = (Date.now() - startTime) / 60000;
                const wordsTyped = userInput.length / 5; // Average word length is 5 chars
                const currentWpm = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;
                setWpm(currentWpm);
            }
        }
        
        if (userInput === targetText) {
            setIsFinished(true);
            setStartTime(null); // Stop timer
        }

    }, [userInput, targetText, startTime, isFinished]);
    
    const renderTargetText = () => {
        return targetText.split('').map((char, index) => {
            let color = 'text-slate-400';
            if (index < userInput.length) {
                color = char === userInput[index] ? 'text-green-500' : 'text-red-500 bg-red-100';
            }
            return <span key={index} className={color}>{char}</span>;
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg border border-slate-200 w-full max-w-2xl mx-auto flex flex-col items-center font-sans">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Typing Tutor</h3>
            <div className="w-full p-4 bg-slate-100 rounded-md text-lg font-mono tracking-wider">
                {renderTargetText()}
            </div>
            <textarea
                value={userInput}
                onChange={(e) => !isFinished && setUserInput(e.target.value)}
                className="w-full p-2 mt-4 border border-slate-300 rounded-md focus:ring-accent-500 focus:border-accent-500 text-lg font-mono"
                rows={3}
                placeholder="Start typing here..."
                aria-label="Typing input area"
            />
            <div className="mt-4 flex justify-between w-full text-center">
                <div className="stat">
                    <p className="text-2xl font-bold text-accent-600">{wpm}</p>
                    <p className="text-sm text-slate-500">Words/Min</p>
                </div>
                <div className="stat">
                    <p className="text-2xl font-bold text-accent-600">{accuracy}%</p>
                    <p className="text-sm text-slate-500">Accuracy</p>
                </div>
                 <button onClick={handleReset} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 font-semibold self-center flex items-center gap-2">
                    <RefreshIcon className="w-5 h-5"/> New Text
                </button>
            </div>
            {isFinished && (
                <div className="mt-4 text-center text-green-600 font-bold animate-in">
                    <p>Congratulations! You completed the text.</p>
                </div>
            )}
        </div>
    );
};

export const WindowManagement = () => {
    type WindowState = { id: number; title: string; x: number; y: number; width: number; height: number; zIndex: number; isMinimized: boolean; isMaximized: boolean; };
    const initialState: WindowState[] = [
        { id: 1, title: 'Document.txt', x: 50, y: 50, width: 400, height: 300, zIndex: 1, isMinimized: false, isMaximized: false },
        { id: 2, title: 'Calculator', x: 150, y: 120, width: 250, height: 350, zIndex: 2, isMinimized: false, isMaximized: false },
    ];
    const [windows, setWindows] = useState(initialState);
    const [dragging, setDragging] = useState<{ id: number; offsetX: number; offsetY: number } | null>(null);

    const bringToFront = (id: number) => {
        const maxZ = Math.max(...windows.map(w => w.zIndex));
        setWindows(windows.map(w => w.id === id ? { ...w, zIndex: maxZ + 1, isMinimized: false } : w));
    };

    const handleMouseDown = (e: React.MouseEvent, id: number) => {
        bringToFront(id);
        const windowEl = (e.target as HTMLElement).closest('.sim-window');
        if (windowEl) {
            const rect = windowEl.getBoundingClientRect();
            setDragging({ id, offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top });
        }
    };
    
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!dragging) return;
        setWindows(prevWindows => prevWindows.map(w => 
            w.id === dragging.id ? { ...w, x: e.clientX - dragging.offsetX, y: e.clientY - dragging.offsetY } : w
        ));
    }, [dragging]);

    const handleMouseUp = useCallback(() => {
        setDragging(null);
    }, []);

    useEffect(() => {
        if(dragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [dragging, handleMouseMove, handleMouseUp]);
    
    const toggleMinimize = (id: number) => {
        setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: !w.isMinimized } : w));
    }
    const toggleMaximize = (id: number) => {
        setWindows(windows.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    }
    const closeWindow = (id: number) => {
        setWindows(windows.filter(w => w.id !== id));
    }

    return (
        <div className="w-full h-[500px] bg-slate-300 rounded-lg border border-slate-400 overflow-hidden relative">
            {/* Windows */}
            {windows.filter(w => !w.isMinimized).map(win => (
                <div 
                    key={win.id} 
                    className={`sim-window absolute bg-white rounded-lg shadow-lg border border-slate-400 flex flex-col transition-all duration-200 ${win.isMaximized ? 'w-full h-full' : ''}`}
                    style={{ 
                        top: win.isMaximized ? 0 : win.y, left: win.isMaximized ? 0 : win.x, 
                        width: win.isMaximized ? '100%' : win.width, height: win.isMaximized ? '100%' : win.height, 
                        zIndex: win.zIndex,
                        transition: dragging ? 'none' : 'all 0.2s ease-out'
                    }}
                    onClick={() => bringToFront(win.id)}
                >
                    <header onMouseDown={(e) => handleMouseDown(e, win.id)} className="h-8 bg-slate-700 text-white flex items-center justify-between px-2 rounded-t-lg cursor-move">
                        <span className="text-sm font-semibold">{win.title}</span>
                        <div className="flex items-center gap-1">
                            <button onClick={() => toggleMinimize(win.id)} className="p-1 hover:bg-white/20 rounded"><WindowMinimizeIcon className="w-4 h-4"/></button>
                            <button onClick={() => toggleMaximize(win.id)} className="p-1 hover:bg-white/20 rounded">
                                {win.isMaximized ? <WindowRestoreIcon className="w-4 h-4"/> : <WindowMaximizeIcon className="w-4 h-4"/>}
                            </button>
                            <button onClick={() => closeWindow(win.id)} className="p-1 hover:bg-red-500 rounded"><XIcon className="w-4 h-4"/></button>
                        </div>
                    </header>
                    <main className="flex-1 p-2 bg-slate-50">
                        <p className="text-sm text-slate-500">Content of {win.title}</p>
                    </main>
                </div>
            ))}
            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-slate-800/80 backdrop-blur-sm flex items-center px-2 gap-2">
                {windows.map(win => (
                    <button 
                        key={win.id}
                        onClick={() => bringToFront(win.id)}
                        className={`px-3 py-1 text-sm rounded text-white ${win.isMinimized ? 'bg-slate-600' : 'bg-accent-600/50'}`}
                    >
                        {win.title}
                    </button>
                ))}
            </div>
        </div>
    );
};
export const Settings = () => {
    const wallpapers = [
        'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1488330890490-c291ecf62571?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop',
    ];
    const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[0]);
    const [message, setMessage] = useState('');

    const applyWallpaper = (url: string) => {
        setActiveWallpaper(url);
        setMessage('Wallpaper updated!');
        setTimeout(() => setMessage(''), 2000);
    }

    return (
        <div className="w-full h-[500px] flex gap-4 bg-white rounded-lg border border-slate-300 overflow-hidden relative">
            <div className="w-1/3 bg-slate-100 p-4 border-r border-slate-300">
                <h3 className="text-lg font-bold">Settings</h3>
                <ul>
                    <li className="mt-2"><button className="w-full text-left p-2 rounded bg-accent-100 text-accent-700 font-semibold">Personalization</button></li>
                    <li className="mt-1"><button className="w-full text-left p-2 rounded hover:bg-slate-200 text-slate-500">Display</button></li>
                    <li className="mt-1"><button className="w-full text-left p-2 rounded hover:bg-slate-200 text-slate-500">Sound</button></li>
                </ul>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="p-4">
                    <h4 className="font-bold text-xl">Change Background</h4>
                    <p className="text-sm text-slate-500">Click a picture to set it as your desktop wallpaper.</p>
                </div>
                <div className="flex-1 p-4 bg-cover bg-center rounded-lg m-4" style={{backgroundImage: `url(${activeWallpaper})`}}>
                    {message && <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg animate-in">{message}</div>}
                </div>
                 <div className="p-4 grid grid-cols-4 gap-2">
                    {wallpapers.map((url) => (
                        <button key={url} onClick={() => applyWallpaper(url)} className={`aspect-video bg-cover bg-center rounded-md overflow-hidden ${activeWallpaper === url ? 'ring-2 ring-accent-500 ring-offset-2' : ''}`}>
                            <img src={url} alt="Wallpaper thumbnail" className="w-full h-full object-cover"/>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export const WebBrowserSimulator = () => {
    const [url, setUrl] = useState('https://www.google.com');
    const [history, setHistory] = useState(['https://www.google.com']);
    const [historyIndex, setHistoryIndex] = useState(0);

    const fakePages = {
        'https://www.google.com': <div><h1 className="text-5xl font-bold">Simu-Google</h1><input type="text" className="w-1/2 mt-4 p-2 border rounded-full" placeholder="Search... (not functional)" /></div>,
        'https://www.wikipedia.org': <div><h1 className="text-4xl font-bold border-b pb-2 mb-4">Simu-pedia</h1><h2 className="text-2xl font-semibold">Nigeria</h2><p className="mt-2 text-left">Nigeria is a country in West Africa. It is the most populous country in Africa. It is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located.</p></div>,
    };
    
    const navigate = (newUrl: string) => {
        if (!newUrl.startsWith('http')) newUrl = 'https://' + newUrl;
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newUrl);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setUrl(newUrl);
    };

    const goBack = () => {
        if(historyIndex > 0) {
            setHistoryIndex(prev => prev - 1);
            setUrl(history[historyIndex - 1]);
        }
    }
    
    const goForward = () => {
        if(historyIndex < history.length - 1) {
            setHistoryIndex(prev => prev + 1);
            setUrl(history[historyIndex + 1]);
        }
    }

    const currentPageContent = fakePages[url as keyof typeof fakePages] || <div><h1 className="text-2xl font-bold text-red-500">404 - Not Found</h1><p>The address <strong>{url}</strong> could not be found in this simulator.</p></div>

    return (
        <div className="w-full max-w-3xl mx-auto h-[600px] bg-white border-2 border-slate-300 rounded-lg shadow-lg flex flex-col">
            <div className="flex-shrink-0 h-14 bg-slate-100 border-b-2 border-slate-300 flex items-center px-4 gap-2">
                <button onClick={goBack} disabled={historyIndex === 0} className="p-1 hover:bg-slate-200 rounded disabled:opacity-30"><ChevronLeftIcon className="w-6 h-6"/></button>
                <button onClick={goForward} disabled={historyIndex === history.length - 1} className="p-1 hover:bg-slate-200 rounded disabled:opacity-30"><ChevronRightIcon className="w-6 h-6"/></button>
                <form onSubmit={e => {e.preventDefault(); navigate( (e.target as any).url.value )}} className="flex-grow">
                <input 
                    name="url"
                    defaultValue={url}
                    key={url} // force re-render on navigation
                    type="text" 
                    className="w-full bg-white border border-slate-300 rounded-full px-4 py-1.5 text-sm"
                />
                </form>
            </div>
            <div className="flex-grow p-8 text-center flex flex-col items-center justify-center">
                {currentPageContent}
            </div>
        </div>
    );
};
export const OnlineSafetyQuiz = () => {
    const questions = [
        {
            question: "You receive an email from 'yourbank@mail-service.com' asking you to click a link to verify your password. What should you do?",
            options: ["Click the link and enter your password.", "Reply with your password for verification.", "Delete the email, it is likely a phishing attempt.", "Forward it to your friends to warn them."],
            correct: 2,
            explanation: "This is a classic phishing scam. The email address is suspicious, and legitimate banks will never ask for your password via email. The safest action is to delete it."
        },
        {
            question: "Which of the following is the strongest password?",
            options: ["password123", "MyDogSparky", "12345678", "R#t6!bZ@9pQ"],
            correct: 3,
            explanation: "A strong password is long and contains a mix of uppercase letters, lowercase letters, numbers, and symbols. 'R#t6!bZ@9pQ' is the most random and complex."
        },
        {
            question: "What kind of personal information is generally UNSAFE to share publicly online?",
            options: ["Your favorite color", "Your home address", "Your favorite movie", "Your opinion on a book"],
            correct: 1,
            explanation: "You should never share sensitive personal information like your home address, phone number, or financial details publicly as it can be used for identity theft or other malicious purposes."
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] =useState(0);

    const handleAnswer = (index: number) => {
        setSelectedAnswer(index);
        setShowResult(true);
        if (index === questions[currentQuestion].correct) {
            setScore(prev => prev + 1);
        }
    }
    
    const handleNext = () => {
        setShowResult(false);
        setSelectedAnswer(null);
        setCurrentQuestion(prev => prev + 1);
    }
    
    const handleReset = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
    }

    if(currentQuestion >= questions.length) {
        return (
            <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg border text-center">
                 <h3 className="text-xl font-bold">Quiz Complete!</h3>
                 <p className="mt-4 text-2xl">You scored {score} out of {questions.length}</p>
                 <button onClick={handleReset} className="mt-6 px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg">Try Again</button>
            </div>
        );
    }

    const q = questions[currentQuestion];
    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg border">
            <p className="text-sm text-slate-500">Question {currentQuestion + 1} of {questions.length}</p>
            <h3 className="text-lg font-semibold mt-2">{q.question}</h3>
            <div className="mt-4 space-y-2">
                {q.options.map((option, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleAnswer(index)} 
                        disabled={showResult}
                        className={`w-full text-left p-3 rounded-lg border-2 
                        ${!showResult ? 'hover:bg-slate-100' : ''}
                        ${showResult && selectedAnswer === index && index === q.correct ? 'bg-green-100 border-green-400' : ''}
                        ${showResult && selectedAnswer === index && index !== q.correct ? 'bg-red-100 border-red-400' : ''}
                        ${showResult && index === q.correct ? 'border-green-400' : ''}
                        `}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {showResult && (
                <div className="mt-4 p-4 bg-slate-100 rounded-lg animate-in">
                    <p className={`font-bold ${selectedAnswer === q.correct ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedAnswer === q.correct ? 'Correct!' : 'Not quite.'}
                    </p>
                    <p className="text-sm text-slate-700 mt-1">{q.explanation}</p>
                    <button onClick={handleNext} className="mt-4 px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg">Next</button>
                </div>
            )}
        </div>
    );
};

export const WordProcessorSimulator = () => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [saveMessage, setSaveMessage] = useState('');

    const applyStyle = (style: 'bold' | 'italic') => {
        // execCommand is deprecated but sufficient for a simple simulator
        document.execCommand(style, false);
        editorRef.current?.focus();
    };

    const showSaveMessage = (message: string) => {
        setSaveMessage(message);
        setTimeout(() => setSaveMessage(''), 2500);
    };

    return (
        <div className="w-full max-w-2xl mx-auto border-2 border-slate-300 rounded-lg shadow-lg font-sans relative">
            {/* Toolbar */}
            <div className="flex items-center p-2 bg-slate-100 border-b-2 border-slate-300 gap-1">
                <button onClick={() => applyStyle('bold')} className="p-2 w-10 h-10 hover:bg-slate-200 rounded">
                    <BoldIcon className="w-6 h-6 mx-auto"/>
                </button>
                <button onClick={() => applyStyle('italic')} className="p-2 w-10 h-10 hover:bg-slate-200 rounded">
                    <ItalicIcon className="w-6 h-6 mx-auto"/>
                </button>
                <div className="ml-auto flex gap-2">
                    <button onClick={() => showSaveMessage('Saved as my_story.docx!')} className="px-4 py-2 text-sm bg-slate-200 rounded-md font-semibold hover:bg-slate-300">Save</button>
                    <button onClick={() => showSaveMessage('Saved as my_story.pdf!')} className="px-4 py-2 text-sm bg-accent-600 text-white rounded-md font-semibold hover:bg-accent-700">Save as PDF</button>
                </div>
            </div>
            {/* Document */}
            <div
                ref={editorRef}
                contentEditable
                className="w-full h-96 p-8 bg-white focus:outline-none overflow-y-auto"
                aria-label="Word processor content area"
                suppressContentEditableWarning={true}
            >
                <p><b>My Awesome Day</b></p>
                <p><br/></p>
                <p>Start typing your story here. Try to use <i>italics</i> for emphasis!</p>
            </div>
             {saveMessage && <div className="absolute bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm animate-in-fast">{saveMessage}</div>}
        </div>
    );
};

export const EmailSimulator = () => {
    const [to, setTo] = useState('teacher@example.com');
    const [subject, setSubject] = useState('My Progress in Computer Studies');
    const [body, setBody] = useState('');
    const [attachment, setAttachment] = useState<string | null>(null);
    const [sent, setSent] = useState(false);

    const handleAttach = () => {
        setAttachment('my_story.docx');
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if(to && subject) {
            setSent(true);
        }
    };
    
    const handleNewEmail = () => {
        setTo('');
        setSubject('');
        setBody('');
        setAttachment(null);
        setSent(false);
    }

    if(sent) {
        return (
            <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg border text-center h-96 flex flex-col justify-center items-center animate-in">
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto"/>
                <h3 className="text-xl font-bold mt-4">Email Sent!</h3>
                <p className="text-slate-600 mt-2">Your email to {to} has been sent successfully.</p>
                <button onClick={handleNewEmail} className="mt-6 px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600">Compose New Email</button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-xl mx-auto border-2 border-slate-300 rounded-lg shadow-lg font-sans">
            <header className="p-3 bg-slate-100 border-b-2 border-slate-300">
                <h3 className="font-bold text-lg">Compose New Email</h3>
            </header>
            <form onSubmit={handleSend} className="p-4 space-y-3">
                <div className="flex items-center">
                    <label htmlFor="to-email" className="w-16 text-slate-500">To:</label>
                    <input type="email" id="to-email" value={to} onChange={e => setTo(e.target.value)} required className="flex-1 p-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-accent-500"/>
                </div>
                 <div className="flex items-center">
                    <label htmlFor="subject-email" className="w-16 text-slate-500">Subject:</label>
                    <input type="text" id="subject-email" value={subject} onChange={e => setSubject(e.target.value)} required className="flex-1 p-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-accent-500"/>
                </div>
                <textarea 
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full h-48 p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-accent-500"
                    aria-label="Email body"
                />
                {attachment && (
                    <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-md text-sm animate-in-fast">
                        <PaperClipIcon className="w-5 h-5 text-slate-500"/>
                        <span>{attachment}</span>
                        <button type="button" onClick={() => setAttachment(null)} className="ml-auto text-slate-400 hover:text-red-500"><XIcon className="w-4 h-4"/></button>
                    </div>
                )}
                <div className="flex justify-between items-center pt-2">
                    <button type="submit" className="px-6 py-2 bg-accent-600 text-white font-semibold rounded-md hover:bg-accent-700">Send</button>
                    <button type="button" onClick={handleAttach} className="p-2 hover:bg-slate-200 rounded-full" title="Attach file">
                        <PaperClipIcon className="w-6 h-6 text-slate-600" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export const SpreadsheetSimulator = () => {
    const [cells, setCells] = useState<Record<string, { value: string, formula?: string }>>({
        'A2': { value: 'Apples' }, 'B2': { value: '10' }, 'C2': { value: '0.5' },
        'D2': { value: '=B2*C2', formula: '=B2*C2' },
        'B7': { value: 'TOTAL:' },
        'C7': { value: '=SUM(D2:D6)', formula: '=SUM(D2:D6)' },
    });
    const [activeCell, setActiveCell] = useState<string>('A1');
    const [formulaInput, setFormulaInput] = useState('');

    const cols = ['A', 'B', 'C', 'D', 'E'];
    const rows = Array.from({ length: 10 }, (_, i) => i + 1);

    const parseFormula = (formula: string, currentCells: typeof cells): string => {
        if (!formula.startsWith('=')) return formula;

        let expr = formula.substring(1);

        // SUM function
        const sumMatch = expr.match(/SUM\((.*?)\)/i);
        if (sumMatch) {
            const range = sumMatch[1];
            const [start, end] = range.split(':');
            const startCol = start.match(/[A-Z]+/)?.[0];
            const startRow = parseInt(start.match(/\d+/)?.[0] || '0', 10);
            const endCol = end.match(/[A-Z]+/)?.[0];
            const endRow = parseInt(end.match(/\d+/)?.[0] || '0', 10);

            if (startCol && startCol === endCol) { // Only vertical sum supported for simplicity
                let sum = 0;
                for (let i = startRow; i <= endRow; i++) {
                    sum += parseFloat(evaluateCell(`${startCol}${i}`, currentCells)) || 0;
                }
                return sum.toString();
            }
            return '#RANGE!';
        }
        
        // Cell references
        expr = expr.replace(/[A-Z]+\d+/g, (match) => {
            return evaluateCell(match, currentCells) || '0';
        });

        try {
            // Very unsafe, but ok for a simulator.
            // eslint-disable-next-line no-eval
            return (eval(expr) || '').toString();
        } catch (e) {
            return '#ERROR!';
        }
    };

    const evaluateCell = (cellId: string, currentCells: typeof cells): string => {
        const cell = currentCells[cellId];
        if (!cell) return '';
        if (cell.formula) {
            return parseFormula(cell.formula, currentCells);
        }
        return cell.value || '';
    };

    const evaluatedCells = useMemo(() => {
        const newEvaluated: Record<string, string> = {};
        Object.keys(cells).forEach(key => {
            newEvaluated[key] = evaluateCell(key, cells);
        });
        return newEvaluated;
    }, [cells]);

    const handleCellChange = (cellId: string, inputValue: string) => {
        const newCells = { ...cells };
        if (inputValue.startsWith('=')) {
            newCells[cellId] = { value: inputValue, formula: inputValue };
        } else {
            newCells[cellId] = { value: inputValue };
        }
        setCells(newCells);
    };

    useEffect(() => {
        setFormulaInput(cells[activeCell]?.formula || cells[activeCell]?.value || '');
    }, [activeCell, cells]);
    
    return (
        <div className="w-full max-w-3xl mx-auto border-2 border-slate-300 rounded-lg shadow-lg font-sans text-sm">
            <div className="flex items-center p-2 bg-slate-100 border-b-2 border-slate-300 gap-2">
                <div className="w-16 text-center font-bold text-slate-500 border-r">{activeCell}</div>
                <input 
                    type="text" 
                    value={formulaInput}
                    onChange={(e) => setFormulaInput(e.target.value)}
                    onBlur={(e) => handleCellChange(activeCell, e.target.value)}
                    onKeyDown={(e) => { if(e.key === 'Enter') handleCellChange(activeCell, formulaInput) }}
                    className="flex-1 p-1 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-accent-500"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table-fixed border-collapse">
                    <thead>
                        <tr className="bg-slate-200">
                            <th className="w-12 border border-slate-300"></th>
                            {cols.map(c => <th key={c} className="w-24 border border-slate-300">{c}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(r => (
                            <tr key={r}>
                                <td className="bg-slate-200 text-center font-bold border border-slate-300">{r}</td>
                                {cols.map(c => {
                                    const cellId = `${c}${r}`;
                                    const isActive = activeCell === cellId;
                                    return (
                                        <td key={cellId} className={`border ${isActive ? 'border-accent-500' : 'border-slate-300'}`}>
                                            <input 
                                                type="text" 
                                                value={evaluatedCells[cellId] || ''}
                                                onFocus={() => setActiveCell(cellId)}
                                                onChange={e => handleCellChange(cellId, e.target.value)}
                                                className={`w-full h-full p-1 focus:outline-none text-right ${isActive ? 'ring-2 ring-accent-500' : ''}`}
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export const CloudStorageSimulator = () => {
    type FileStatus = 'synced' | 'syncing' | 'error';
    const [files, setFiles] = useState([
        { id: 1, name: 'report_final.docx', status: 'synced' as FileStatus },
        { id: 2, name: 'presentation.pptx', status: 'synced' as FileStatus },
        { id: 3, name: 'project-data.xlsx', status: 'synced' as FileStatus },
    ]);

    const uploadFile = () => {
        const newFile = { id: Date.now(), name: `new_image_${Date.now()}.jpg`, status: 'syncing' as FileStatus };
        setFiles(prev => [...prev, newFile]);

        setTimeout(() => {
            setFiles(prev => prev.map(f => f.id === newFile.id ? {...f, status: 'synced'} : f));
        }, 2000);
    };

    const StatusIcon = ({ status }: { status: FileStatus }) => {
        if (status === 'synced') return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
        if (status === 'syncing') return <RefreshIcon className="w-5 h-5 text-blue-500 animate-spin" />;
        return <XIcon className="w-5 h-5 text-red-500" />;
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg border border-slate-200">
            <header className="flex justify-between items-center pb-2 border-b">
                <h3 className="text-xl font-bold text-slate-800">My Cloud Drive</h3>
                <button onClick={uploadFile} className="px-4 py-2 bg-accent-500 text-white rounded-lg font-semibold text-sm">Upload File</button>
            </header>
            <ul className="mt-4 space-y-2">
                {files.map(file => (
                    <li key={file.id} className="flex items-center p-3 bg-slate-50 rounded-md hover:bg-slate-100 transition-colors animate-in">
                        <FileIcon className="w-6 h-6 text-slate-500 mr-3" />
                        <span className="flex-grow text-slate-700">{file.name}</span>
                        <StatusIcon status={file.status} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export const AlgorithmBuilder = () => {
    const [steps, setSteps] = useState(['Start', 'Get out of bed', 'Brush teeth', 'End']);
    const [newStep, setNewStep] = useState('');

    const addStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newStep.trim()) return;
        setSteps(prev => [...prev.slice(0, -1), newStep, 'End']);
        setNewStep('');
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-center mb-4">Algorithm Builder</h3>
            <div className="space-y-2">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-100 rounded-md">
                        <span className="font-bold text-accent-600">{index + 1}.</span>
                        <span>{step}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={addStep} className="mt-4 flex gap-2">
                <input 
                    type="text"
                    value={newStep}
                    onChange={e => setNewStep(e.target.value)}
                    placeholder="Add a new step..."
                    className="flex-grow p-2 border rounded-md"
                />
                <button type="submit" className="px-4 py-2 bg-accent-500 text-white font-semibold rounded-md">Add</button>
            </form>
        </div>
    );
};
export const LogicQuiz = () => {
    const questions = [
        {
            question: "A program follows a list of instructions one after another, without skipping or repeating. What is this concept called?",
            options: ["Loop", "Decision", "Sequence", "Function"],
            correct: 2,
            explanation: "A sequence is a set of instructions executed in a specific, linear order."
        },
        {
            question: "An `if-else` statement in programming is an example of which logic concept?",
            options: ["Sequence", "Loop", "Algorithm", "Decision"],
            correct: 3,
            explanation: "`if-else` allows a program to make a decision and choose between two different paths of execution based on a condition."
        },
        {
            question: "If you want to repeat an action 10 times, what is the most appropriate logic structure to use?",
            options: ["A loop", "A sequence", "A decision", "A variable"],
            correct: 0,
            explanation: "Loops (like `for` or `while` loops) are designed specifically for repeating a block of code multiple times."
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (index: number) => {
        setSelectedAnswer(index);
        setShowResult(true);
        if (index === questions[currentQuestion].correct) {
            setScore(prev => prev + 1);
        }
    }
    
    const handleNext = () => {
        setShowResult(false);
        setSelectedAnswer(null);
        setCurrentQuestion(prev => prev + 1);
    }
    
    const handleReset = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
    }

    if(currentQuestion >= questions.length) {
        return (
            <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg border text-center">
                 <h3 className="text-xl font-bold">Quiz Complete!</h3>
                 <p className="mt-4 text-2xl">You scored {score} out of {questions.length}</p>
                 <button onClick={handleReset} className="mt-6 px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg">Try Again</button>
            </div>
        );
    }

    const q = questions[currentQuestion];
    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg border">
            <p className="text-sm text-slate-500">Question {currentQuestion + 1} of {questions.length}</p>
            <h3 className="text-lg font-semibold mt-2">{q.question}</h3>
            <div className="mt-4 space-y-2">
                {q.options.map((option, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleAnswer(index)} 
                        disabled={showResult}
                        className={`w-full text-left p-3 rounded-lg border-2 
                        ${!showResult ? 'hover:bg-slate-100' : ''}
                        ${showResult && selectedAnswer === index && index === q.correct ? 'bg-green-100 border-green-400' : ''}
                        ${showResult && selectedAnswer === index && index !== q.correct ? 'bg-red-100 border-red-400' : ''}
                        ${showResult && index === q.correct ? 'border-green-400' : ''}
                        `}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {showResult && (
                <div className="mt-4 p-4 bg-slate-100 rounded-lg animate-in">
                    <p className={`font-bold ${selectedAnswer === q.correct ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedAnswer === q.correct ? 'Correct!' : 'Not quite.'}
                    </p>
                    <p className="text-sm text-slate-700 mt-1">{q.explanation}</p>
                    <button onClick={handleNext} className="mt-4 px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg">Next</button>
                </div>
            )}
        </div>
    );
};
export const PythonSetupGuide = () => {
    const [step, setStep] = useState(1);
    const [pathChecked, setPathChecked] = useState(false);

    const totalSteps = 4;
    
    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg border">
            <h3 className="text-xl font-bold text-center">Python Setup Guide</h3>
            <div className="mt-4 w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
            </div>
            <div className="mt-6 min-h-[250px] flex flex-col items-center justify-center text-center">
                {step === 1 && <div className="animate-in">
                    <h4 className="font-semibold text-lg">Step 1: Download Python</h4>
                    <p className="mt-2 text-slate-600">Go to the official Python website at <code className="bg-slate-200 p-1 rounded">python.org</code> and download the latest version for your operating system.</p>
                </div>}
                 {step === 2 && <div className="animate-in">
                    <h4 className="font-semibold text-lg">Step 2: Run the Installer</h4>
                    <p className="mt-2 text-slate-600">Open the file you downloaded to start the installation process. You will see a window like this.</p>
                     <img src="https://i.imgur.com/kZiz5cW.png" alt="Python installer window" className="mt-4 border rounded-md shadow-md"/>
                </div>}
                {step === 3 && <div className="animate-in">
                    <h4 className="font-semibold text-lg">Step 3: Add to PATH (Crucial!)</h4>
                    <p className="mt-2 text-slate-600">This is the most important step! Before clicking "Install Now", make sure you check the box at the bottom that says <strong className="text-red-600">"Add Python to PATH"</strong>.</p>
                    <div className="mt-4 p-4 border-2 border-red-500 rounded-lg flex items-center justify-center gap-2">
                        <input type="checkbox" id="path-checkbox" checked={pathChecked} onChange={(e) => setPathChecked(e.target.checked)} className="h-5 w-5"/>
                        <label htmlFor="path-checkbox" className="font-semibold">Add Python to PATH</label>
                    </div>
                </div>}
                {step === 4 && <div className="animate-in">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto"/>
                    <h4 className="font-semibold text-lg mt-4">Step 4: Setup Complete!</h4>
                    <p className="mt-2 text-slate-600">You have successfully installed Python. You are now ready to start coding!</p>
                </div>}
            </div>
            <div className="mt-6 flex justify-between">
                <button onClick={() => setStep(s => s - 1)} disabled={step === 1} className="px-6 py-2 bg-slate-200 rounded-lg font-semibold disabled:opacity-50">Back</button>
                {step < totalSteps ? 
                    <button onClick={() => setStep(s => s + 1)} disabled={step === 3 && !pathChecked} className="px-6 py-2 bg-accent-500 text-white rounded-lg font-semibold disabled:opacity-50 disabled:bg-slate-400">Next</button>
                    : <button onClick={() => {setStep(1); setPathChecked(false)}} className="px-6 py-2 bg-accent-500 text-white rounded-lg font-semibold">Restart Guide</button>
                }
            </div>
        </div>
    );
};
export const VariableExplorer = () => {
    const [code, setCode] = useState(`name = "Alice"\nage = 15\nprice = 99.95\nis_student = True`);
    const [output, setOutput] = useState('');

    const runCode = () => {
        // Simulate running the code
        const lines = code.split('\n');
        const vars: Record<string, any> = {};
        lines.forEach(line => {
            const parts = line.split('=').map(p => p.trim());
            if (parts.length === 2) {
                try {
                    // UNSAFE eval, but acceptable for this specific simulator
                    vars[parts[0]] = eval(parts[1]);
                } catch (e) {
                     vars[parts[0]] = parts[1]; // treat as string if eval fails
                }
            }
        });

        let newOutput = '';
        for (const key in vars) {
            newOutput += `Variable: ${key}, Value: ${vars[key]}, Type: ${typeof vars[key]}\n`;
        }
        setOutput(newOutput);
    };

    return (
        <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-lg border">
             <div className="font-mono text-sm bg-slate-800 text-white p-4 rounded-lg">
                <textarea 
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="w-full h-24 bg-transparent focus:outline-none resize-none text-white"
                    spellCheck="false"
                />
            </div>
            <button onClick={runCode} className="mt-4 w-full py-2 bg-accent-500 text-white font-semibold rounded-lg">Run and Check Types</button>
            {output && (
                <div className="mt-4 p-4 bg-slate-100 rounded-md font-mono text-sm whitespace-pre-wrap animate-in">
                    <h4 className="font-sans font-bold text-slate-600 mb-2">Output:</h4>
                    {output}
                </div>
            )}
        </div>
    );
};
export const CodeEditor = () => {
    const [code, setCode] = useState('# Write your Python code here\n');
    const [output, setOutput] = useState('');

    const runCode = () => {
        // This is a simplified simulation. A real implementation would need a Python interpreter (like Pyodide).
        // For this lesson, we simulate the expected outcome for a specific task.
        const nameMatch = code.match(/input\(.*name.*\)/i);
        const colorMatch = code.match(/input\(.*color.*\)/i);
        const ageMatch = code.match(/input\(.*age.*\)/i);
        const printMatch = code.match(/print\(.*\)/i);

        if (nameMatch && colorMatch && ageMatch && printMatch) {
            setOutput('Simulated output:\nHello Logick! Your favorite color is blue and you are 5 years old.');
        } else {
            setOutput('Simulation Error: Make sure you use `input()` for name, color, and age, and then a `print()` statement.');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col h-[500px] bg-slate-800 rounded-lg shadow-lg">
            <div className="flex-grow p-4">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-transparent text-white font-mono focus:outline-none resize-none"
                    spellCheck="false"
                />
            </div>
            <div className="flex-shrink-0 p-2 border-t border-slate-700 flex justify-between items-center">
                <button onClick={runCode} className="px-4 py-1 bg-green-600 text-white font-semibold rounded-md">Run</button>
            </div>
            <div className="flex-shrink-0 h-24 bg-slate-900 p-2 text-sm text-slate-300 whitespace-pre-wrap overflow-y-auto">
                {output}
            </div>
        </div>
    );
};
export const HelloWorldCodeEditor = () => {
    const [code, setCode] = useState('print("Hello, World!")');
    const [output, setOutput] = useState('');

    const runCode = () => {
        if(code.trim() === 'print("Hello, World!")') {
            setOutput('Hello, World!');
        } else {
            setOutput('SyntaxError: The code does not exactly match the "Hello, World!" program.');
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-slate-800 rounded-lg text-white font-mono">
            <div className="p-2 bg-slate-900 rounded-md">
                <p>{code}</p>
            </div>
            <button onClick={runCode} className="w-full mt-4 py-2 bg-green-600 rounded-md font-semibold">Run Program</button>
            {output && (
                <div className="mt-4 p-2 bg-black rounded-md">
                    <p className="text-green-400">&gt; {output}</p>
                </div>
            )}
        </div>
    );
};
export const ConditionalLogicExplorer = () => {
    const [age, setAge] = useState(10);
    const getResult = () => {
        if (age >= 18) return "adult";
        if (age >= 13) return "teenager";
        return "child";
    }
    const result = getResult();

    const code = `age = ${age}\n\nif age >= 18:\n  status = "You are an adult."\nelif age >= 13:\n  status = "You are a teenager."\nelse:\n  status = "You are a child."`;

    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg border border-slate-200">
            <label htmlFor="age-slider" className="font-semibold text-slate-700">Drag to change age: {age}</label>
            <input 
                id="age-slider"
                type="range" 
                min="1" 
                max="30" 
                value={age} 
                onChange={e => setAge(Number(e.target.value))}
                className="w-full mt-2"
            />
            <div className="mt-4 p-4 bg-slate-800 text-white rounded-lg font-mono text-sm whitespace-pre-wrap">
                <span className="text-slate-400">{`age = ${age}`}</span>
                <br/><br/>
                <span className={result === 'adult' ? 'bg-yellow-400/30' : ''}>if age &gt;= 18:</span>
                <br/>
                <span className={result === 'adult' ? 'bg-yellow-400/30' : ''}>{`  status = "You are an adult."`}</span>
                <br/>
                <span className={result === 'teenager' ? 'bg-yellow-400/30' : ''}>elif age &gt;= 13:</span>
                <br/>
                <span className={result === 'teenager' ? 'bg-yellow-400/30' : ''}>{`  status = "You are a teenager."`}</span>
                <br/>
                <span className={result === 'child' ? 'bg-yellow-400/30' : ''}>else:</span>
                <br/>
                <span className={result === 'child' ? 'bg-yellow-400/30' : ''}>{`  status = "You are a child."`}</span>
            </div>
            <div className="mt-4 p-3 bg-accent-100 rounded-md text-center font-semibold text-accent-800">
                Output Status: {result.charAt(0).toUpperCase() + result.slice(1)}
            </div>
        </div>
    );
};

export const LoopVisualizer = () => {
    const items = ['🍎 Apple', '🍌 Banana', '🍒 Cherry'];
    const [currentItemIndex, setCurrentItemIndex] = useState(-1);
    const [output, setOutput] = useState<string[]>([]);
    const isRunning = currentItemIndex >= 0 && currentItemIndex < items.length;

    const runStep = () => {
        if (!isRunning) {
            // Start
            setCurrentItemIndex(0);
            setOutput([]);
        } else {
            // Next step
            setOutput(prev => [...prev, `Processing ${items[currentItemIndex]}`]);
            setCurrentItemIndex(prev => prev + 1);
        }
    };
    
    const reset = () => {
        setCurrentItemIndex(-1);
        setOutput([]);
    }

    return (
        <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-lg border grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h4 className="font-bold mb-2">Code:</h4>
                <div className="p-3 bg-slate-800 text-white rounded-md font-mono text-sm">
                    <p>fruits = ["🍎", "🍌", "🍒"]</p>
                    <p className="mt-2">for fruit in fruits:</p>
                    <p className="pl-4">print(f"Processing {'{fruit}'}")</p>
                </div>

                <h4 className="font-bold mt-4 mb-2">List of Fruits:</h4>
                <div className="flex gap-2">
                    {items.map((item, index) => (
                        <div key={item} className={`p-2 border-2 rounded-md ${currentItemIndex === index ? 'border-accent-500 bg-accent-100' : 'border-slate-300'}`}>
                            {item}
                        </div>
                    ))}
                </div>
                 <button onClick={isRunning ? runStep : reset} className="mt-4 mr-2 px-4 py-2 bg-slate-200 rounded-md font-semibold">{!isRunning ? 'Reset' : 'Next Step'}</button>
                <button onClick={runStep} className="mt-4 px-4 py-2 bg-accent-500 text-white rounded-md font-semibold">{isRunning ? (currentItemIndex < items.length - 1 ? 'Next Step' : 'Finish') : 'Start Loop'}</button>
            </div>
            <div>
                <h4 className="font-bold mb-2">Output:</h4>
                <div className="p-3 bg-black text-green-400 rounded-md h-40 font-mono text-sm whitespace-pre-wrap">
                    {output.join('\n')}
                    {currentItemIndex >= items.length && '\nLoop finished.'}
                </div>
            </div>
        </div>
    );
};
export const FunctionBuilder = () => {
    const [length, setLength] = useState(10);
    const [width, setWidth] = useState(5);
    const [result, setResult] = useState<number|null>(null);

    const runFunction = () => {
        setResult(length * width);
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg border">
            <h4 className="font-bold">Function Definition:</h4>
             <div className="p-3 bg-slate-800 text-white rounded-md font-mono text-sm mt-2">
                <p><span className="text-purple-400">def</span> <span className="text-yellow-400">calculate_area</span>(<span className="text-sky-400">length</span>, <span className="text-sky-400">width</span>):</p>
                <p className="pl-4"> area = length * width</p>
                <p className="pl-4"><span className="text-purple-400">return</span> area</p>
            </div>

            <h4 className="font-bold mt-4">Provide Arguments:</h4>
            <div className="flex gap-4 mt-2">
                <div className="flex-1">
                    <label htmlFor="length" className="text-sm font-semibold">length (parameter):</label>
                    <input type="number" id="length" value={length} onChange={e => setLength(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/>
                </div>
                <div className="flex-1">
                    <label htmlFor="width" className="text-sm font-semibold">width (parameter):</label>
                    <input type="number" id="width" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/>
                </div>
            </div>
            <button onClick={runFunction} className="w-full mt-4 py-2 bg-accent-500 text-white font-semibold rounded-lg">Run Function</button>
             {result !== null && (
                <div className="mt-4 p-3 bg-accent-100 rounded-md text-center font-semibold text-accent-800 animate-in">
                    Return Value: {result}
                </div>
            )}
        </div>
    );
};
export const GitSimulator = () => {
    const [history, setHistory] = useState<string[]>(['Welcome to the Git Simulator! Try typing `git --help`']);
    const [command, setCommand] = useState('');
    
    // Simplified Git state
    const [repo, setRepo] = useState<{ initialized: boolean, files: Record<string, string>, staged: string[], commits: any[] }>({
        initialized: false,
        files: {},
        staged: [],
        commits: []
    });

    const handleCommand = (cmdStr: string) => {
        const [cmd, ...args] = cmdStr.split(' ');
        let output = `$ ${cmdStr}`;
        let newRepo = { ...repo, files: { ...repo.files }, staged: [...repo.staged], commits: [...repo.commits] };

        if (!newRepo.initialized && cmd !== 'git') {
             output += "\nfatal: not a git repository (or any of the parent directories): .git";
        } else {
            switch (cmd) {
                case 'git':
                    if (args[0] === 'init') {
                        if (newRepo.initialized) {
                            output += "\nReinitialized existing Git repository.";
                        } else {
                            newRepo.initialized = true;
                            output += "\nInitialized empty Git repository.";
                        }
                    } else if (args[0] === 'status') {
                        let statusText = "On branch main\n";
                        if (newRepo.commits.length === 0) statusText += "\nNo commits yet\n";
                        
                        const stagedFiles = newRepo.staged;
                        if(stagedFiles.length > 0) {
                            statusText += "\nChanges to be committed:\n";
                            stagedFiles.forEach(f => statusText += `  (use "git rm --cached <file>..." to unstage)\n\tnew file:   ${f}\n`);
                        }

                        const untrackedFiles = Object.keys(newRepo.files).filter(f => !stagedFiles.includes(f) && !newRepo.commits.some(c => c.files[f]));
                         if(untrackedFiles.length > 0) {
                            statusText += "\nUntracked files:\n";
                            untrackedFiles.forEach(f => statusText += `  (use "git add <file>..." to include in what will be committed)\n\t${f}\n`);
                        }
                        
                        if(stagedFiles.length === 0 && untrackedFiles.length === 0) {
                            statusText += "\nnothing to commit, working tree clean";
                        }
                        
                        output += `\n${statusText}`;

                    } else if (args[0] === 'add') {
                        const file = args[1];
                        if (!file) {
                             output += "\nNothing specified, nothing added.";
                        } else if (newRepo.files[file]) {
                            if (!newRepo.staged.includes(file)) {
                                newRepo.staged.push(file);
                            }
                            output += `\nAdded '${file}' to the staging area.`;
                        } else {
                            output += `\nfatal: pathspec '${file}' did not match any files`;
                        }
                    } else if (args[0] === 'commit') {
                        if (args[1] === '-m' && args[2]) {
                            if(newRepo.staged.length === 0) {
                                output += "\nnothing to commit, working tree clean";
                            } else {
                                const message = args.slice(2).join(' ').replace(/"/g, '');
                                const newCommit = { message, files: {}, id: Math.random().toString(36).substring(7) };
                                newRepo.staged.forEach(f => newCommit.files[f] = newRepo.files[f]);
                                newRepo.commits.push(newCommit);
                                newRepo.staged = [];
                                output += `\n[main (root-commit) ${newCommit.id}] ${message}\n ${Object.keys(newCommit.files).length} file changed, 1 insertion(+)`;
                            }
                        } else {
                             output += "\nPlease provide a commit message with -m.";
                        }
                    } else if (args[0] === 'log') {
                        if (newRepo.commits.length === 0) {
                            output += "\nfatal: your current branch 'main' does not have any commits yet";
                        } else {
                             newRepo.commits.slice().reverse().forEach(c => {
                                output += `\n\ncommit ${c.id}\nAuthor: You <you@example.com>\nDate:   ${new Date().toString()}\n\n\t${c.message}`;
                            });
                        }
                    } else {
                         output += "\nGit Simulator Commands: init, status, add <file>, commit -m \"<msg>\", log\nAlso try: touch <file>, ls";
                    }
                    break;
                case 'touch':
                    const newFile = args[0];
                    if (newFile) {
                        newRepo.files[newFile] = `Content of ${newFile}`;
                        output += `\nCreated file: ${newFile}`;
                    }
                    break;
                case 'ls':
                     output += "\n" + Object.keys(newRepo.files).join('\t') || "No files here.";
                    break;
                case 'clear':
                    setHistory([]);
                    return;
                default:
                    output += "\nCommand not found. Try `git --help`.";
            }
        }

        setRepo(newRepo);
        setHistory([...history, output]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(command);
        setCommand('');
    };

    const terminalHistoryRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        terminalHistoryRef.current?.scrollTo(0, terminalHistoryRef.current.scrollHeight);
    }, [history]);

    return (
        <div className="w-full max-w-2xl mx-auto h-[500px] bg-slate-900 text-white rounded-lg shadow-lg font-mono text-sm flex flex-col">
            <div className="flex-shrink-0 p-2 bg-slate-800 rounded-t-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-slate-400 ml-auto">Git Simulator</p>
            </div>
            <div ref={terminalHistoryRef} className="flex-grow p-4 overflow-y-auto whitespace-pre-wrap">
                {history.join('\n')}
            </div>
            <form onSubmit={handleSubmit} className="flex-shrink-0 p-2 bg-slate-800 rounded-b-lg flex items-center gap-2">
                <span className="text-green-400">$</span>
                <input 
                    type="text"
                    value={command}
                    onChange={e => setCommand(e.target.value)}
                    className="flex-1 bg-transparent focus:outline-none"
                    autoFocus
                />
            </form>
        </div>
    );
};

export const WebPlayground = () => {
    const [html, setHtml] = useState('<h1>Hello, World!</h1>\n<p>This is a paragraph.</p>');
    const [css, setCss] = useState('h1 {\n  color: #06b6d4;\n}\n\np {\n  font-family: sans-serif;\n}');
    const [js, setJs] = useState('// JavaScript code runs here\n// Try: alert("Hello!");');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="w-full h-[600px] flex flex-col md:flex-row border-2 border-slate-300 rounded-lg overflow-hidden">
            <div className="flex-1 flex flex-col">
                <div className="p-2 bg-slate-200 font-semibold">HTML</div>
                <textarea 
                    value={html} 
                    onChange={e => setHtml(e.target.value)}
                    className="w-full flex-1 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"
                />
                <div className="p-2 bg-slate-200 font-semibold">CSS</div>
                 <textarea 
                    value={css} 
                    onChange={e => setCss(e.target.value)}
                    className="w-full flex-1 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"
                />
                 <div className="p-2 bg-slate-200 font-semibold">JavaScript</div>
                 <textarea 
                    value={js} 
                    onChange={e => setJs(e.target.value)}
                    className="w-full flex-1 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"
                />
            </div>
            <div className="flex-1 flex flex-col">
                 <div className="p-2 bg-slate-700 text-white font-semibold">Preview</div>
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                    className="bg-white"
                />
            </div>
        </div>
    );
};

export const DebuggingChallenge = () => {
    const buggyCode = `value = "hello"\nresult = 100 / value`;
    const fixedCode = `value = 10\nresult = 100 / value`;
    const [code, setCode] = useState(buggyCode);
    const [output, setOutput] = useState('');

    const runCode = () => {
        if (code.includes(`"hello"`)) {
            setOutput(`Traceback (most recent call last):\n  File "<stdin>", line 2, in <module>\nTypeError: unsupported operand type(s) for /: 'int' and 'str'`);
        } else if (code.includes(`10`)) {
            setOutput('Program finished successfully!\nResult: 10');
        } else {
            setOutput('Hmm, that\'s not quite the fix. Try changing "hello" to a number like 10.');
        }
    };
    
    return (
        <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-lg border">
            <h4 className="font-bold">Code Editor:</h4>
            <div className="font-mono text-sm bg-slate-800 text-white p-4 rounded-lg mt-2">
                <textarea 
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="w-full h-24 bg-transparent focus:outline-none resize-none text-white"
                    spellCheck="false"
                />
            </div>
            <button onClick={runCode} className="mt-4 w-full py-2 bg-accent-500 text-white font-semibold rounded-lg">Run Code</button>
            {output && (
                <div className="mt-4 p-4 bg-slate-900 text-white rounded-md font-mono text-sm whitespace-pre-wrap animate-in">
                    <p className={output.includes('Traceback') ? 'text-red-400' : 'text-green-400'}>{output}</p>
                </div>
            )}
        </div>
    );
};
export const ErrorHandlingSimulator = () => {
    const [input, setInput] = useState('25');
    const [output, setOutput] = useState('');

    const runCode = () => {
        const num = parseInt(input, 10);
        if (isNaN(num)) {
            setOutput(`Caught an error! Please enter a valid number.`);
        } else {
            setOutput(`Success! Your number is ${num}.`);
        }
    }
    
    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg border flex flex-col md:flex-row gap-4">
             <div className="flex-1 p-3 bg-slate-800 text-white rounded-md font-mono text-sm">
                <p>try:</p>
                <p className="pl-4">num = int(user_input)</p>
                <p className="pl-4">print(f"Success! Your number is {'{num}'}")</p>
                <p className="mt-2">except ValueError:</p>
                <p className="pl-4">print("Please enter a valid number.")</p>
            </div>
            <div className="flex-1">
                <label htmlFor="user-input" className="font-semibold">Enter a value:</label>
                <input 
                    id="user-input"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="w-full p-2 border rounded-md mt-1"
                />
                <button onClick={runCode} className="w-full mt-4 py-2 bg-accent-500 text-white font-semibold rounded-lg">Run</button>
                {output && (
                    <div className="mt-4 p-3 bg-slate-100 rounded-md text-center font-semibold text-slate-800 animate-in">
                        {output}
                    </div>
                )}
            </div>
        </div>
    );
};

export const PortfolioBuilder = () => {
    const [html, setHtml] = useState('<!-- Add your HTML here -->');
    const [css, setCss] = useState('/* Add your CSS here */');
    const [srcDoc, setSrcDoc] = useState('');

    const checklist = [
        { label: "Add an <h1> tag for your name", isComplete: html.includes('<h1') && html.includes('</h1>') },
        { label: "Add a <p> tag for a short bio", isComplete: html.includes('<p>') && html.includes('</p>') },
        { label: "Add an <img> tag for a profile picture", isComplete: html.includes('<img') },
        { label: "Change body background color in CSS", isComplete: css.includes('body') && css.includes('background-color') },
        { label: "Center the text in the h1 tag", isComplete: css.includes('h1') && css.includes('text-align: center') },
    ];
    const allComplete = checklist.every(item => item.isComplete);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <head><style>${css}</style></head>
                    <body>${html}</body>
                </html>
            `);
        }, 300);
        return () => clearTimeout(timeout);
    }, [html, css]);

    return (
        <div className="w-full h-[700px] flex flex-col border-2 border-slate-300 rounded-lg overflow-hidden">
            <div className="p-4 bg-slate-100 border-b">
                <h3 className="text-xl font-bold">Project: Build Your Bio Page</h3>
                <p className="text-sm text-slate-600">Use the editors below to create a simple webpage. Follow the checklist.</p>
            </div>
            <div className="flex-grow flex flex-col md:flex-row min-h-0">
                <div className="w-full md:w-1/3 flex flex-col p-4 space-y-2">
                    <h4 className="font-bold">Checklist</h4>
                    {checklist.map(item => (
                        <div key={item.label} className={`flex items-center gap-2 p-2 rounded-md ${item.isComplete ? 'bg-green-100 text-green-700' : 'bg-slate-100'}`}>
                            {item.isComplete ? <CheckCircleIcon className="w-5 h-5"/> : <div className="w-5 h-5 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-slate-400"></div></div>}
                            <span>{item.label}</span>
                        </div>
                    ))}
                    {allComplete && <div className="p-4 text-center text-green-700 font-bold bg-green-100 rounded-lg animate-in">Great job! You completed all the tasks!</div>}
                </div>
                <div className="w-full md:w-2/3 flex flex-col border-t md:border-t-0 md:border-l">
                    <div className="flex-1 flex flex-col">
                         <div className="p-2 bg-slate-200 font-semibold">HTML</div>
                        <textarea value={html} onChange={e => setHtml(e.target.value)} className="w-full flex-1 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"/>
                        <div className="p-2 bg-slate-200 font-semibold">CSS</div>
                        <textarea value={css} onChange={e => setCss(e.target.value)} className="w-full flex-1 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const InteractivePortfolio = () => {
    const initialHtml = `<h1>My Name</h1>
<img src="https://i.pravatar.cc/150" alt="Avatar">
<p>This is my bio. I am learning to code!</p>
<button id="toggleBtn">Show/Hide Details</button>
<div id="details" style="display: none;">
  <p>Here are more details about me!</p>
</div>`;
    const initialCss = `body { 
  font-family: sans-serif; 
  text-align: center;
  background-color: #f0f9ff;
}
img { 
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 4px solid #06b6d4;
}`;
    const initialJs = `/* 
  1. Get the button and the details div
  2. Add a 'click' event listener to the button
  3. Inside the listener, toggle the display style of the details div
*/

const toggleButton = document.getElementById('toggleBtn');
const detailsDiv = document.getElementById('details');

toggleButton.addEventListener('click', () => {
  if (detailsDiv.style.display === 'none') {
    detailsDiv.style.display = 'block';
  } else {
    detailsDiv.style.display = 'none';
  }
});`;
    
    const [html, setHtml] = useState(initialHtml);
    const [css, setCss] = useState(initialCss);
    const [js, setJs] = useState(initialJs);
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `);
        }, 250);
        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="w-full h-[700px] flex flex-col md:flex-row border-2 border-slate-300 rounded-lg overflow-hidden">
            <div className="flex-1 flex flex-col">
                <div className="p-2 bg-slate-200 font-semibold">HTML</div>
                <textarea value={html} onChange={e => setHtml(e.target.value)} className="w-full h-1/3 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"/>
                <div className="p-2 bg-slate-200 font-semibold">CSS</div>
                <textarea value={css} onChange={e => setCss(e.target.value)} className="w-full h-1/3 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"/>
                <div className="p-2 bg-slate-200 font-semibold">JavaScript</div>
                <textarea value={js} onChange={e => setJs(e.target.value)} className="w-full h-1/3 p-2 font-mono text-sm bg-slate-800 text-white resize-none focus:outline-none"/>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="p-2 bg-slate-700 text-white font-semibold">Interactive Preview</div>
                <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%" className="bg-white"/>
            </div>
        </div>
    );
};

export const ExternalComponentExplorer = () => {
    const [activeTab, setActiveTab] = useState<'browser' | 'builder'>('browser');
    
    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg border">
            <div className="flex border-b mb-4">
                <button 
                    onClick={() => setActiveTab('browser')} 
                    className={`px-4 py-2 font-semibold ${activeTab === 'browser' ? 'border-b-2 border-accent-500 text-accent-600' : 'text-slate-500'}`}
                >
                    1. Find a Tutorial
                </button>
                <button 
                    onClick={() => setActiveTab('builder')}
                    className={`px-4 py-2 font-semibold ${activeTab === 'builder' ? 'border-b-2 border-accent-500 text-accent-600' : 'text-slate-500'}`}
                >
                    2. Plan Your Project
                </button>
            </div>
            <div className="min-h-[600px]">
                {activeTab === 'browser' && <WebBrowserSimulator />}
                {activeTab === 'builder' && <AlgorithmBuilder />}
            </div>
        </div>
    );
};
