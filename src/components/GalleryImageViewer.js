import './GalleryImageViewer.css';

function GalleryImageViewer({ $target, initialState }) {
    this.state = initialState;
    this.$GalleryImageViewer = document.createElement('div');

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        const { selectedImg: image } = this.state;
        this.$GalleryImageViewer.innerHTML = '';
        this.$GalleryImageViewer.className = 'GalleryImageViewer';
        this.$GalleryImageViewer.innerHTML = `
            <img id="${image}" alt="${image}" src="${require(`../assets/images/${image}.jpg`)}" />
        `;
        $target.appendChild(this.$GalleryImageViewer);
    };
}

export default GalleryImageViewer;
