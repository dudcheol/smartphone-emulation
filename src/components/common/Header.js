import './Header.css';
import { convertStringToDateformat } from '../../utils/DateUtils';

function Header({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement('header');
    this.$target.className = 'Header';

    const $leftBtn = document.createElement('button');
    const $dateTime = document.createElement('span');
    const $rightBtn = document.createElement('button');
    $leftBtn.className = 'back';
    $leftBtn.innerText = 'BACK';
    $leftBtn.addEventListener('click', () => {
        onClick({ type: 'back' });
    });
    $rightBtn.className = 'new';
    $rightBtn.innerText = 'NEW';
    $rightBtn.addEventListener('click', () => {
        onClick({ type: 'new' });
    });
    $leftBtn.style.display = 'none';
    $rightBtn.style.display = 'none';
    this.$target.appendChild($leftBtn);
    this.$target.appendChild($dateTime);
    this.$target.appendChild($rightBtn);
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        const { page, time } = this.state;
        switch (page) {
            case 'alarm':
                $leftBtn.style.display = 'block';
                $rightBtn.style.display = 'block';
                break;
            case 'memo':
                $leftBtn.style.display = 'block';
                $rightBtn.style.display = 'block';
                break;
            case 'gallery':
                $leftBtn.style.display = 'block';
                $rightBtn.style.display = 'none';
                break;
            default:
                $leftBtn.style.display = 'none';
                $rightBtn.style.display = 'none';
                break;
        }
        $dateTime.innerText = convertStringToDateformat(time);
    };
}

export default Header;
