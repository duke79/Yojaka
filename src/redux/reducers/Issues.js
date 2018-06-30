import { LOAD_ISSUES } from '../actions/actions'
import { database } from '../../data/myFirebase'

function testFirebase() {
    var rootRef = database.ref();
    var mirrorRef = rootRef.child("TorAssist/TBP/mirror1");
    var newMirrorRef = mirrorRef.push();
    // mirrorRef.set("yippi");
    // newMirrorRef.set({
    //       name:"cars"
    // });

    mirrorRef.on("value", function (snapshot) {
        console.log(snapshot.val());
    });

    // mirror1.once('value').then((snapshot) => {
    //       var tbp = snapshot.val().TBP;
    //       console.log(tbp);
    // });

    // var mirror1 = database.ref("TorAssist").ref("TBP").ref("mirror1");
    // console.log(mirror1)
}

function getIssuesList(action) {
    return [
        {
            "title": "Issue from Redux",
            "number": "12",
            "date": "May 12",
            "author": "duke79"
        }
    ]
}

export function Issues(state, action) {
    switch (action.type) {
        case LOAD_ISSUES:
            return getIssuesList(action);
        default:
            return [
                {
                    "title": "enabled word breaking of card title",
                    "number": "10485",
                    "date": "March 29",
                    "author": "bigbabla"
                },
                {
                    "title": "Another Issue",
                    "number": "445",
                    "date": "December 04",
                    "author": "bigbabla"
                },
                {
                    "title": "This is going to be one hell of an issue owing to the lengh of the title that this issue is going to have. It may either mean that this issue's title will stay in a single line or break into multiple, in the later case the height of the row may increase, which is not a good design.",
                    "number": "445",
                    "date": "December 04",
                    "author": "bigbabla"
                },
            ];
    }
}