import AlarmList from '../components/AlarmList';

function Alarm({ $main, initialState, onClick }) {
    this.state = initialState;
    this.$target = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target = document.createElement('section');
        const alarmList = new AlarmList({ $main: this.$target, initialState, onClick });
        alarmList.setState(this.state);

        $main.appendChild(this.$target);
    };
}

export default Alarm;
