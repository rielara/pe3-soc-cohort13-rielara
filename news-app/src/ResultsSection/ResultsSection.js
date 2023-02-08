import { useState } from 'react'
import Card from '../Card/Card'
import Search from '../Search/Search'


// the results section is where the search results will be displayed, I decided to import the search component here so that the user can search for articles from this page


function ResultsSection() {
    // I used the useState hook to set the results to an empty array, this will be used to store the results from the API call
    const [results, setResults] = useState([])

    // I created a function called searchByTitle, this function will be passed down to the search component as a prop
    // the searchByTitle function will make an API call to the gnews API, the API call will be made using the title that the user searched for

    async function searchByTitle(title) {
        const response = await fetch(`https://gnews.io/api/v4/search?q=example&apikey=ac0b405357587c3ce5cac7a5eacf3f7f&lang=en&country=us&max=10&q=${title}`)
        // the API call will return a JSON object, I then set the results to the articles array from the JSON object
        const results = await response.json()
        console.log(results)
        setResults(results.articles)


    }


    // I then returned the search component and mapped over the results array, passing the title, description, image and url to the card component
    return <>

        <Search searchByTitle={searchByTitle} text="Search" />

        <div className='results'>

            {results.map((result, index) =>
                <Card key={index} title={result.title} description={result.description} image={result.image} url={result.url} />)}

        </div>
    </>
}

export default ResultsSection

