import './DreamHome.css'

export default function DreamHome(Props: {title:string; desc:string}) {
  return (
    <><div className="dream-home" data-aos="fade-up">
      <div className="container">
        <div className="overlay"></div>
        <div className="content">
          <h2>{Props.title}</h2>
          <p>{Props.desc}</p>
        </div>
      </div>
    </div>

    </>
  )
}
