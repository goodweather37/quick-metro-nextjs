import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <h2>Dashboard</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Voluptatum mollitia vitae voluptatibus nihil odio hic velit dolor, 
          ab consequuntur quas veniam optio atque laudantium assumenda, ipsum, libero consectetur architecto magnam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Voluptatum mollitia vitae voluptatibus nihil odio hic velit dolor, 
          ab consequuntur quas veniam optio atque laudantium assumenda, ipsum, libero consectetur architecto magnam.</p>

          <div className='flex justify-center my-8'>
            <Link href="/tickets">
              <button className='btn-primary'>View Tickets</button>
            </Link>
          </div>

          <h2>Company updates</h2>

          <div className='card'>
            <h3>New member ...</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quisquam doloribus eius eligendi natus! Neque culpa assumenda molestiae,
               quis mollitia optio iusto veritatis eum dicta in dolorem sapiente corrupti alias. Inventore?
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quisquam doloribus eius eligendi natus! Neque culpa assumenda molestiae,
               quis mollitia optio iusto veritatis eum dicta in dolorem sapiente corrupti alias. Inventore?</p>
          </div>
          <div className='card'>
            <h3>Live ....</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quisquam doloribus eius eligendi natus! Neque culpa assumenda molestiae,
               quis mollitia optio iusto veritatis eum dicta in dolorem sapiente corrupti alias. Inventore?
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quisquam doloribus eius eligendi natus! Neque culpa assumenda molestiae,
               quis mollitia optio iusto veritatis eum dicta in dolorem sapiente corrupti alias. Inventore?</p>
          </div>
    </main>
  )
}
