import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-gray-900 rounded-t-3xl">
      <div className="container">
        <div
          className="grid md:grid-cols-4 md:gap-4 py-5
            border-t-2 border-gray-300/10 text-white"
        >
          {/* brand info section */}
          <div className="py-8 px-4 space-y-4 ">
            <div
              className="text-2xl flex items-center gap-2
                    font-bold uppercase"
            >
              <FaDumbbell />
              <p>Coders</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              placeat quaerat doloribus odit perferendis autem blanditiis, nihil
              pariatur iusto accusamus
            </p>
            <div className="flex items-center justify-start gap-4">
              <a href="#">
                <HiLocationMarker className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Footer LInks */}
          <div
            className="grid grid-cols-2 md:grid-cols-3
                md:col-span-3 md:ml-14"
          >
            <div className="py-8 px-4">
              <h1
                className="sm:text-xl text-xl font-bold
                        sm:text-left text-justify mb-5"
              >
                Important Links
              </h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1
                className="sm:text-xl text-xl font-bold
                        sm:text-left text-justify mb-5"
              >
                Company Links
              </h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1
                className="sm:text-xl text-xl font-bold
                        sm:text-left text-justify mb-5"
              >
                Resources
              </h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
