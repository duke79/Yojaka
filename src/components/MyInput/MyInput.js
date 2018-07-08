import React from 'react';
import styles from './MyInput.css'


class MyInput extends React.Component {
    render() {
        return <div className={styles["wrapper"] + " " + this.props.className}>
            <input
                className={styles["box"]}
                placeholder={this.props.placeholder}
            />
        </div>
    }
}

MyInput.defaultProps = {
    placeholder: "Search or filter results..."
}

export default MyInput