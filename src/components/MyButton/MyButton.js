import React from 'react';
import $ from 'jquery'
import styles from './MyButton.css'


class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleOnClick(e) {
        // const thisButton = $(e.currentTarget);
        // const classClicked = styles["Clicked"];
        // // if (thisButton.hasClass(classClicked)) {
        // //     thisButton.removeClass(classClicked);
        // // }
        // // thisButton.addClass(classClicked);

        // // thisButton.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        // //     function (e) {
        // //         thisButton.removeClass(classClicked);
        // //     }
        // // );

        // thisButton.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        //     thisButton.removeClass(classClicked);
        // }).addClass(classClicked);
        // // window.setTimeout(function () {
        // //     thisButton.toggleClass(classClicked);
        // // }, 1000);
    }

    render() {
        return <button className={styles["MyButton"] + " " + this.props.className} onClick={this.handleOnClick}>
            {this.props.children}
        </button>
    }
}

MyButton.defaultProps = {
    "children": "Submit"
}

export default MyButton