import './Title.css'

export default function Title(Props: {title:string; desc:string}) {
    return (
        <>
        <div className="title container">
            <h2>{Props.title}</h2>
            <p>{Props.desc}</p>
        </div>
        </>
    )
}
