const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '616911066976338102edbb6556b11963',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig