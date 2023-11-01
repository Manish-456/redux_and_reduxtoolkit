import { ordered, reStocked } from './icecreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export function IcecreamView() {
 const {noOfIceCreams} = useAppSelector((state) => state.iceCream);
 const dispatch = useAppDispatch();

  return (
    <div>
          <h2>Number of ice-creams - [{noOfIceCreams}]</h2>
          <button onClick={() => dispatch(ordered(2))}>Order ice-cream</button>
          <button onClick={() => dispatch(reStocked(4))}>Restock ice-creams</button>
    </div>
  )
}
