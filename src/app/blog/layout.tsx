
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <section className="flex column justify-text align-center">
            {children}
        </section>
    )
}

