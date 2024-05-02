import { aboutdata } from "../utils/data";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-cursive text-bluepurple p-2">{aboutdata.title}</h2>
      <p className="p-3">
        {aboutdata.details}
      </p>
      <h4 className="text-center text-cursive p-2">Our Mission</h4>
      <p className="p-3">
        {aboutdata.mission}
      </p>
      <h4 className="text-center text-cursive p-2">Get in Touch</h4>
      <p className="p-3 pb-0">
        {aboutdata.getintouch}
      </p>
      <p className="p-3 pb-0 pt-0">
       {aboutdata.thanks}
      </p>
      <p className="p-3 pt-0">Happy shopping!</p>
    </div>
  );
};

export default About;
