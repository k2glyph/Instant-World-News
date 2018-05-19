import React from 'react';
import Iframe from 'react-iframe'


class Live extends React.Component { 
    componentDidMount() {
        console.log(document.getElementById("live_channel"));
    }
    render() {
        return (
            <div>
                <h2>Live Cricket Fun.</h2>
                <Iframe url="http://c247.to/live.php?ch=Star_Sports1"
                    id="live_channel"
                    width="600px"
                    height="420px"
                    display="initial"
                    position="relative"
                    allowFullScreen/>

            </div>
        )
    }
    
}
export default Live;