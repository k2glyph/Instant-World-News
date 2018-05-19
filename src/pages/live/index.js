import React from 'react';
import Iframe from 'react-iframe'
import Ad from '../ad';

class Live extends React.Component { 
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>Live Cricket Fun.</h2>
                <Ad slot="8754505575" />
                <div style={{background: 'black',width: 700,height: 450}}>
                <Iframe url="http://c247.to/live.php?ch=Star_Sports1"
                    id="live_channel"
                    width="600px"
                    height="420px"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
                </div>
                <Ad />
            </div>
        )
    }
    
}
export default Live;