import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h2>There were not tickets.</h2>
            <p>We could not find the ticket that you are looking for. </p>
            <p>Go back to <Link href="/tickets">Tickets</Link></p>
        </main>
    )
}