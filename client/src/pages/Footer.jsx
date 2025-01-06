export default function Footer() {
  return (
    <footer className=" bg-slate-700 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <i> TAG Estate</i>
              </span>
            </a>
            <p>
              We&apos;re committed to redefining the real estate experience by
              offering a comprehensive range of tools, resources, and services
              designed to empower buyers, sellers, renters, and agents alike.
            </p>
            <p>
              With our user-friendly interface and innovative features,
              navigating the complex world of real estate has never been easier.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/SparshSingh-70"
                    className="hover:underline "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sparshsingh70/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              TAG Estate™
            </a>{" "}
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
