import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Eye, EyeOff, ArrowRight, Sparkles, AlertCircle, Check } from 'lucide-react';

interface SignUpPageProps {
  onSwitchToSignIn: () => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onSwitchToSignIn }) => {
  const { signUp } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    if (!cleanName) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!cleanEmail) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }
    if (!password) {
      setErrorMessage('Please create a password for your account.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (!confirmPassword) {
      setErrorMessage('Please re-enter your password to confirm.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('The passwords do not match. Please verify both fields.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = signUp(cleanName, cleanEmail, password);
      setIsLoading(false);
      if (!res.success) {
        setErrorMessage(res.error || 'Could not create account. Please try again.');
      }
      // On success, AppContext automatically signs the user in and updates state!
    }, 350);
  };

  const isPasswordLongEnough = password.length >= 6;
  const doPasswordsMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2C22] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden selection:bg-[#E2D9CC] selection:text-[#16241A]">
      
      {/* Subtle ambient lighting */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F4EFEB] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E8E2D8] rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D8] p-8 sm:p-10 shadow-xl shadow-[#1E2C22]/5 space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Header */}
          <div className="text-center space-y-1.5">
            <h1 className="font-editorial text-5xl sm:text-6xl tracking-tight text-[#1E2C22] leading-none">
              Lifeful
            </h1>
            <p className="text-xs text-[#4A5B4F] pt-1">
              Create your account
            </p>
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
            
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#1E2C22] block">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="e.g. Maya Sharma"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/50 focus:bg-white focus:outline-none focus:border-[#1E2C22] focus:ring-1 focus:ring-[#1E2C22] transition-all"
                autoComplete="name"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#1E2C22] block">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="name@domain.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/50 focus:bg-white focus:outline-none focus:border-[#1E2C22] focus:ring-1 focus:ring-[#1E2C22] transition-all"
                autoComplete="email"
              />
            </div>

            {/* Create Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#1E2C22] block">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="At least 6 characters"
                  className="w-full px-4 py-2.5 pr-11 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/50 focus:bg-white focus:outline-none focus:border-[#1E2C22] focus:ring-1 focus:ring-[#1E2C22] transition-all"
                  autoComplete="new-password"
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

            {/* Re-enter Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#1E2C22] block">
                Re-enter Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="Repeat your password"
                  className="w-full px-4 py-2.5 pr-11 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/50 focus:bg-white focus:outline-none focus:border-[#1E2C22] focus:ring-1 focus:ring-[#1E2C22] transition-all"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A5B4F] hover:text-[#1E2C22] p-1 transition-colors"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Clear Requirement Indicators */}
            <div className="pt-1 text-[11px] text-[#4A5B4F] space-y-1">
              <div className="flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded-full flex items-center justify-center text-[8px] ${
                  isPasswordLongEnough ? 'bg-[#2D6A4F] text-white' : 'bg-[#E8E2D8] text-[#4A5B4F]'
                }`}>
                  {isPasswordLongEnough ? '✓' : '•'}
                </span>
                <span className={isPasswordLongEnough ? 'text-[#2D6A4F] font-medium' : ''}>
                  Minimum 6 characters
                </span>
              </div>
              {confirmPassword.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full flex items-center justify-center text-[8px] ${
                    doPasswordsMatch ? 'bg-[#2D6A4F] text-white' : 'bg-[#C85A32] text-white'
                  }`}>
                    {doPasswordsMatch ? '✓' : '✕'}
                  </span>
                  <span className={doPasswordsMatch ? 'text-[#2D6A4F] font-medium' : 'text-[#C85A32]'}>
                    {doPasswordsMatch ? 'Passwords match' : 'Passwords do not match yet'}
                  </span>
                </div>
              )}
            </div>

            {/* Create Account Primary Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1E2C22] hover:bg-[#2D4233] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-70"
              >
                <span>{isLoading ? 'Creating Account...' : 'Create Account'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4 text-[#C85A32]" />}
              </button>
            </div>

          </form>

          {/* Already have an account? Sign In */}
          <div className="text-center pt-2 border-t border-[#E8E2D8]/80 text-xs text-[#4A5B4F]">
            <span>Already have an account? </span>
            <button
              onClick={onSwitchToSignIn}
              className="font-semibold text-[#1E2C22] hover:text-[#C85A32] underline transition-colors cursor-pointer ml-1"
            >
              Sign In
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
