import { combineReducers } from "redux"

import scene from "./scene-reducer"
import notification from "./notification-reducer"

export default combineReducers({
  scene,
  notification
})
