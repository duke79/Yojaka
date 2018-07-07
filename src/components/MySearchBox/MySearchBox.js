import React from 'react';
import styles from './MySearchBox.css'


class MySearchBox extends React.Component {
    render() {
        return <div className={styles["wrapper"]}>
            <input className={styles["box"]}></input>
        </div>
    }
}

export default MySearchBox