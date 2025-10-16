"use client";
import React, { useState } from 'react';

export default function Home(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
      window.location.href = "/dashboard"
    };

    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="w-full max-w-5xl flex flex-col lg:flex-row rounded-2xl shadow-xl bg-white/50 backdrop-blur-sm overflow-hidden">
                
                {/* Left Side - Login Form */}
                <div className="w-full lg:w-2/5 p-6 lg:p-10 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full flex justify-center items-center flex-col">
                    {/* Header */}
                    <img src="/logo.svg" alt="Sucre Que Queremos Logo" className="w-12 h-12 lg:fixed lg:top-8 mb-2" />
                    <h1 className="text-2xl lg:text-3xl font-extrabold text-red-600 mb-2 text-center">
                    BIENVENIDO DE NUEVO
                    </h1>
                    <p className="text-base lg:text-xl font-bold text-red-600 text-center mb-8">
                    Inicia sesión para continuar
                    </p>
                    
                    {/* Form Fields */}
                    <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nombre de Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                    />
                    
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                    />
                    
                    <button
                        className="hover:cursor-pointer w-full p-3 lg:p-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-bold"
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </button>
                    </div>
                    
                    {/* Footer Info */}
                    <div className="text-center mt-6">
                    <p className="text-sm text-blue-600 mb-2">
                        ¿Olvidaste tu contraseña?
                    </p>
                    <p className="text-xs text-gray-600">
                        Comunícate con la persona que te contactó para cambiar tu contraseña
                    </p>
                    </div>
                </div>
                </div>
                
                {/* Right Side - Image Area */}
                <div className="w-full lg:w-3/5 h-64 lg:h-auto min-h-[185px] lg:min-h-[600px]">
                <div className="w-full h-full flex items-center justify-center relative">
                    <img src="/placeholder.webp" alt="Imagen del login" className="w-full h-full object-cover"/>
                </div>
                </div>
            </div>
            </div>
            
            <div className="fixed left-0 bottom-0 w-full -z-10">
            <img
                src="/wave.svg"
                alt="Wave background"
                className="w-full block"
            />
            </div>
        </>
    )
}