import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const session = await auth();

    if (!session) {
        redirect('/auth/login');
    }

    return (
        <section className="flex column justify-text align-center">
            {children}
        </section>
    )
}

