import '../styles/home.css'


export default function Home(props){

    console.log("test")

    return (
        <header className="home-container">
            <h1>Quizzical</h1>
            <p>Challenge your knowledge across hundreds of categories.</p>
            <button onClick={() => props.clickToNavigate("quiz")}>Start quiz</button>
        </header>
        
    )
}