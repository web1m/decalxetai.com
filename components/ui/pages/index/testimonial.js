export default ({ testimonial }) => {
  return (
    <section className="slice slice-lg bg-secondary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="media">
              <img
                alt="Image placeholder"
                className="rounded-circle mr-4"
                src={testimonial[0].image}
                width="80"
              />
              <div className="media-body">
                <p className="lead">{testimonial[0].text}</p>
                <span className="text-muted mt-4">{testimonial[0].author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
