import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Eye, EyeOff, ArrowRight, Sparkles, CheckCircle2, AlertCircle, X } from 'lucide-react';

interface SignInPageProps {
  onSwitchToSignUp: () => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ onSwitchToSignUp }) => {
  const { signIn } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Forgot password modal state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = signIn(cleanEmail, password);
      setIsLoading(false);
      if (!res.success) {
        setErrorMessage(res.error || 'Invalid email or password. Please try again.');
      }
    }, 300);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail || !forgotEmail.includes('@')) {
      return;
    }
    setForgotSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2C22] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden selection:bg-[#E2D9CC] selection:text-[#16241A]">
      
      {/* Subtle background ambient gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F4EFEB] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#E8E2D8] rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D8] p-8 sm:p-10 shadow-xl shadow-[#1E2C22]/5 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="font-editorial text-5xl sm:text-6xl tracking-tight text-[#1E2C22] leading-none">
              Lifeful
            </h1>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#1E2C22] block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="name@domain.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/50 focus:bg-white focus:outline-none focus:border-[#1E2C22] focus:ring-1 focus:ring-[#1E2C22] transition-all"
                autoComplete="email"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#1E2C22] block">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setForgotEmail(email);
                    setShowForgotModal(true);
                  }}
                  className="text-[11px] text-[#C85A32] hover:text-[#B54D27] transition-colors font-medium cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-11 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/50 focus:bg-white focus:outline-none focus:border-[#1E2C22] focus:ring-1 focus:ring-[#1E2C22] transition-all"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A5B4F] hover:text-[#1E2C22] p-1 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1E2C22] hover:bg-[#2D4233] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-70"
              >
                <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4 text-[#C85A32]" />}
              </button>
            </div>

          </form>

          {/* Quick Demo Hint */}
          <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8] text-[11px] text-[#4A5B4F] text-center">
            <span>Demo Account: </span>
            <button 
              type="button"
              onClick={() => {
                setEmail('maya@studio.design');
                setPassword('password123');
                setErrorMessage(null);
              }}
              className="text-[#1E2C22] font-semibold underline hover:text-[#C85A32]"
            >
              maya@studio.design / password123
            </button>
          </div>

          {/* Switch to Sign Up */}
          <div className="text-center pt-2 border-t border-[#E8E2D8]/80 text-xs text-[#4A5B4F]">
            <span>New user? </span>
            <button
              onClick={onSwitchToSignUp}
              className="font-semibold text-[#1E2C22] hover:text-[#C85A32] underline transition-colors cursor-pointer ml-1"
            >
              Sign Up
            </button>
          </div>

        </div>

      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-[#1E2C22]/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E8E2D8] max-w-sm w-full p-6 sm:p-8 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-[#E8E2D8]">
              <h3 className="font-editorial text-2xl text-[#1E2C22]">
                Reset Password
              </h3>
              <button
                onClick={() => {
                  setShowForgotModal(false);
                  setForgotSent(false);
                }}
                className="p-1 text-[#4A5B4F] hover:text-[#1E2C22]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!forgotSent ? (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <p className="text-xs text-[#4A5B4F]">
                  Enter your registered email address and we will generate a recovery instruction for your Lifeful account.
                </p>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] focus:outline-none focus:border-[#1E2C22]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1E2C22] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#2D4233] transition-colors"
                >
                  Send Recovery Link
                </button>
              </form>
            ) : (
              <div className="space-y-4 text-center py-2">
                <CheckCircle2 className="w-10 h-10 text-[#2D6A4F] mx-auto" />
                <p className="text-xs text-[#1E2C22] font-semibold">
                  Password recovery instructions sent to {forgotEmail}.
                </p>
                <p className="text-[11px] text-[#4A5B4F]">
                  You can also use the demo password: <span className="font-mono text-[#1E2C22]">password123</span>
                </p>
                <button
                  onClick={() => {
                    setShowForgotModal(false);
                    setForgotSent(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-medium text-[#1E2C22]"
                >
                  Back to Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
