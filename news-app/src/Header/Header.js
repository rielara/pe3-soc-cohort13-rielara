
// This is the Header component
// I used the fragment syntax to return the title and paragraph elements
// I also added an id to the title and paragraph elements so that I could style them in the CSS file

export default function Header() {
    
    return <>
    <h1 id="title">News App</h1>
    <p id="p">Type in a keyword, then press enter or click the 'Search' button</p>
    <p id="p">Example: search for keywords like "food", "science", "coffee"...</p>
    </>
}


