import "./Card.css"

function Card(comp) {
    let defaultCss = "card " + comp.className
    return (
        <div className={defaultCss}>
            {comp.children}
        </div>
    )
}

export default Card