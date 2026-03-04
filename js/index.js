// Form Submit Event
const albumForm = document.querySelector("#album-form");
albumForm.addEventListener("submit", onClick);

function onClick(e) {
    e.preventDefault();
    
    const albumTitle = e.target.elements["album-title"].value;
	const albumDescription = e.target.elements["album-description"].value;
	const albumArt = e.target.elements["album-art"].value;

// Validation Errors
    const albumTitleIsValid = validateAlbumTitle(e, albumTitle);
    const albumDescriptionIsValid = validateAlbumDescription(e, albumDescription);
    const albumArtIsValid = validateAlbumArt(e, albumArt);

    if (albumTitleIsValid && albumDescriptionIsValid && albumArtIsValid) {
        addToAlbum(albumTitle, albumDescription, albumArt);

    // Reset the values of the form
        e.target.elements["album-title"].value = '';
	    e.target.elements["album-description"].value = '';
	    e.target.elements["album-art"].value = '';
    }
}

function validateAlbumTitle(e, title) {
    if(title.trim() === '' || title.length > 15) {
        e.target.elements["album-title"].classList.add('is-invalid');
        
        return false;
    } else {
        e.target.elements["album-title"].classList.remove('is-invalid');

        return true;
    }	
}

function validateAlbumDescription(e, description) {
	if(description.trim() === '' || description.length > 30) {
        e.target.elements["album-description"].classList.add('is-invalid');
    
        return false;
    } else {
        e.target.elements["album-description"].classList.remove('is-invalid');

        return true;
    }
}

function validateAlbumArt(e, art) {
    if(art === '') {
        e.target.elements["album-art"].classList.add('is-invalid');
    
        return false;
    } else {
        e.target.elements["album-art"].classList.remove('is-invalid');

        return true;
    }
}
// Add the album card
function addToAlbum(albumTitle, albumDescription, albumArt) {
	const allAlbumList = document.querySelector("#all-albums-list");
	
	const albumCard = 
	`<div class="col">
	    <div class="card shadow-sm bg-warning">
	        <img class="bd-placeholder-img card-img-top" src="img/${albumArt}" />
            <div class="card-body">
                <h5 class="card-title">${albumDescription}</h5>
                <p class="card-text">${albumTitle}</p>
            </div>
	    </div>
    </div>`;

    // Adds the new album at first position
    allAlbumList.insertAdjacentHTML('afterbegin', albumCard);

    // Adds the new album at last position
    // allAlbumList.insertAdjacentHTML('beforeend', albumCard);
}