import React, { useState, useEffect } from "react"
import ToolsCard from "../components/tools-card"
import Advantage from "../components/advantage"
import BgHeroLight from "../assets/bgHero1.png"
import BgHeroDark from "../assets/bgHero2.png"

export default function Home() {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark")

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"))
        }

        checkTheme()

        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="bg-transparent min-h-screen flex flex-col">
            <div
                className="w-full bg-cover bg-center bg-no-repeat transition-all duration-300 flex flex-col"
                style={{
                    backgroundImage: `url('${isDark ? BgHeroDark : BgHeroLight}')`
                }}
            >
                <section className="w-full px-4 pt-12 pb-2 sm:pt-15 sm:pb-6">
                    <div className="max-w-6xl mx-auto p-8 sm:p-10 text-center">
                        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            One Place for All Your Image Needs
                        </h1>
                        <p className="sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Easily convert, compress, and resize images without installing any software.
                        </p>
                    </div>
                </section>

                <section className="max-w-4xl w-full mx-auto px-12 sm:px-1 pb-16 sm:pb-22 relative z-10">
                    <ToolsCard />
                </section>
            </div>
            <section id="about" className="max-w-6xl w-full mx-auto px-6 py-20 md:border-t-0 border-slate-100 dark:border-slate-800">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-10 text-center">Our Superpowers</h2>
                <Advantage />
            </section>
        </div>
    )
}