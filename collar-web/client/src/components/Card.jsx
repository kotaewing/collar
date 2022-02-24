import * as React from 'react';
var pin = require('./../assets/images/pin.png')

export default function Card() {
    return (
        <div >
            <div >
                <p >UI UX Design Job</p>
                <p >Some sample text here</p>
                <div >
                    <p >CURRENT</p>
                </div>
                <div >
                    <img alt="alt" source={pin} />
                    <p >123 Beach Front Ave</p>
                </div>
            </div>
        </div>
    );
}