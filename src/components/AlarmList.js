function AlarmList({ $main, initialState, onClick }) {
    this.state = initialState;
    this.$target = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target = document.createElement('ul');
        const { alarms } = this.state;
        alarms.forEach((alarm) => {
            const $li = document.createElement('li');
            const $span = document.createElement('span');
            const $delBtn = document.createElement('button');
            $span.innerHTML = alarm;
            $delBtn.innerText = '삭제';
            $li.appendChild($span);
            $li.appendChild($delBtn);
            this.$target.appendChild($li);
        });
    };
}

export default AlarmList;
