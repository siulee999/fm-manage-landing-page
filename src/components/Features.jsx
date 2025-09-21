
export const Features = () => {
  return (
    <section className="limit-container mb-section-wide">
      <div className="even-grid">
        <div className="text-center sm:text-left bottom-left-tablet bottom-right-tablet">
          <h3 className="text-3xl font-bold text-primary-9 mb-3">
            What's different about Manage?
          </h3>
          <p>
            Manage provides all the tunctionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
          </p>
        </div>

        <ul className="flex flex-col gap-section-narrow">
          <li className="grid grid-cols-[min-content_1fr]">
            <div className="bg-accent-4 text-white font-bold px-6 rounded-3xl h-10 flex-center mr-2 feature-title-bg">
              01
            </div>

            <p className="text-primary-9 font-bold h-10 flex items-center mb-2">
              Track company-wide progress
            </p>
            <p className="col-span-full sm:col-start-2">
              See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
            </p>

          </li>

          <li className="grid grid-cols-[min-content_1fr]">
            <div className="bg-accent-4 text-white font-bold px-6 rounded-3xl h-10 flex-center mr-2 feature-title-bg">
              02
            </div>

            <p className="text-primary-9 font-bold h-10 flex items-center mb-2">
              Advanced built-in reports
            </p>
            <p className="col-span-full sm:col-start-2">
              Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
            </p>

          </li>

          <li className="grid grid-cols-[min-content_1fr]">
            <div className="bg-accent-4 text-white font-bold px-6 rounded-3xl h-10 flex-center mr-2 feature-title-bg">
              03
            </div>

            <p className="text-primary-9 font-bold h-10 flex items-center mb-2">
              Everything you need in one place
            </p>
            <p className="col-span-full sm:col-start-2">
              Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
            </p>

          </li>

        </ul>
      </div>
    </section>
  )
}
