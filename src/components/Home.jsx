import blueBlob from '../assets/images/blob-blue.png'
import yellowBlob from '../assets/images/blob-yellow.png'


export default function Home(props){

    console.log("test")

    return (
        <section className="home-container">
            <img className='yellow-blob' src={yellowBlob} alt='yellow blob'/>
            <h1>Quizzical</h1>
            <p>Challenge your knowledge across hundreds of categories.</p>
            <button onClick={() => props.clickToNavigate("quiz")}>Start quiz</button>
            <img className='blue-blob'src={blueBlob} alt='blue blob'/>
        </section>
        
    )
}