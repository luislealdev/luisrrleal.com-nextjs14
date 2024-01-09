import Link from "next/link"
import styles from './styles/index.module.css';
import Image from "next/image";
import Head from "next/head";

export default function Page() {
    //TODO: ADD METATAGS
    return (
        <>
            <Head>
                <title>BioUni</title>

                <title>BioUni - El Material Sostenible Del Futuro</title>
                <meta name="title" content="BioUni - El Material Sostenible Del Futuro" />
                <meta name="description" content="Biouni propone ser una alternativa sustentable al unicel, tomando las colillas que no pasan procesos estándar de calidad y pasándolas por un proceso con materiales biodegradables." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://luisrrleal.com/projects/biouni" />
                <meta property="og:title" content="BioUni - El Material Sostenible Del Futuro" />
                <meta property="og:description" content="Biouni propone ser una alternativa sustentable al unicel, tomando las colillas que no pasan procesos estándar de calidad y pasándolas por un proceso con materiales biodegradables." />
                <meta property="og:image" content="https://luisrrleal.com/img/biouni/logo-min.png" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://luisrrleal.com/projects/biouni" />
                <meta property="twitter:title" content="BioUni - El Material Sostenible Del Futuro" />
                <meta property="twitter:description" content="Biouni propone ser una alternativa sustentable al unicel, tomando las colillas que no pasan procesos estándar de calidad y pasándolas por un proceso con materiales biodegradables." />
                <meta property="twitter:image" content="https://luisrrleal.com/img/biouni/logo-min.png" />


            </Head>
            <nav className="ph-40 flex space-between">
                <h1 className={styles.primaryColor}>BioUni</h1>
                <div className='hide-on-mobile flex align-center gap-25'>
                    <Link href='/projects/biouni' className={`${styles.primaryColor} green-button ph-5 radius`}>Inicio</Link>
                    <Link href='#historia' className={`${styles.primaryColor} green-button ph-5 radius`}>Historia</Link>
                    <Link href='#proceso' className={`${styles.primaryColor} green-button ph-5 radius`}>Proceso</Link>
                    <Link href='#aplicaciones' className={`${styles.primaryColor} green-button ph-5 radius`}>Aplicaciones</Link>
                    <Link href='#recolectores' className={`${styles.primaryColor} green-button ph-5 radius`}>Recolectores</Link>
                </div>
            </nav >
            <main className="ph-40 mb-50">
                <section className="grid-60-40">
                    <div>
                        <h2 className="f-size-100 mt-50" style={{ lineHeight: '100px' }}>El <span className={styles.primaryColor}>Material Sostenible</span> Del Futuro</h2>
                        <p className="f-size-20 bold">Creemos que es posible deshacernos de los materiales contaminables más usados</p>

                        {/* <div className="mt-50">
                            <p>¡Únete ahora!</p>
                            <p>Te estamos esperando</p>
                        </div> */}
                    </div>
                    <div>
                        <Image src='/img/biouni/home.png' alt="biouni home" width={1000} height={1000} className="max-width" />
                    </div>
                </section>
                <section>
                    <h3 className="bold center-text">Nuestros colaboradores</h3>
                    <div className="grid-c-4 gap-25">
                        <Image src='/img/biouni/colaboradores/eco-filter.png' alt="logo ecofilter" width={1000} height={1000} className="max-width" />
                        <Image src='/img/biouni/colaboradores/Logo-TecNM.png' alt=" logo tecnm" width={1000} height={1000} className="max-width" />
                        <Image src='/img/biouni/colaboradores/innovatecnm.jpg' alt="innovatec" width={1000} height={1000} className="max-width" />
                        <Image src='/img/biouni/colaboradores/coparmex.jpg' alt="coparmex" width={1000} height={1000} className="max-width" />
                    </div>
                </section>
                <br /><br />
                <section className={styles.bgPrimary}>
                    <div className="flex column p-40 white-text justify-text">
                        <h5>¿Qué es?</h5>
                        <h1 className="top-30 f-size-70">BioUni</h1>
                        <p className="f-size-24">Biouni propone ser una alternativa sustentable al unicel, tomando las colillas que no pasan procesos estándar de calidad y pasándolas por un proceso con materiales biodegradables.</p>
                        <p className="f-size-24">Creamos un material que tarda aproximadamente 8 años (el unicel tarda 500) en degradarse, creado con desechos (de papa y colilla de cigarro) con alianzas estratégicas (Eco-Filter y clientes potenciales que actualmente están interesados en el proyecto).</p>
                        <h4 className="bold f-size-30 mt-10">Para empresas</h4>
                        <p className="f-size-20">Nuestro producto te permite cumplir con  leyes como La Ley Federal de Responsabilidad Ambiental que tiene por objeto cuantificar los daños y pasivos causados por la explotación y exploración de hidrocarburos al medio ambiente, a la salud de la población y a los fondos superficiales, debiendo determinar los potenciales costos de remediación y reparación.  </p>
                    </div>
                </section>
                <section className="grid-c-2 mt-50" id="historia">
                    <div className="flex align-center justify-content">
                        <Image src='/img/biouni/personas.png' alt="personas trabajando" width={1000} height={1000} className="max-height" />
                    </div>
                    <div className="justify-text">
                        <h3 className="bold">Nuestra <span className={styles.primaryColor}>Historia</span> </h3>
                        <p>Al enfrentarnos con un problema de ¿Qué hacer con las colillas de cigarro que se reciclan? empezamos a buscar soluciones. Después de pasar por varias propuestas, decidimos crear embalaje sustentable (una de nuestras principales aplicaciones). En el camino de pruebas nos dimos cuenta de que podíamos ir más allá y crear un nuevo material totalmente nuevo y sostenible.</p>
                        <br />
                        <p>Con nuestros pocos conocimientos en química, mucha investigación e inclusive el paso por una incubadora, logramos crear nuestros primeros prototipos y vimos interés en empresas... actualmente buscamos llevar nuestro proyecto a la competencia nacional del HackaTec para comenzar a difundir nuestro proyecto y llevarlo a la realidad.</p>
                        <br />
                        <p>Este proyecto no se podría llevar a cabo sin el apoyo invaluable de <Link href='https://www.facebook.com/EcoFilterMexico/?locale=es_LA' target="_blank" className={styles.primaryColor}>EcoFilter México</Link> y el <Link href='https://celaya.tecnm.mx/' className={styles.primaryColor}>Instituto Tecnológico Nacional de México en Celaya.</Link> ¡Gracias! 💚</p>
                    </div>

                </section>
                {/* PROCESS SECTION */}
                <section style={{ border: '2px solid #2EAD5D' }} className="p-20 radius" id="proceso">
                    <h3 className="bold center-text">Nuestro <span className={styles.primaryColor}>Proceso</span></h3>
                    <div className="grid-c-6 gap-25 center-text">
                        <div className="hover-green radius p-5">
                            <Image src='/img/biouni/proceso/colilla.png' alt="colilla" width={1000} height={1000} className="max-width" />
                            <h4 className={`${styles.primaryColor} bold f-size-24`}>1. Colilla De Cigarro </h4>
                            <p>Se obtienen las colillas que no pasan procesos de calidad</p>
                        </div>
                        <div className="hover-green radius p-5">
                            <Image src='/img/biouni/proceso/fibra-de-celulosa.png' alt="fibra de celulosa" width={1000} height={1000} className="max-width" />
                            <h4 className={`${styles.primaryColor} bold f-size-24`}>2. Fibra De Celulosa </h4>
                            <p>El cigarro se transforma en fibra de celulosa (Patentado por <Link href='https://www.facebook.com/EcoFilterMexico/?locale=es_LA' target="_blank" className={styles.primaryColor}>EcoFilter México</Link> )</p>
                        </div>
                        <div className="hover-green radius p-5">
                            <Image src='/img/biouni/proceso/almidon.png' alt="almidon" width={1000} height={1000} className="max-width" />
                            <h4 className={`${styles.primaryColor} bold f-size-24`}>3. Almidón </h4>
                            <p>Se le agrega almidón extraído de la papa desechada (De mercados/tiendas) o maicena.</p>
                        </div>
                        <div className="hover-green radius p-5">
                            <Image src='/img/biouni/proceso/gliserina.png' alt="gliserina" width={1000} height={1000} className="max-width" />
                            <h4 className={`${styles.primaryColor} bold f-size-24`}>4. Glicerina Natural </h4>
                            <p>Se agrega para aportar espesante y plasticidad.</p>
                        </div>
                        <div className="hover-green radius p-5">
                            <Image src='/img/biouni/proceso/vinagre.png' alt="vinagre" width={1000} height={1000} className="max-width" />
                            <h4 className={`${styles.primaryColor} bold f-size-24`}>5. Vinagre blanco </h4>
                            <p>Se agrega como conservante y sirve como ablandador.</p>
                        </div>
                        <div className="hover-green radius p-5">
                            <Image src='/img/biouni/proceso/material-final.png' alt="materia final" width={1000} height={1000} className="max-width" />
                            <h4 className={`${styles.primaryColor} bold f-size-24`}>6. Producto final </h4>
                            <p>Se obtiene el producto final y está listo para moldearse.</p>
                        </div>
                    </div>
                </section>

                <section className="grid-60-40 mt-50" id="aplicaciones">
                    <div>
                        <h4 className="f-size-70">¿Un <span className={styles.primaryColor}>Material Mágico</span>?</h4>
                        <h3 className="f-size-30">Nuestras aplicaciones</h3>
                        <p className="f-size-20">No buscamos crear un producto, buscamos crear un material que sirva para crear productos de manera sostenible. Así mismo, buscamos cambiar la mentalidad de las personas para ayudarnos a salvar al planeta.</p>
                        <ul className={styles.ul}>
                            <li>Embalaje</li>
                            <li>Protectores</li>
                            <li>Portavasos</li>
                            <li>Charolas de germinación</li>
                        </ul>
                    </div>
                    <div>
                        <Image src='/img/biouni/mundo-feliz.png' alt="mundo feliz" width={1000} height={1000} className="max-width" />
                    </div>
                </section>
                <section>
                    <h3 className="f-size-50">Compromiso con el  <span className={styles.primaryColor}>Medio Ambiente</span></h3>
                    <p className="f-size-30">Encajamos dentro de 10 objetivos de la Agenda 20/30 de las Naciones Unidas</p>
                    <div className="grid-c-5 justify-center gap-25">
                        <Image src='/img/biouni/ods/1.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/2.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/3.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/4.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/5.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/6.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/7.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/8.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/9.png' alt="" width={200} height={200} className="max-width" />
                        <Image src='/img/biouni/ods/10.png' alt="" width={200} height={200} className="max-width" />
                    </div>
                </section>
                <section className="mt-50 grid-c-2" id="recolectores">
                    <div>
                        <div className="flex">
                            <Image src='/img/biouni/logo-min.png' alt="" width={100} height={200} className="auto-height" />
                            <h3 className="f-size-50"> <span className={styles.primaryColor}>Recolecta</span> con nosotros</h3>
                        </div>
                        <p className="f-size-24">Tu eres parte de este cambio, ayudanos a tirar tus colillas de cigarro en nuestros puntos de recolección; manten tu ciudad limpia y ayuda a crear un planeta mejor.</p>
                        <br />
                        <p className="f-size-24">Ubicación actual: <span className={styles.primaryColor}>Patzcuaro</span> </p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.1929279761625!2d-101.61029406708195!3d19.513455378185437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d97de92975ac7%3A0x404b9b48c3e24c6d!2sPlaza%20Vasco%20de%20Quiroga!5e0!3m2!1ses!2smx!4v1694045122704!5m2!1ses!2smx" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="max-width"></iframe>
                </section>
            </main>
            <footer className={styles.bgPrimary}>
                <div className="grid-c-3 p-20 white-text f-size-18">
                    <div className="flex align-center justify-text">
                        <Image src='/img/biouni/logo-blanco.png' alt="" width={200} height={1000} className="auto-height" />
                        <p>Biouni propone ser una alternativa sustentable al unicel, transformando las colillas recicladas junto con materiales naturales para conseguir un material puro y agradable al medio ambiente.</p>
                    </div>
                    <div>

                    </div>
                    <div className="flex column justify-content">
                        <Link href='/projects/biouni' className="white-text">Inicio</Link>
                        <Link href='#historia' className="white-text">Historia</Link>
                        <Link href='#proceso' className="white-text">Proceso</Link>
                        <Link href='#aplicaciones' className="white-text">Aplicaciones</Link>
                        <Link href='#recolectores' className="white-text">Recolectores</Link>
                    </div>
                </div>
                <p className="center-text white-text">Copyright Reserved by BioUni. Design by <Link href='www.luisrrleal.com'>@luisrrleal</Link></p>
            </footer>
        </>
    )
}
