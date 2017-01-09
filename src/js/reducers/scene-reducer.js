export default function reducer(state={
    scenes: [],
    error: null,
  }, action) {

    switch (action.type) {
      default :
        console.log("Scene default!!!");
        break;
    }

    return state;
}
