import React from "react";

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                explore our <br /> Services
              </h1>

              <div className="mt-2">
                <span
                  className="inline-block w-40 h-1 rounded-full"
                  style={{ backgroundColor: "#C39D5B" }}
                ></span>
                <span
                  className="inline-block w-3 h-1 ml-1 rounded-full"
                  style={{ backgroundColor: "#C39D5B" }}
                ></span>
                <span
                  className="inline-block w-1 h-1 ml-1 rounded-full"
                  style={{ backgroundColor: "#C39D5B" }}
                ></span>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span
                style={{ color: "#C39D5B", backgroundColor: "#fcecd1" }}
                className="inline-block p-2  rounded-xl md:mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Preconstruction Planning
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Planning and discussing with you will help to turn your ideas
                  into reality. To every detail this will ensure that the
                  project runs smoothly, and we produce the best outcome.
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span
                style={{ color: "#C39D5B", backgroundColor: "#fcecd1" }}
                className="inline-block p-2 rounded-xl md:mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Managing and Controlling
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Arch Rudge Construction will work with both ourseleves and
                  you, to arrange materials and supplies in order to have a nice
                  fluent job. We like to take the stress off you and help as
                  much as we can, to complete the job to the best of our
                  abilities.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
