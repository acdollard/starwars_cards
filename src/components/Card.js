const Card = (data) => {

    return (
        <div className="card">
            <h2>Name: {data.name}</h2>
            <p>Birth year: {data.birth_year}</p>
            <p>Eye color: {data.eye_color}</p>
        </div>
    )
}

export default Card;