import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LogoLight from "../assets/logo2.svg"
import LogoDark from "../assets/logo3.svg"

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigate = useNavigate()

    const navigateTo = (path) => {
        navigate(path);
        setDropdownOpen(false);
        setMobileMenuOpen(false);
    }

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-lg dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-bold text-2xl text-slate-900 dark:text-slate-100 flex items-center gap-1 cursor-pointer" onClick={() => navigateTo('/')}>
                    <img src={LogoLight} alt="FixPict" className="w-35 block dark:hidden" />
                    <img src={LogoDark} alt="FixPict" className="w-35 hidden dark:block" />
                </div>
                <div className="hidden md:flex items-center gap-6 font-medium text-slate-600 dark:text-slate-300">
                    <button onClick={() => navigateTo('/')} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Home</button>
                    <div className="relative">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-0.5 py-1 cursor-pointer">
                            Tools <span>▾</span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-lg shadow-lg py-1 flex flex-col text-left animate-in fade-in slide-in-from-top-1">
                                <button onClick={() => navigateTo('/convert')} className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-left text-xs sm:text-sm cursor-pointer">Convert Image</button>
                                <button onClick={() => navigateTo('/compress')} className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-left text-xs sm:text-sm cursor-pointer">Compress Image</button>
                                <button onClick={() => navigateTo('/resize')} className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-left text-xs sm:text-sm cursor-pointer">Social Resize</button>
                            </div>
                        )}
                    </div>
                    <button onClick={() => navigateTo('/about')} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">About</button>
                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
                    </svg>
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1 shadow-inner flex flex-col">
                    <button onClick={() => navigateTo('/')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Home</button>
                    <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 pt-2">Tools</p>
                    <button onClick={() => navigateTo('/convert')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">Convert Image</button>
                    <button onClick={() => navigateTo('/compress')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">Compress Image</button>
                    <button onClick={() => navigateTo('/resize')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">Social Resize</button>

                    <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>
                    <button onClick={() => navigateTo('/about')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">About</button>
                </div>
            )}
        </nav>
    )
}