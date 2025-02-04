import React, {useState} from 'react';
//I called a react hook; useState

function Cart(){
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
		<p className='counting-display'> Cart Quantity: {count}</p>
		<button className='counting-buttons' onClick={decrement}>Remove from Cart</button>
		<button className='counting-buttons' onClick={increment}>Add to Cart</button>
		<button className='counting-buttons' onClick={reset}>Empty Cart</button>

	</div>
)  


}

export default Cart