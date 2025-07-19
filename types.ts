


export type InteractiveComponentType = 'ComponentHunt' | 'MousePractice' | 'PowerOn' | 'FileSystem' | 'TypingTutor' | 'WindowManagement' | 'Settings' | 'ExternalComponentExplorer' | 'DesktopExplorer' | 'KeyboardExplorer' | 'WebBrowserSimulator' | 'OnlineSafetyQuiz' | 'WordProcessorSimulator' | 'SpreadsheetSimulator' | 'EmailSimulator' | 'CloudStorageSimulator' | 'AlgorithmBuilder' | 'LogicQuiz' | 'PythonSetupGuide' | 'VariableExplorer' | 'CodeEditor' | 'HelloWorldCodeEditor' | 'ConditionalLogicExplorer' | 'LoopVisualizer' | 'FunctionBuilder' | 'GitSimulator' | 'WebPlayground' | 'DebuggingChallenge' | 'ErrorHandlingSimulator' | 'PortfolioBuilder' | 'InteractivePortfolio';
export type DiagramComponentType = 'LaptopAnatomy' | 'PowerFlow' | 'DesktopMetaphor' | 'MouseActions' | 'KeyboardLayout' | 'FolderHierarchy' | 'HardwareSoftware' | 'WindowControls' | 'InternetConnectionDiagram' | 'URLAnatomyDiagram' | 'WordProcessorUIDiagram' | 'SpreadsheetUIDiagram' | 'EmailCompositionDiagram' | 'CloudStorageDiagram' | 'TeaMakingFlowchart' | 'LogicConceptsDiagram' | 'PythonInstallationFlow' | 'VariableBoxDiagram' | 'UserInputFlowDiagram' | 'ConditionalFlowDiagram' | 'ForLoopDiagram' | 'WhileLoopDiagram' | 'FunctionAnatomyDiagram' | 'VersionControlProblemDiagram' | 'GitWorkflowDiagram' | 'ClientServerDiagram' | 'TracebackDiagram' | 'TryExceptFlowDiagram' | 'WebTechTrioDiagram' | 'JSEventLoopDiagram';
export type AppView = 'lessons' | 'profile' | 'weekly-assessment';

export interface Activity {
  type: 'discussion' | 'demonstration' | 'reading' | 'interactive' | 'practice';
  title: string;
  description: string;
  details?: string[];
  interactiveComponent?: InteractiveComponentType;
  diagramComponent?: DiagramComponentType;
}

export interface Lesson {
  id: string; 
  day: number;
  title: string;
  objectives: string[];
  materials: string[];
  activities: Activity[];
}

export interface Week {
  week: number;
  title: string;
  lessons: Lesson[];
  assessment: Assessment;
}

export interface Part {
  title: string;
  description: string;
  weeks: Week[];
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Assessment {
  title: string;
  questions: Question[];
}

export interface Curriculum {
  parts: Part[];
}

export type Progress = Record<string, 'completed'>;

// Types for FileSystem Simulator
export interface FSFile {
  id: number;
  name: string;
  type: 'file';
  modified: number;
}

export interface FSFolder {
  id: number;
  name: string;
  type: 'folder';
  children: (FSFile | FSFolder)[];
  modified: number;
}

export type FSNode = FSFile | FSFolder;

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Types for Assessment feature
export interface PracticalExercise {
    description: string;
    details?: string[];
    interactiveComponent?: InteractiveComponentType;
}

export interface WeeklyAssessment {
    week: number;
    title:string;
    reviewQuestions: string[];
    practicalExercises: PracticalExercise[];
}

export interface PartAssessment {
    part: number;
    title: string;
    weeklyAssessments: WeeklyAssessment[];
}

export type AssessmentGrade = 'correct' | 'partially_correct' | 'incorrect';

export interface AssessmentResult {
    grade: AssessmentGrade;
    answer: string;
    feedback: string;
}

// key: "p{part}-w{week}-q{qIndex}"
export type AssessmentProgress = Record<string, AssessmentResult>;

// Type for Authentication
export interface User {
    id: string;
    username: string;
    email: string;
}