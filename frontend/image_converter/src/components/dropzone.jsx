import React, { useRef } from "react";

const max_size = 10 * 1024 * 1024

export default function Dropzone({ selectedFile, previewUrl, onFileSelected, onReset }) {
    const fileInputRef = useRef(null)

    const validate = (file) => {
        const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

        if (!validTypes.includes(file.type)) {
            alert("Unsupported file format! Please use JPG, PNG, or WEBP.")
            return
        }

        if (file.size > max_size) {
            alert("File size exceeds the 10 MB limit!")
            return
        }

        onFileSelected(file, URL.createObjectURL(file))
    }

    const handleDrop = (e) => {
        e.preventDefault();
        validate(e.dataTransfer.files[0]);
    }

    return (
        <div className="w-full">
            {!selectedFile ? (
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-indigo-500 bg-slate-50 hover:bg-indigo-50/30 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer transition-all h-60 sm:h-64 text-center group"
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                validate(e.target.files[0]);
                            }
                        }}
                        accept=".jpg,.jpeg,.png,.webp"
                        className="hidden"
                    />
                    <span className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">📁</span>
                    <p className="text-xs sm:text-sm font-medium text-slate-600">
                        Drag & drop your image here, or <span className="text-indigo-600 underline">select image</span>
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-2">Supported formats: JPEG, JPG, PNG, WEBP</p>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-2">Maximum file size: 10 MB</p>
                </div>
            ) : (
                <div className="border border-slate-200 rounded-xl p-4 flex flex-col items-center bg-slate-50 h-60 sm:h-64 relative justify-center shadow-inner">
                    <img src={previewUrl} alt="Preview" className="max-h-full max-w-full object-contain rounded-lg" />
                    <button onClick={onReset} className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-md transition-colors">
                        ✕
                    </button>
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded border border-slate-200 text-[11px] sm:text-xs flex justify-between gap-2">
                        <span className="truncate font-medium max-w-[60%]">{selectedFile.name}</span>
                        <span className="text-slate-500 shrink-0">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                    </div>
                </div>
            )}
        </div>
    )
}