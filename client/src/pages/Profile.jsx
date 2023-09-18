import React from 'react';
import { BsMap, BsFillPlusCircleFill, BsFillStarFill } from 'react-icons/bs';
import { FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';



//#7c6c60, AF8D6F, #918673

function Profile() {
  return (
    <div >
      {/* Include your stylesheet links here */}
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

      <main className="profile-page">
      <section className="relative block h-500-px">
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
          }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className=" top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img alt="..." src="https://gray-wfsb-prod.cdn.arcpublishing.com/resizer/0iJ7vDpX2zZdSFnsF57WxMRelIA=/800x800/smart/filters:quality(70)/s3.amazonaws.com/arc-authors/gray/539ba86e-fad7-490f-a82c-439e3a3896d7.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                       style={{ backgroundColor: '#A98E77' }}
                      className=" uppercase  text-[#3C2A21]  font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1  hover:scale-110 transition duration-300 ease-in-out" type="button">
                       <BsFillPlusCircleFill  size={23}/>

                      </button>
                      <button
                       style={{ backgroundColor: '#A98E77' }}
                      className="uppercase  text-[#3C2A21]  font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1  hover:scale-110 transition duration-300 ease-in-out " type="button">
                        <FaUserFriends  size={23}/>

                      </button>


                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <button
                       style={{ backgroundColor: '#A98E77' }}
                       className=" uppercase  text-[#3C2A21]  font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1  hover:scale-110 transition duration-300 ease-in-out" type="button">
                       <FaMapMarkerAlt size={23} />
                      </button>
                      <button
                        style={{ backgroundColor: '#A98E77' }}
                      className=" uppercase  text-[#3C2A21]  font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1  hover:scale-110 transition duration-300 ease-in-out" type="button">
                       <BsFillStarFill  size={23}/>

                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Los Angeles, California
                  </div>

                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Hey there, coffee aficionados! I'm Jenna, your friendly neighborhood coffee explorer.
                       My passion for coffee knows no bounds, and I'm always on a quest to find the perfect brew.
                       I've embarked on coffee adventures to various corners of the world, from the bustling cafés of Paris to the hidden gems of Costa Rica's coffee farms.</p>

                       <h2><strong>Favorites:</strong></h2>
    <ul>
        <li><strong>Favorite Coffee Beans:</strong> Ethiopian Yirgacheffe</li>
        <li><strong>Preferred Brewing Method:</strong> Pour-over</li>
        <li><strong>Go-To Espresso:</strong> A double shot of Italian espresso</li>
        <li><strong>Morning Ritual:</strong> Sipping a freshly brewed Colombian coffee while watching the sunrise</li>
    </ul>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                  <p>&copy; {new Date().getFullYear()} BEANTHERE. ALL RIGHTS RESERVED.</p>

                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default Profile;
