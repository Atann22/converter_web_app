import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LogoLight from "../assets/logo1.png"
import LogoDark from "../assets/logo2.png"

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
            <div className="w-full max-w-480 mx-auto px-4 md:px-30 2xl:px-30 h-16 2xl:h-24 flex items-center justify-between">
                
                <div className="cursor-pointer shrink-0" onClick={() => navigateTo('/')}>
                    <img src={LogoLight} alt="FixPict" className="w-32 2xl:w-40 block dark:hidden" />
                    <img src={LogoDark} alt="FixPict" className="w-32 2xl:w-40 hidden dark:block" />
                </div>
                
                <div className="hidden md:flex items-center gap-8 2xl:gap-12 font-medium text-[18px] 2xl:text-[21px] text-slate-600 dark:text-slate-300 h-16">
                    <button 
                        onClick={() => navigateTo('/')} 
                        className="h-full flex items-center hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                    >
                        Home
                    </button>
                    
                    <div className="relative h-full flex items-center">
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)} 
                            className="h-full flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                        >
                            Tools 
                            <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {dropdownOpen && (
                            <div className="absolute top-16 2xl:top-20 right-0 w-48 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-b-lg shadow-lg py-2 flex flex-col text-left animate-in fade-in slide-in-from-top-2 z-50">
                                <button onClick={() => navigateTo('/convert')} className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-left text-sm cursor-pointer transition-colors">Image Converter</button>
                                <button onClick={() => navigateTo('/compress')} className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-left text-sm cursor-pointer transition-colors">Image Compressor</button>
                                <button onClick={() => navigateTo('/resize')} className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-left text-sm cursor-pointer transition-colors">Image Resizer</button>
                            </div>
                        )}
                    </div>
                </div>

                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
                    </svg>
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1 shadow-inner flex flex-col">
                    <button onClick={() => navigateTo('/')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Home</button>
                    <div className="border-t border-slate-100 dark:border-slate-800 my-2"></div>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 pt-1 pb-2">Tools</p>
                    <button onClick={() => navigateTo('/convert')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Convert Image</button>
                    <button onClick={() => navigateTo('/compress')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Compress Image</button>
                    <button onClick={() => navigateTo('/resize')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Image Resizer</button>
                </div>
            )}
        </nav>
    )
}