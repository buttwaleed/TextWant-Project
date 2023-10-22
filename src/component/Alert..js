import React from 'react';

export default function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    const customStyles = {
        backgroundColor: '#D1E7DD',
        /* Other styling properties as needed */
    };

    return (
        <>
            {props.alert && (
                <div style={customStyles} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                  
                </div>
            )}
        </>
    );
}

