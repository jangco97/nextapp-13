import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
const ChallengePage = async() => {

    const userData = await getCurrentUser()
    console.log('getcurrentUser', userData);
    return (<div>챌린지</div>)
}

export default ChallengePage