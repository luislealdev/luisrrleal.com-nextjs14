import Link from "next/link";

export default function Home() {

  const whatsappNumber = "524121719136";
  // Mensaje prellenado
  const whatsappMessage = encodeURIComponent(
    "Vi tu sitio web, me gustaría que me encontraran así de fácil."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


  return (
    <main className="p-40 flex justify-content align-center" style={{ minHeight: '68vh' }}>
      <section>
        <div className="center-text flex column align-center">
          <h1 className="f-size-70">Luis Leal - FullStack Developer</h1>
          <p className="bold f-size-30 gray-color mt-10">Llevemos todas tus <span className="underline">ideas a código</span></p>
          {/* <p>Consejos y más</p> */}
          <div className="flex gap-15 mt-50">
            <Link href={whatsappLink} className="ph-20 p-10 white-text bg-blue radius-30 f-size-18">Contacto</Link>
            <Link href='/blog' className="ph-20 p-10 white-text bg-orange radius-30 f-size-18">Ver Blog</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
