import React, {useState} from 'react';
//I called a react hook; useState

function Buttons(){
const [count, setCount] = useState(0);

const increment = () => {
	setCount(count + 1)
}

const decrement = () => {
	setCount(count - 1)
}

const reset = () => {
	setCount(0)
}

return(
	<div className='counting-container'>
		<p className='counting-display'>{count}</p>
		<button className='counting-button' onClick={decrement}>Decrement</button>
		<button className='counting-button' onClick={increment}>Increment</button>
		<button className='counting-button' onClick={reset}>Reset</button>

	</div>
)  


}

export default Buttons