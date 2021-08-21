function App($app) {
    this.state = {};

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    const init = () => {};

    this.render = () => {};

    init();
}
