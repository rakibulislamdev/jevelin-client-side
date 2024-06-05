
import ReactVideoPlayer from "../ReactPlayer/ReactVideoPlayer";
import './SeeForYourself.css'


const SeeForYourself = () => {

  return (
    <section id="paralax" className="paralax-bg bg-center bg-cover bg-fixed bg-no-repeat scroll-pb-52">
      <div className="max-w-5xl mx-auto px-5 py-24">
        <div>
          <h4 className="text-sm font-bold text-grayLight">HOW IT WORKS</h4>
          <h3 className="text-5xl font-black text-darkLight mt-5 mb-6 leading-tight">
            <span className="text-primary">See for yourself.</span> <br />
            Quick video introduction
          </h3>
          <p className="text-grayLight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae <br />
            odales lectus, non ultrices nisi. In varius, leo non gravida.
          </p>
        </div>

        <ReactVideoPlayer/>
      </div>
    </section>
  );
};

export default SeeForYourself;
