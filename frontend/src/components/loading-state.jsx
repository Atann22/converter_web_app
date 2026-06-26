import React from "react"

export default function LoadingState({ status, message }) {
    if (!status) return null

    return (
        <div className="border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50 h-60 sm:h-64 2xl:h-80 shadow-inner text-center animate-pulse">
            <div className="w-12 h-12 2xl:w-16 2xl:h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin mb-3"></div>
            <p className="text-xs sm:text-sm 2xl:text-lg font-medium text-slate-600 animate-pulse">
                {message}
            </p>
        </div>
    )
}