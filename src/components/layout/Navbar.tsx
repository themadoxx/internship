import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav aria-label="Primary">
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/critical-thinking">Critical thinking</Link></li>
        <li><Link to="/on-this-subject">On this subject</Link></li>
      </ul>
    </nav>
  )
}
