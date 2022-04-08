import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="Developer" />
          lobodan
          <br />
          web developer
        </h1>
        <h2>Front end developer / Javascript developer / Cricketer</h2>
        <Link to="/contact" className="flat-button">
          Cotact ME
        </Link>
      </div>
    </div>
  )
}
export default Home
