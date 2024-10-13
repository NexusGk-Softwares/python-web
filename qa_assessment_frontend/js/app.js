// app.js

// Handle login form submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Dummy authentication (replace with real logic later)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'password') {
            // Redirect to the home page if login is successful
            window.location.href = 'home.html';
        } else {
            document.getElementById('login-error').textContent = 'Invalid credentials. Try again.';
        }
    });
}

// Handle logout
const logoutButton = document.getElementById('logout-btn');
if (logoutButton) {
    logoutButton.addEventListener('click', function () {
        // Redirect to login page
        window.location.href = 'login.html';
    });
}
// app.js

// Fetch albums from the API and display them
const albumList = document.getElementById('album-list');
if (albumList) {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(albums => {
            albums.forEach(album => {
                const li = document.createElement('li');
                li.textContent = `Album ${album.id}: ${album.title}`;
                albumList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching albums:', error);
            albumList.textContent = 'Failed to load albums.';
        });
}
// Fetch photos from the API and display them
const photoList = document.getElementById('photo-list');
if (photoList) {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')  // Fetch only 10 photos for demo purposes
        .then(response => response.json())
        .then(photos => {
            photos.forEach(photo => {
                const li = document.createElement('li');
                li.innerHTML = `<img src="${photo.thumbnailUrl}" alt="Photo ${photo.id}"> ${photo.title}`;
                photoList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching photos:', error);
            photoList.textContent = 'Failed to load photos.';
        });
}
// Fetch albums and apply pagination and searching

const pageNum = document.getElementById('page-num');
const searchBox = document.getElementById('search-box');
let currentPage = 1;
const limit = 10;  // Albums per page

const fetchAlbums = (page, query = "") => {
    const url = query 
        ? `https://jsonplaceholder.typicode.com/albums?title_like=${query}&_page=${page}&_limit=${limit}`
        : `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`;
    
    fetch(url)
        .then(response => response.json())
        .then(albums => {
            albumList.innerHTML = "";  // Clear the current list
            albums.forEach(album => {
                const li = document.createElement('li');
                li.textContent = `Album ${album.id}: ${album.title}`;
                albumList.appendChild(li);
            });
            pageNum.textContent = `Page ${page}`;
        })
        .catch(error => {
            console.error('Error fetching albums:', error);
            albumList.textContent = 'Failed to load albums.';
        });
};

// Initial fetch
fetchAlbums(currentPage);

// Pagination controls
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchAlbums(currentPage, searchBox.value);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentPage++;
    fetchAlbums(currentPage, searchBox.value);
});

// Search albums
searchBox.addEventListener('input', () => {
    currentPage = 1;
    fetchAlbums(currentPage, searchBox.value);
});

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Mock credentials (replace with real authentication in production)
        const mockEmail = "user@example.com"; // Change this to your desired email
        const mockPassword = "password123"; // Change this to your desired password

        // Simulate authentication
        if (email === mockEmail && password === mockPassword) {
            window.location.href = 'home.html'; // Redirect to home page
        } else {
            loginError.textContent = "Invalid email or password.";
        }
    });
}
// Pagination for photos
const prevPhotoButton = document.getElementById('prev-photo-btn');
const nextPhotoButton = document.getElementById('next-photo-btn');
const photoPageNum = document.getElementById('photo-page-num');

// Update page number on pagination
prevPhotoButton.addEventListener('click', () => {
    if (currentPhotoPage > 1) {
        currentPhotoPage--;
        fetchPhotos(currentPhotoPage);
        photoPageNum.textContent = `Page ${currentPhotoPage}`;
        nextPhotoButton.disabled = false;
        if (currentPhotoPage === 1) prevPhotoButton.disabled = true;
    }
});

nextPhotoButton.addEventListener('click', () => {
    currentPhotoPage++;
    fetchPhotos(currentPhotoPage);
    photoPageNum.textContent = `Page ${currentPhotoPage}`;
    prevPhotoButton.disabled = false;
    // Optionally, you can add logic to disable next button when you reach the last page
});
