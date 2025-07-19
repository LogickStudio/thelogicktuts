

import React, { useState } from 'react';

interface AuthPageProps {
    onLogin: (identifier: string, password: string) => Promise<{ success: boolean, message: string }>;
    onSignup: (username: string, email: string, password: string) => Promise<{ success: boolean, message: string }>;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onSignup }) => {
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setIsLoading(true);

        if (mode === 'signup') {
            if (!username.trim() || !email.trim() || !password.trim()) {
                setError("Username, email, and password cannot be empty.");
                setIsLoading(false);
                return;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                setError("Please enter a valid email address.");
                setIsLoading(false);
                return;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                setIsLoading(false);
                return;
            }
            const result = await onSignup(username, email, password);
            if (!result.success) {
                setError(result.message);
            } else {
                setMessage(result.message);
                // Don't clear form on success, user might need to verify email.
            }
        } else {
            if (!username.trim() || !password.trim()) {
                setError("Username/Email and password cannot be empty.");
                setIsLoading(false);
                return;
            }
            const result = await onLogin(username, password);
            if (!result.success) {
                setError(result.message);
            }
        }
        setIsLoading(false);
    };

    const toggleMode = () => {
        setMode(prev => prev === 'login' ? 'signup' : 'login');
        setError('');
        setMessage('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg animate-in">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900">Welcome to LogickTuts</h1>
                    <p className="text-slate-500 mt-2">
                        {mode === 'login' ? 'Sign in to continue your learning journey' : 'Create an account to get started'}
                    </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md text-center">{error}</p>}
                    {message && <p className="text-sm text-green-600 bg-green-100 p-3 rounded-md text-center">{message}</p>}
                    
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-slate-700">
                           {mode === 'login' ? 'Username or Email' : 'Username'}
                        </label>
                        <div className="mt-1">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
                            />
                        </div>
                    </div>

                    {mode === 'signup' && (
                        <div>
                            <label htmlFor="email"  className="block text-sm font-medium text-slate-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete={mode === 'login' ? "current-password" : "new-password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
                            />
                        </div>
                    </div>

                    {mode === 'signup' && (
                         <div>
                            <label htmlFor="confirm-password"  className="block text-sm font-medium text-slate-700">
                                Confirm Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
                                />
                            </div>
                        </div>
                    )}
                    
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Processing...' : (mode === 'login' ? 'Sign In' : 'Sign Up')}
                        </button>
                    </div>
                </form>
                
                <p className="text-center text-sm text-slate-500">
                    {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <button onClick={toggleMode} className="font-medium text-accent-600 hover:text-accent-500 ml-1">
                         {mode === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                </p>

            </div>
        </div>
    );
};