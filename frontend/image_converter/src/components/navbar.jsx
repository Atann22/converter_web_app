import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MyLogo from "../assets/react.svg"

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
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-bold text-2xl text-indigo-600 flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('/')}>
                    <img src={MyLogo} alt="FixPict" className="w-10" />
                    <span className="tracking-tight">FixPict</span>
                </div>

                <div className="hidden md:flex items-center gap-6  font-medium text-slate-600">
                    <button onClick={() => navigateTo('/')} className="hover:text-indigo-600">Home</button>
                    <div className="relative">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-indigo-600 flex items-center gap-0.5 py-1">Tools <span>▾</span></button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-1 w-48 bg-white border-slate-200 rounded-lg shadow-lg py-1 flex flex-col text-left animate-in fade-in slide-in-from-top-1">
                                <button onClick={() => navigateTo('/convert')} className="px-4 py-2 hover:bg-slate-50 text-left text-xs sm:text-sm">Convert Image</button>
                                <button onClick={() => navigateTo('/compress')} className="px-4 py-2 hover:bg-slate-50 text-left text-xs sm:text-sm">Compress Image</button>
                                <button onClick={() => navigateTo('/resize')} className="px-4 py-2 hover:bg-slate-50 text-left text-xs sm:text-sm">Social Resize</button>
                            </div>
                        )}
                    </div>
                    <button onClick={() => navigateTo('/about')} className="hover:text-indigo-600">About</button>
                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
                    </svg>
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 shadow-inner flex flex-col">
                    <button onClick={() => navigateTo('/')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Home</button>
                    <div className="border-t border-slate-100 my-1"></div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-2">Tools</p>
                    <button onClick={() => navigateTo('/convert')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Convert Image</button>
                    <button onClick={() => navigateTo('/compress')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Compress Image</button>
                    <button onClick={() => navigateTo('/resize')} className="w-full text-left py-2 px-6 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Social Resize</button>
                    <div className="border-t border-slate-100 my-1"></div>
                    <button onClick={() => navigateTo('/about')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">About</button>
                </div>
            )}
        </nav>
    )
}