// import { NavLink } from "react-router-dom";
const Pagination = ({ charactersPerPage, totalCharacters, paginate }, children) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Pagination;