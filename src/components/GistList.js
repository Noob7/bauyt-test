import React, { useEffect, useState } from 'react'
import Gist from './Gist';

const GistList = ({gists}) => {
    return(    
    gists.map(gist=><Gist gist={gist} />)    
    )
}

export default GistList
