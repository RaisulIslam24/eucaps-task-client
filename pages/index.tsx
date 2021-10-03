import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-5 m-4">
          <div className="d-flex flex-column align-content-around">
            <h2 className="border border-dark p-5">Cycle 1</h2>
            <button onClick={() => router.push('/checkout')} className="btn btn-success">Subscribe</button>
          </div>
        </div>
        <div className="col-md-5 m-4">
          <div className="d-flex flex-column align-content-around">
            <h2 className="border border-dark p-5">Cycle 2</h2>
            <button onClick={() => router.push('/checkout')} className="btn btn-success">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
