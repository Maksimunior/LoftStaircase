import React from "react";

const Check = ({check, checked1, checked2, setChecked1, setChecked2}) => {
    return (
        <div className="check">
            <label><h6 className="text-field1">{check.title}</h6></label>
            <label className="radio">
                <input type="radio" name={check.name} value="male" onChange={() => setChecked1(!checked1)}/>
                <i></i>  {check.body[0]}
                {/* <span>{checked1 ? 'true' : 'false'}</span> */}
                <pre id="log"></pre>
            </label>
            <label className="radio">
                <input type="radio" name={check.name} value="male" onChange={() => setChecked2(!checked2)}/>
                <i></i> {check.body[1]}
                {/* <span>{checked2 ? 'true' : 'false'}</span> */}
            </label>
        </div>
    )
}

export default Check;