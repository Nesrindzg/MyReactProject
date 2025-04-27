import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const key = "e40ac2f4af58fd128d8a5a4af2500401";
  const url_tv = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=tr-TR&page=1&with_genres=16&with_keywords=210024|287501&sort_by=vote_average.desc&include_adult=false&vote_count.gte=1000`;
  const url_movie = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=tr-TR&page=1&with_genres=16&with_keywords=210024|287501&sort_by=vote_average.desc&include_adult=false&vote_count.gte=1000`;


  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getData = async () => {
      try {
        const [tvResponse, movieResponse] = await Promise.all([
          axios.get(url_tv),
          axios.get(url_movie),
        ]);

        const tvSeries = tvResponse.data.results.slice(0, 10); // TV dizileri
        const movieData = movieResponse.data.results.slice(0, 10); // Filmler

        setSeries(tvSeries);
        setMovies(movieData);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, []);


  // Slide geçiş fonksiyonu
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = (direction) => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    } else if (direction === 'prev') {
      setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [movies.length]);




  return (
    <div className="banner flex flex-col lg:flex-row p-5 bg-black">
      <div className="w-full flex flex-col md:flex-row p-5 mt-28 md:mt-16 tracking-wide">
        <div className="w-full h-full py-8 border-red-800 border-2 rounded-md md:w-[33%] sm:w-full lg:w-1/3 xl:w-1/3">
          <h1 className="w-full text-2xl text-center mb-3 text-white font-extrabold">Top 10 Dizi</h1>
          <div className="w-full p-5 overflow-hidden float-left" style={{ height: 'calc(100vh - 32vh)' }}>
            <div className="flex flex-col h-auto animate-scroll-slow">
              {[...series, ...series].map((data, index) => (
                <div
                  key={index}
                  className="relative sm:h-72 lg:h-64 h-64 w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:opacity-75 transform transition duration-300 mb-5"
                  style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/w500${data.poster_path}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-5">
                    <div>
                      <h1 className="text-white text-lg font-bold mb-1 truncate">{data.name}</h1>
                      <div className="flex items-center m-2 top-0 right-0 absolute">
                        <span className="bg-red-200 text-red-600 px-3 py-2 rounded-full text-xs font-bold">
                          <i className="fa-solid fa-star"></i>
                          <span className="ml-1">{data.vote_average.toFixed(1)}</span>
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm line-clamp-3">{data.overview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-5 md:mt-0 md:ml-5">
          <div className="w-full md:w-full lg:w-full h-64 sm:h-80 md:h-[93vh] lg:h-full overflow-hidden relative">
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {movies.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full">
                  <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://image.tmdb.org/t/p/original${slide.poster_path}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-end text-white">
                      <div className="p-5 bg-black bg-opacity-50 w-full md:w-2/3 lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
                        <p className="text-sm md:text-lg mb-6 line-clamp-4">{slide.overview}</p>
                        <button className="bg-red-600 text-white float-end px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                          <i className="fa-solid fa-play"></i> İzle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white cursor-pointer p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
              onClick={() => changeSlide('prev')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            <div
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white cursor-pointer p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
              onClick={() => changeSlide('next')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;