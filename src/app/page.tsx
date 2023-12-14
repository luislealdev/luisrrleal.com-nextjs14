import Link from "next/link";

export default function Home() {
  return (
    <main className="p-40">
      <section className="grid-c-2">
        <div>
          <h1>Luis Leal - FullStack Developer</h1>
          <p className="bold f-size-70">Llevemos todas tus ideas a código</p>
          <p>Consejos y más</p>
          <div>
            <Link href=''>Contacto</Link>
            <Link href=''>Ver Blog</Link>
          </div>
        </div>
        <div>

        </div>
      </section>
      <section>
        <h2>Sobre mí</h2>
      </section>
      <section>
        <h2>Soluciones</h2>
      </section>
      <section>
        <h2>Blog</h2>
      </section>
      <section>
        <h2>Herramientas</h2>
      </section>
    </main>
  )
}
