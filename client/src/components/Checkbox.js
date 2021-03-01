import React from 'react';
const Checkbox = ({ type = 'checkbox', name, checked = false, onChange, onClick }) => {
    console.log("Checkbox: ", name, checked);
    return (<input type={type} name={name} checked={checked} onChange={onChange} onClick={onClick} />)
}
export default Checkbox;