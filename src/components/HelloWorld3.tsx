import React, {useState, useRef, useEffect} from 'react';//import statements to import react hooks usestate, useeffect and useref

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld3: React.FC<Props> = (props) => {
    const [url, setUrl] = useState(0);//line to set the a varaible for holding a value and another variable for changing the value
    const QRCode = require('qrcode.react');//code to generate qr codes
    let userInfoInput: any = useRef();

    const changeUrl = (event:any) => {
        setUrl(event.target.value);//line to define functions for changing set values.
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
                placeholder="Input a url here..."
                name="Url"
                onInput={changeUrl}
            />
            </p>
            <div>
            <QRCode value={url} size={256} fgColor="darkblue" />
            </div>
            <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>CA Assignment</strong> by{" "}
              <a href="https://elearning.pau.edu.ng">Chinelo Nwobbi</a>. .
            </p>
          </div>
        </footer>
        </div>
    )//return statement was used to structure codes on the react website
};
export default HelloWorld3;
//export statement used to export helloworld so it can be accessible in App.tsx