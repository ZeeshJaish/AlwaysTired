
const OfflinePage = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-offwhite px-4 text-center">
            <div className="max-w-md">
                <svg
                    className="mx-auto h-24 w-24 text-red-500 mb-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.163a1.5 1.5 0 01.143 1.052m-8.107 3.464A7.465 7.465 0 013 12a9.957 9.957 0 012.386-6.42" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                    No Internet Connection
                </h1>
                <p className="text-lg text-gray-600 mb-8 font-sans">
                    Please check your network settings and try again. We'll automatically reconnect when you're back online.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default OfflinePage;
