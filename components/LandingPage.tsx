import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons for Landing Page ---
const GraduationCapIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.702 2.33a.75.75 0 0 1 .596 0l9 3.75a.75.75 0 0 1 0 1.338l-9 3.75a.75.75 0 0 1-.596 0l-9-3.75a.75.75 0 0 1 0-1.338l9-3.75Z" /><path d="M3 8.25a.75.75 0 0 1 .75.75v6.44l7.228 3.012a.75.75 0 0 1 .544 0L19.5 15.44V9a.75.75 0 0 1 1.5 0v6.75a.75.75 0 0 1-.36.65l-8.25 3.437a.75.75 0 0 1-.54 0L2.61 16.4a.75.75 0 0 1-.36-.65V9a.75.75 0 0 1 .75-.75Z" /></svg>;
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75c0-5.056 2.383-9.555 6.084-12.436A6.75 6.75 0 0 1 9.315 7.584Z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.463 9.315a.75.75 0 0 1 .75-.75c5.056 0 9.555 2.383 12.436 6.084a.75.75 0 0 1-.75.75c-5.056 0-9.555-2.383-12.436-6.084a.75.75 0 0 1 0-1.584Z" clipRule="evenodd" /></svg>;
const CpuChipIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25 5.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h7.5c.414 0 .75-.336.75-.75v-7.5Z" /><path fillRule="evenodd" d="M6.333 3.375A2.625 2.625 0 0 0 3.75 6v12A2.625 2.625 0 0 0 6.375 20.625h11.25A2.625 2.625 0 0 0 20.25 18V6A2.625 2.625 0 0 0 17.625 3.375H6.333ZM5.25 6a1.125 1.125 0 0 1 1.125-1.125h11.25a1.125 1.125 0 0 1 1.125 1.125v12a1.125 1.125 0 0 1-1.125 1.125H6.375a1.125 1.125 0 0 1-1.125-1.125V6Z" clipRule="evenodd" /><path d="M8.25 16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" /><path d="M9.75 18.75a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5h.75Z" /><path d="M11.25 16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" /><path d="M12.75 18.75a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5h.75Z" /><path d="M14.25 16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" /><path d="M15.75 18.75a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5h.75Z" /><path d="M8.25 2.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" /><path d="M9.75 4.5a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5h.75Z" /><path d="M11.25 2.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" /><path d="M12.75 4.5a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5h.75Z" /><path d="M14.25 2.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" /><path d="M15.75 4.5a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0 0 1.5h.75Z" /><path d="M18 8.25a.75.75 0 0 1-.75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1-.75-.75h-1.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1 1.5 0v-.75a.75.75 0 0 1 .75.75Zm.75-.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5Z" /><path d="M18 9.75a.75.75 0 0 1-.75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75h1.5Z" /><path d="M18 12.75a.75.75 0 0 1-.75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75h1.5Z" /><path d="M18 15.75a.75.75 0 0 1-.75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75h1.5Z" /><path d="M4.5 8.25a.75.75 0 0 0 .75.75v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0 .75-.75h1.5a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0-.75-.75Zm-.75-.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5Z" /><path d="M4.5 9.75a.75.75 0 0 0 .75.75v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0-.75-.75h-1.5Z" /><path d="M4.5 12.75a.75.75 0 0 0 .75.75v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0-.75-.75h-1.5Z" /><path d="M4.5 15.75a.75.75 0 0 0 .75.75v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0-.75-.75h-1.5Z" /></svg>;
const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z" /><path d="M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 9.75 19.875V8.625Z" /><path d="M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>;
const BeakerIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.5 3.75A2.25 2.25 0 0 0 8.25 6v.033a23.32 23.32 0 0 0 .584 2.859l1.456 4.367a2.25 2.25 0 0 1-.659 2.573l-1.58 1.455A2.25 2.25 0 0 0 9 20.25h6a2.25 2.25 0 0 0 1.408-2.009l-1.58-1.455a2.25 2.25 0 0 1-.659-2.573l1.456-4.367a23.193 23.193 0 0 0 .584-2.859V6A2.25 2.25 0 0 0 13.5 3.75h-3Zm.44 9.394a.75.75 0 0 1 .22-1.012l1.28-1.178a.75.75 0 0 1 .98 1.13l-1.28 1.178a.75.75 0 0 1-1.012-.22ZM12 8.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>;
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.623 7.23a.75.75 0 0 1 1.06 0l1.833 1.833a.75.75 0 0 1-1.06 1.06L9.623 8.29a.75.75 0 0 1 0-1.06Zm-1.56.44a.75.75 0 0 1 0 1.06l-1.833 1.833a.75.75 0 1 1-1.06-1.06l1.833-1.833a.75.75 0 0 1 1.06 0ZM12 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 7.5Zm-3.125 4.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5h1.5Zm4.693-2.002a.75.75 0 1 1 1.06-1.06l1.833 1.833a.75.75 0 0 1-1.06 1.06l-1.833-1.833ZM12.75 12a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm-4.318 3.53a.75.75 0 1 0-1.06-1.06l-1.833 1.833a.75.75 0 1 0 1.06 1.06l1.833-1.833Zm6.151-1.06a.75.75 0 1 1-1.06-1.06l-1.833 1.833a.75.75 0 1 1-1.06-1.06l1.833-1.833a.75.75 0 1 1 1.06 1.06Z" clipRule="evenodd" /></svg>;
const CheckBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 0 1-1.307 3.498 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.491 4.491 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>;
const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12.832 2.523c.307-.16.66-.16.966 0l7.5 4.018c.32.172.502.508.502.869v7.18c0 4.5-3.32 8.322-7.612 9.542a.75.75 0 0 1-.676 0c-4.292-1.22-7.612-5.042-7.612-9.542V7.41c0-.361.182-.697.502-.869l7.5-4.018Zm-1.182 9.345a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-2.47-2.47-1.47 1.47a.75.75 0 1 1-1.06-1.06l2-2Z" clipRule="evenodd" /></svg>;
const RocketLaunchIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.723 3.323a.75.75 0 0 1 .554 0l4.5 2.25a.75.75 0 0 1 .324.646v11.532a.75.75 0 0 1-1.077.676l-4.5-2.25a.75.75 0 0 1-.546 0l-4.5 2.25a.75.75 0 0 1-1.077-.676V6.219a.75.75 0 0 1 .324-.646l4.5-2.25Z" /><path d="M4.125 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" /><path d="M19.125 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" /></svg>;
const LightBulbIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 0 1 .75.75v.518c.298.056.587.126.869.213l.383-.383a.75.75 0 1 1 1.06 1.06l-.383.383a4.444 4.444 0 0 1 .478.683l.48-.277a.75.75 0 1 1 .75 1.3l-.48.277a4.482 4.482 0 0 1 .337.868l.518-.086a.75.75 0 1 1 .217 1.484l-.518.086c.044.29.07.585.078.882v.292a.75.75 0 0 1-1.5 0v-.292c-.008-.297-.034-.592-.078-.882l-.518-.086a.75.75 0 1 1-.217-1.484l.518.086a4.482 4.482 0 0 1-.337-.868l-.48-.277a.75.75 0 1 1-.75-1.3l.48.277a4.444 4.444 0 0 1-.478-.683l-.383.383a.75.75 0 0 1-1.06-1.06l.383-.383a4.433 4.433 0 0 1-.869-.213v-.518A.75.75 0 0 1 12 2.25Zm2.625 6c-2.001 0-3.625 1.624-3.625 3.625 0 1.22.606 2.396 1.637 3.093a.75.75 0 1 1-.924 1.176 5.125 5.125 0 0 1-2.463-4.269C8.25 9.624 9.999 7.5 12 7.5c2.001 0 3.625 1.624 3.625 3.625a5.125 5.125 0 0 1-2.463 4.269.75.75 0 1 1-.924-1.176A3.609 3.609 0 0 0 14.625 12c0-2.001-1.624-3.625-3.625-3.625Z" /><path d="M12 18.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0v-.008a.75.75 0 0 1 .75-.75Z" /><path d="M9.75 21a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V21.75a.75.75 0 0 1 .75-.75Z" /><path d="M14.25 21a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V21.75a.75.75 0 0 1 .75-.75Z" /></svg>;
const CodeBracketIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9.401 3.003c1.155.444 1.95 1.593 1.95 2.849v12.303c0 1.256-.795 2.405-1.95 2.849a.75.75 0 0 1-.902-.997 10.43 10.43 0 0 0 0-16.852.75.75 0 0 1 .902-.997ZM15.499 3.003a.75.75 0 0 1 .902.997 10.43 10.43 0 0 0 0 16.852.75.75 0 1 1-.902.997c-1.155-.444-1.95-1.593-1.95-2.849V5.852c0-1.256.795-2.405 1.95-2.849Z" clipRule="evenodd" /></svg>;
const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2.25a.75.75 0 0 0-1.5 0v1.125a.75.75 0 0 0 1.5 0V2.25Z" /><path d="M7.5 2.25a.75.75 0 0 0-1.5 0v1.125a.75.75 0 0 0 1.5 0V2.25Z" /><path fillRule="evenodd" d="M12 2.25A2.25 2.25 0 0 0 9.75 4.5v1.125a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 0 1.5 0h.75a.75.75 0 0 1 .75.75v1.125a.75.75 0 0 0 1.5 0V4.5A2.25 2.25 0 0 0 12 2.25Zm-3.14 8.71a.75.75 0 0 1 1.06 0L12 13.06l2.08-2.08a.75.75 0 0 1 1.06 1.06L13.06 15l2.08 2.08a.75.75 0 1 1-1.06 1.06L12 16.06l-2.08 2.08a.75.75 0 1 1-1.06-1.06L10.94 15l-2.08-2.08a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /><path fillRule="evenodd" d="M5.25 7.5A2.25 2.25 0 0 0 3 9.75v8.583c0 .878.435 1.673 1.157 2.145l4.5 3a.75.75 0 0 0 .686 0l4.5-3c.722-.472 1.157-1.267 1.157-2.145V9.75A2.25 2.25 0 0 0 12.75 7.5h-7.5ZM4.5 9.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v8.583a.75.75 0 0 1-.383.655l-4.5 3a.75.75 0 0 1-.686 0l-4.5-3A.75.75 0 0 1 4.5 18.333V9.75Z" clipRule="evenodd" /></svg>;

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const XIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>;


export const LandingPage: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<number | null>(1);
    const chatSectionRef = useRef<HTMLDivElement>(null);
    const [startChatAnimation, setStartChatAnimation] = useState(false);
    const [chatStep, setChatStep] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        if (entry.target === chatSectionRef.current) {
                            setStartChatAnimation(true);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observer.observe(el as Element));

        return () => elements.forEach((el) => observer.unobserve(el as Element));
    }, []);
    
    useEffect(() => {
        if (!startChatAnimation) return;

        const timers = [
            setTimeout(() => setChatStep(1), 500),
            setTimeout(() => setChatStep(2), 1800),
            setTimeout(() => setChatStep(3), 2800),
            setTimeout(() => setChatStep(4), 4300),
        ];

        return () => timers.forEach(clearTimeout);
    }, [startChatAnimation]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const curriculumParts = [
        { name: "Part 1: The Basics", icon: <GraduationCapIcon className="w-5 h-5"/>, description: "Learn the fundamentals, from turning on a laptop and using a keyboard to managing files and personalizing your settings." },
        { name: "Part 2: The Digital World", icon: <BookOpenIcon className="w-5 h-5"/>, description: "Dive into the internet. Learn how to browse safely, send professional emails, and use productivity apps like word processors and spreadsheets." },
        { name: "Part 3: Introduction to Programming", icon: <CodeBracketIcon className="w-5 h-5"/>, description: "Shift your thinking from a user to a creator. Understand logic, algorithms, and write your first lines of Python code." },
        { name: "Part 4: Building Blocks of Development", icon: <CpuChipIcon className="w-5 h-5"/>, description: "Explore more advanced Python concepts, learn the essential developer tool Git, and build your first interactive webpage with HTML, CSS, and JavaScript." },
        { name: "Part 5: Growth and the Developer Journey", icon: <RocketLaunchIcon className="w-5 h-5"/>, description: "Master the art of debugging, learn how to handle errors gracefully, and discover the path to continuous learning and building a project portfolio." },
    ];
    
    const AnimatedChat = () => (
        <div className="bg-slate-800 rounded-lg p-4 shadow-2xl min-h-[220px]">
            <div className="flex items-center gap-2 mb-4">
                <SparklesIcon className="w-6 h-6 text-yellow-400" />
                <h4 className="font-bold text-white">LogickTuts</h4>
            </div>
            <div className="space-y-3">
                {chatStep >= 1 && <div className="p-3 rounded-lg bg-slate-100 text-sm max-w-xs animate-fadeInUp"><p>Hi! How can I help with "Control Flow and Functions"?</p></div>}
                {chatStep >= 2 && <div className="flex justify-end"><div className="p-3 rounded-lg bg-accent-500 text-white text-sm max-w-xs animate-fadeInUp"><p>What's the difference between a for loop and a while loop?</p></div></div>}
                {chatStep === 3 && <div className="p-3 rounded-lg bg-slate-100 text-sm max-w-xs animate-fadeInUp flex items-center gap-1.5">
                    <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full"></span>
                </div>}
                {chatStep >= 4 && <div className="p-3 rounded-lg bg-slate-100 text-sm max-w-xs animate-fadeInUp"><p>Great question! Use a `for` loop when you know how many times to repeat (like for every item in a list). Use a `while` loop when you need to repeat until a certain condition becomes false.</p></div>}
            </div>
        </div>
    );

    return (
        <div className="bg-white text-slate-800 font-sans leading-relaxed">
            {/* Header */}
            <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" aria-label="Home" className="text-2xl font-bold text-accent-700">LogickTuts</a>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <button onClick={onGetStarted} className="px-5 py-2 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors">
                            Sign Up
                        </button>
                    </div>

                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 -mr-2 text-slate-600 hover:text-accent-600" aria-label="Open menu">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)}></div>
                <div className={`absolute top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex justify-between items-center border-b">
                        <h2 className="text-xl font-bold text-accent-700">Menu</h2>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2 text-slate-600 hover:text-accent-600" aria-label="Close menu">
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className="p-6 flex flex-col gap-6 text-lg">
                        <button onClick={() => { setIsMenuOpen(false); onGetStarted(); }} className="w-full px-5 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors">
                            Sign Up
                        </button>
                    </nav>
                </div>
            </div>

            <main>
                {/* Hero Section */}
                <section className="py-20 md:py-24 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Unlock Your Digital Potential.</h2>
                            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-slate-600">
                                From turning on a computer to writing your first program, LogickTuts is your personal guide to mastering essential tech skills with interactive lessons and AI-powered support.
                            </p>
                            <button onClick={onGetStarted} className="mt-8 px-8 py-4 bg-accent-600 text-white font-bold rounded-lg text-lg hover:bg-accent-700 transition-transform hover:scale-105 shadow-lg">
                                Start Learning for Free
                            </button>
                        </div>
                        <div className="relative h-64 md:h-full flex items-center justify-center">
                            <div className="w-full max-w-lg animate-float">
                                <svg viewBox="0 0 400 300" className="w-full h-auto">
                                    <g>
                                        <rect x="50" y="80" width="300" height="180" rx="20" fill="#E2E8F0" />
                                        <rect x="25" y="260" width="350" height="20" rx="10" fill="#94A3B8" />
                                        <rect x="70" y="90" width="260" height="150" fill="url(#screenGradient)"/>
                                        <defs>
                                            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#22D3EE" />
                                                <stop offset="100%" stopColor="#0891B2" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="200" cy="70" r="5" fill="#475569" />
                                        <text x="120" y="150" fill="white" fontSize="24" fontFamily="monospace" className="font-bold">&lt;Hello</text>
                                        <text x="160" y="180" fill="white" fontSize="24" fontFamily="monospace" className="font-bold">World/&gt;</text>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                
                 {/* How it works */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 scroll-animate">
                            <h3 className="text-base font-semibold text-accent-600 uppercase tracking-wider">How It Works</h3>
                            <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">A Simple Path to Mastery</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                             <div className="scroll-animate" style={{transitionDelay: '0ms'}}>
                                <div className="w-20 h-20 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto"><CodeBracketIcon className="w-10 h-10"/></div>
                                <h4 className="mt-4 text-xl font-bold">1. Learn</h4>
                                <p className="mt-2 text-slate-600">Engage with bite-sized lessons, clear explanations, and helpful diagrams that break down complex topics.</p>
                            </div>
                            <div className="scroll-animate" style={{transitionDelay: '200ms'}}>
                                <div className="w-20 h-20 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto"><BeakerIcon className="w-10 h-10"/></div>
                                <h4 className="mt-4 text-xl font-bold">2. Practice</h4>
                                <p className="mt-2 text-slate-600">Apply what you've learned in safe, interactive simulators for everything from file management to writing code.</p>
                            </div>
                            <div className="scroll-animate" style={{transitionDelay: '400ms'}}>
                                <div className="w-20 h-20 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto"><TrophyIcon className="w-10 h-10"/></div>
                                <h4 className="mt-4 text-xl font-bold">3. Master</h4>
                                <p className="mt-2 text-slate-600">Solidify your knowledge with weekly assessments and get instant, AI-powered feedback to guide your growth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 scroll-animate">
                            <h3 className="text-base font-semibold text-accent-600 uppercase tracking-wider">Everything You Need</h3>
                            <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">A Better Way to Learn</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: <GraduationCapIcon className="w-8 h-8"/>, title: "Structured Curriculum", text: "Follow a 5-part, 15-week curriculum designed to take you from absolute novice to confident user and aspiring programmer." },
                                { icon: <BeakerIcon className="w-8 h-8"/>, title: "Interactive Simulators", text: "Practice in a safe environment with simulators for file systems, web browsers, code editors, and more." },
                                { icon: <LightBulbIcon className="w-8 h-8"/>, title: "AI-Powered Tutor", text: "Stuck on a concept? Get instant, personalized help from LogickTuts, your 24/7 AI learning companion." },
                                { icon: <CheckBadgeIcon className="w-8 h-8"/>, title: "AI-Graded Assessments", text: "Receive immediate, constructive feedback on your assessment answers to solidify your understanding." },
                                { icon: <ChartBarIcon className="w-8 h-8"/>, title: "Track Your Progress", text: "Visualize your journey through your personal profile, tracking completed lessons and assessment scores." },
                                { icon: <CpuChipIcon className="w-8 h-8"/>, title: "Real-World Skills", text: "Learn practical skills that matter, from online safety and productivity apps to version control with Git." },
                            ].map((feature, i) => (
                                <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 scroll-animate" style={{transitionDelay: `${i*100}ms`}}>
                                    <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <h4 className="mt-4 text-xl font-bold">{feature.title}</h4>
                                    <p className="mt-2 text-slate-600">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Curriculum Section */}
                <section id="curriculum" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 scroll-animate">
                             <h3 className="text-base font-semibold text-accent-600 uppercase tracking-wider">Learning Path</h3>
                            <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">Your Journey, Step-by-Step</p>
                        </div>
                        <div className="max-w-3xl mx-auto scroll-animate">
                            {curriculumParts.map((part, index) => (
                                <div key={index} className="border-b">
                                    <button onClick={() => toggleAccordion(index + 1)} className="w-full flex justify-between items-center p-6 text-left">
                                        <span className="text-xl font-bold flex items-center gap-3 text-slate-800"><span className="text-accent-500">{part.icon}</span>{part.name}</span>
                                        <span className={`transition-transform transform ${openAccordion === index + 1 ? 'rotate-180' : ''}`}>
                                            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </span>
                                    </button>
                                    {openAccordion === index + 1 && (
                                        <div className="px-6 pb-6 text-slate-600 animate-in">
                                            {part.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* AI Tutor Section */}
                 <section className="py-20 bg-slate-50">
                    <div ref={chatSectionRef} className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center scroll-animate">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Never Learn Alone</h3>
                            <p className="mt-4 text-lg text-slate-600">Our AI Tutor, LogickTuts, is integrated directly into your learning experience. It understands the context of your current lesson and provides instant, clear explanations whenever you need them—transforming confusion into confidence.</p>
                        </div>
                       <AnimatedChat />
                    </div>
                </section>
                
                 {/* Roadmap Section */}
                <section id="roadmap" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12 scroll-animate">
                            <h3 className="text-base font-semibold text-accent-600 uppercase tracking-wider">The Future of LogickTuts</h3>
                            <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">What's on the Horizon?</p>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Our curriculum is always growing. Here's a sneak peek at advanced topics we're planning to add.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto scroll-animate">
                            {[
                                { icon: <ShieldCheckIcon className="w-7 h-7" />, title: "Cybersecurity Essentials", text: "Learn to protect yourself and your data with fundamentals of online security, privacy, and threat detection." },
                                { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" /><path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125a1.125 1.125 0 0 1 1.125-1.125h6.75a1.125 1.125 0 0 1 1.125 1.125v15.75a1.125 1.125 0 0 1-1.125 1.125h-6.75a1.125 1.125 0 0 1-1.125-1.125V4.125Z" clipRule="evenodd" /></svg>, title: "Mobile App Basics", text: "Get an introduction to the concepts behind building simple applications for mobile devices." },
                                { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" clipRule="evenodd" /></svg>, title: "Intro to Game Dev", text: "Learn the core principles of game design and development using popular and accessible tools." },
                                { icon: <RocketLaunchIcon className="w-7 h-7" />, title: "Deploying Your Code", text: "Take the final step by learning how to take a web project you've built and publish it live on the internet." },
                            ].map(item => (
                                <div key={item.title} className="text-center">
                                    <div className="w-16 h-16 bg-white border-2 border-accent-200 text-accent-600 rounded-full flex items-center justify-center mx-auto">
                                        {item.icon}
                                    </div>
                                    <h4 className="mt-4 font-bold">{item.title}</h4>
                                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Final CTA */}
                <section className="py-20">
                    <div className="container mx-auto px-6 text-center scroll-animate">
                         <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Ready to Start Your Journey?</h3>
                         <p className="mt-4 max-w-xl mx-auto text-lg text-slate-600">Create your free account and begin your first lesson today. The digital world awaits.</p>
                          <button onClick={onGetStarted} className="mt-8 px-8 py-4 bg-accent-600 text-white font-bold rounded-lg text-lg hover:bg-accent-700 transition-transform hover:scale-105 shadow-lg">
                            Get Started Now
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-lg font-bold text-white">LogickTuts</p>
                    <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} LogickTuts. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
