type HeroProps = {
  drawHandler: VoidFunction
}
export default function Hero({drawHandler} : HeroProps) {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">
          Drawing Together
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Draw together with your friends to share a lot of joyful moments
            together. Communicate through visual may bring much more meaning and
            clarity.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">

            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
              onClick={drawHandler}
            >
              Draw Now
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container">

            <img
              src="https://www.orangepet.in/cdn/shop/articles/selective-closeup-cute-kitten-floor_1_800x.jpg?v=1693461218"
              className="img-fluid border rounded-3 mb-4"
              alt="Hero image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
