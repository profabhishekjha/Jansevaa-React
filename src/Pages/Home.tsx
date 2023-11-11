import BannerCarousel from '@/components/carousel'
import Herocard from '@/components/HeroCard'
import Cards from '@/components/Cards'
import AlignmentCards from '@/components/AlignmentCards'
import { Link } from 'react-router-dom'
import { useLangToggle } from '@/components/LangToggleContext'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

const images: string[] = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/bacche.jpg']
const footerimages: string[] = [
  '/images/ImgCarousel/boy.jpg',
  '/images/ImgCarousel/boy-student.jpg',
  '/images/ImgCarousel/boy-student2.jpg',
  '/images/ImgCarousel/chote-boys.jpg',
  '/images/ImgCarousel/girl-student.jpg',
  '/images/ImgCarousel/girl-student2.jpg',
  '/images/ImgCarousel/hifi-child.jpg'
]
const Home = () => {
  const { isHindi } = useLangToggle()

  return (
    <div className="relative pt-20 max-sm:pt-14">
      <BannerCarousel images={images} />
      <main className="flex flex-col gap-10">
        <div className=" mx-auto w-[90%] py-10 text-center text-lg max-sm:w-full max-sm:py-5 max-sm:text-sm">
          {!isHindi
            ? `Jansevaa Foundation is an NGO that offers comprehensive support in the fields of`
            : `जनसेवा फाउंडेशन एक गैर सरकारी संगठन (एनजीओ) है`}
          &nbsp;
          <span className="bg-yellow-200 font-semibold ">
            {!isHindi
              ? `medical assistance, student education, and training programs.`
              : `जो चिकित्सा सहायता, छात्र शिक्षा और प्रशिक्षण कार्यक्रमों के क्षेत्रों में व्यापक सहायता प्रदान करता है।`}
          </span>
          &nbsp;
          {!isHindi
            ? `Through their initiatives, they provide crucial medical aid, facilitate quality education for students, and offer training programs to equip individuals with essential skills. Jansevaa's commitment to making a positive impact on society is reflected in their dedication to these key areas of assistance.`
            : `उनकी पहलों के माध्यम से, वे महत्वपूर्ण चिकित्सा सहायता प्रदान करते हैं, छात्रों के लिए गुणवत्तापूर्ण शिक्षा को सुनिश्चित करते हैं, और आवश्यक कौशलों से व्यक्तियों को संपन्न करने के लिए प्रशिक्षण कार्यक्रम प्रदान करते हैं। जनसेवा का समाज पर पॉजिटिव प्रभाव डालने के लिए किए गए प्रतिबद्धता का उल्लेख उनकी इन महत्वपूर्ण सहायता क्षेत्रों में दिखता है।`}
        </div>

        <Popover>
          <PopoverTrigger>
            <Button className="w-1/2 text-xl md:w-1/4"> Quick Donation</Button>{' '}
          </PopoverTrigger>
          <PopoverContent>
            <img src="/Capture.png" alt="" />
          </PopoverContent>
        </Popover>
        <div className="flex w-full flex-col gap-5 bg-[#efe3ce8a] px-2 py-10 text-center">
          <span className="text-5xl font-extrabold uppercase max-lg:text-3xl max-md:text-2xl">
            {!isHindi ? `Our Accomplishments` : `हमारी प्राप्तियाँ`}
          </span>

          {/* numbers */}
          <div className="flex w-full justify-between gap-5 text-2xl max-md:text-xl max-sm:text-lg">
            <span className="flex flex-col font-bold ">
              <span className="">15+</span>
              <span className="mb-4 uppercase">{!isHindi ? `Thousands` : `हजारों`}</span>
              <span className="text-xl font-normal max-md:text-lg max-sm:text-sm">
                {!isHindi
                  ? `children and their families are impacted every year`
                  : `हर साल बच्चे और उनके परिवार पर प्रभाव डालते हैं`}
              </span>
            </span>
            <span className="flex flex-col font-bold ">
              <span className="text-4rem">120+</span>
              <span className="mb-4 uppercase">{!isHindi ? `Projects` : `परियोजनाएँ`}</span>
              <span className="text-xl font-normal max-md:text-lg max-sm:text-sm">
                {!isHindi
                  ? `focused on education, healthcare, and women empowerment`
                  : `शिक्षा, स्वास्थ्य सेवाएँ और महिला सशक्तिकरण पर केंद्रित`}
              </span>
            </span>
            <span className="flex flex-col font-bold ">
              <span className="text-4rem">25+</span>
              <span className="mb-4 uppercase">{!isHindi ? `States` : `राज्यों`}</span>
              <span className="text-xl font-normal max-md:text-lg max-sm:text-sm">
                {!isHindi
                  ? `are reached including the remotest areas`
                  : `समेत होते हैं सबसे दूर क्षेत्रों तक पहुँचाया जाता है`}
              </span>
            </span>
          </div>
        </div>

        {/* programms */}
        <div className=" flex w-full flex-col items-center gap-10 py-10">
          <h1 className="text-5xl font-extrabold uppercase max-lg:text-3xl max-md:text-2xl">
            {!isHindi ? `Our Initiatives` : `हमारी पहलें`}
          </h1>

          <div className="flex w-full flex-wrap items-start justify-around gap-10 px-10">
            <Herocard
              heading={!isHindi ? `LEARNING FOR ALL` : `सभी के लिए सीखना`}
              description={
                !isHindi
                  ? `Promoting inclusive education, nourishment, and comprehensive growth of children`
                  : `समावेशी शिक्षा, पोषण और बच्चों के समग्र विकास को बढ़ावा देना`
              }
              images="/images/vc.svg"
              customClasses="w-[180px]"
              blob="/images/blob1.svg"
            />
            <Herocard
              heading={!isHindi ? `WELLNESS ACCESS` : `स्वास्थ्य पहुँच`}
              description={
                !isHindi
                  ? `Bringing essential medical services to remote and underserved communities`
                  : `दूरस्थ और असेवित समुदायों में आवश्यक चिकित्सा सेवाओं को लाना`
              }
              images="/images/spa.svg"
              customClasses="w-[180px]"
              blob="/images/blob2.svg"
            />
            <Herocard
              heading={!isHindi ? `Schooling culture` : `स्कूली शिक्षा संस्कृति`}
              description={
                !isHindi
                  ? `Promoting a positive school culture for an inclusive and collaborative learning experience.`
                  : `
                  सकारात्मक विद्यालय सांस्कृतिक: सहयोगपूर्ण और समृद्धि की ओर एक क्षितिज।`
              }
              customClasses="w-[180px]"
              images="/images/entrepreneurs.svg"
              blob="/images/blob3.svg"
            />
            <Herocard
              heading={!isHindi ? `PATH TO PROSPERITY` : `समृद्धि की ओर पथ`}
              description={
                !isHindi
                  ? `Imparting skills and aiding the career journey of disadvantaged youth`
                  : `अवसरवादी युवाओं के कौशलों को प्रदान करना और उनकी कैरियर यात्रा में सहायता करना`
              }
              customClasses="w-[180px]"
              images="/images/startup.svg"
              blob="/images/blob4.svg"
            />
          </div>
        </div>

        {/* cards */}
        <div className="max-xl mx-10 my-20 flex flex-wrap  justify-evenly gap-10  max-sm:justify-center  lg:grid   lg:grid-cols-4 ">
          <Cards
            heading={!isHindi ? `Knowledge Equality Initiative` : `ज्ञान समानता पहल`}
            description={
              !isHindi
                ? `With our Knowledge Equality Initiative, we're committed to LEARNING FOR ALL. We believe in inclusive education that nurtures children's minds and fosters growth.`
                : `हमारे ज्ञान समानता पहल के साथ, हम सभी के लिए सीखने के लिए प्रतिबद्ध हैं। हम समावेशी शिक्षा में विश्वास रखते हैं जो बच्चों के मन को पोषण और विकास को बढ़ावा देती है।`
            }
            images="/images/child.jpg"
          />
          <Cards
            heading={!isHindi ? `Empowerment Horizon` : `शक्तिपूर्ण क्षितिज`}
            description={
              !isHindi
                ? `Through our Empowerment Horizon program, we're dedicated to EMPOWERING HER. We're on a mission to uplift young women and girls by engaging them in community-driven initiatives.`
                : `हमारे शक्तिपूर्ण क्षितिज कार्यक्रम के माध्यम से, हम महिलाओं को सशक्त बनाने के लिए प्रतिबद्ध हैं। हम समुदाय द्वारा चलाए जाने वाले पहलों में उन्हें जोड़कर युवा महिलाओं और लड़कियों को उठाने के लिए एक मिशन पर हैं।`
            }
            images="/images/child2.jpg"
          />
          <Cards
            heading={!isHindi ? `Wellness Outreach` : `स्वास्थ्य पहुँच`}
            description={
              !isHindi
                ? `Join us in our Wellness Outreach endeavor as we ensure WELLNESS ACCESS for all. Our focus is on bringing crucial medical services to remote and underserved communities.`
                : `सभी के लिए स्वास्थ्य पहुँच सुनिश्चित करते हुए हमारे स्वास्थ्य पहुँच प्रयास में हमारे साथ जुड़ें। हमारा ध्यान दूरस्थ और असेवित समुदायों में आवश्यक चिकित्सा सेवाओं को लाने पर है।`
            }
            images="/images/child3.jpg"
          />
          <Cards
            heading={!isHindi ? `Prosperity Navigator` : `समृद्धि की ओर पथ`}
            description={
              !isHindi
                ? `Embark on the PATH TO PROSPERITY with our Prosperity Navigator program. We're dedicated to imparting valuable skills and aiding the career journey of disadvantaged youth.`
                : `हमारे समृद्धि नेविगेटर प्रोग्राम के साथ समृद्धि की ओर पथ पर अपनी यात्रा प्रारंभ करें। हम अवसरवादी युवाओं के कौशलों को प्रदान करने और उनकी कैरियर यात्रा में सहायता करने के लिए प्रतिबद्ध हैं।`
            }
            images="/images/child4.jpg"
          />
        </div>

        {/* carousel */}
        <div className="my-15 relative mb-[10vh] flex items-center justify-center  ">
          <BannerCarousel customClasses="w-[70vw] max-md:w-[100vw] " images={footerimages} />
          {/* <BannerCarousel /> */}
        </div>

        <div className="py-10 max-sm:w-full ">
          <div className="flex items-center  justify-center pt-5">
            <h1 className="text-5xl font-extrabold uppercase max-lg:text-3xl max-md:text-2xl">
              {!isHindi ? `Our Endeavors` : `हमारी प्रयासें`}
            </h1>
          </div>
          <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 max-md:hidden" />

          <div className="flex flex-col gap-14">
            <AlignmentCards
              heading={
                !isHindi
                  ? `Jansevaa is a notable NGO foundation renowned for its multifaceted support in critical areas such as medical aid, student education, and training initiatives. Their profound commitment to creating a positive societal impact is exemplified through their dedicated efforts in these key domains.`
                  : `जनसेवा एक प्रसिद्ध एनजीओ संस्थान है जो चिकित्सा सहायता, छात्र शिक्षा और प्रशिक्षण पहलों जैसे महत्वपूर्ण क्षेत्रों में अपने बहुमुखी समर्थन के लिए प्रसिद्ध है। उनकी सकारात्मक सामाजिक प्रभाव बनाने की गहरी प्रतिबद्धता इन महत्वपूर्ण क्षेत्रों में उनके समर्पित प्रयासों के माध्यम से दिखाई देती है।`
              }
              /*   description="no desc" */
              images="/img1.jpg"
              cardtext={!isHindi ? `NEW ATTRIBUTE` : `नया गुण`}
            />
            <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 max-md:hidden" />

            <AlignmentCards
              heading={
                !isHindi
                  ? `Through their comprehensive approach, Jansevaa offers vital medical assistance, ensures access to quality education for students, and imparts essential skills through various training programs.`
                  : `अपने व्यापक दृष्टिकोण के माध्यम से, जनसेवा महत्वपूर्ण चिकित्सा सहायता प्रदान करता है, छात्रों के लिए गुणवत्ता शिक्षा की पहुँच सुनिश्चित करता है, और विभिन्न प्रशिक्षण कार्यक्रमों के माध्यम से आवश्यक कौशलों को प्रदान करता है।`
              }
              images="/img2.jpg"
              isImageLeft={true}
              cardtext={!isHindi ? `WELLNESS ACCESS` : `स्वास्थ्य पहुँच`}
            />
            <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 max-md:hidden" />

            <AlignmentCards
              images="/img3.jpg"
              heading={
                !isHindi
                  ? `This organization's unwavering dedication to fostering positive change is evident in their holistic approach to uplifting communities and individuals in need.`
                  : `इस संगठन की सकारात्मक परिवर्तन को बढ़ावा देने की अटल प्रतिबद्धता उनके समुदायों और जरूरतमंद व्यक्तियों को उठाने के लिए उनके समग्र दृष्टिकोण में स्पष्ट है।`
              }
              /*       description="no desc" */
              cardtext={!isHindi ? `EMPOWERING HER` : `उसे सशक्त बनाना`}
            />
            <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 max-md:hidden" />
          </div>
        </div>

        {/* report raise */}
        <div className="fixed bottom-10 right-10 z-10 ">
          <Link to={'/Report'}>
            <button
              type="button"
              className=" rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
              Report an Issue ?
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home

/* Landing Page */
