$(function () {
  $(".carousel__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

async function fetchUrls(urls) {
  const REQUEST_TIMEOUT = 5000;
  const parseResponse = async (response) => await response.json();

  return Promise.all(
    urls.map((url) =>
      fetch(url, { signal: AbortSignal.timeout(REQUEST_TIMEOUT) })
        .then((res) =>
          res.ok ? Promise.resolve(res).then(parseResponse) : "Ошибка"
        )
        .catch((err) => `Ошибка ${err}`)
    )
  );
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/invalid",
];
fetchUrls(urls).then((results) => console.log(results));
