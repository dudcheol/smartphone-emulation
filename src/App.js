import Header from './components/common/Header';
import Router from './router';
import { convertStringToAlarmformat } from './utils/DateUtils';

function App($app) {
    this.state = localStorage.getItem('smartphoneInfo')
        ? JSON.parse(localStorage.getItem('smartphoneInfo'))
        : {
              page: 'home',
              time: new Date(),
              apps: ['alarm', 'memo', 'gallery'],
              isInputShowing: false,
              alarms: [],
              memos: [],
              images: [],
          };

    const { page, time } = this.state;
    const header = new Header({
        $app,
        initialState: { page, time },
        onClick: ({ type }) => {
            switch (type) {
                case 'back':
                    this.route({ page: 'home' });
                    break;
                case 'new':
                    console.log('header click - new');
                    break;
            }
        },
    });
    const router = new Router({
        $app,
        initialState: this.state,
        onClick: (page) => {
            this.route(page);
        },
        onAlarmChange: ({ type, alarm }) => {
            switch (type) {
                case 'add':
                    this.setState({ ...this.state, alarms: [...this.state.alarms, alarm] });
                    break;
                case 'remove':
                    this.setState({
                        ...this.state,
                        alarms: this.state.alarms.filter((e) => e.id !== alarm.id),
                    });
                    break;
            }
        },
        onMemoChange: ({ type, memo }) => {
            switch (type) {
                case 'add':
                    this.setState({
                        ...this.state,
                        memos: [...this.state.memos, memo],
                        isInputShowing: false,
                    });
                    break;
            }
        },
    });

    const goHome = () => {
        this.setState({
            ...this.state,
            page: 'home',
        });
    };

    const checkAlarm = (time) => {
        this.state.alarms.forEach((alarm) => {
            if (
                alarm.date.getHours() === time.getHours() &&
                alarm.date.getMinutes() === time.getMinutes()
            ) {
                if (!alert(`<알림> ${convertStringToAlarmformat(alarm.date)} 입니다!`)) {
                    this.setState({
                        ...this.state,
                        alarms: this.state.alarms.filter((e) => e.id !== alarm.id),
                    });
                }
            }
        });
    };

    const init = () => {
        setInterval(() => {
            this.state = {
                ...this.state,
                time: new Date(),
            };
            checkAlarm(this.state.time);
            header.setState({ page: this.state.page, time: this.state.time, onClick: goHome });
        }, 1000);
        this.render();
    };

    this.route = (page) => {
        this.setState({
            ...this.state,
            page: page,
        });
    };

    this.setState = (nextState) => {
        this.state = nextState;
        localStorage.setItem('smartphoneInfo', JSON.stringify(this.state));
        this.render();
    };

    this.render = () => {
        header.setState({
            page: this.state.page,
            time: this.state.time,
        });
        router.setState({ ...this.state });
    };

    init();
}

export default App;
