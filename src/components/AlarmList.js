import { convertStringToAlarmformat } from '../utils/DateUtils';
import './AlarmList.css';

function AlarmList({ $target, initialState, onRemove }) {
    this.state = initialState;
    this.$AlarmList = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$AlarmList = document.createElement('ul');
        this.$AlarmList.className = 'AlarmList';
        const { alarms } = this.state;
        alarms.forEach(({ id, date }) => {
            const $li = document.createElement('li');
            const $span = document.createElement('span');
            const $delBtn = document.createElement('button');
            $span.innerHTML = convertStringToAlarmformat(date);
            $delBtn.innerText = '삭제';
            $delBtn.addEventListener('click', () => {
                onRemove({ id, date });
            });
            $li.appendChild($span);
            $li.appendChild($delBtn);
            this.$AlarmList.appendChild($li);
        });
        $target.appendChild(this.$AlarmList);
    };
}

export default AlarmList;
