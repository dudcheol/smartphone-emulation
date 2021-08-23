import './MemoList.css';

function MemoList({ $target, initialState }) {
    this.state = initialState;
    this.$MemoList = null;

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        this.$MemoList = document.createElement('ul');
        this.$MemoList.className = 'MemoList';
        const { memos } = this.state;
        memos.forEach(({ id, content }) => {
            const $li = document.createElement('li');
            $li.innerHTML = content;
            $li.addEventListener('click', (e) => {
                e.target.parentNode.childNodes.forEach((li) => {
                    li.classList.remove('selected');
                });
                e.target.classList.add('selected');
            });
            this.$MemoList.appendChild($li);
        });
        $target.appendChild(this.$MemoList);
    };
}

export default MemoList;
