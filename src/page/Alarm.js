import AlarmList from '../components/AlarmList';
import Input from '../components/common/Input';

function Alarm({ $main, initialState, onAlarmChange }) {
    this.state = initialState;
    this.$Alarm = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        $main.innerHTML = '';
        this.$Alarm = document.createElement('section');
        const alarmInput = new Input({
            $target: this.$Alarm,
            initialState: this.state,
            onClick: (alarm) => {
                onAlarmChange({ type: 'add', alarm });
            },
        });
        const alarmList = new AlarmList({
            $target: this.$Alarm,
            initialState: this.state,
            onRemove: (alarm) => {
                onAlarmChange({ type: 'remove', alarm });
            },
        });
        alarmInput.setState({ ...this.state, type: 'time' });
        alarmList.setState(this.state);

        $main.appendChild(this.$Alarm);
    };
}

export default Alarm;
