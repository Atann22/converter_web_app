import React, { useRef } from "react";
import LoadingState from "./loading-state";

const max_size = 10 * 1024 * 1024

export default function Dropzone({ selectedFile, previewUrl, status, fileSize, loadingMessage, onFileSelected, onReset }) {
    const fileInputRef = useRef(null)

    const validateAndProcess = (file) => {
        if (!file) return

        const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

        if (!validTypes.includes(file.type)) {
            alert("Unsupported file format! Please use JPEG, JPG, PNG, or WEBP.")
            return
        }

        if (file.size > max_size) {
            alert("File size exceeds the 10 MB limit!")
            return
        }

        if (typeof onFileSelected === "function") {
            onFileSelected(file)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndProcess(e.dataTransfer.files[0]);
        }
    }

    const formatSizeDynamically = (bytes) => {
        if (!bytes) return "0 B"
        if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(2)} KB`
        }
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
    }

    return (
        <div className="w-full">
            {status ? (
                <LoadingState status={Boolean(status)} message={loadingMessage} />
            ) :
                !selectedFile ? (
                    <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current.click()}
                        className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center cursor-pointer transition-all h-64 sm:h-72 2xl:h-80 text-center group"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    validateAndProcess(e.target.files[0]);
                                }
                            }}
                            accept=".jpg,.jpeg,.png,.webp"
                            className="hidden"
                        />
                        <span className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">
                            <svg  className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-20 2xl:h-20 fill-[#f5d356]" viewBox="0 0 238.687 238.687">
                                <path d="M9.287 104.344h220.114c3.039 0 5.808 1.135 7.595 3.11.874.965 1.871 2.556 1.664 4.641l-10.773 108.326c-.372 3.742-4.438 6.923-9.258 6.923H22.96c-4.721 0-8.78-3.103-9.243-6.766L.044 112.143c-.266-2.106.712-3.691 1.579-4.676 1.757-2.008 4.622-3.123 7.664-3.123zM31.01 89.344V71.198c0-5.216 4.427-9.854 9.642-9.854h157.383c5.216 0 8.976 4.639 8.976 9.854v18.146h20V47.605c0-4.143-2.606-7.262-6.749-7.262H132.01v-4.467c0-14.037-9.021-24.533-20.723-24.533H31.793c-11.701 0-20.783 10.496-20.783 24.533v53.467h20z" />
                            </svg>
                        </span>
                        <p className="text-xs sm:text-sm 2xl:text-lg font-medium text-slate-600 dark:text-slate-300">
                            Drag & drop your image here, or <span className="text-indigo-600 underline">select image</span>
                        </p>
                        <p className="text-[11px] sm:text-xs 2xl:text-sm text-slate-400 mt-2 dark:text-slate-500">Supported formats: JPEG, JPG, PNG, WEBP</p>
                        <p className="text-[11px] sm:text-xs 2xl:text-sm text-slate-400 mt-2 dark:text-slate-500">Maximum file size: 10 MB</p>
                    </div>
                ) : (
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col items-center bg-slate-50 dark:bg-slate-900 h-60 sm:h-64 2xl:h-80 relative justify-center shadow-inner">
                        <img src={previewUrl} alt="Preview" className="max-h-full max-w-full object-contain rounded-lg p-2" />
                        <button onClick={onReset} className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-md transition-colors cursor-pointer">
                            ✕
                        </button>
                        <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-slate-950/90 backdrop-blur-sm p-2 rounded border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs 2xl:text-sm flex justify-between gap-2 text-slate-700 dark:text-slate-300">
                            <span className="truncate font-medium max-w-[60%]">{selectedFile.name}</span>
                            <span className="text-slate-500 dark:text-slate-400 shrink-0">{fileSize ? fileSize : formatSizeDynamically(selectedFile.size)}</span>
                        </div>
                    </div>
                )}
        </div>
    )
}