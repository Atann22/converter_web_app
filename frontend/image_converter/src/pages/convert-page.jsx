import React, { useState } from "react"
import Dropzone from "../components/dropzone"

export default function ConvertPage() {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [format, setFormat] = useState("")
    const [resultUrl, setResultUrl] = useState(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const formatOptions = ["jpg", "png", "webp"]

    const handleConvert = () => {
        if (file && format) {
            setResultUrl(preview)
        }
    }

    const handleResetAll = () => {
        setFile(null)
        setPreview(null)
        setFormat("")
        setResultUrl(null)
        setIsDropdownOpen(false)
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6 sm:py-12">
            <h1 className="text-lg sm:text-3xl font-bold mb-1 text-slate-800 text-center">Convert Image</h1>
            <p className="text-xs mb-5 sm:text-sm font-medium text-slate-600 text-center">Upload an image and convert it to JPG, PNG, or WEBP in seconds.</p>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {/* --- KIRI --- */}
                <div>
                    {resultUrl ? (
                        <div className="w-full min-h-65 sm:min-h-80 flex flex-col items-center justify-center border border-dashed border-slate-200 rounded-2xl bg-slate-50/50 p-6">
                            <div className="w-full max-h-45 overflow-hidden rounded-xl flex items-center justify-center mb-4 shadow-sm bg-white border border-slate-100 p-1">
                                <img src={preview} alt="Preview" className="max-w-full max-h-42.5 object-contain rounded-lg" />
                            </div>

                            <span className="text-xs sm:text-sm font-bold text-slate-600 mb-1 text-center px-2 truncate max-w-full">
                                {file ? `${file.name.substring(0, file.name.lastIndexOf('.')) || file.name}.${format}` : `image.${format}`}
                            </span>

                            <span className="text-sm sm:text-base font-semibold text-slate-400">Completed</span>
                        </div>
                    ) : (
                        <Dropzone
                            selectedFile={file}
                            previewUrl={preview}
                            onFileSelected={(f, url) => { setFile(f); setPreview(url); }}
                            onReset={handleResetAll}
                        />
                    )}
                </div>

                {/* --- KANAN --- */}
                <div className="flex flex-col justify-center pt-6 md:pt-4 border-t md:border-t-0 md:border-l md:pl-8 border-slate-100">
                    {!resultUrl ? (
                        <div>
                            <div className="relative mb-5 sm:mb-6 inline-block w-full">
                                <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-slate-500 shadow-sm outline-none hover:border-slate-300 transition-all flex items-center justify-between">
                                    <span className={format ? "font-bold uppercase text-slate-700" : ""}>
                                        {format ? format : "Choose format"}
                                    </span>
                                    <span className="text-slate-400 text-xs transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                                </button>

                                {isDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                                        <div className="absolute left-0 mt-1.5 w-full bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-20 text-center">
                                            {formatOptions.map((opt) => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => { setFormat(opt); setResultUrl(null); setIsDropdownOpen(false); }}
                                                    className={`w-full text-center px-4 py-2.5 text-xs sm:text-sm font-bold uppercase transition-all block ${format === opt
                                                        ? 'bg-indigo-50 text-indigo-600 font-extrabold'
                                                        : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                                                        }`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={handleConvert}
                                disabled={!file || !format}
                                className={`w-full py-3 rounded-xl font-medium text-white text-xs sm:text-sm transition-all ${(!file || !format) ? 'bg-slate-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-100'}`}
                            >
                                Convert
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3.5 w-full max-w-60 mx-auto items-center">
                            <button type="button" onClick={handleResetAll} className="w-full bg-white hover:bg-slate-50 text-slate-500 font-medium py-3 px-4 border border-slate-200 rounded-xl text-xs sm:text-sm transition-all text-center shadow-sm leading-tight">Convert Another Image</button>
                            <a className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-4 border border-slate-200 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm">
                                <span>Download</span>
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}