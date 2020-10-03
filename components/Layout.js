import Header from './Header';

// inline styling
const layoutStyle = {
    backgroundColor: 'rgb(118, 165, 165)',
    fontFamily: 'Arial, Helvetica, sans-serif',
    paddingBottom: '50px'
}

// created a Layout page to style all pages
const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout;