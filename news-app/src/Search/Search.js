import { useState } from 'react'

// I created a function called Search, this function will be used to search for articles
// I passed in the searchByTitle function as a prop, this function will be used to make an API call to the gnews API
const Search = ({searchByTitle}) => {
    // I used the useState hook to set the search to an empty string, this will be used to store the title that the user searched for
    const [search, setSearch] = useState("")

// I created a function called handleChange, this function will be used to get the title that the user searched for
    function handleChange(e){
        if (e.target.value === "") {
            alert("Please enter a keyword")
        }
        setSearch(e.target.value)
    } 


    
// I created a function called handleClick, this function will be used to call the searchByTitle function
// also added the alert popup if the user does not enter a keyword
    function handleClick(){
        if (search === "") {
            alert("Please enter a keyword")
        } else {
        searchByTitle(search)
        }
    }

// I created a function called handleKeyDown, this function will be used to call the searchByTitle function when the user presses the enter key
// also added tghe alert popup if the user does not enter a keyword
    function handleKeyDown(e){
        if (e.key === "Enter") {
            if (search === "") {
                alert("Please enter a keyword")
            } else {
            searchByTitle(search)
            }
        }
        
    }

    

    // I then returned the input element, the input element will be used to get the title that the user searched for

    return <> 
    <input className= "input" type="search" placeholder="Search for news" requiredvalue={search} onChange={handleChange} onKeyDown={handleKeyDown}></input>
    <div className="button-container">
    <button className="button" onClick={handleClick}>Search</button>
    </div>
     </>
}

export default Search