import Header from './components/common/Header';
import Router from './router';

function App($app) {
    this.state = {
        page: 'home',
        time: new Date(),
        apps: ['alarm', 'memo', 'gallery'],
    };

    const { page, time } = this.state;
    const header = new Header({
        $app,
        initialState: { page, time },
        onClick: ({ type }) => {
            switch (type) {
                case 'back':
                    this.route({ page: 'home' });
                    break;
                case 'new':
                    console.log('header click - new');
                    break;
            }
        },
    });
    const router = new Router({
        $app,
        initialState: this.state,
        onClick: (page) => {
            this.route(page);
        },
    });

    const goHome = () => {
        this.setState({
            ...this.state,
            page: 'home',
        });
    };

    const init = () => {
        setInterval(() => {
            this.state = {
                ...this.state,
                time: new Date(),
            };
            header.setState({ page: this.state.page, time: this.state.time, onClick: goHome });
        }, 1000);
        this.render();
    };

    this.route = (page) => {
        this.setState({
            ...this.state,
            page: page,
        });
    };

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        header.setState({
            page: this.state.page,
            time: this.state.time,
        });
        router.setState({ ...this.state });
    };

    init();
}

export default App;
