

import React, { useState, useMemo } from 'react';
import type { User, Curriculum, Progress, AssessmentProgress, PartAssessment, AssessmentGrade, Lesson } from '../types';

// --- ICONS (copied for standalone component) ---
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const XCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const PencilIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </svg>
);

// --- HELPER COMPONENTS ---

const CircularProgress: React.FC<{ percentage: number, label: string }> = ({ percentage, label }) => {
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <svg className="w-32 h-32 transform -rotate-90">
                <circle
                    className="text-slate-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="64"
                    cy="64"
                />
                <circle
                    className="text-accent-500"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="64"
                    cy="64"
                />
            </svg>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">{`${Math.round(percentage)}%`}</span>
            <p className="mt-2 font-semibold text-slate-700">{label}</p>
        </div>
    );
};

const Accordion: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100"
            >
                <h3 className="text-lg font-bold text-slate-800">{title}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-6 border-t animate-in">
                    {children}
                </div>
            )}
        </div>
    );
};

const getGradeInfo = (grade: AssessmentGrade) => {
    switch(grade) {
        case 'correct': return { text: "Correct", color: "text-green-600 bg-green-100", icon: <CheckCircleIcon className="w-5 h-5" /> };
        case 'partially_correct': return { text: "Partially Correct", color: "text-yellow-600 bg-yellow-100", icon: <PencilIcon className="w-5 h-5" /> };
        case 'incorrect': return { text: "Incorrect", color: "text-red-600 bg-red-100", icon: <XCircleIcon className="w-5 h-5" /> };
    }
}


// --- MAIN PROFILE PAGE COMPONENT ---

interface ProfilePageProps {
    currentUser: User;
    curriculum: Curriculum;
    progress: Progress;
    assessmentProgress: AssessmentProgress;
    assessmentsData: PartAssessment[];
    getQuestionFromKey: (key: string, data: PartAssessment[]) => string | null;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ currentUser, curriculum, progress, assessmentProgress, assessmentsData, getQuestionFromKey }) => {

    const allLessons = useMemo(() => curriculum.parts.flatMap(p => p.weeks.flatMap(w => w.lessons)), [curriculum]);
    
    const lessonsCompleted = Object.keys(progress).length;
    const totalLessons = allLessons.length;
    const lessonCompletionPercentage = totalLessons > 0 ? (lessonsCompleted / totalLessons) * 100 : 0;
    
    const { averageScore, totalGraded } = useMemo(() => {
        const grades = Object.values(assessmentProgress);
        if (grades.length === 0) return { averageScore: 0, totalGraded: 0 };

        const scoreMap: Record<AssessmentGrade, number> = {
            correct: 100,
            partially_correct: 50,
            incorrect: 0,
        };
        
        const totalScore = grades.reduce((sum, result) => sum + scoreMap[result.grade], 0);
        return { 
            averageScore: totalScore / grades.length,
            totalGraded: grades.length,
        };
    }, [assessmentProgress]);

    return (
        <div className="max-w-4xl mx-auto animate-in space-y-8">
            <header>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Your Profile</h1>
                <p className="mt-2 text-xl text-slate-600">Welcome back, <span className="font-bold text-accent-700">{currentUser.username}</span>! Here's your progress so far.</p>
            </header>

            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center justify-center relative">
                    <CircularProgress percentage={lessonCompletionPercentage} label="Lessons Completed" />
                    <p className="text-slate-500 mt-2">{lessonsCompleted} / {totalLessons} lessons</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center justify-center relative">
                    <CircularProgress percentage={averageScore} label="Average Score" />
                    <p className="text-slate-500 mt-2">{totalGraded} assessments graded</p>
                </div>
            </section>

            <section className="space-y-4">
                <Accordion title="Lesson Progress">
                   <div className="space-y-2">
                     {allLessons.map((lesson: Lesson) => (
                       <div key={lesson.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                         <span className="text-slate-700">{lesson.title}</span>
                         {progress[lesson.id] === 'completed' 
                            ? <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            : <div className="w-6 h-6 flex items-center justify-center"><div className="w-3 h-3 bg-slate-300 rounded-full"></div></div>
                         }
                       </div>
                     ))}
                   </div>
                </Accordion>
                <Accordion title="Assessment Review">
                    <div className="space-y-4">
                        {Object.entries(assessmentProgress).length > 0 ? Object.entries(assessmentProgress).map(([key, result]) => {
                           const questionText = getQuestionFromKey(key, assessmentsData);
                           if (!questionText) return null;

                           return (
                               <div key={key} className="bg-slate-50 p-4 rounded-lg border">
                                   <p className="font-semibold mb-2">{questionText}</p>
                                   <div className="bg-slate-200 p-3 rounded-md text-sm italic">
                                     <p className="font-bold text-slate-500">Your Answer:</p>
                                     <p>{result.answer}</p>
                                   </div>
                                   <div className="mt-4">
                                        <div className={`flex items-center gap-2 text-sm font-bold p-2 rounded-md ${getGradeInfo(result.grade).color}`}>
                                            {getGradeInfo(result.grade).icon}
                                            <span>{getGradeInfo(result.grade).text}</span>
                                        </div>
                                        <div className="mt-2 text-sm p-3 bg-white rounded-md border">
                                            <p className="font-bold text-slate-500">LogickTuts's Feedback:</p>
                                            <p className="mt-1 text-slate-700">{result.feedback}</p>
                                        </div>
                                    </div>
                               </div>
                           );
                        }) : (
                            <p className="text-center text-slate-500">You haven't submitted any assessments yet. Go to the "Assessments" tab to get started!</p>
                        )}
                    </div>
                </Accordion>
            </section>

        </div>
    );
};