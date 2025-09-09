import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div id="hero" className="relative w-full h-[90vh] overflow-hidden">
        <Image 
          src="/hero.webp" 
          alt="Hero Image" 
          fill
          className="object-cover object-center rounded-b-xl"
          priority
        />  
        <div className="absolute inset-0 bg-red-600/10 rounded-b-xl z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-playfair">Bienvenido a Sucre Que Queremos</h1>
          <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-lg">Tu plataforma para un futuro mejor en Sucre</p>
          <a href="#about" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out drop-shadow-lg">Descubre Más</a>
        </div>
      </div>
      
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main About Section */}
          <section id="about" className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
              <h2 className="text-4xl font-bold text-white text-center flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-current w-10 h-10 mr-2"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg>
                Sobre Nosotros
              </h2>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <span className="font-semibold text-red-600">Sucre Que Queremos</span> es una plataforma digital dedicada a ofrecer una fuente confiable de información sobre la región de Sucre. Nuestro propósito es brindar a la comunidad un espacio donde puedan acceder a noticias verificadas, análisis relevantes y contenidos de calidad.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Además, fomentamos la participación ciudadana al permitir que las personas publiquen artículos de opinión y compartan sus perspectivas sobre los temas que impactan a nuestra sociedad. Únete y sé parte de esta iniciativa que busca mantener informada a la comunidad y promover el diálogo constructivo en Sucre.
                </p>
              </div>
              {/*Tagas Section*/}         
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                  Información Local
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                  </svg>
                  Hecho de Sucreños para Sucreños
                </div>
              </div>
            </div>
          </section>

          {/* Stats/Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Participación Ciudadana</h3>
              <p className="text-gray-600">Fomentamos la participación activa de todos los ciudadanos en las decisiones que afectan su comunidad.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparencia</h3>
              <p className="text-gray-600">Mantenemos información clara y sin rodeos para toda la comunidad Sucreña.</p>
            </div>
          </div>
        </div>
        {/*News Section*/}
        <div className="mt-12 border-t-2 border-t-red-500 p-4 w-full"> 
          <h2 className="text-3xl font-extrabold text-red-500 mb-3 text-center">ÚLTIMAS NOTICIAS</h2>
          <p className="text-xl text-red-500 text-center">Aquí conoceras las últimas noticias sobre nuestro movimiento</p>
        </div>
      </div>
    </div>
  );
}