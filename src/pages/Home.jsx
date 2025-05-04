import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-text">
        <h1>Welcome to Diso's</h1>
        <p>Enjoy the best casual American dining experience in NYC!</p>
        <br />
        <Link to="/menu">
          <button>Menu</button>
        </Link>
      </div>
    </div>
  )
}
