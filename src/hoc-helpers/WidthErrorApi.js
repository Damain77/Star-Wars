import { useState } from 'react'
import ErrorMessage from '@Components/ErrorMessage/ErrorMessage'

const widthErrorApi = View =>{
    return props => {
        const [errorApi, setErrorApi] = useState(false)

        return(
            <>
                {errorApi
                    ? <ErrorMessage />
                    : (
                        <View 
                            setErrorApi = {setErrorApi}
                            {...props}
                        />
                    )
                }    
            </>
        )
    }  
}

export default widthErrorApi;