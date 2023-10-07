import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function getStaticParams() {
    const res = await fetch('http://localhost:4000/tickets/');

    const tickets = await res.json();

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicket(id) {
    const res = await fetch('http://localhost:4000/tickets/' + id);

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket details</h2>
            </nav>

            <div className="card"> 
                <h3>{ticket.title}</h3>
                <p>{ticket.body}</p>
                <p>Created by {ticket.user_email}</p>
                <div className={`pill ${ticket.priority}`}>
                    Priority {ticket.priority}
                </div>
            </div>
        </main>
    )
}