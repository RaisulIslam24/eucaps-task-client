/* eslint-disable @next/next/link-passhref */
import type { NextPage } from 'next'
import Link from 'next/link';

const subscribes = [
  {
    id: 1,
    name: 'Cycle 1'
  },
  {
    id: 2,
    name: 'Cycle 2'
  }
]

const Home: NextPage = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {
          subscribes.map(subscribe => (
            // eslint-disable-next-line @next/next/link-passhref
            // eslint-disable-next-line react/jsx-key
            <div className="col-md-5 m-4">
              <div className="d-flex flex-column align-content-around">
                <h2 className="border border-dark p-5">{subscribe.name}</h2>
                <Link href={`/` + subscribe.id} key={subscribe.id}>
                  <button className="btn btn-success">Subscribe</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
