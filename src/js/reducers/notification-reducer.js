export default function reducer(state={
    notifications: [],
    error: null,
  }, action) {

    switch (action.type) {
      default :
        console.log("Notification default!");
        break;
    }

    return state;
}
