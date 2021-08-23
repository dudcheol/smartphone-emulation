import HomeList from '../components/HomeList';

function Home({ $main, initialState, onClick, onAppsChange }) {
    this.state = initialState;
    this.$target = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target = document.createElement('section');
        $main.appendChild(this.$target);

        const homeList = new HomeList({
            $main: this.$target,
            initialState: this.state,
            onClick,
            onAppsChange,
        });

        homeList.setState({ ...this.state });
    };
}

export default Home;
