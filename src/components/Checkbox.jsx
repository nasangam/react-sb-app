import React,{useState} from 'react';
import PropTypes from 'prop-types';

function Checkbox({label, onChange, bgcolor, color}) {
    const [checked, setChecked] = useState(false);
    const onChangeHandler = (e) => {
        console.log("onChange() from Checkbox component");
        setChecked(e.target.checked);
        onChange(e);
    }
    return (
        <div style={{backgroundColor: bgcolor?bgcolor:'#FF', color: color?color:'#00'}}>
            <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
            {label}
        </div>
    )
}
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  color: PropTypes.string,
  bgcolor: PropTypes.string
}
export default Checkbox
