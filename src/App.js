import Header from './components/common/Header';

function App($app) {
    this.state = {
        page: 'home',
        time: new Date(),
    };

    const header = new Header({ $app, initialState: this.state });

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    const init = () => {
        setInterval(() => {
            this.setState({
                ...this.state,
                time: new Date(),
            });
            this.render();
        }, 1000);
    };

    this.render = () => {
        header.setState({ page: this.state.page, time: this.state.time });
    };

    init();
}

export default App;
