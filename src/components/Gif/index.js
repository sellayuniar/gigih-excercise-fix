

const GifComponent = ({ data }) => {
  const Gifs = data.map((gif) => {
    return (
      data !== undefined && (
        <>
          <img src={gif.images.fixed_width.url} alt={gif.title} />
        </>
      )
    );
  });
  return Gifs;
}

export default GifComponent;