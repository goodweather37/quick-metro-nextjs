import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h2>There was a problem.</h2>
            <p>We could not find the page that you are looking for.</p>
            <p>Go back to <Link href="/">Dashboard</Link></p>
        </main>
    )
}