export default function QAPanel(){

    const choices = ["Cabbage Patch Kids", "Transformers", "Rubik’s Cube", "Portugal"]



    const choicesEl = choices.map( (choice) => <button>{choice}</button>)

    return (
        <section className="qa-panel">
            <p>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
            <div className="choices-panel">
                {choicesEl}
            </div>
            
        </section>
    )
}