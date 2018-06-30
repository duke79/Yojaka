import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/actions'
import { database } from '../../data/myFirebase'

function testFirebase() {
      var rootRef = database.ref();
      var mirrorRef = rootRef.child("TorAssist/TBP/mirror1");
      var newMirrorRef = mirrorRef.push();
      newMirrorRef.set({
            name:"cars"
      });

      mirrorRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                  console.log(child.key + ": " + child.val());
            });
      });

      // mirror1.once('value').then((snapshot) => {
      //       var tbp = snapshot.val().TBP;
      //       console.log(tbp);
      // });

      // var mirror1 = database.ref("TorAssist").ref("TBP").ref("mirror1");
      // console.log(mirror1)
}

function todo(state, action) {
      switch (action.type) {
            case ADD_TODO:
                  testFirebase();
                  return {
                        id: action.id,
                        text: action.text,
                  }
            default:
                  return state
      }
}
function todos(state = [], action) {
      switch (action.type) {
            case ADD_TODO:
                  return [
                        ...state,
                        todo(undefined, action)
                  ]
            default:
                  return state
      }
}
const todoApp = combineReducers({
      todos
})
export default todoApp