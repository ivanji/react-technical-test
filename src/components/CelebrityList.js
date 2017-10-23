import React from 'react';
import Celebrity from './Celebrity';

const CelebrityList = (props) => {


    return (
        <div>
            {
                props.celebrities.map(function (celebrity) {
                    return <Celebrity key={celebrity.rank} {...celebrity}/>
                })
            }
        </div>
    )
};

export default CelebrityList;