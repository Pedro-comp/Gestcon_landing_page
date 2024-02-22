document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        classes: {
            pagination: 'splide__pagination pagination-div',
            page: 'splide__pagination__page pagination-dot'
        },
        type: 'loop',
        perPage: 1,
        height: '300px',
        gap: 12,
        arrows: false,
    } );
    splide.mount();
} );