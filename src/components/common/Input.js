function Input({ $target, initialState, onClick }) {
    this.state = initialState;
    this.$Input = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        const { type } = this.state;
        this.$Form = document.createElement('form');
        switch (type) {
            case 'time':
                this.$Form.innerHTML = `
                    <select name="day">
                        <option value="오전">오전</option>
                        <option value="오후">오후</option>
                    </select>
                    <select name="hour">
                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>시
                    <select name="minute">
                        <option value="0">00</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>분
                `;
                break;
            case 'text':
                break;
            default:
                break;
        }
        const $submitBtn = document.createElement('input');
        $submitBtn.value = '저장';
        $submitBtn.type = 'submit';
        this.$Form.onsubmit = (e) => {
            e.preventDefault();
            const hour =
                e.target.day.value === '오전'
                    ? Number(e.target.hour.value)
                    : Number(e.target.hour.value) + 12;
            const minute = e.target.minute.value;
            const date = new Date();
            date.setHours(hour);
            date.setMinutes(minute);
            onClick({ id: Date.now() + Math.floor(Math.random() * 10000), date });
        };
        this.$Form.appendChild($submitBtn);
        $target.appendChild(this.$Form);
    };
}

export default Input;
