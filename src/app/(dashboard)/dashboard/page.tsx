export default function Home(){
    return (
        <div className="bg-gradient-to-br from-white via-red-50 to-white w-full h-full rounded-l-none rounded-b-2xl md:rounded-l-3xl md:rounded-r-none shadow-none md:shadow-md flex items-center justify-center p-6 md:p-12 overflow-hidden relative overflow-y-none styled-scrollbars visible">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40 -ml-48 -mb-48"></div>
            
            {/* Main content */}
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto relative z-10 space-y-8">
                {/* Logo and welcome section */}
                <div className="flex flex-col items-center gap-6 animate-fade-in">
                    <div className="relative">
                        <img 
                            src="/logo.svg" 
                            alt="Logo de Sucre Que Queremos" 
                            className="h-32 w-32 md:h-40 md:w-40 relative z-10 drop-shadow-xl"
                        />
                    </div>
                    
                    <div className="text-center space-y-3">
                        <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 leading-tight">
                            BIENVENIDO AL PANEL DE CONTROL
                        </h1>
                        <div className="flex items-center justify-center gap-2">
                            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-red-400 rounded-full"></div>
                            <p className="text-red-600 font-semibold text-lg md:text-xl">
                                Sucre Que Queremos
                            </p>
                            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-red-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Instructions card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-red-100 w-full max-w-2xl">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg 
                                className="w-6 h-6 text-white" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-neutral-800 mb-2">
                                ¿Cómo empezar?
                            </h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Utiliza la barra de navegación lateral para acceder a las diferentes secciones del sistema. Cada opción te llevará a herramientas específicas para gestionar la información de manera eficiente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}