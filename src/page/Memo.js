import Input from '../components/common/Input';
import MemoList from '../components/MemoList';

function Memo({ $main, initialState, onMemoChange }) {
    this.state = initialState;
    this.$Memo = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        $main.innerHTML = '';
        this.$Memo = document.createElement('section');
        if (this.state.isInputShowing) {
            const memoInput = new Input({
                $target: this.$Memo,
                initialState: this.state,
                onClick: (memo) => {
                    onMemoChange({ type: 'add', memo });
                },
            });
            memoInput.setState({ ...this.state, type: 'text' });
        }
        const memoList = new MemoList({
            $target: this.$Memo,
            initialState: this.state,
        });
        memoList.setState(this.state);

        $main.appendChild(this.$Memo);
    };
}

export default Memo;
