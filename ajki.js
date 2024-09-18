document.addEventListener('DOMContentLoaded', function() {
    const playlist = [
        { title: 'Song 1', url:'path/to/song1.mp3'},
        { title: 'Song 2', url: 'path/to/song2.mp3' },
        { title: 'Song 3', url: 'path/to/song3.mp3' },
        { title: 'Song 4', url: 'path/to/song4.mp3' },
        { title: 'Song 5', url: 'path/to/song5.mp3' },
        { title: 'Song 6', url: 'path/to/song6.mp3' },
        { title: 'Song 7', url: 'path/to/song7.mp3' },
        { title: 'Song 8', url: 'path/to/song8.mp3' },
        { title: 'Song 9', url: 'path/to/song9.mp3' },
        { title: 'Song 10', url: 'path/to/song10.mp3' },
        { title: 'Song 11', url: 'path/to/song11.mp3' },
        { title: 'Song 12', url: 'path/to/song12.mp3' },
        { title: 'Song 13', url: 'path/to/song13.mp3' },
        { title: 'Song 14', url: 'path/to/song14.mp3' },
        { title: 'Song 15', url: 'path/to/song15.mp3' }
    ];

    const playlistContainer = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    // Load playlist items
    playlist.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item song-item';
        listItem.dataset.url = song.url;
        listItem.textContent = song.title;
        listItem.addEventListener('click', () => playSong(index));
        playlistContainer.appendChild(listItem);
    });

    function playSong(index) {
        const song = playlist[index];
        audioSource.src = song.url;
        audioPlayer.load();
        audioPlayer.play();

        // Update the active song style
        document.querySelectorAll('.song-item').forEach(item => item.classList.remove('active-song'));
        document.querySelectorAll('.song-item')[index].classList.add('active-song');
    }
});
