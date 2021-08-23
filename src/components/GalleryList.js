import './GalleryList.css';

function GalleryList({ $target, initialState, onClick }) {
    this.state = initialState;
    this.$GalleryList = null;

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        this.$GalleryList = document.createElement('ul');
        this.$GalleryList.className = 'GalleryList';
        const $img = document.createElement('img');
        this.$GalleryList.appendChild($img);

        this.$GalleryList.innerHTML = this.state.images
            .map(
                (image) =>
                    `<li><img id="${image}" alt="${image}" src="${require(`../assets/images/${image}.jpg`)}" /></li>`
            )
            .join('');

        this.$GalleryList.childNodes.forEach(($li) => {
            $li.addEventListener('click', (e) => {
                this.$GalleryList.childNodes.forEach((_$li) => _$li.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
                const $img = e.currentTarget.childNodes[0];
                onClick($img.id);
            });
        });

        $target.appendChild(this.$GalleryList);
    };
}

export default GalleryList;
