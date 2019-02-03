import { ADD_FRIEND } from '../../enum';
export const addFriend = friendIndex => (
  {
    type: ADD_FRIEND,
    payload: friendIndex,
  }
);