
export default function About() {
  return (

<div className="md:py-1 mt-4 mb-10 sm:py-8 bg-[#4d4d4d]/1">
  <div className="container w-full h-full px-6 text-gray-600 md:px-12 xl:px-6">
    <h2 className="prose-2xl  py-8 flex justify-center leading-tight font-bold md:text-4xl">
      Blair Harris, DO, FAAD
    </h2>
    <div className="flex flex-col justify-center md:flex-row md:gap-6 md:items-start">
      <div className="md:w-1/2 mb-10">
        <img
          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
          alt="image"
          className="w-full h-auto"
        />
      </div>

      <div className="prose md:w-1/2">
        <p className="prose leading-8  text-gray-600">
              Dr. Blair Harris was born and raised in northern Utah. He
              graduated from Brigham Young University with a degree in Business
              Management with an emphasis in finance. After working as a
              financial analyst at Lockheed Martin in southern California for
              three years, he decided to pursue his lifelong dream of becoming a
              doctor. Dr. Harris attended medical school at Pacific Northwest
              University in Yakima, Washington. While in medical school, he was
              elected to a position in student government and enjoyed serving
              his fellow students. His leadership position enabled him to
              institute multiple organizational changes including implementing
              mental health resources, student support groups, and financial
              tracking instruments for the student government organization at
              PNWU. 
            </p>
            <p className="prose leading-8 mt-6 text-gray-600">
            Dr. Harris developed a love for dermatology while
              volunteering as a camp counselor at Camp Discovery, a summer camp
              for children with dermatologic skin conditions. He completed his
              internship and residency through Campbell University, his number
              one choice.
                 He enjoys all aspects of dermatology, but found
              special interest in procedural and surgical dermatology, which led
              him to pursue a fellowship in Mohs Micrographic Surgery. When he’s
              not working as a dermatologist, you can find Blair spending time
              with his wife and two daughters, exercising, enjoying the beaches,
              or doing projects around the house.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}


 
{/* <div></div>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
              <p className="text-gray-500">UI Designer</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
              <p className="text-gray-500">Founder</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
              <p className="text-gray-500">DevOps</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
              <p className="text-gray-500">UX Researcher</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
              <p className="text-gray-500">QA Engineer</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
              <p className="text-gray-500">System</p>
            </div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/>
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
              <p className="text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}