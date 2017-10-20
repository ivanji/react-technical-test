import React from 'react';
import Celebrity from './Celebrity';

const CelebrityList = (props) => {
    return (
        <div>
            {
                props.celebrities.map(function (celebrity) {
                  return  <Celebrity {...celebrity} key={celebrity.rank} />
                })
            }
        </div>
    )
};

export default CelebrityList;