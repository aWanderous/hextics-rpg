import React, {Component} from 'react';
import StatusBar from './components/StatusBar';
// import Tile from './components/Tile';
import Footer from './components/Footer';

class App extends Component {
    constructor()
    {
       super();
       this.state = {
           health: 100,
           mana: 100,
       };
    }



    render() {
        const {health,mana} = this.state;
        return (
            <div id='app'>
                <StatusBar
                health = {health}
                mana = {mana}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
