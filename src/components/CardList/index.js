const CardList = ({ characters, loading }, children) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    let charactersList;
    if (characters !== undefined && characters.length > 0) {
        charactersList = characters.map((element, index) => {
            return (
                <article className="card" key={`card#${index}-${element.id}`}>
                    <div className="card-container">
                        <div className="card-front">
                            <h2>{element.name}</h2>
                            <img src={element.thumbnail} alt={element.name} />
                        </div>
                        <div className="card-back">
                            <p>{element.description}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </article>
            );
        });
    }
    return (
        <section className="characters">
            {charactersList}
        </section>

    );
}
export default CardList;