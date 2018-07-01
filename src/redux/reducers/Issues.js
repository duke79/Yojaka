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

function addIssue(issue, id) {
    var rootRef = database.ref();
    var issuesList = rootRef.child("Yojaka/duke79/Issues/" + id);
    issuesList.set(issue);
}

export function getIssuesList(action) {
    var rootRef = database.ref();
    var issuesList = rootRef.child("Yojaka/duke79/Issues");

    return new Promise(function (resolve, reject) {
        issuesList.on("value", (snapshot) => {
            // console.log(snapshot);
            // return snapshot.val()
            var IssuesList = [];
            var snapVal = snapshot.val();
            for(var key in snapVal) {
                var value = snapVal[key];
                IssuesList.push(value);
            }

            resolve(IssuesList);
        });
    });

    // return [
    //     {
    //         "title": "Issue from Redux",
    //         "number": "12",
    //         "date": "May 12",
    //         "author": "duke79"
    //     }
    // ]
}

export function Issues(state, action) {
    switch (action.type) {
        case LOAD_ISSUES:
            return [];
        case 'LOAD_ISSUES_SUCCEEDED':
            return action.user;
        default:
            return [];
    }
}