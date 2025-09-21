export const Hero = () => {
  return (
    <section className="limit-container mb-section-wide">
      <div className="even-grid items-center">
        <div className="sm:order-2 top-right-tablet">
          <img src="assets/illustration-intro-cropped-2.svg" alt="a statistic image"/>
        </div>

        <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
          <h2 className="text-4xl text-primary-9 font-bold mb-3">
            Bring everyone together to build better products.
          </h2>
          <p>
            Manage makes it simple for sottware teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
          <button className="primary-btn mt-6">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
