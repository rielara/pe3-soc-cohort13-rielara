
// This is the Header component
// I used the fragment syntax to return the title and paragraph elements
// I also added an id to the title and paragraph elements so that I could style them in the CSS file

export default function Header() {
    
    return <>
    <img id="logo" src="https://gnews.io/assets/images/logo-black.svg?id=a332c72179db3a9d76e6718f0ba0247e" alt="news icon" />
    <p id="p">
        Type in a keyword, then press enter or click the 'Search' button.
        <br />
        Example: search for keywords like "video games", "horror movies", "cute cats"...
    
    </p>
    </>
}


