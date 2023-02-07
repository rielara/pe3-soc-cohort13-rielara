
// This is a functional component that takes in props and returns a card with the title, description, image, and url of the article
// I used the destructuring assignment to get the title, description, image, and url from the props object
// I then returned the article element with the title, description, image, and url
// I also added an id to the article element so that I could style it in the CSS file


export default function Card({title, description, image, url}){
    return <article id="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="news article" />
        <a href = {url}>Read More</a>

    </article>
}