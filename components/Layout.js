import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router'

const Layout = ({ children, title, description, backButton }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className="container">
            <nav>
                {backButton && <span className="back-button" onClick={()=> Router.back()}>back </span>} 
                <Link href="/">
                <a>
                    <span className="main-title">Hacker News</span>
                </a>
                </Link>
            </nav>
            {children}
        </div>
    </div>
)

export default Layout;