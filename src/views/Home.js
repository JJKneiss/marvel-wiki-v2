import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

export default function Home() {

    const [characters, setCharacters] = useState([]);
    const [attribution, setAttribution] = useState();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(8);
    useEffect(() => {
        console.clear();
        const loadAPI = async () => {
            try {
                setLoading(true);

                const endPoint = "https://gateway.marvel.com/v1/public/characters?&apikey=";
                let auth = "9fc3988f672586da032a847df46e7861";

                const response = await fetch(endPoint + auth);
                const data = await response.json();
                let results = data.data.results;

                let arr = [];
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
                                description: checkDescription(element.description),
                                urls: element.urls,
                                comics: element.comics,
                                siteLink: element.siteLink,
                                thumbnail: element.thumbnail.path + "." + element.thumbnail.extension
                            })
                        }
                    );
                    setCharacters(arr);
                    setAttribution(data.attributionHTML);
                }
                setLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        }
        loadAPI();
    }, []);
    let checkDescription = (description) => {
        if (description === "" || description === undefined) description = "No Description Available";
        return description;
    }
    // Get current posts
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <Header />
            <CardList characters={currentCharacters} loading={loading} />
            <Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={paginate} />
            <Footer attribution={attribution} />
        </div >
    );
}