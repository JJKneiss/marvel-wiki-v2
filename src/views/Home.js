import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const [characters, setCharacters] = useState();
    const [attribution, setAttribution] = useState();
    useEffect(() => {
        console.clear();
        let loadAPI = async () => {
            try {
                const endPoint = "https://gateway.marvel.com/v1/public/characters?&apikey=";
                let auth = "9fc3988f672586da032a847df46e7861";

                const response = await fetch(endPoint + auth);
                const data = await response.json();
                let results = data.data.results;
                console.log(results);

                let arr;
                if (data.length === 0) {
                    alert("No results.");
                }
                else {
                    arr = characters || [];
                    results.forEach(
                        element => {
                            arr.push({
                                id: element.id,
                                name: element.name,
                                description: element.description,
                                urls: element.urls,
                                comics: element.comics,
                                siteLink: element.siteLink,
                                thumbnailImage: element.thumbnailImage
                            })
                        }
                    );
                    setCharacters(arr);
                    setAttribution(data.attributionHTML);
                }
                console.table(arr);
            }
            catch (err) {
                console.log(err);
            }
        }
        loadAPI();
    }, []);

    let charactersList;
    if (characters !== undefined && characters.length > 0) {
        charactersList = characters.map((element, index) => {
            return (
                <article className="card" key={element.id} val={element}>
                    <h1>{element.name}</h1>
                    <p>{element.description}</p>
                    <button>Read More</button>
                </article>);
        });
    }
    return (
        <div className="App">
            <Header />
            <section className="cards">
                {charactersList || <p>"Loading"</p>}
            </section>
            <Footer attribution={attribution} />
        </div >
    );
}