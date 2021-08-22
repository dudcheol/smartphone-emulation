function Gallery({ $main, initialState, onClick }) {
    this.state = initialState;
    this.$target = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target = document.createElement('section');
        this.$target.innerHTML = `<div>Gallery</div>`;
        $main.appendChild(this.$target);
    };
}

export default Gallery;