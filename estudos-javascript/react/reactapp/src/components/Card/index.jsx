import '../Card/style.css'

export function Card({name, time}) {
    return(
        <div className="card">
            <p>{name}</p>
            <small>{time}</small>
        </div>
    )
}