import Link from 'next/link'

// inline styling
const linkStyle = {
    textDecoration: 'none',
    width: '100%',
    fontSize: '25px',
    color: 'rgb(118, 165, 165)',
    padding: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

  const navStyle = {
    paddingBottom: '15px',
    paddingTop: '15px',
    backgroundColor: 'white',
    position: 'sticky'
  }

// created a navigation bar to navigate back to index page using Link API
// used style jsx to style <a> tag.
const Header = () => (
    <div style={navStyle}>
        <Link href="/">
            <a style={linkStyle}>African Countries</a>
        </Link>
    <style jsx>{`
        a:hover {
            background-color: rgb(118, 165, 165);
            color: white !important;

        }
    `}</style>    
    </div>
)

export default Header;