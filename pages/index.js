import Layout from '../components/Layout';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch';// install library to fetch data

// Inline styling
const containerStyle = {
    marginTop: '10px',
    padding: '5px',
    height: '64px',
    cursor: 'pointer'
}

const imageStyle = {
    width: '100px',
    height: '65px',
    marginLeft: '1%',
    float: 'left'
}

const linkStyle = {
    textDecoration: 'none',
    marginLeft: '10px',
    float: 'left',
    marginTop: '5px',
    paddingTop: '20px',
    paddingBottom: '10px',
    fontSize: '20px',
    color: 'white',
    textTransform: 'uppercase',
    width: '70%',
    height: '30px',
}

// passing data via a query string parameter to get query name parameter
// using array.map to create and display information from the API
// using route masking to show a different URL in the broswer than actual URL by using the prop as in the <Link> element.
// jsx styling is also used to style the div container
const Index = (props) => (
    <Layout>
            {props.countries.map((country) => (
                <div key={country.name} style={containerStyle} id="container">
                    <div>
                        <img style={imageStyle} src={country.flag}/>
                        <Link as={`/p/${country.name}`} href={`/post?name=${country.name}`}> 
                            <a style={linkStyle}>{country.name}</a>
                        </Link> 
                    </div>
                </div>
            ))}
    <style jsx>{`
        #container:hover {
            background-color: lightgrey;
            
        }
    `}</style>
    </Layout>
)

/* using async function getInitialProps to fetch countries 
within a regional bloc from the Rest Countriesa API for the Index page 
passed countries as props to the Index page */
Index.getInitialProps = async function() {
    const res = await fetch('https://restcountries.eu/rest/v2/regionalbloc/au')
    const data = await res.json()

    return {
        countries: data
    }
}

export default Index;