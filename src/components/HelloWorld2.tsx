import React, { useState, useRef, useEffect} from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld2: React.FC = () => {
    const [sms, setSms] = useState('');//line to set the a varaible for holding a value and another variable for changing the value
    const QRCode = require('qrcode.react');//code to generate qr codes
    let userInfoInput: any = useRef();


    const changeSms = (event: any) => {
        setSms(event.target.value);//line to define functions for changing set values.
    };
    useEffect(() => {
        userInfoInput.current.focus();//use effect here to re-render documents.
    }, []);

        return (
            <div>
                <div className="box has-background-primary is-flex is-flex-direction-column is-justify-content-center is-align-items-center"></div>
                <br />
                <p>Hello Generate your SMS QR code here.</p>
                <p>
                    <input ref={userInfoInput}
                        type="text"
                        placeholder="Write a number here..."
                        onInput={changeSms}
                    />
                </p>
                <div>
                    <QRCode
                        value={`SMS:${sms}:Hello`}
                        size={256}
                        fgColor="black"
                    />
                </div>
            </div>
        );//return statement was used to structure codes on the react website
    };

    export default HelloWorld2;
    //export statement used to export helloworld so it can be accessible in App.tsx
