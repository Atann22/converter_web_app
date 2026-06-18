import React from "react"
import ToolsCard from "../components/tools-card"
import Advantage from "../components/advantage"

export default function Home() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <section className="w-full px-4 py-4 sm:py-6">
                <div className="max-w-6xl mx-auto p-8 sm:p-12 text-center">
                    <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Hero Section
                    </h1>
                    <p className="text-xs sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.
                    </p>
                </div>
            </section>
            <section className="max-w-6xl w-full mx-auto px-4 py-4">
                <ToolsCard />
            </section>

            <section id="about" className="max-w-6xl w-full mx-auto px-4 py-12 border-t md:border-t-0 border-slate-100">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-10 text-center">Our Superpowers</h2>
                <Advantage />
            </section>
        </div>
    )
}