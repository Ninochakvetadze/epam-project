
import educationReducer from '../features/education/educationReducer';
import { fetchEducationData } from '../features/education/educationAction';


describe('educationSlice reducer', () => {
  it('should handle the pending action', () => {
    const initialState = {
      data: [],
      loading: 'idle', 
      error: null,
    };

    const newState = educationReducer(initialState, fetchEducationData.pending);

    expect(newState.loading).toEqual('pending');
    expect(newState.error).toBeNull();
  });

  it('should handle the fulfilled action', () => {
    const initialState = {
      data: [],
      loading: 'pending', 
      error: null,
    };

    const fakeData = ['Education 1', 'Education 2'];
    

    const newState = educationReducer(initialState, fetchEducationData.fulfilled(fakeData));

    expect(newState.loading).toEqual('succeeded');
    expect(newState.data).toEqual(fakeData);
    expect(newState.error).toBeNull();
  });
});
