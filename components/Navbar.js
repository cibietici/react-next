import Link from 'next/link';
const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
            <a className="navbar-brand" href="#">BitCoin Today</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link href="/"><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/about"><a className="nav-link">About</a></Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>

        <style jsx>{`
            .ul {
                display: flex;
                background: #333;
                list-style: none;
                padding: 10px;
            }
            .li a {
                color: #fff;
                padding: 10px;
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Navbar;