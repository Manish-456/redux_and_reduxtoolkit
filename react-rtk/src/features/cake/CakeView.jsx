import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {ordered, reStocked} from './cakeSlice';

export function CakeView() {
  const {noOfCakes} = useSelector(state => state.cake)
  const dispatch = useDispatch();
  return (
    <div>
          <h2>Number of cakes - [{noOfCakes}] </h2>
          <button onClick={() => dispatch(ordered())}>Order cake</button>
          <button onClick={() => dispatch(reStocked(4))}>Restock cakes</button>
    </div>
  )
}
