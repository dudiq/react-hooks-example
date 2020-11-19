import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to="/">home</Link> | <Link to="/about">about</Link>
  </div>
);

export default Header;
