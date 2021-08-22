function Input({ $target, initialState, onClick }) {
    this.state = initialState;
    this.$Input = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        const { type } = this.state;
        this.$Input = document.createElement('input');
        switch (type) {
            case 'time':
                break;
            case 'text':
                break;
            default:
                break;
        }
    };
}

export default Input;
