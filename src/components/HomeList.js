function HomeList({ $main, initialState, onClick }) {
    this.state = initialState;
    this.$target = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        console.log('homeList');
        this.$target = document.createElement('ul');
        this.state.apps.forEach((app) => {
            const $li = document.createElement('li');
            const $button = document.createElement('button');
            $button.innerHTML = app;
            $button.addEventListener('click', () => {
                onClick(app);
            });
            $li.appendChild($button);
            this.$target.appendChild($li);
        });
        $main.appendChild(this.$target);
    };
}

export default HomeList;
