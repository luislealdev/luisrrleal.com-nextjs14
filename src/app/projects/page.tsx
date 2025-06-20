import ProjectCard from "@/components/cards/ProjectCard";

const projects = [
    {
        image: "/img/proyectos/citronella.png",
        title: "Desarrollo Web Restaurant",
        text: "Menú digital e información.",
    },
    {
        image: "/img/proyectos/valente.png",
        title: "Sitio Web Valente y Aplicación Móvil",
        text: "Sistema de gestión de citas, vales e información sobre servicios y contacto.",
    },
    {
        image: "/img/proyectos/vista-center.png",
        title: "Sitio Web Vista Center",
        text: "Información sobre promociones, ubicación de sucursales y productos.",
    },
    {
        image: "/img/proyectos/arquitecto.png",
        title: "Desarrollo Web Arquitecto",
        text: "Portafolio profesional y contacto.",
    },
    {
        image: "/img/proyectos/bellas-colombia.png",
        title: "Desarrollo Tienda Online",
        text: "E-commerce con carrito de compras, pasarela de pago y gestión de productos.",
    },
    {
        image: "/img/proyectos/boda-yami.png",
        title: "Página de Aterrizaje Boda",
        text: "Información sobre la boda, ubicación y detalles.",
    },
    {
        image: "/img/proyectos/cm-integra.png",
        title: "Formulario de Contacto",
        text: "Formulario para contacto y registro webinar.",
    },
    {
        image: "/img/proyectos/confianza.png",
        title: "Sitio Web Corporativo",
        text: "Información sobre la empresa y servicios.",
    },
    {
        image: "/img/proyectos/cursos-de-optometria.png",
        title: "Sitio Web Cursos de Optometría",
        text: "Información sobre cursos, inscripciones, contacto y blog autogestionable.",
    },
    {
        image: "/img/proyectos/d-la-valle.png",
        title: "Sitio Web D'La Valle",
        text: "Portafolio de productos y contacto.",
    },
    {
        image: "/img/proyectos/ecofilter.png",
        title: "Sitio Web EcoFilter",
        text: "Información sobre servicios y contacto.",
    },
    {
        image: "/img/proyectos/fotos-boda.png",
        title: "Sitio Web Fotografía de Bodas",
        text: "Usuarios pueden subir fotos y videos de la boda.",
    },
    {
        image: "/img/proyectos/la-claqueta.png",
        title: "Sitio Web La Claqueta",
        text: "Registro confirmación de asistencia a evento y control de entradas.",
    },
    {
        image: "/img/proyectos/maquinaria.png",
        title: "Sitio Web Maquinaria",
        text: "Información sobre maquinaria y contacto.",
    },
    {
        image: "/img/proyectos/marsan.png",
        title: "Sitio Web Marsan",
        text: "Información sobre servicios y contacto.",
    },
    {
        image: "/img/proyectos/proveedora.png",
        title: "E-commerce Proveedora",
        text: "Gestión de productos, usuarios, ventas en línea.",
    },
    {
        image: "/img/proyectos/salud-en-conexion.png",
        title: "Sitio Web Salud en Conexión",
        text: "Información sobre servicios de salud, contacto y registro de referencias entre negocios.",
    },
    {
        image: "/img/proyectos/salud-visual-empresarial.png",
        title: "Sitio Web Salud Visual Empresarial",
        text: "Información sobre servicios de salud visual, contacto.",
    },
    {
        image: "/img/proyectos/tarjeta-digital.png",
        title: "Tarjeta Digital",
        text: "Tarjeta de presentación digital con información de contacto y redes sociales.",
    },
    {
        image: "/img/proyectos/this-flow.png",
        title: "Sitio Web This Flow",
        text: "Plataforma de artistas autogestionable con perfil de música, galería, videos, etc.",
    },
    {
        image: "/img/proyectos/ticnify.png",
        title: "Sitio Web Ticnify",
        text: "Información sobre servicios de tecnología, contacto, autogestionable.",
    },
    {
        image: "/img/proyectos/togas.png",
        title: "Sitio Web Togas",
        text: "Información sobre servicios, contacto.",
    }
];

const ProjectsPage = () => {
    return (
        <div>
            <h1>Proyectos</h1>
            <section
                className="grid-c-4 gap-40"
            >
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        image={project.image}
                        title={project.title}
                        text={project.text}
                    />
                ))}
            </section>
        </div>
    );
};

export default ProjectsPage;