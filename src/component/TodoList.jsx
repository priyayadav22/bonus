import React, {useState} from 'react';
// import AddIcon from 'material-ui/icons/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import Clock from 'react-digital-clock';
import Countdown from 'react-countdown';

const TodoList = () => {
    const [num,setNum] =useState(0);

    const incNum=() =>{
        setNum(num+1);
    };

    const decNum=() =>{
        if(num>0){
        setNum(num-1);
        }else{
            alert("Sorry, Zero limit Reached.");
            setNum(0);
            
        }
    };

    return (
        <>
            <div className='main_div'>
            <Clock/>
            <Countdown date={Date.now() + 10000} />
                <div className='center_div'>
                    <h1>{num}</h1>
                    <div className='btn_div'>
                        <button onClick={incNum}>+
                        </button>
                        <button onClick={decNum}>-
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default TodoList;