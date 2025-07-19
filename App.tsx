

import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';
import { supabase } from './services/supabaseClient';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import type { Curriculum, Week, Lesson, Activity, Question, Assessment, Progress, InteractiveComponentType, DiagramComponentType, Part, FSFile, FSFolder, FSNode, ChatMessage, PartAssessment, WeeklyAssessment, PracticalExercise, AssessmentProgress, AssessmentResult, AssessmentGrade, User, AppView } from './types';
import { LaptopAnatomyDiagram, PowerFlowDiagram, DesktopMetaphorDiagram, MouseActionsDiagram, KeyboardLayoutDiagram, FolderHierarchyDiagram, HardwareSoftwareDiagram, WindowControlsDiagram, InternetConnectionDiagram, URLAnatomyDiagram, WordProcessorUIDiagram, SpreadsheetUIDiagram, EmailCompositionDiagram, CloudStorageDiagram, TeaMakingFlowchart, LogicConceptsDiagram, PythonInstallationFlow, VariableBoxDiagram, UserInputFlowDiagram, ConditionalFlowDiagram, ForLoopDiagram, WhileLoopDiagram, FunctionAnatomyDiagram, VersionControlProblemDiagram, GitWorkflowDiagram, ClientServerDiagram, TracebackDiagram, TryExceptFlowDiagram, WebTechTrioDiagram, JSEventLoopDiagram } from './components/Drawing';
import { AuthPage } from './components/AuthPage';
import { LandingPage } from './components/LandingPage';
import { ProfilePage } from './components/ProfilePage';
import { getAIResponse, getAIAssessmentAndGrade } from './services/geminiService';
import { assessmentsData } from './assessmentData';
import { curriculumData } from './data/curriculumData';
import {
    ComponentHunt, MousePractice, PowerOn, FileSystem, TypingTutor, WindowManagement, Settings, DesktopExplorer,
    KeyboardExplorer, WebBrowserSimulator, OnlineSafetyQuiz, WordProcessorSimulator, SpreadsheetSimulator, EmailSimulator,
    CloudStorageSimulator, AlgorithmBuilder, LogicQuiz, PythonSetupGuide, VariableExplorer, CodeEditor, HelloWorldCodeEditor,
    ConditionalLogicExplorer, LoopVisualizer, FunctionBuilder, GitSimulator, WebPlayground, DebuggingChallenge,
    ErrorHandlingSimulator, PortfolioBuilder, InteractivePortfolio, ExternalComponentExplorer
} from './components/Simulators';


// --- SVG Icons ---

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-1.835a6.01 6.01 0 0 0 0-3.83A6.01 6.01 0 0 0 12 5.25a6.01 6.01 0 0 0-1.5 1.835a6.01 6.01 0 0 0 0 3.83a6.01 6.01 0 0 0 1.5 1.835M12 18v-5.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 16.5h4.5m-4.5 0a2.25 2.25 0 0 1-2.25-2.25V12a2.25 2.25 0 0 1 2.25-2.25h.375m-3.625 4.5V12a2.25 2.25 0 0 1 2.25-2.25h.375m3.625 4.5h.375a2.25 2.25 0 0 0 2.25-2.25V12a2.25 2.25 0 0 0-2.25-2.25h-3.375m-3.625 4.5c.375 1.392 1.392 2.25 2.625 2.25h3.375c1.233 0 2.25-.858 2.625-2.25" />
    </svg>
);

const PaperAirplaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
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

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);

const PencilSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);

const BeakerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-1.57.874c-.451.25-.98.25-1.431 0l-1.57-.874M19.8 14.5a2.25 2.25 0 0 0 .659-1.591V8.82c0-.597-.237-1.17-.659-1.591L14.25 5.25M5 14.5a2.25 2.25 0 0 1-.659-1.591V8.82c0-.597.237-1.17.659-1.591L9.75 5.25m0 0c-.251.023-.501.05-.75.082M5 14.5l1.57.874c.451.25.98.25 1.431 0l1.57-.874m0 0c.251.023.501.05.75.082M5 21h14a2.25 2.25 0 0 0 2.25-2.25v-2.25a2.25 2.25 0 0 0-2.25-2.25H5a2.25 2.25 0 0 0-2.25 2.25v2.25A2.25 2.25 0 0 0 5 21Z" />
    </svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

const PencilIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" /><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" /></svg>
);

const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
);
const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);


// --- MAPPING OF INTERACTIVE COMPONENTS ---

const interactiveComponentMap: Record<InteractiveComponentType, () => JSX.Element> = {
    ComponentHunt,
    MousePractice,
    PowerOn,
    FileSystem,
    TypingTutor,
    WindowManagement,
    Settings,
    DesktopExplorer,
    KeyboardExplorer,
    WebBrowserSimulator,
    OnlineSafetyQuiz,
    WordProcessorSimulator,
    SpreadsheetSimulator,
    EmailSimulator,
    CloudStorageSimulator,
    AlgorithmBuilder,
    LogicQuiz,
    PythonSetupGuide,
    VariableExplorer,
    CodeEditor,
    HelloWorldCodeEditor,
    ConditionalLogicExplorer,
    LoopVisualizer,
    FunctionBuilder,
    GitSimulator,
    WebPlayground,
    DebuggingChallenge,
    ErrorHandlingSimulator,
    PortfolioBuilder,
    InteractivePortfolio,
    ExternalComponentExplorer,
};

const diagramComponentMap: Record<DiagramComponentType, () => JSX.Element> = {
    LaptopAnatomy: LaptopAnatomyDiagram,
    PowerFlow: PowerFlowDiagram,
    DesktopMetaphor: DesktopMetaphorDiagram,
    MouseActions: MouseActionsDiagram,
    KeyboardLayout: KeyboardLayoutDiagram,
    FolderHierarchy: FolderHierarchyDiagram,
    HardwareSoftware: HardwareSoftwareDiagram,
    WindowControls: WindowControlsDiagram,
    InternetConnectionDiagram: InternetConnectionDiagram,
    URLAnatomyDiagram: URLAnatomyDiagram,
    WordProcessorUIDiagram: WordProcessorUIDiagram,
    SpreadsheetUIDiagram: SpreadsheetUIDiagram,
    EmailCompositionDiagram: EmailCompositionDiagram,
    CloudStorageDiagram: CloudStorageDiagram,
    TeaMakingFlowchart,
    LogicConceptsDiagram,
    PythonInstallationFlow,
    VariableBoxDiagram,
    UserInputFlowDiagram,
    ConditionalFlowDiagram,
    ForLoopDiagram,
    WhileLoopDiagram,
    FunctionAnatomyDiagram,
    VersionControlProblemDiagram,
    GitWorkflowDiagram,
    ClientServerDiagram,
    TracebackDiagram,
    TryExceptFlowDiagram,
    WebTechTrioDiagram,
    JSEventLoopDiagram,
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const curriculum: Curriculum = curriculumData;
    const [user, setUser] = useState<User | null>(null);
    const [progress, setProgress] = useState<Progress>({});
    const [assessmentProgress, setAssessmentProgress] = useState<AssessmentProgress>({});
    const [view, setView] = useState<AppView>('lessons');
    const [currentWeeklyAssessment, setCurrentWeeklyAssessment] = useState<{ partIndex: number; weekIndex: number } | null>(null);
    const [showAuthPage, setShowAuthPage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [activePartIndex, setActivePartIndex] = useState(0);
    const [activeWeekIndex, setActiveWeekIndex] = useState(0);
    const [activeLessonIndex, setActiveLessonIndex] = useState(0);
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    const activePart = curriculum.parts[activePartIndex];
    const activeWeek = activePart?.weeks[activeWeekIndex];
    const activeLesson = activeWeek?.lessons[activeLessonIndex];

    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [chatInput, setChatInput] = useState("");
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatMessagesEndRef = useRef<HTMLDivElement>(null);
    
    // --- AUTHENTICATION & DATA ---
    useEffect(() => {
        const fetchUserData = async (supabaseUser: SupabaseUser) => {
            // 1. Fetch user profile
            const { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('username')
                .eq('id', supabaseUser.id)
                .single();

            if (profileError || !profile) {
                console.error("Error fetching profile:", profileError?.message);
                await supabase.auth.signOut(); // Log out if profile is missing
                setIsLoading(false);
                return;
            }

            const appUser: User = {
                id: supabaseUser.id,
                email: supabaseUser.email!,
                username: profile.username
            };
            setUser(appUser);

            // 2. Fetch lesson progress
            const { data: lessonData, error: lessonError } = await supabase
                .from('lesson_progress')
                .select('lesson_id')
                .eq('user_id', supabaseUser.id);
            
            if (lessonData) {
                const newProgress: Progress = lessonData.reduce((acc, item) => ({...acc, [item.lesson_id]: 'completed'}), {});
                setProgress(newProgress);
            } else if (lessonError) {
                console.error("Error fetching lesson progress:", lessonError.message);
            }

            // 3. Fetch assessment progress
            const { data: assessmentData, error: assessmentError } = await supabase
                .from('assessment_progress')
                .select('question_key, grade, feedback, answer')
                .eq('user_id', supabaseUser.id);

            if (assessmentData) {
                const newAssessmentProgress: AssessmentProgress = assessmentData.reduce((acc, item) => ({
                    ...acc, 
                    [item.question_key]: { grade: item.grade, feedback: item.feedback, answer: item.answer }
                }), {});
                setAssessmentProgress(newAssessmentProgress);
            } else if(assessmentError) {
                console.error("Error fetching assessment progress:", assessmentError.message);
            }
            setIsLoading(false);
        };

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session?.user) {
                fetchUserData(session.user);
            } else if (event === 'SIGNED_OUT') {
                setUser(null);
                setProgress({});
                setAssessmentProgress({});
                setShowAuthPage(false);
                setView('lessons');
                setIsLoading(false);
            }
        });

        // Check initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                fetchUserData(session.user);
            } else {
                setIsLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogin = async (identifier: string, password: string): Promise<{ success: boolean, message: string }> => {
        let email = identifier;
        // Basic check if it's not an email, assume it's a username
        if (!identifier.includes('@')) {
            const { data, error } = await supabase
                .from('profiles')
                .select('email')
                .eq('username', identifier)
                .single();
            
            if (error || !data) return { success: false, message: "Invalid username or password." };
            email = data.email;
        }

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return { success: false, message: error.message };
        return { success: true, message: "Logged in successfully." };
    };

    const handleSignup = async (username: string, email: string, password: string): Promise<{ success: boolean, message: string }> => {
        // Check for username uniqueness first, as this is a good client-side check.
        const { data: existingProfile } = await supabase.from('profiles').select('id').eq('username', username).single();
        if (existingProfile) {
            return { success: false, message: "Username already exists." };
        }
    
        // Pass username in metadata for the server-side trigger to use.
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username: username,
                }
            }
        });
    
        if (authError) {
            return { success: false, message: authError.message };
        }
        if (!authData.user) {
            return { success: false, message: "Could not create user." };
        }
        
        // The database trigger 'on_auth_user_created' will now automatically create the profile.
        // We no longer need to insert it from the client side, which fixes the race condition.
    
        // For signups with email verification, inform the user.
        if (authData.user.identities?.length === 0) {
            return { success: true, message: "Please check your email to verify your account." };
        }
        
        return { success: true, message: "Account created successfully." };
    };

     const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error logging out:", error.message);
        }
    };

    // --- NAVIGATION AND PROGRESS ---

    const handleSelectLesson = (pIndex: number, wIndex: number, lIndex: number) => {
        setActivePartIndex(pIndex);
        setActiveWeekIndex(wIndex);
        setActiveLessonIndex(lIndex);
        setSidebarOpen(false);
        setView('lessons');
    };
    
    const markLessonCompleted = useCallback(async () => {
        if (activeLesson && user) {
            const lessonId = activeLesson.id;
            setProgress(prev => ({ ...prev, [lessonId]: 'completed' })); // Optimistic update
            const { error } = await supabase.from('lesson_progress').upsert({ user_id: user.id, lesson_id: lessonId });
            if (error) {
                console.error("Error saving lesson progress:", error);
                setProgress(prev => { // Revert on error
                    const newProgress = { ...prev };
                    delete newProgress[lessonId];
                    return newProgress;
                });
            }
        }
    }, [activeLesson, user]);

    const proceedToNextLesson = () => {
        const lessonCountInWeek = activeWeek.lessons.length;
        if (activeLessonIndex < lessonCountInWeek - 1) {
            setActiveLessonIndex(prev => prev + 1);
        } else {
            const weekCountInPart = activePart.weeks.length;
            if (activeWeekIndex < weekCountInPart - 1) {
                setActiveWeekIndex(prev => prev + 1);
                setActiveLessonIndex(0);
            } else {
                if (activePartIndex < curriculum.parts.length - 1) {
                    setActivePartIndex(prev => prev + 1);
                    setActiveWeekIndex(0);
                    setActiveLessonIndex(0);
                } else {
                    alert("Congratulations! You've completed all the lessons and assessments!");
                }
            }
        }
        setView('lessons');
    };

    const goToNextLesson = () => {
        markLessonCompleted();
        
        const isLastLessonOfWeek = activeLessonIndex >= activeWeek.lessons.length - 1;
        const weekNumber = activeWeek.week;
        const partAssessment = assessmentsData.find(pa => pa.part === activePartIndex + 1);
        const weeklyAssessment = partAssessment?.weeklyAssessments.find(wa => wa.week === weekNumber);

        if (isLastLessonOfWeek && weeklyAssessment) {
            setView('weekly-assessment');
            setCurrentWeeklyAssessment({ partIndex: activePartIndex, weekIndex: activeWeekIndex });
        } else {
            proceedToNextLesson();
        }
    };

    const goToPreviousLesson = () => {
        if (activeLessonIndex > 0) {
            setActiveLessonIndex(prev => prev - 1);
            return;
        }

        if (activeWeekIndex > 0) {
            const prevWeek = activePart.weeks[activeWeekIndex - 1];
            setActiveWeekIndex(prev => prev - 1);
            setActiveLessonIndex(prevWeek.lessons.length - 1);
            return;
        }

        if (activePartIndex > 0) {
            const prevPart = curriculum.parts[activePartIndex - 1];
            const prevWeek = prevPart.weeks[prevPart.weeks.length - 1];
            setActivePartIndex(prev => prev - 1);
            setActiveWeekIndex(prevPart.weeks.length - 1);
            setActiveLessonIndex(prevWeek.lessons.length - 1);
        }
    };

    // --- CHAT FUNCTIONALITY ---
    const scrollToBottom = () => {
        chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [chatHistory]);

    useEffect(() => {
        if(chatOpen) {
            setChatHistory([{
                role: 'assistant',
                content: `Hi! I'm LogickTuts, your tutor. How can I help you with the lesson "${activeLesson?.title || 'anything'}" today?`
            }]);
        }
    }, [chatOpen, activeLesson]);

    const handleChatSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim() || isChatLoading) return;
    
        const newUserMessage: ChatMessage = { role: 'user', content: chatInput };
        const newHistory = [...chatHistory, newUserMessage];
        setChatHistory(newHistory);
        setChatInput("");
        setIsChatLoading(true);
    
        try {
            const aiResponse = await getAIResponse(newHistory, activeLesson);
            const newAssistantMessage: ChatMessage = { role: 'assistant', content: aiResponse };
            setChatHistory(prev => [...prev, newAssistantMessage]);
        } catch (error) {
            console.error("Chat submission error:", error);
            const errorMessage: ChatMessage = { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again." };
            setChatHistory(prev => [...prev, errorMessage]);
        } finally {
            setIsChatLoading(false);
        }
    };
    
    // --- ASSESSMENT HANDLING ---
    const handleAssessmentAnswer = async (questionKey: string, question: string, answer: string) => {
        if (!user) return;
        const tempResult: AssessmentResult = {
            grade: 'incorrect',
            answer,
            feedback: "Grading in progress...",
        };
        setAssessmentProgress(prev => ({ ...prev, [questionKey]: tempResult }));

        const result = await getAIAssessmentAndGrade(question, answer);
        const finalResult = { ...result, answer };
        setAssessmentProgress(prev => ({...prev, [questionKey]: finalResult }));

        const { error } = await supabase.from('assessment_progress').upsert({
            user_id: user.id,
            question_key: questionKey,
            grade: finalResult.grade,
            feedback: finalResult.feedback,
            answer: finalResult.answer
        }, { onConflict: 'user_id, question_key' });
        
        if (error) {
            console.error("Error saving assessment progress:", error.message);
        }
    }
    
    const getQuestionFromKey = (key: string, data: PartAssessment[]): string | null => {
        const match = key.match(/p(\d+)-w(\d+)-q(\d+)/);
        if (!match) return null;
        const [, partIdx, weekNum, qIdx] = match.map(Number);
        
        try {
            const partAssessment = data[partIdx];
            const weeklyAssessment = partAssessment.weeklyAssessments.find(wa => wa.week === weekNum);
            if (!weeklyAssessment) return null;
            return weeklyAssessment.reviewQuestions[qIdx];
        } catch (e) {
            return null;
        }
    };

    // -- RENDER LOGIC --
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-100">
                <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    if (!user) {
        if(showAuthPage) {
            return <AuthPage onLogin={handleLogin} onSignup={handleSignup} />;
        }
        return <LandingPage onGetStarted={() => setShowAuthPage(true)} />;
    }

    if (!activePart || !activeWeek || !activeLesson) {
        return <div>Loading curriculum...</div>;
    }
    
    const isLessonCompleted = progress[activeLesson.id] === 'completed';

    const ActivityComponent = ({ activity }: { activity: Activity }) => {
        const InteractiveComponent = activity.interactiveComponent ? interactiveComponentMap[activity.interactiveComponent] : null;
        const DiagramComponent = activity.diagramComponent ? diagramComponentMap[activity.diagramComponent] : null;

        return (
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
                <div className="flex items-start gap-3">
                    {activity.type === 'reading' && <BookOpenIcon className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />}
                    {activity.type === 'interactive' && <PencilSquareIcon className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />}
                    {activity.type === 'demonstration' && <BeakerIcon className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />}
                    {activity.type === 'practice' && <SparklesIcon className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />}
                    
                    <div>
                        <h4 className="text-xl font-bold text-slate-800">{activity.title}</h4>
                        <p className="mt-1 text-slate-600 whitespace-pre-line">{activity.description}</p>
                    </div>
                </div>
                {activity.details && (
                    <ul className="list-disc pl-10 space-y-1 text-slate-600">
                        {activity.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                )}
                {DiagramComponent && <div className="mt-4"><DiagramComponent /></div>}
                {InteractiveComponent && <div className="mt-4"><InteractiveComponent /></div>}
            </div>
        );
    };

    const AssessmentQuestion = ({ question, qIndex, partIndex, weekNumber }: { question: string, qIndex: number, partIndex: number, weekNumber: number }) => {
        const questionKey = `p${partIndex}-w${weekNumber}-q${qIndex}`;

        const result = assessmentProgress[questionKey];
        const [answer, setAnswer] = useState(result?.answer || '');
        const [submitted, setSubmitted] = useState(!!result);

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if (!answer.trim()) return;
            handleAssessmentAnswer(questionKey, question, answer);
            setSubmitted(true);
        };
        
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="font-semibold text-slate-800 mb-3">{qIndex + 1}. {question}</p>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Type your answer here..."
                        rows={4}
                        className="w-full p-2 border border-slate-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
                        disabled={submitted}
                    />
                    {!submitted && (
                        <button type="submit" className="mt-3 px-4 py-2 bg-accent-600 text-white font-semibold rounded-md hover:bg-accent-700 disabled:bg-slate-400">
                            Submit for Feedback
                        </button>
                    )}
                </form>
                {submitted && result && (
                    <div className="mt-4 animate-in">
                        <div className={`flex items-center gap-2 text-sm font-bold p-2 rounded-md ${
                            result.grade === 'correct' ? 'text-green-600 bg-green-100' : 
                            result.grade === 'partially_correct' ? 'text-yellow-600 bg-yellow-100' : 'text-red-600 bg-red-100'
                        }`}>
                            {result.grade === 'correct' && <CheckCircleIcon className="w-5 h-5"/>}
                            {result.grade === 'partially_correct' && <PencilIcon className="w-5 h-5"/>}
                            {result.grade === 'incorrect' && <XIcon className="w-5 h-5"/>}
                            <span>{result.grade.replace('_', ' ').toUpperCase()}</span>
                        </div>
                        <div className="mt-2 text-sm p-3 bg-slate-50 rounded-md border">
                            <p className="font-bold text-slate-500">LogickTuts's Feedback:</p>
                            <p className="mt-1 text-slate-700 whitespace-pre-wrap">{result.feedback}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const AssessmentPractical = ({ exercise }: { exercise: PracticalExercise }) => {
        const InteractiveComponent = exercise.interactiveComponent ? interactiveComponentMap[exercise.interactiveComponent] : null;
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="font-semibold text-slate-800 mb-3">{exercise.description}</p>
                {exercise.details && (
                    <ul className="list-disc pl-5 mb-4 text-slate-600 space-y-1">
                        {exercise.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                )}
                {InteractiveComponent 
                    ? <InteractiveComponent />
                    : <div className="text-center p-4 bg-slate-100 rounded-md text-slate-500">This exercise is to be completed on your own computer.</div>
                }
            </div>
        );
    };

    const WeeklyAssessmentComponent = () => {
        if (!currentWeeklyAssessment) return null;
        const { partIndex, weekIndex } = currentWeeklyAssessment;
        const partData = curriculum.parts[partIndex];
        const weekData = partData.weeks[weekIndex];
        const partAssessment = assessmentsData.find(pa => pa.part === partIndex + 1);
        const weeklyAssessment = partAssessment?.weeklyAssessments.find(wa => wa.week === weekData.week);

        if (!weeklyAssessment) {
            return (
                 <div className="max-w-4xl mx-auto animate-in space-y-8">
                     <p>No assessment found for this week.</p>
                     <button onClick={proceedToNextLesson} className="flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold text-lg shadow-md transition-transform hover:scale-105">
                        Continue to Next Lesson <ChevronRightIcon className="w-5 h-5" />
                    </button>
                 </div>
            );
        }

        return (
            <div className="max-w-4xl mx-auto animate-in">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{weeklyAssessment.title}</h1>
                <p className="mt-2 text-xl text-slate-600">Test your knowledge from <span className='font-semibold'>{weekData.title}</span>.</p>
                
                <div className="mt-8 space-y-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Review Questions (AI Graded)</h3>
                        <div className="space-y-4">
                            {weeklyAssessment.reviewQuestions.map((q, i) => (
                                <AssessmentQuestion key={i} question={q} qIndex={i} partIndex={partIndex} weekNumber={weekData.week} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Practical Exercises</h3>
                         <div className="space-y-4">
                            {weeklyAssessment.practicalExercises.map((ex, i) => (
                                <AssessmentPractical key={i} exercise={ex} />
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="mt-12 pt-8 border-t text-center">
                    <button onClick={proceedToNextLesson} className="flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold text-lg shadow-md transition-transform hover:scale-105 mx-auto">
                        Continue to Next Lesson <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </footer>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* --- Main container --- */}
            <div className="flex">
                {/* --- Sidebar --- */}
                <aside className={`fixed inset-y-0 left-0 z-30 w-72 bg-slate-800 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex-shrink-0`}>
                    <div className="p-4 flex justify-between items-center md:hidden">
                        <h2 className="text-xl font-bold">LogickTuts</h2>
                        <button onClick={() => setSidebarOpen(false)}><XIcon className="w-6 h-6" /></button>
                    </div>
                    <div className="p-4 border-b border-slate-700 hidden md:block">
                        <h2 className="text-2xl font-bold">LogickTuts</h2>
                        <p className="text-slate-400 text-sm">Computer Skills Launchpad</p>
                    </div>
                    
                    <nav className="p-2 space-y-1 overflow-y-auto h-[calc(100vh-140px)]">
                        {curriculum.parts.map((part, pIndex) => (
                            <div key={pIndex}>
                                <button
                                    onClick={() => setActivePartIndex(pIndex)}
                                    className={`w-full text-left p-2 rounded-md font-bold text-lg ${activePartIndex === pIndex ? 'bg-accent-600' : 'hover:bg-slate-700'}`}
                                >
                                    {part.title}
                                </button>
                                {activePartIndex === pIndex && (
                                    <div className="pl-2 mt-1 space-y-1">
                                        {part.weeks.map((week, wIndex) => (
                                            <div key={wIndex}>
                                                <h4 className="text-sm font-semibold uppercase text-slate-400 px-2 pt-2">{week.title}</h4>
                                                {week.lessons.map((lesson, lIndex) => (
                                                    <button
                                                        key={lesson.id}
                                                        onClick={() => handleSelectLesson(pIndex, wIndex, lIndex)}
                                                        className={`w-full text-left px-2 py-1.5 rounded-md text-sm flex items-center gap-2 ${activeLesson?.id === lesson.id ? 'bg-accent-500 text-white font-semibold' : 'hover:bg-slate-700/50'}`}
                                                    >
                                                        {progress[lesson.id] === 'completed' 
                                                            ? <CheckCircleIcon className="w-4 h-4 text-green-300 flex-shrink-0" />
                                                            : <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-slate-500"></div></div>
                                                        }
                                                        <span className="truncate">{lesson.title}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="absolute bottom-0 left-0 w-full p-2 border-t border-slate-700 bg-slate-800">
                         <button onClick={() => { setView('profile'); setSidebarOpen(false); }} className={`w-full flex items-center gap-3 p-3 rounded-md text-left font-semibold ${view === 'profile' ? 'bg-slate-700' : 'hover:bg-slate-700'}`}>
                             <UserCircleIcon className="w-6 h-6"/> {user.username}
                        </button>
                        <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 rounded-md text-left font-semibold hover:bg-slate-700 text-slate-300">
                            <LogoutIcon className="w-6 h-6"/> Logout
                        </button>
                    </div>
                </aside>

                {/* --- Main Content --- */}
                <main className="flex-1 flex flex-col h-screen">
                     {/* --- Header Bar --- */}
                    <header className="flex-shrink-0 bg-white border-b h-16 flex items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                           <button onClick={() => setSidebarOpen(true)} className="md:hidden">
                                <MenuIcon className="w-6 h-6" />
                            </button>
                            <div className="hidden sm:block">
                                <h3 className="text-xl font-bold">{view === 'lessons' ? activeLesson.title : view === 'weekly-assessment' ? 'Weekly Assessment' : 'Profile'}</h3>
                                <p className="text-sm text-slate-500">{view === 'lessons' && `Part ${activePartIndex + 1} | Week ${activeWeekIndex + 1}`}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button onClick={() => { setView('lessons'); setSidebarOpen(false); }} className={`px-3 py-1.5 text-sm font-semibold rounded-full ${view === 'lessons' ? 'bg-accent-500 text-white' : 'hover:bg-slate-100'}`}>Lessons</button>
                            <button onClick={() => setChatOpen(!chatOpen)} className="p-2 rounded-full hover:bg-slate-100 relative">
                                <LightbulbIcon className="w-6 h-6 text-yellow-500" />
                                {!isChatLoading && chatOpen && <div className="absolute top-0 right-0 w-3 h-3 bg-accent-500 rounded-full border-2 border-white"></div>}
                            </button>
                        </div>
                    </header>
                    
                    {/* --- Content Area --- */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                        {view === 'lessons' && (
                            <div className="max-w-4xl mx-auto animate-in space-y-8">
                                <header>
                                    <p className="text-sm font-semibold uppercase text-accent-600">{activeWeek.title}</p>
                                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-1">{activeLesson.title}</h1>
                                    <div className="mt-4 p-4 bg-accent-50 border-l-4 border-accent-400 rounded-r-lg">
                                        <h2 className="font-bold text-accent-800">Objectives for this lesson:</h2>
                                        <ul className="list-disc pl-5 mt-2 text-accent-700 space-y-1">
                                            {activeLesson.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                                        </ul>
                                    </div>
                                </header>
                                
                                {activeLesson.activities.map((activity, index) => (
                                    <ActivityComponent key={index} activity={activity} />
                                ))}

                                <footer className="flex justify-between items-center pt-8 border-t">
                                    <button onClick={goToPreviousLesson} className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold disabled:opacity-50" disabled={activePartIndex === 0 && activeWeekIndex === 0 && activeLessonIndex === 0}>
                                        <ChevronLeftIcon className="w-5 h-5" /> Previous
                                    </button>
                                     <button onClick={goToNextLesson} className="flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold text-lg shadow-md transition-transform hover:scale-105">
                                        {isLessonCompleted ? "Next" : "Mark as Complete & Continue"} <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                                </footer>
                            </div>
                        )}
                        {view === 'weekly-assessment' && <WeeklyAssessmentComponent />}
                        {view === 'profile' && (
                            <ProfilePage 
                                currentUser={user} 
                                curriculum={curriculum} 
                                progress={progress} 
                                assessmentProgress={assessmentProgress}
                                assessmentsData={assessmentsData}
                                getQuestionFromKey={getQuestionFromKey}
                            />
                        )}
                    </div>
                </main>
            </div>
            
             {/* --- AI Tutor Chat Window --- */}
            {chatOpen && (
                <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-xl shadow-2xl border flex flex-col animate-in-fast z-40">
                    <header className="p-4 border-b flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <LightbulbIcon className="w-6 h-6 text-yellow-500" />
                            <h3 className="font-bold">LogickTuts</h3>
                        </div>
                        <button onClick={() => setChatOpen(false)} className="p-1 text-slate-400 hover:text-slate-800"><XIcon className="w-5 h-5"/></button>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0"><LightbulbIcon className="w-5 h-5 text-accent-600"/></div>}
                                <div className={`max-w-xs p-3 rounded-lg ${msg.role === 'user' ? 'bg-accent-500 text-white' : 'bg-slate-100'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isChatLoading && (
                             <div className="flex gap-2 justify-start">
                                 <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0"><LightbulbIcon className="w-5 h-5 text-accent-600"/></div>
                                 <div className="max-w-xs p-3 rounded-lg bg-slate-100 flex items-center gap-1">
                                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                 </div>
                             </div>
                        )}
                         <div ref={chatMessagesEndRef} />
                    </div>
                    <form onSubmit={handleChatSubmit} className="p-4 border-t flex items-center gap-2">
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="flex-1 p-2 border border-slate-300 rounded-lg text-sm focus:ring-1 focus:ring-accent-500 focus:outline-none"
                            disabled={isChatLoading}
                        />
                        <button type="submit" className="p-2 bg-accent-500 text-white rounded-lg disabled:bg-slate-400" disabled={isChatLoading || !chatInput.trim()}>
                            <PaperAirplaneIcon className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            )}

        </div>
    );
};

export default App;
