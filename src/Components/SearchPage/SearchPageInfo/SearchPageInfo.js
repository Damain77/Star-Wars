import styles from './SearchPageInfo.module.css';
import PropTypes from 'prop-types';

const SearchPageInfo = ({people}) => {
   
    return(
        <>
            {people.length > 0
                ? (
                    <ul>
                        {people.map(({id,name,img}) =>(
                            <li key={id}>
                                <img src={img}/>
                                <div>{name}</div>
                            </li>
                        ))}
                    </ul>
                )
                : <h2>No results</h2>
            }

        </>
)}

SearchPageInfo.propTypes = {
    people: PropTypes.array,
  }

export default SearchPageInfo;