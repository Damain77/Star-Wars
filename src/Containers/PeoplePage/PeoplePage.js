import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'

import widthErrorApi from '@hoc-helpers/WidthErrorApi';

import PeopleList from '@Components/PeoplePage/PeopleList/PeopleList';
import PeopleNavigation from '@Components/PeoplePage/PeopleNavigation/PeopleNavigation';

import { getApiResourse, changeHTTP } from '@Utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';

import { API_PEOPLE } from '@constants/api';
import useQueryParams from '@hooks/useQueryParams';

import styles from './PeoplePage.module.css';


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)
    
    const query = useQueryParams()
    const queryPage = query.get('page')

    const getResourse = async (url) => {
        const fetchData = await getApiResourse(url)

        if (fetchData) {
            const peopleList = fetchData.results.map(({name,url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return { id, name, img }
            })
            setPeople(peopleList)
            setNextPage(changeHTTP(fetchData.next))
            setPrevPage(changeHTTP(fetchData.previous))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    }
    useEffect(() => {
        getResourse(API_PEOPLE + queryPage)
    }, [queryPage])

  return(
    <>
        <PeopleNavigation 
            getResourse={getResourse}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
        />
        {people && <PeopleList people={people} />}
    </>
)}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
  }

export default widthErrorApi(PeoplePage);