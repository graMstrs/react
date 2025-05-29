import { Component } from "react";

const styles = {
    title: {
        marginBottom:'30px',
    }
}

class Title extends Component{

    render(){
        return(
            <h1 styles={styles.title}>
                Tienda
            </h1>
        )
    }

}

export default Title