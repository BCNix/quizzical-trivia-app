import QAPanel from './QAPanel'
import '../styles/quiz.css'

export default function Quiz(){
    return (
        <main className='quiz-container'>
            <QAPanel />
            <hr></hr>
            <QAPanel />
            <hr></hr>
            <QAPanel />
            <hr></hr>
            <QAPanel />
            <hr></hr>
            <QAPanel />
        </main>

    )
}