import './HowItWorks.css'

export default function HowItWorksCard(how: { id: string; icon: string; title: string; desc: string }) {
    return (
        <>
            <div id={how.id} data-aos="flip-left" className="how-card">
                <img src={how.icon} alt="icon" />
                <h3>{how.title}</h3>
                <p>{how.desc}</p>
            </div>
        </>
    )
}
