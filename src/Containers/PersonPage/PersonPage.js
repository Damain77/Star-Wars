
import { useParams } from 'react-router';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux'
import { API_PERSON } from '@constants/api';

import { getApiResourse } from '@Utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import widthErrorApi from '@hoc-helpers/WidthErrorApi';

import PersonFoto from '@Components/PersonPage/PersonFoto/PersonFoto';
import PersonInfo from '@Components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '@Components/PersonPage/PersonLinjBack/PersonLinkBack';

import UILoading from '@Components/UI/UIloading/UIloading';

// import PersonFilms from '@Components/PersonPage/PersonFilms/PersonFilms';

import styles from './PersonPage.module.css';
import PropTypes from 'prop-types';

const PersonFilms = lazy(() =>  import('@Components/PersonPage/PersonFilms/PersonFilms'))


const PersonPage = ({ setErrorApi}) => {  
    const[personId, setPersonId] = useState(null)
    const[personInfo, setPersonInfo] = useState(null)
    const[personName, setPersonName] = useState(null)
    const[personFoto, setPersonFoto] = useState(null)
    const[personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)
    const id = useParams().id

    const storeData = useSelector(state => state.favoriteReducer)        

    useEffect(() => {
        (async () => {
            const res = await getApiResourse(API_PERSON + '/' + id)            
            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)                          
            setPersonId(id)

            if (res){
                setErrorApi(false)
                setPersonInfo([
                    {title: 'birth_year', data: res.birth_year},
                    {title: 'eye_color', data: res.eye_color},
                    {title: 'gender', data: res.gender},
                    {title: 'hair_color', data: res.hair_color},
                    {title: 'height', data: res.height},
                    {title: 'mass', data: res.mass},
                    {title: 'skin_color', data: res.skin_color},
                ])
                setPersonName(res.name)
                setPersonFoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)
            } else {
                setErrorApi(true)
            }         
        })()        
    },[storeData,id])

    return(
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonFoto
                        personId={personId}
                        personFoto={personFoto}
                        personName={personName}
                        personFavorite = {personFavorite}
                        setPersonFavorite = {setPersonFavorite}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personFilms && (
                        <Suspense fallback={
                            <UILoading
                                theme='white'
                                isShadow
                                classes=''                              
                            />
                        }>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    )}
                </div>
            </div>
        </>
)}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
  }

export default widthErrorApi(PersonPage);