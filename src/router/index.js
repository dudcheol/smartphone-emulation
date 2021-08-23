import Alarm from '../page/Alarm';
import Gallery from '../page/Gallery';
import Home from '../page/Home';
import Memo from '../page/Memo';

function Router({ $app, initialState, onClick, onAlarmChange, onMemoChange }) {
    this.state = initialState;
    this.$target = document.createElement('main');
    $app.appendChild(this.$target);

    const home = new Home({
        $main: this.$target,
        initialState: this.state,
        onClick,
    });

    const alarm = new Alarm({
        $main: this.$target,
        initialState: this.state,
        onAlarmChange: (alarm) => {
            onAlarmChange(alarm);
        },
    });

    const memo = new Memo({
        $main: this.$target,
        initialState: this.state,
        onMemoChange: (memo) => {
            onMemoChange(memo);
        },
    });

    const gallery = new Gallery({ $main: this.$target, initialState: this.state });

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        const { page } = this.state;
        this.$target.innerHTML = '';
        switch (page) {
            case 'alarm':
                alarm.setState(this.state);
                break;
            case 'memo':
                memo.setState(this.state);
                break;
            case 'gallery':
                gallery.setState(this.state);
                break;
            default:
                home.setState(this.state);
                break;
        }
    };
}

export default Router;
