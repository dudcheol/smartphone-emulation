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
        if (this.state.isInputShowing) {
            const alarmInput = new Input({
                $target: this.$Alarm,
                initialState: this.state,
                onClick: (alarm) => {
                    onAlarmChange({ type: 'add', alarm });
                },
            });
            alarmInput.setState({ ...this.state, type: 'time' });
        }
        const alarmList = new AlarmList({
            $target: this.$Alarm,
            initialState: this.state,
            onRemove: (alarm) => {
                onAlarmChange({ type: 'remove', alarm });
            },
        });
        alarmList.setState(this.state);

        $main.appendChild(this.$Alarm);
    };
}

export default Alarm;
