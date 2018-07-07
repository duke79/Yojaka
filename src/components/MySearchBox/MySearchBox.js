import React from 'react';
import styles from './MySearchBox.css'


class MySearchBox extends React.Component {
    render() {
        return <div className={styles["wrapper"]}>
            <input
                className={styles["box"]}
                placeholder={this.props.placeholder}
            />
        </div>
    }
}

MySearchBox.defaultProps = {
    placeholder: "Search or filter results..."
}

export default MySearchBox