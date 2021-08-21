import Home from '../page/Home';

function Router({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement('main');
    $app.appendChild(this.$target);

    const home = new Home({
        $main: this.$target,
        initialState: this.state,
        onClick,
    });

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        const { page } = this.state;
        this.$target.innerHTML = '';
        switch (page) {
            case 'alarm':
                break;
            case 'memo':
                break;
            case 'gallery':
                break;
            default:
                console.log('router');
                home.setState(this.state);
                break;
        }
    };
}

export default Router;
