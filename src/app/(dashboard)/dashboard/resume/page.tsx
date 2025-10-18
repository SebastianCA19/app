"use client"

import { useState } from 'react';
import Input from "../components/Input";
import Select from "../components/Select";
import ResumeCard from "../components/ResumeCard";
import Pager from '../components/Pager';

export default function ResumeHome() {
    const [filters, setFilters] = useState({
        nombre: '',
        apellido: '',
        municipio: '',
        profesion: ''
    });
    const [isFiltering, setIsFiltering] = useState(false);

    const handleFilterChange = (field: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsFiltering(true);
        // Simulate filtering
        console.log('Filtering with:', filters);
        setTimeout(() => setIsFiltering(false), 500);
    };

    const handleReset = () => {
        setFilters({
            nombre: '',
            apellido: '',
            municipio: '',
            profesion: ''
        });
    };

    const hasActiveFilters = Object.values(filters).some(value => value !== '');

    return (
        <div className="bg-white w-full h-full rounded-l-none rounded-b-2xl md:rounded-l-3xl md:rounded-r-none shadow-none md:shadow-md flex flex-col p-6 overflow-hidden relative overflow-y-auto styled-scrollbars visible">
            {/* Header */}
            <div className="px-2 py-1 h-fit w-full flex flex-row justify-between items-center font-['roboto'] mb-2">
                <h1 className="font-bold text-2xl sm:text-3xl tracking-wider text-red-500">
                    Hojas de vida
                </h1>
            </div>

            {/* Filters Section */}
            <div className="px-2 py-4 font-['roboto'] rounded-xl mb-4">
                <div className="flex flex-row justify-between items-center mb-3">
                    <h2 className="text-lg sm:text-xl font-medium tracking-wider">
                        Filtrar por:
                    </h2>
                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={handleReset}
                            className="text-sm text-blue-400 hover:text-blue-600 hover:cursor-pointer underline transition-colors"
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>
                
                <div className="flex flex-col w-full justify-items-start items-start sm:flex-row sm:items-center gap-6 sm:gap-4 text-red-500 py-2 flex-wrap">
                    <div className="w-full sm:w-auto">
                        <Input 
                            label="Nombre"
                            value={filters.nombre}
                            onChange={(e: { target: { value: any; }; }) => handleFilterChange('nombre', e.target.value)}
                        />
                    </div>
                    <div className="w-full sm:w-auto">
                        <Input 
                            label="Apellido"
                            value={filters.apellido}
                            onChange={(e: { target: { value: any; }; }) => handleFilterChange('apellido', e.target.value)}
                        />
                    </div>
                    <div className="w-full sm:w-auto">
                        <Select 
                            label="Municipio"
                            value={filters.municipio}
                            onChange={(value) => handleFilterChange('municipio', value)}
                        />
                    </div>
                    <div className="w-full sm:w-auto">
                        <Input 
                            label="Profesión"
                            value={filters.profesion}
                            onChange={(e: { target: { value: any; }; }) => handleFilterChange('profesion', e.target.value)}
                        />
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button 
                            type="button"
                            onClick={handleSubmit}
                            disabled={isFiltering}
                            className="bg-red-500 rounded-2xl px-6 py-2 text-white hover:cursor-pointer hover:bg-red-600 transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isFiltering ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Filtrando...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
                                    </svg>
                                    Filtrar
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="px-2 mb-2">
                <h2 className="text-lg font-medium text-neutral-700 mb-3 font-['roboto']">
                    Resultados
                </h2>
            </div>

            {/* Resume Cards */}
            <div className="relative h-fit">
                {isFiltering && (
                    <div className="absolute inset-0 h-full bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                        <div className="flex flex-col items-center gap-3">
                            <div className="loader"></div>
                            <p className="text-neutral-600 font-medium">Cargando resultados...</p>
                        </div>
                    </div>
                )}
                <div className="space-y-0">
                    <ResumeCard id={1} />
                    <ResumeCard id={2} />
                    <ResumeCard id={3} />
                    <ResumeCard id={4} />
                    <ResumeCard id={5} />
                    <ResumeCard id={6} />
                </div>
            </div>
            
            <style jsx>{`
                .loader {
                    width: 48px;
                    height: 48px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #fb2c36;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>

            <div>
                <Pager 
                    currentPage={1}
                    totalPages={10}
                    totalItems={100}
                    itemsPerPage={10}
                    onPageChange={(page) => console.log('Go to page:', page)}
                />
            </div>

            {/* Empty State (show when no results) */}
            {/* Uncomment when implementing real filtering
            {filteredResumes.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-16 h-16 fill-neutral-300 mb-4">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                    <h3 className="text-xl font-medium text-neutral-600 mb-2">No se encontraron resultados</h3>
                    <p className="text-neutral-500">Intenta ajustar los filtros de búsqueda</p>
                </div>
            )}
            */}
        </div>
    );
}