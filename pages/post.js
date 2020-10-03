import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'// install library to fetch data

// Inline styling
const container = {
    margin: 'auto',
    width: '35%',
    textAlign: 'center',
    marginTop: '20px',
    backgroundColor: 'white',
    paddingBottom: '10px',
    boxShadow: '7px 10px 17px rgb(72, 77, 77)',
    borderRadius: '8px'
}

const imageStyle = {
    width: '100%',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px'
}

const countryName = {
    fontSize: '30px',
    textTransform: 'uppercase',
    color: 'rgb(118, 165, 165)',
    letterSpacing: '2px',
    marginTop: '0px',
    marginBottom: '0px',
    padding: '15px'
}

const container2 = {
    textAlign: 'left',
    margin: 'auto',
    width: '90%',
}

// using array.map to create an array to display information that was fetch from the API
// jsx styling is also used to style the div container
const Post = (props) => (
    <Layout>
        {props.countries.map((country) => (
            <div key={country.name} style={container}>
                <img style={imageStyle} src={country.flag}/>
                <h1 style={countryName}>{country.name}</h1>
                <div style={container2}>
                    <h4><strong>Region: </strong> {country.region}</h4>
                    <h4><strong>Sub-region: </strong> {country.subregion}</h4>
                    <h4><strong>Population: </strong> {country.population}</h4>
                    <h4><strong>Language: </strong> {country.languages[0].name}</h4>
                    <h4><strong>Currency: </strong> {country.currencies[0].name} ({country.currencies[0].symbol})</h4> 
                </div>
            </div>   
        ))}
        <style jsx>{`
            h4 {
                color: rgb(95, 131, 131);
                text-transform: uppercase;
                font-size: 18px;
                font-weight: 500;
            }
        `}</style>
    </Layout>
)

/* use getInitialProps to retrieve data from the Rest Countires API 
using the name passed through from index.js.
Used country name from query params and fetched its country data from restcountries API */
Post.getInitialProps = async function (context) {
    const {name}  = context.query
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    const country = await res.json()

    return { countries: country }
}

export default Post;