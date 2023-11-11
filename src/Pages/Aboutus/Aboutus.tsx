import Herocard from '../../components/HeroCard'
import { useLangToggle } from '@/components/LangToggleContext'

const Aboutus = () => {
  const { isHindi } = useLangToggle()
  return (
    <div className="pt-24 max-sm:pt-16">
      <div className="flex flex-col gap-10">
        <img
          className="h-[50vh] w-full object-cover max-md:h-[40vh] "
          src="/bacche.jpg"
          alt="VHL GROUP"
        />
        <div className="flex flex-col items-center gap-10 text-xl max-sm:text-sm">
          <p className="relative w-[80%]  text-center">
            {!isHindi
              ? `Welcome to Jansevaa a beacon of hope, a catalyst for change, and a testament to the power of collective compassion. At Jansevaa, we believe that true progress is measured not just in economic terms. Our journey is one of dedication, empathy, and unwavering commitment to creating a world where every individual has the opportunity to thrive, regardless of their circumstances.`
              : `जनसेवा में आपका स्वागत है, जो आशा की एक प्रकाशक, परिवर्तन के एक कारक, और सामूहिक सहानुभूति की शक्ति का साक्षात्कार है। जनसेवा में, हम मानते हैं कि वास्तविक प्रगति को आर्थिक परिप्रेक्ष्य में ही नहीं मापा जा सकता। हमारा सफर समर्पण, सहानुभूति, और परिस्थितियों के बावजूद हर व्यक्ति को संघर्ष के अवसर की संभावना हो, इस पर दृढ़ समर्पण से भरा हुआ है।`}
            <img
              className="z-9 absolute -left-8 -top-2 h-9 max-sm:h-5"
              src="/icons/quotes-left.svg"
              alt="VHL"
            />
          </p>
          <p className="relative w-[80%] text-center">
            {!isHindi
              ? `Founded with a vision to make a meaningful difference, Jansevaa stands as a remarkable NGO foundation, revered for its multifaceted and impactful initiatives. Our areas of focus span across critical sectors, including`
              : `एक मानवता की भावना के साथ स्थापित, जनसेवा एक उल्लेखनीय गैरसरकारी संगठन की भूमिका में खड़ा है, जिसे उसके बहुप्रतिक्षिप्त और प्रभावी पहलुओं के लिए सम्मानित किया गया है। हमारे प्राथमिक क्षेत्र बहुत विभिन्न हैं, जिनमें शामिल हैं:
              `}
            <span className="bg-yellow-200 font-semibold">
              {!isHindi
                ? ` medical aid, student education, and comprehensive training programs`
                : `चिकित्सा सहायता, छात्र शिक्षा, और व्यापक प्रशिक्षण कार्यक्रम।`}
            </span>
            {!isHindi
              ? ` . Through these pillars, we have woven a tapestry of change that touches lives at their core. In the realm of medical aid, we extend a helping hand to those who need it most. Our medical assistance initiatives are not just about treating ailments; they're about restoring dignity and providing a ray of hope to those facing health challenges for the betterment of their life.`
              : ` इन स्तंभों के माध्यम से, हमने एक परिवर्तन का वस्त्र बुन दिया है जो जीवनों को उनके मूल में छूता है। चिकित्सा सहायता के क्षेत्र में, हम उनकी मदद के लिए एक सहायक हाथ बढ़ाते हैं जिन्हें यह सबसे ज्यादा आवश्यकता होती है। हमारी चिकित्सा सहायता पहलों का मतलब बीमारियों का इलाज करने के बारे में नहीं है; यह उनके जीवन के सुधार के लिए स्वाभिमान की पुनर्स्थापना करने और उन लोगों के लिए एक किरण उम्मीद प्रदान करने के बारे में है जो स्वास्थ्य संबंधी चुनौतियों का सामना कर रहे हैं।`}
            <img
              className="z-1 absolute -bottom-3 -right-3 h-9 max-sm:h-5"
              src="/icons/quotes-right.svg"
              alt="VHL"
            />
          </p>
        </div>
        <br />
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex  items-center  justify-center bg-[#efe3ce8a] py-10">
          <img
            className="h-[50vh] object-cover px-2 "
            src="/images/ImgCarousel/hifi-child.jpg"
            alt="VHL GROUP"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 text-xl max-sm:text-sm ">
          <p className="relative w-[75%] text-center">
            {!isHindi
              ? ` Whether it's providing essential medications, organizing health camps, or facilitating medical procedures, we stand by our commitment to healing lives and easing burdens. Education is the cornerstone of progress, and at Jansevaa, we are dedicated to ensuring that every child's potential is nurtured and unlocked. We work tirelessly to provide access to quality education, learning resources, and mentorship, empowering students to envision a brighter future and equipping them with the tools to realize their dreams.`
              : ` चाहे वह आवश्यक दवाओं की प्रदान करना हो, स्वास्थ्य शिविरों का आयोजन करना हो, या चिकित्सा प्रक्रियाओं की सुविधा प्रदान करना हो, हम अपने संकल्प के साथ खड़े हैं कि जीवनों की चिकित्सा करके और बोझ को कम करके सहायता करें। शिक्षा प्रगति का मूल आधार है, और जनसेवा में, हम समर्पित हैं कि प्रत्येक बच्चे की संभावना को पोषित और खोला जाए। हम अथक प्रयास करते हैं कि गुणवत्ता वाली शिक्षा, सीखने के संसाधन, और मेंटरशिप तक पहुंच प्रदान करें, छात्रों को एक उज्ज्वल भविष्य की कल्पना करने और उनके सपने को पूरा करने के उपकरणों से सशक्त करने के साधनों से लैस करें।`}
            <img
              className="z-9 absolute -left-10 -top-0 h-9 max-sm:h-5"
              src="/icons/quotes-left.svg"
              alt="VHL"
            />
          </p>
          <p className="relative w-[90%] text-center text-xl max-sm:text-sm">
            {!isHindi
              ? `But our impact doesn't stop there. We recognize that true empowerment encompasses holistic growth. Through our diverse training initiatives, we empower individuals with essential skills that open doors to opportunities they might not have thought possible. From vocational training that enhances employability to life skills that foster personal development, our training programs create pathways to self-sufficiency and success. At the heart of Jansevaa lies an unyielding dedication to fostering positive change.`
              : `लेकिन हमारा प्रभाव वहीं नहीं रुकता। हम मानते हैं कि वास्तविक सशक्तिकरण पूर्णिमा से समृद्धि का सामाग्री है। हमारे विविध प्रशिक्षण पहलुओं के माध्यम से, हम व्यक्तियों को महत्वपूर्ण कौशलों से सशक्त करते हैं जो उनके लिए असंभाव सोचे गए अवसरों के द्वार खोलते हैं। रोजगारी की वृद्धि को बढ़ाने वाले व्यावसायिक प्रशिक्षण से लेकर व्यक्तिगत विकास को बढ़ावा देने वाले जीवन कौशलों तक, हमारे प्रशिक्षण कार्यक्रम स्वावलंबन और सफलता की मार्गप्रदर्शन बनाते हैं। जनसेवा के मूल में सकारात्मक परिवर्तन को पोषण देने के लिए अतल समर्पण है।`}
            <img
              className="z-1 absolute bottom-0 right-0 h-9 max-sm:h-5"
              src="/icons/quotes-right.svg"
              alt="VHL"
            />
          </p>
        </div>
        <br />
      </div>
      {/* updated */}
      <h1 className="text-center text-5xl font-medium max-md:text-4xl">Our Devotion Path</h1>
      <div className="flex items-center justify-center">
        <hr className="mb-20 flex h-px w-2/3 items-center border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      </div>
      <div className="flex flex-wrap items-baseline justify-around gap-10">
        <Herocard
          heading={!isHindi ? `LEARNING FOR ALL` : `सभी के लिए सीखना`}
          description={
            !isHindi
              ? `Promoting inclusive education, nourishment, and comprehensive growth of children`
              : `समावेशी शिक्षा, पोषण और बच्चों के समग्र विकास को बढ़ावा देना`
          }
          images="/icons/punch.svg"
          customClasses="h-20"
          blob="/images/blob6.svg"
        />
        <Herocard
          heading={!isHindi ? `WELLNESS ACCESS` : `स्वास्थ्य पहुँच`}
          description={
            !isHindi
              ? `Bringing essential medical services to remote and underserved communities`
              : `दूरस्थ और असेवित समुदायों में आवश्यक चिकित्सा सेवाओं को लाना`
          }
          images="/images/team-success.svg"
          customClasses="h-20"
          blob="/images/blob7.svg"
        />
        <Herocard
          heading={!isHindi ? `Learning For All` : `सभी के लिए सीखना`}
          description={
            !isHindi
              ? `Promoting inclusive education, nourishment, and comprehensive growth of children`
              : `समावेशी शिक्षा, पोषण और बच्चों के समग्र विकास को बढ़ावा देना `
          }
          customClasses="h-20"
          images="/icons/team.svg"
          blob="/images/blob5.svg"
        />
        <Herocard
          heading={!isHindi ? `PATH TO PROSPERITY` : `समृद्धि की ओर पथ`}
          description={
            !isHindi
              ? `Imparting skills and aiding the career journey of disadvantaged youth`
              : `अवसरवादी युवाओं के कौशलों को प्रदान करना और उनकी कैरियर यात्रा में सहायता करना`
          }
          customClasses="h-20"
          images="/icons/trophy.svg"
          blob="/images/blob1.svg"
        />
      </div>

      {/* not updated */}
      <div className="flex items-center justify-center">
        <p className=" my-28 w-2/3 text-center text-2xl font-bold max-sm:w-full max-sm:px-5 max-sm:text-base max-sm:font-semibold">
          {!isHindi
            ? `Join us in our mission to sow the seeds of change, nurture them with compassion, and watch as they grow into a future brimming with promise. Welcome to Jansevaa – where every action, no matter how small, is a step towards a brighter tomorrow.`
            : `हमारे मिशन में शामिल हों और परिवर्तन के बीज बोने का काम करें, उन्हें दया से पोषित करें, और देखें कि वे एक वादे से भरपूर भविष्य में बदल जाते हैं। जनसेवा में आपका स्वागत है - जहां हर क्रिया, चाहे वो कितनी भी छोटी हो, एक उज्ज्वल कल की ओर एक कदम होती है।`}
        </p>
      </div>
    </div>
  )
}

export default Aboutus

/* Aboutus Page */
