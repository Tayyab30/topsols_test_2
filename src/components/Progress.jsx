import {useState , useEffect} from 'react';
import InputRange from 'react-input-range';


const Progress = ()=>{

    const [ r1 , setR1] = useState(25);
    const [ r2 , setR2] = useState(r1*2);
    const [ r3 , setR3] = useState(r2/2);
    
    // useEffect(() => {
    //     increment();      
    // }, [])
    const increment =()=>{
        setR1(r1+1);
        setR2(r1*2);
        setR3(r2/2);
    }


    return(
        <>
            <InputRange
                style={{color: "red"}}
                maxValue={100}
                minValue={0}
                value={r1}
                onChange={value => setR1({ value })} 
            />

            <InputRange
                style={{color: "red"}}
                maxValue={100}
                minValue={0}
                value={r2}
                // onChange={value => this.setState({ value })} 
            />
                <InputRange
                style={{color: "red"}}
                maxValue={100}
                minValue={0}
                value={r3}
                // onChange={value => this.setState({ value })} 
            />
            <button type="button" onClick={increment}>+</button>
            
        </>
    );
}

export default Progress;