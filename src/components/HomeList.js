import './HomeList.css';

function HomeList({ $main, initialState, onClick, onAppsChange }) {
    this.state = initialState;
    this.$target = null;
    let dragged;

    const dragStart = (e) => {
        // 드래그한 요소에 대한 참조 변수
        dragged = e.target;
        // 요소를 반투명하게 함
        e.target.style.opacity = 0.5;
    };

    const dragEnd = (e) => {
        // 투명도를 리셋
        e.target.style.opacity = '';
    };

    const dragOver = (e) => {
        // 드롭을 허용하도록 prevetDefault() 호출
        e.preventDefault();
    };

    const dragEnter = (e) => {
        // 요소를 드롭하려는 대상 위로 드래그했을 때 대상의 배경색 변경
        if (e.target.parentNode.className == 'dropzone') {
            e.target.parentNode.style.background = 'blue';
        }
    };

    const dragLeave = (e) => {
        // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
        if (e.target.parentNode.className == 'dropzone') {
            e.target.parentNode.style.background = '';
        }
    };

    const dragDrop = (e) => {
        // 기본 액션을 막음 (링크 열기같은 것들)
        e.preventDefault();
        // 드래그한 요소를 드롭 대상으로 이동
        // 드롭 대상은 드래그한 요소의 부모로 이동
        if (e.target.parentNode.className == 'dropzone') {
            const dropElement = e.target.parentNode;
            e.target.parentNode.style.background = '';
            dragged.parentNode.appendChild(e.target);
            dragged.parentNode.removeChild(dragged);
            dropElement.appendChild(dragged);

            // state 변경
            onAppsChange(
                Array.from(e.target.parentNode.parentNode.querySelectorAll('li')).map(
                    (e) => e.querySelector('button').value
                )
            );
        }
    };

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target = document.createElement('ul');
        this.$target.className = 'HomeList';
        this.state.apps.forEach((app) => {
            const $li = document.createElement('li');
            $li.className = 'dropzone';
            const $button = document.createElement('button');
            $button.innerHTML = app;
            $button.value = app;
            $button.addEventListener('click', () => {
                onClick(app);
            });
            $button.draggable = true;
            $button.addEventListener('dragstart', dragStart, false);
            $button.addEventListener('dragend', dragEnd, false);
            $button.addEventListener('dragover', dragOver, false);
            $button.addEventListener('dragenter', dragEnter, false);
            $button.addEventListener('dragleave', dragLeave, false);
            $button.addEventListener('drop', dragDrop, false);
            $li.appendChild($button);
            this.$target.appendChild($li);
        });
        $main.appendChild(this.$target);
    };
}

export default HomeList;
