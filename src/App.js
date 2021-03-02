import React from 'react';
import './App.css';

// Class
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isLightOn: !this.state.isLightOn,
        });
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.handleClick}
            >
                {this.state.isLightOn ? 'AAN' : 'UIT'}
            </button>
        );
    }
}

// Function
function AppFunction() {
    const [isLightOn, toggleIsLightOn] = React.useState(true);

    function handleClick() {
        toggleIsLightOn(!isLightOn);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
        >
            {isLightOn ? "AAN" : "UIT"}
        </button>
    );
}

// Je kan maar 1 export aan hebben staan
export default AppFunction;
// export default App;