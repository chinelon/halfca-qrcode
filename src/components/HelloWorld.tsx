import React, {useState, useEffect, useRef} from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');//line 9 and 10 to set the a varaible for holding a value and another variable for changing the value
    const QRCode = require('qrcode.react');//code to generate qr codes
    let userInfoInput: any = useRef();
    
    const changeEmail = (event: any) => {
        setEmail(event.target.value);
    };
    const changeMessage = (event: any) => {
        setMessage(event.target.value);//lines 14-18 to define functions for changing set values.
    };
    useEffect(() => {
        userInfoInput.current.focus();//use effect here to re-render documents.
    }, []);

    return (
        <div>
            <p>Hello Generate your URL QR code here.</p>
            <p>
            <input ref={userInfoInput}
                type="text"
                placeholder="Input recipients mail here..."
                name="Mail"
                onInput={changeEmail}
            />
            </p>
            <p>
            <input ref={userInfoInput}
                type="text"
                placeholder="Input message for recipient here..."
                name="Mail"
                onInput={changeMessage}
            />
            </p>
            <div>
                {<QRCode value={`mailto: ${email}?}&body=${message}`} size={256} fgColor="maroon" />}
            </div>
        </div>


    )//return statement was used to structure codes on the react website
};
export default HelloWorld;
//export statement used to export helloworld so it can be accessible in App.tsx