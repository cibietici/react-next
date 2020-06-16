import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitcoins values</title>
            <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lumen/bootstrap.min.css"></link>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;