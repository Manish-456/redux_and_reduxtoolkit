import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, reStocked } from './icecreamSlice';

export function IcecreamView() {
 const {noOfIceCreams} = useSelector(state => state.iceCream);
 const dispatch = useDispatch();

  return (
    <div>
          <h2>Number of ice-creams - [{noOfIceCreams}]</h2>
          <button onClick={() => dispatch(ordered(2))}>Order ice-cream</button>
          <button onClick={() => dispatch(reStocked(4))}>Restock ice-creams</button>
    </div>
  )
}
