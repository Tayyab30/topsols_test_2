import { useState, useEffect } from "react";
import './drag.css';
import InputRange from 'react-input-range';

const Draggable =()=>{

    const [range1, setRange1] = useState(20);
    const [range2, setRange2] = useState(range1*2);
    const [range3, setRange3] = useState(18);

    const total = range1 + range2 + range3;
    
    useEffect(() => {
        handleChange();  
        console.log('hi')  
    
    }z)

    const handleChange= ()=>{
        setRange2(range1*2);
    }
    return(
        <>
        <form className="form">
            <h2>{range1}</h2>
        <input type="range" className="custom-range" defaultValue={range1} onChange={handleChange} min="0" max="100"  />
        <h2>{range2}</h2>
        
        <input type="range" className="custom-range" defaultValue={range2} min="0" max="100"  />
        <h2>{range3}</h2>
        
        <input type="range" className="custom-range" defaultValue={range3} min="0" max="100"  />

            {/* <InputRange
                maxValue={100}
                minValue={0}
                value={range}
                onChange={value => setRange(value)}
                onChangeComplete={value => console.log(value)} 
            /> */}
      </form>

        </>
    );
}

export default Draggable;