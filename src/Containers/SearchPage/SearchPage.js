import { useCallback, useEffect, useState } from 'react';
import styles from './SearchPage.module.css';
import PropTypes from 'prop-types';
import { getApiResourse } from '@Utils/network';
import { API_SEARCH } from '@constants/api';
import { debounce } from "lodash"
import widthErrorApi from '@hoc-helpers/WidthErrorApi';
import PeopleList from '@Components/PeoplePage/PeopleList/PeopleList';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import UIinput from '@Components/UI/UIinput/UIinput';
// import SearchPageInfo from '@Components/SearchPage/SearchPageInfo/SearchPageInfo';


const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people,setPeople] = useState([])
    const debouncedGetResponse = useCallback(debounce(value => getResponse(value), 300),[])

    const getResponse = async param => {
        const res = await getApiResourse(API_SEARCH + param)
        if (res){
            const peopleList = res.results.map(({name,url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    name,
                    id,
                    img,
                }
            })
            setPeople(peopleList)
            setErrorApi(false)            
        } else {
            setErrorApi(true)
        }        
    }

    useEffect(() => async () => await getResponse(''),[])
    
    const handleInputChange = (value) => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }

    return(
        <>
            <h1 className='header__text'>Search</h1>
            <UIinput 
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder='input characters name'
                classes = {styles.input__search}
            />
            {people.length ? <PeopleList people={people}/> : <h2 className={styles.comment}>No results</h2>}
            {/* <SearchPageInfo people={people} /> */}
        </>
)}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
  }

export default widthErrorApi(SearchPage);