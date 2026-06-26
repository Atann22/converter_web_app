import { useNavigate } from "react-router-dom"

export default function ToolsCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 2xl:gap-12">
            <ToolsProps
                hvrColor="hover:border-indigo-500 dark:hover:border-indigo-400"
                icon={<svg className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none">
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V14.5858L7.79289 11.7929C8.18342 11.4024 8.81658 11.4024 9.20711 11.7929L13 15.5858L14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858V4C19 3.44772 18.5523 3 18 3ZM5 20V17.4142L8.5 13.9142L12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L15 16.4142L18.9269 20.3411L18.9367 20.3508C18.7946 20.7301 18.4288 21 18 21H6C5.44772 21 5 20.5523 5 20ZM6.41421 7H9V4.41421L6.41421 7ZM14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z" fill="#2563EB"></path>
                    </g>
                </svg>}
                title="Image Converter"
                desc="Convert your images to .JPG, .PNG, and .WEBP instantly."
                to="/convert"
                btnText="Convert Now"
                btnColor="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-blue-200 dark:shadow-none"
            />

            <ToolsProps
                hvrColor="hover:border-amber-500 dark:hover:border-amber-400"
                icon={<svg className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14" viewBox="0 0 54 54" fill="none">
                    <path d="M9 31.5V27H45V31.5H9ZM9 24.75V20.25H45V24.75H9ZM24.75 49.5V42.3L21.15 45.9L18 42.75L27 33.75L36 42.75L32.85 45.9L29.25 42.4125V49.5H24.75ZM27 18L18 9L21.15 5.85L24.75 9.45V2.25H29.25V9.45L32.85 5.85L36 9L27 18Z" fill="#F59E0B" />
                </svg>
                }
                title="Image Compressor"
                desc="Reduce image file size while maintaining the best quality possible."
                to="/compress"
                btnText="Compress Now"
                btnColor="bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-600 shadow-amber-200 dark:shadow-none"
            />

            <ToolsProps
                hvrColor="hover:border-rose-500 dark:hover:border-rose-400"
                icon={<svg className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14" viewBox="0 0 54 54" fill="none">
                    <path d="M38.25 45V9C39.4875 9 40.5469 9.44062 41.4281 10.3219C42.3094 11.2031 42.75 12.2625 42.75 13.5V40.5C42.75 41.7375 42.3094 42.7969 41.4281 43.6781C40.5469 44.5594 39.4875 45 38.25 45ZM9 49.5C7.7625 49.5 6.70312 49.0594 5.82187 48.1781C4.94062 47.2969 4.5 46.2375 4.5 45V9C4.5 7.7625 4.94062 6.70312 5.82187 5.82187C6.70312 4.94062 7.7625 4.5 9 4.5H29.25C30.4875 4.5 31.5469 4.94062 32.4281 5.82187C33.3094 6.70312 33.75 7.7625 33.75 9V45C33.75 46.2375 33.3094 47.2969 32.4281 48.1781C31.5469 49.0594 30.4875 49.5 29.25 49.5H9ZM47.25 40.5V13.5C48.1875 13.5 48.9844 13.8281 49.6406 14.4844C50.2969 15.1406 50.625 15.9375 50.625 16.875V37.125C50.625 38.0625 50.2969 38.8594 49.6406 39.5156C48.9844 40.1719 48.1875 40.5 47.25 40.5ZM9 45H29.25V9H9V45Z" fill="#F43F5E" />
                </svg>
                }
                title="Image Resizer"
                desc="Resize your images to any dimension you need with ease."
                to="/resize"
                btnText="Resize Now"
                btnColor="bg-rose-500 hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-600 shadow-rose-200 dark:shadow-none"
            />
        </div>
    )
}

function ToolsProps(props) {
    const navigate = useNavigate()

    return (
        <div className={`group border-2 border-slate-400 ${props.hvrColor} bg-slate-50/50 rounded-2xl p-5 2xl:p-8 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 transition-all flex flex-col min-h-40 sm:min-h-56 2xl:min-h-72 justify-between cursor-pointer`}>
            <div className="flex items-center gap-2 sm:gap-3 2xl:gap-5 mb-2 sm:mb-4 2xl:mb-6">
                <span className="text-2xl transition-transform duration-300 group-hover:scale-110 origin-left">{props.icon}</span>
                <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-slate-800 dark:text-slate-100">{props.title}</h3>
            </div>
            <div className="mb-6 2xl:mb-8">
                <p className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400">{props.desc}</p>
            </div>
            <button
                onClick={() => navigate(props.to)}
                className={`w-full py-2.5 2xl:py-3.5 rounded-lg text-white text-xs sm:text-sm 2xl:text-base font-semibold flex items-center justify-center gap-1.5 2xl:gap-2 transition-all shadow-sm cursor-pointer ${props.btnColor}`}
            >
                {props.btnText}
                <svg className="w-4 h-4 2xl:w-5 2xl:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    )
}