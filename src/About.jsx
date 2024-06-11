import { HiMenuAlt3 } from "react-icons/hi";
import headshot from "./assets/drharrisheadshot.jpg"
import family from "./assets/HarrisFamily.webp"
import aadlogo from "./assets/American_Academy_of_Dermatology_logo.svg.png"


const Image = ({ src, alt, className }) => (
  <div className="">
    <img
      src={src}
      alt={alt}
      className={className}
    />
  </div>
);


export default function About() {
  return (
<div className="py-8 mb-1 bg-gray-100">
  <div className="container px-4 lg:px-8">
    <header className="text-center">
      <h2 className="font-poppins text-4xl lg:text-6xl font-medium text-[#4d4d4d] mb-2">
        Dr. Blair Harris, DO, FAAD
      </h2>
      <h3 className="font-poppins text-xl lg:text-2xl font-medium text-[#4d4d4d] mb-7 ">
        Board-Certified Dermatologist, Fellowship-Trained Mohs Surgeon
        <div>
        <Image src={aadlogo} alt="AAD Logo" className="w-20 mx-auto" />
      </div>
      </h3>

    </header>
    

    <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
      <div className="w-full lg:w-1/2">
        <Image src={headshot} alt="Dr. Blair Harris" className="w-full rounded-lg mb-8 lg:mb-0" />
      </div>

      <div className="w-full lg:w-1/2">
        <p className="text-[#4d4d4d] max-w-prose prose-xl prose-neutral leading-relaxed">
          Dr. Blair Harris was born and raised in northern Utah. He graduated from Brigham Young University with a degree in Business Management with an emphasis in finance. After working as a financial analyst at Lockheed Martin in southern California for three years, he decided to pursue his lifelong dream of becoming a doctor. Dr. Harris attended medical school at Pacific Northwest University in Yakima, Washington. While in medical school, he was elected to a position in student government and enjoyed serving his fellow students. His leadership position enabled him to institute multiple organizational changes including implementing mental health resources, student support groups, and financial tracking instruments for the student government organization at PNWU.
        </p>
        <Image src={family} alt="Harris Family" className="w-full rounded-lg mt-8" />
        <p className="text-[#4d4d4d] max-w-prose prose-xl prose-neutral leading-relaxed mt-8">
          Dr. Harris developed a love for dermatology while volunteering as a camp counselor at Camp Discovery, a summer camp for children with dermatologic skin conditions. He completed his internship and residency through Campbell University, his number one choice. He enjoys all aspects of dermatology, but found special interest in procedural and surgical dermatology, which led him to pursue a fellowship in Mohs Micrographic Surgery. When he’s not working as a dermatologist, you can find Blair spending time with his wife and two daughters, exercising, enjoying the beaches, or doing projects around the house.
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

   
 