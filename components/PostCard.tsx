export default function PostCard() {
  return (
    <div className=" py-5 px-3 cursor-pointer">
      <div className="flex items-center p-4 shadow rounded-lg bg-dracula-light dark:bg-dracula-dark dark:shadow-neon md:dark:hover:bg-opacity-60 animation duration-300">
        <img
          alt="mountain"
          className="w-45 rounded-md"
          src="https://picsum.photos/seed/picsum/200"
        />
        <div className="flex flex-col ml-5">
          <h4 className="text-md font-semibold mb-2 dark:text-gray-300 text-aro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h4>
          <p className="text-sm dark:text-gray-300 mt-2 text-aro">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex-1 py-5">
            <span className="dark:text-vanHelsing text-sm  caret-gray-700">
              Read more...
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
