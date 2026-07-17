import React, { useEffect, useState } from "react"
import Dropzone from "../components/dropzone"
import axios from "axios"

export default function ConvertPage() {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [format, setFormat] = useState("")
    const [resultUrl, setResultUrl] = useState(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [status, setStatus] = useState(null)
    const [dynamicMessage, setDynamicMessage] = useState("Converting...")

    const formatOptions = ["jpg", "png", "webp"]

    useEffect(() => {
        if (!file) {
            setPreview(null)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const handleConvert = async () => {
        if (!file || !format) return

        setStatus("uploading")
        setDynamicMessage("Uploading...")

        try {
            const formData = new FormData()
            formData.append("file", file)
            formData.append("targetFormat", format)
            formData.append("action", "convert")

            const BACKEND_URL = `${import.meta.env.VITE_API_URL}/api/v1/images/process`; 

            const response = await axios.post(BACKEND_URL, formData, {
                responseType: "blob",
                onUploadProgress: (progressEvent) => {
                    const percenCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    if (percenCompleted === 100) {
                        setStatus("processing")
                        setDynamicMessage("Converting...")
                    }
                }
            })

            const blob = response.data
            if (blob.type === "application/json") {
                const text = await blob.text();
                const errorJson = JSON.parse(text);
                console.error("Error from backend disguised as Blob:", errorJson);
                alert(`Backend failure: ${errorJson.message || "A server error occurred."}`);
                setStatus(null);
                return
            }

            const downloadUrl = URL.createObjectURL(blob)

            setStatus(null)
            setResultUrl(downloadUrl)
        } catch (error) {
            console.error("Error while converting image:", error)
            alert("Failed to convert image.")
            setStatus(null)
        }
    }

    const handleResetAll = () => {
        setFile(null)
        setFormat("")
        setStatus(null)
        setResultUrl(null)
        setIsDropdownOpen(false)
    }

    const getConvertedFileName = () => {
        if (!file || !file.name) return "converted-image"

        const lastDotIndex = file.name.lastIndexOf('.')
        const baseName = lastDotIndex !== -1 ? file.name.substring(0, lastDotIndex) : file.name

        return format ? `${baseName}.${format}` : baseName
    }

    return (
        <div className="max-w-4xl 2xl:max-w-6xl mx-auto px-8 sm:px-4 py-20 sm:py-20 2xl:py-32">
            <h1 className="text-2xl sm:text-3xl 2xl:text-5xl font-bold mb-3 text-slate-800 dark:text-slate-100 text-center transition-all">Convert Image</h1>
            <p className="text-sm sm:text-base 2xl:text-xl mb-5 2xl:mb-16 font-medium text-slate-600 dark:text-slate-400 text-center transition-all">Upload an image and convert it to JPG, PNG, or WEBP in seconds.</p>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 sm:p-8 2xl:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 2xl:gap-16 mt-4 sm:mt-9 transition-all">
                {/* --- LEFT --- */}
                <div>
                    {resultUrl ? (
                        <div className="w-full min-h-65 sm:min-h-80 2xl:min-h-100 flex flex-col items-center justify-center border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 p-6">
                            <div className="w-full max-h-45 2xl:max-h-64 overflow-hidden rounded-xl flex items-center justify-center mb-4 shadow-sm bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-1">
                                <img src={resultUrl || preview || ""} alt="Preview" className="max-w-full max-h-42.5 2xl:max-h-60 object-contain rounded-lg" />
                            </div>

                            <span className="text-xs sm:text-sm 2xl:text-base font-bold text-slate-600 dark:text-slate-300 mb-1 text-center px-2 truncate max-w-full">
                                {getConvertedFileName()}
                            </span>

                            <span className="text-sm sm:text-base 2xl:text-lg font-bold text-green-800 dark:text-green-700">Completed</span>
                        </div>
                    ) : status !== null ? (
                        <div className="w-full min-h-65 sm:min-h-80 2xl:min-h-100 flex flex-col items-center justify-center border border-dashed border-indigo-200 dark:border-indigo-900 rounded-2xl bg-indigo-50/30 dark:bg-indigo-950/20 p-6">
                            <div className="animate-spin rounded-full h-10 w-10 2xl:h-14 2xl:w-14 border-b-2 border-indigo-600 dark:border-indigo-400 mb-4"></div>
                            <span className="text-sm 2xl:text-base font-semibold text-indigo-600 dark:text-indigo-400 animate-pulse">
                                {dynamicMessage}
                            </span>
                        </div>
                    ) : (
                        <Dropzone
                            selectedFile={file}
                            previewUrl={preview}
                            status={status}
                            loadingMessage="Converting..."
                            onFileSelected={(f) => setFile(f)}
                            onReset={handleResetAll}
                        />
                    )}
                </div>

                {/* --- RIGHT --- */}
                <div className="flex flex-col justify-center pt-6 md:pt-4 border-t md:border-t-0 md:border-l md:pl-8 2xl:pl-16 border-slate-100 dark:border-slate-800">
                    {!resultUrl ? (
                        <div>
                            <div className="relative mb-5 sm:mb-6 inline-block w-full">
                                <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 2xl:py-4 text-xs sm:text-sm 2xl:text-base font-medium text-slate-500 dark:text-slate-400 shadow-sm outline-none hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center justify-between cursor-pointer">
                                    <span className={format ? "font-bold uppercase text-slate-700 dark:text-slate-200" : ""}>
                                        {format ? format : "Choose format"}
                                    </span>
                                    <span className="text-slate-400 text-xs 2xl:text-sm transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                                </button>

                                {isDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                                        <div className="absolute left-0 mt-1.5 w-full bg-white dark:bg-slate-950 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 py-1.5 z-20 text-center">
                                            {formatOptions.map((opt) => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => { setFormat(opt); setResultUrl(null); setIsDropdownOpen(false); }}
                                                    className={`w-full text-center px-4 py-2.5 2xl:py-4 text-xs sm:text-sm 2xl:text-base font-bold uppercase transition-all block cursor-pointer ${format === opt
                                                        ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-extrabold'
                                                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400'
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
                                disabled={!file || !format || status !== null}
                                className={`w-full py-3 2xl:py-4 rounded-xl font-medium text-white text-xs sm:text-sm 2xl:text-base transition-all cursor-pointer ${(!file || !format) 
                                    ? 'bg-slate-300 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed' 
                                    : 'bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 shadow-md shadow-indigo-100 dark:shadow-none'}`}
                            >
                                Convert
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3.5 2xl:gap-6 w-full max-w-60 2xl:max-w-xs mx-auto items-center">
                            <button type="button" onClick={handleResetAll} className="w-full bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-400 font-medium py-3 2xl:py-4 px-4 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm 2xl:text-base transition-all text-center shadow-sm leading-tight cursor-pointer">
                                Convert Another Image
                            </button>
                            <a
                                href={resultUrl || "#"}
                                download={getConvertedFileName()}
                                className="w-full bg-green-700 dark:bg-green-600 hover:bg-green-800 dark:hover:bg-green-500 text-white font-medium py-3 2xl:py-4 px-4 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm 2xl:text-base transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                            >
                                <span>Download</span>
                                <svg className="w-4 h-4 2xl:w-5 2xl:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
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