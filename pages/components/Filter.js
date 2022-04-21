import React from "react";

const Filter = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <p className="text-sm dark:text-gray-400 leading-3 text-gray-600 font-normal mb-2">
            Home - Men - Products - Filters
          </p>
          <div className="flex justify-between items-center mb-4">
            <h2 className="lg:text-4xl dark:text-white text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              Watches
            </h2>
            {/* filters Button (md and plus Screen) */}
            <button
              onclick="showFilters()"
              className="cursor-pointer dark:bg-white dark:text-gray-800 text-white dark:hover:bg-gray-100 sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
            >
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1.svg"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1dark.svg"
              />
              Filters
            </button>
          </div>
          <p className="text-xl dark:text-gray-400 leading-5 text-gray-600 font-medium">
            09 Products
          </p>
          {/* Filters Button (Small Screen) */}
          <button
            onclick="showFilters()"
            className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white dark:text-gray-800 dark:bg-white dark:hover:bg-gray-100 justify-center items-center"
          >
            <img
              className="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1.svg"
              alt="filter"
            />
            <img
              className="hidden dark:block"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1dark.svg"
              alt="filter"
            />
            Filters
          </button>
        </div>
        <div
          id="filterSection"
          className="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full"
        >
          {/* Cross button Code */}
          <div
            onclick="closeFilterSection()"
            className="cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
          >
            <img
              className="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg2.svg"
              alt="cross"
            />
            <img
              className="hidden dark:block"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg2dark.svg"
              alt="cross"
            />
          </div>
          {/* Colors Section */}
          <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3.svg"
                alt="colors"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3dark.svg"
                alt="colors"
              />
              <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium">
                Colors
              </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <div className="w-4 h-4 rounded-full bg-white shadow" />
                <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                  White
                </p>
              </div>
              <div className="flex space-x-2 justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-blue-600 shadow" />
                <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                  Blue
                </p>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                <div className="w-4 h-4 rounded-full bg-red-600 shadow" />
                <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                  Red
                </p>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <div className="w-4 h-4 rounded-full bg-indigo-600 shadow" />
                <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                  Indigo
                </p>
              </div>
              <div className="flex space-x-2 justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-black shadow" />
                <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                  Black
                </p>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                <div className="w-4 h-4 rounded-full bg-purple-600 shadow" />
                <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                  Purple
                </p>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <div className="w-4 h-4 rounded-full bg-gray-600 shadow" />
                <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                  Grey
                </p>
              </div>
            </div>
          </div>
          <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
          {/* Material Section */}
          <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg4.svg"
                alt="materials"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg4dark.svg"
                alt="materials"
              />
              <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                Material
              </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Leather"
                  name="Leather"
                  defaultValue="Leather"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600"
                      htmlFor="Leather"
                    >
                      Leather
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Cotton"
                  name="Cotton"
                  defaultValue="Cotton"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600"
                      htmlFor="Cotton"
                    >
                      Cotton
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Fabric"
                  name="Fabric"
                  defaultValue="Fabric"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600"
                      htmlFor="Fabric"
                    >
                      Fabric
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Crocodile"
                  name="Crocodile"
                  defaultValue="Crocodile"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600"
                      htmlFor="Crocodile"
                    >
                      Crocodile
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Wool"
                  name="Wool"
                  defaultValue="Wool"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600"
                      htmlFor="Wool"
                    >
                      Wool
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
          {/* Size Section */}
          <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white">
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg5.svg"
                alt="size"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg5dark.svg"
                alt="size"
              />
              <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                Size
              </p>
            </div>
            <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
              <div className="flex md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Large"
                  name="Large"
                  defaultValue="Large"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300"
                      htmlFor="Large"
                    >
                      Large
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Medium"
                  name="Medium"
                  defaultValue="Medium"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300"
                      htmlFor="Medium"
                    >
                      Medium
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex md:justify-center md:items-center items-center justify-end">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Small"
                  name="Small"
                  defaultValue="Small"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300"
                      htmlFor="Small"
                    >
                      Small
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex md:justify-center md:items-center items-center justify-start">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Mini"
                  name="Mini"
                  defaultValue="Mini"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300"
                      htmlFor="Mini"
                    >
                      Mini
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
          {/* Collection Section */}
          <div>
            <div className="flex space-x-2 text-gray-800 dark:text-white ">
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6.svg"
                alt="collection"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6dark.svg"
                alt="collection"
              />
              <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">
                Collection
              </p>
            </div>
            <div className="flex mt-8 space-x-8">
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="LS"
                  name="LS"
                  defaultValue="LS"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600"
                      htmlFor="LS"
                    >
                      Luxe signature
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="LxL"
                  name="LxL"
                  defaultValue="LxL"
                />
                <div className="inline-block">
                  <div className="flex space-x-6 justify-center items-center">
                    <label
                      className="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600"
                      htmlFor="LxL"
                    >
                      Luxe x London
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Apply Filter Button (Large Screen) */}
          <div className="hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
            <button
              onclick="applyFilters()"
              className="hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
            >
              Apply Filter
            </button>
          </div>
          {/* Apply Filter Button (Table or lower Screen) */}
          <div className="block md:hidden w-full mt-10">
            <button
              onclick="applyFilters()"
              className="w-full hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .checkbox:checked + .check-icon {\n                display: flex;\n            }\n        ",
        }}
      />
    </div>
  );
};

export default Filter;
