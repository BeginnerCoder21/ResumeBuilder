import React from "react";

function InputControl({label, ...props}){
    return(
        <div className="flex flex-col">
            {label && <label className="block tracking-wide text-gray-700 text-md font-bold mb-2 font-poppins">{label}</label>}
            <input type="text" {...props} className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-gray-200"/>
        </div>
    );
}

export default InputControl;