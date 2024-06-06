import { SlSocialYoutube, SlSocialTwitter, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const SocialMedia = () => {
  return (
    <section className="bg-primary py-20">
        <div className="flex justify-center items-center gap-10">
            <SlSocialYoutube className="text-3xl text-grayLight hover:text-gray-300 duration-300 cursor-pointer"/>
            <SlSocialTwitter className="text-3xl text-grayLight hover:text-gray-300 duration-300 cursor-pointer"/>
            <SlSocialFacebook className="text-3xl text-grayLight hover:text-gray-300 duration-300 cursor-pointer"/>
            <SlSocialInstagram className="text-3xl text-grayLight hover:text-gray-300 duration-300 cursor-pointer"/>
        </div>
    </section>
  )
}

export default SocialMedia