import Image from "next/image";

export default function Services() {
    return (
      <>
     
        <span className="flex items-center text-5xl font-semibold text-gray-800 mt-10 md:mt-20" id="services">Services</span>
        <div className="container flex flex-wrap p-8 mx-auto xl:px-0 lg:gap-10 lg:flex-nowrap" >
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div>
              <Image
                alt="Benefits"
                src="/assets/inventory.png"
                width={427}
                height={640}
                className="rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center w-full lg:w-1/2">
            <div>
              <div className="flex flex-col w-full mt-4">
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                We Provide Three Management Systems
                </h3>
                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
                  You can keep track of all records of attendace, books and stock inventory using our multiple management systems. Both member and admin are provided with different features.
                </p>
              </div>
              <div className="w-full mt-5">
                <div className="flex items-start mt-8 space-x-3">
                  <div className="flex items-center justify-center text-white flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                  <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 ">
                    Library Management System
                    </h4>
                    <p className="mt-1 text-gray-500 ">
                    Maintain Customer Book Records and balances on single
                      dashboard.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mt-8 space-x-3">
                  <div className="flex items-center justify-center text-white flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                  <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 ">
                    Attendance Management System
                    </h4>
                    <p className="mt-1 text-gray-500 ">
                    Students can track their attendance through this system
                      and Teachers can maintain record of students attendance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mt-8 space-x-3">
                  <div className="flex items-center justify-center text-white flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                  <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 ">
                    Inventory Management System
                    </h4>
                    <p className="mt-1 text-gray-500 ">
                    An organization can maintain the record of the incoming &
                      outgoing stock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }