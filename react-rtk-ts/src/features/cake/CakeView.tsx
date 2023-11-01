import {ordered, reStocked} from './cakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export function CakeView() {
  const {noOfCakes} = useAppSelector((state) => state.cake)
  const dispatch = useAppDispatch();
  return (
    <div>
          <h2>Number of cakes - [{noOfCakes}] </h2>
          <button onClick={() => dispatch(ordered())}>Order cake</button>
          <button onClick={() => dispatch(reStocked(4))}>Restock cakes</button>
    </div>
  )
}
