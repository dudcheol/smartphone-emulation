import GalleryImageViewer from '../components/GalleryImageViewer';
import GalleryList from '../components/GalleryList';

function Gallery({ $main, initialState, onClick }) {
    this.state = initialState;
    this.$target = null;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        $main.innerHTML = '';
        this.$target = document.createElement('section');
        this.$target.className = 'Gallery';
        const galleryImageViewer = new GalleryImageViewer({
            $target: this.$target,
            initialState: this.state,
        });
        const galleryList = new GalleryList({
            $target: this.$target,
            initialState: this.state,
            onClick: (img) => {
                galleryImageViewer.setState({ ...this.state, selectedImg: img });
            },
        });
        galleryList.setState(this.state);
        $main.appendChild(this.$target);
    };
}

export default Gallery;
