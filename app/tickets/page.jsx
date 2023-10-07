import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function tickets() {
    return (
        <main>
            <h2>Tickets</h2>
            <p>Currently opened tickets</p>

            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    )
}