import "../globals.css";
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
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 drop-shadow-lg font-['playfair']">Bienvenido a Sucre Que Queremos</h1>
          <p className="text-lg md:text-2xl text-white font-black mb-6 drop-shadow-lg font-['raleway']">Tu plataforma para un futuro mejor en Sucre</p>
          <a href="#cvForm" className="bg-red-500 hover:bg-red-600 text-white font-['raleway'] font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out drop-shadow-lg">Trabaja con nosotros</a>
        </div>
      </div>
      
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main About Section */}
          <section id="about" className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
              <h2 className="text-4xl font-bold text-white text-center flex items-center justify-center gap-3 font-['raleway']">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-current w-10 h-10 mr-2"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg>
                Sobre Nosotros
              </h2>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-800 text-lg leading-relaxed mb-6">
                  <span className="font-semibold text-red-600">Sucre Que Queremos</span> es una plataforma digital dedicada a ofrecer una fuente confiable de información sobre la región de Sucre. Nuestro propósito es brindar a la comunidad un espacio donde puedan acceder a noticias verificadas, análisis relevantes y contenidos de calidad.
                </p>
                <p className="text-neutral-800 text-lg leading-relaxed">
                  Además, fomentamos la participación ciudadana al permitir que las personas publiquen artículos de opinión y compartan sus perspectivas sobre los temas que impactan a nuestra sociedad. Únete y sé parte de esta iniciativa que busca mantener informada a la comunidad y promover el diálogo constructivo en Sucre.
                </p>
              </div>
              {/*Tagas Section*/}         
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                  Información Local
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
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

        {/*Form Section*/}
        <div className="mt-12 border-t-2 border-t-red-500 p-4 w-full"> 
          <h2 className="text-3xl font-extrabold text-red-500 mb-3 text-center">¿Crees que tienes el potencial para trabajar con nosotros?</h2>
          <p className="text-md text-red-500 text-center font-bold font-['raleway']">Envíanos tu hoja de vida y si te consideramos apto, con gusto te contactaremos</p>
        </div>
        <div className="w-full py-5">
          <div className="max-w-3xl mx-auto p-1 md:p-4 lg:p-0">
            <form id="cvForm" className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-8">
              <h2 id="formLabel" className="text-xl text-red-500 mb-10 text-center font-extrabold">FORMULARIO</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-800 mb-1">Nombre Completo</label>
                  <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm text-neutral-800 mb-1">Apellidos</label>
                  <input type="text" id="last_name" name="last_name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Tu nombre completo" />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm text-neutral-800 mb-1">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Tu correo electrónico" />
              </div>
              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm text-neutral-800 mb-1">Número de Teléfono</label>
                <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Tu número de teléfono" />
              </div>
              <div className="mt-6">
                <label htmlFor="municipality" className="block text-sm text-neutral-800 mb-1">Municipio</label>
                <select name="municipality" id="municipality" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white">
                  <option value="" className="text-neutral-800">-- Selecciona un municipio --</option>
                  <option value="sincelejo" className="text-neutral-800">Sincelejo</option>
                  <option value="buenavista" className="text-neutral-800">Buenavista</option>  
                  <option value="coveñas" className="text-neutral-800">Coveñas</option>
                  <option value="corozal" className="text-neutral-800">Corozal</option>
                  <option value="elorica" className="text-neutral-800">El Roble</option>
                  <option value="galeras" className="text-neutral-800">Galeras</option>
                  <option value="guaranda" className="text-neutral-800">Guaranda</option>
                  <option value="launion" className="text-neutral-800">La Unión</option>
                  <option value="lospalmitos" className="text-neutral-800">Los Palmitos</option>
                  <option value="majagual" className="text-neutral-800">Majagual</option>
                  <option value="morroa" className="text-neutral-800">Morroa</option>
                  <option value="ovejas" className="text-neutral-800">Ovejas</option>
                  <option value="palmito" className="text-neutral-800">Palmito</option>
                  <option value="sampues" className="text-neutral-800">Sampués</option>
                  <option value="sanbenitoabajo" className="text-neutral-800">San Benito Abad</option>
                  <option value="sanjuanbetulia" className="text-neutral-800">San Juan de Betulia</option>
                  <option value="sanmarcos" className="text-neutral-800">San Marcos</option>
                  <option value="sanonofre" className="text-neutral-800">San Onofre</option>
                  <option value="sanpedro" className="text-neutral-800">San Pedro</option>
                  <option value="since" className="text-neutral-800">Sincé</option>
                  <option value="sucre" className="text-neutral-800">Sucre</option>
                  <option value="santiagodetolu" className="text-neutral-800">Santiago de Tolú</option>
                  <option value="toluviejo" className="text-neutral-800">Toluviejo</option>
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="cv" className="block text-sm text-neutral-800 mb-1">Subir Hoja de Vida</label>
                <input type="file" id="cv" name="cv"/>
              </div>
              <div className="mt-8 text-center">
                <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:cursor-pointer">Enviar</button>
              </div>
            </form>
          </div>
        </div>

        {/*News Section*/}
        <div className="mt-12 border-t-2 border-t-red-500 p-4 w-full"> 
          <h2 id="newsLabel" className="text-4xl font-extrabold text-red-500 mb-3 text-center">ÚLTIMAS NOTICIAS</h2>
          <p className="text-md text-red-500 text-center font-bold font-['raleway']">Aquí conoceras las últimas noticias sobre nuestro movimiento</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 gap-y-4 md:gap-y-0 mt-6 px-8 md:px-10 lg:px-16">
          <div className="bg-white rounded-xl shadow-md">
            <div className="w-full h-full flex flex-col">
              <img src="/placeholder.webp" alt="Noticia 1" className="object-cover w-full h-[40%] object-center rounded-t-xl"/>
              <div className="text-left text-2xl font-['playfair'] font-bold mt-2 p-3">
                  <p className="text-sm text-gray-500 font-['raleway'] font-bold mb-1 flex flex-row justify-end">
                    10/09/2025
                  </p>
                  <h2>
                    Título de la Noticia 1
                  </h2>
                  <div className="text-sm font-['raleway'] font-bold text-neutral-800 mt-1.5 line-clamp-3">
                    <p>
                      Resumen breve de la noticia para atraer la atención del lector y darle una idea de lo que trata el artículo.
                    </p>
                  </div> 
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md">
            <div className="w-full h-full flex flex-col">
              <img src="/placeholder.webp" alt="Noticia 1" className="object-cover w-full h-[40%] object-center rounded-t-xl"/>
              <div className="text-left text-2xl font-['playfair'] font-bold mt-2 p-3">
                  <p className="text-sm text-gray-500 font-['raleway'] font-bold mb-1 flex flex-row justify-end">
                    10/09/2025
                  </p>
                  <h2>
                    Título de la Noticia 2
                  </h2>
                  <div className="text-sm font-['raleway'] font-bold text-neutral-800 mt-1.5 line-clamp-3">
                    <p>
                      Resumen breve de la noticia para atraer la atención del lector y darle una idea de lo que trata el artículo.
                    </p>
                  </div> 
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md">
            <div className="w-full h-full flex flex-col">
              <img src="/placeholder.webp" alt="Noticia 1" className="object-cover w-full h-[40%] object-center rounded-t-xl"/>
              <div className="text-left text-2xl font-['playfair'] font-bold mt-2 p-3">
                  <p className="text-sm text-gray-500 font-['raleway'] font-bold mb-1 flex flex-row justify-end">
                    10/09/2025
                  </p>
                  <h2>
                    Título de la Noticia 3
                  </h2>
                  <div className="text-sm font-['raleway'] font-bold text-neutral-800 mt-1.5 line-clamp-3">
                    <p>
                      Resumen breve de la noticia para atraer la atención del lector y darle una idea de lo que trata el artículo.
                    </p>
                  </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 p-2 flex flex-row justify-center items-center gap-4">
          <button className="px-4 py-2 text-white bg-gray-800 rounded-2xl hover:bg-gray-700 hover:cursor-pointer">
            &lt;
          </button>
          <span className="font-['raleway'] font-bold text-xl text-black">
            1
          </span>
          <button className="px-4 py-2 text-white bg-red-500 rounded-2xl hover:bg-red-600 hover:cursor-pointer">
            &gt;
          </button>
        </div>

        {/*Opinion Articles Section*/}
        <div className="mt-12 border-t-2 border-t-red-500 p-4 w-full"> 
          <h2 id="opinionLabel" className="text-4xl font-extrabold text-red-500 mb-3 text-center">ARTÍCULOS DE OPINIÓN</h2>
          <p className="text-md text-red-500 text-center font-bold font-['raleway']">Aquí puedes leer los artículos de opinión más recientes de nuestros usuarios</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 gap-y-4 md:gap-y-0 mt-6 px-8 md:px-10 lg:px-16">
          <div className="bg-white rounded-xl shadow-md">
            <div className="w-full h-full flex flex-col">
              <img src="/placeholder.webp" alt="Articulo de Opinión 1" className="object-cover w-full h-[40%] object-center rounded-t-xl"/>
              <div className="text-left text-2xl font-['playfair'] font-bold mt-2 p-3">
                  <p className="text-sm text-gray-500 font-['raleway'] font-bold mb-1 flex flex-row justify-end">
                    10/09/2025
                  </p>
                  <h2>
                    Título del Artículo de Opinión 1
                  </h2>
                  <div className="text-sm font-['raleway'] font-bold text-neutral-800 mt-1.5 line-clamp-3">
                    <p>
                      Resumen breve del artículo de opinión para atraer la atención del lector y darle una idea de lo que trata el contenido.
                    </p>
                  </div> 
              </div>
            </div>          
          </div>
          <div className="bg-white rounded-xl shadow-md">
            <div className="w-full h-full flex flex-col">
              <img src="/placeholder.webp" alt="Articulo de Opinión 1" className="object-cover w-full h-[40%] object-center rounded-t-xl"/>
              <div className="text-left text-2xl font-['playfair'] font-bold mt-2 p-3">
                  <p className="text-sm text-gray-500 font-['raleway'] font-bold mb-1 flex flex-row justify-end">
                    10/09/2025
                  </p>
                  <h2>
                    Título del Artículo de Opinión 2
                  </h2>
                  <div className="text-sm font-['raleway'] font-bold text-neutral-800 mt-1.5 line-clamp-3">
                    <p>
                      Resumen breve del artículo de opinión para atraer la atención del lector y darle una idea de lo que trata el contenido.
                    </p>
                  </div> 
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md">
            <div className="w-full h-full flex flex-col">
              <img src="/placeholder.webp" alt="Articulo de Opinión 1" className="object-cover w-full h-[40%] object-center rounded-t-xl"/>
              <div className="text-left text-2xl font-['playfair'] font-bold mt-2 p-3">
                  <p className="text-sm text-gray-500 font-['raleway'] font-bold mb-1 flex flex-row justify-end">
                    10/09/2025
                  </p>
                  <h2>
                    Título del Artículo de Opinión 3
                  </h2>
                  <div className="text-sm font-['raleway'] font-bold text-neutral-800 mt-1.5 line-clamp-3">
                    <p>
                      Resumen breve del artículo de opinión para atraer la atención del lector y darle una idea de lo que trata el contenido.
                    </p>
                  </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 p-2 flex flex-row justify-center items-center gap-4">
          <button className="px-4 py-2 text-white bg-gray-800 rounded-2xl hover:bg-gray-700 hover:cursor-pointer">
            &lt;
          </button>
          <span className="font-['raleway'] font-bold text-xl text-black">
            1
          </span>
          <button className="px-4 py-2 text-white bg-red-500 rounded-2xl hover:bg-red-600 hover:cursor-pointer">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}