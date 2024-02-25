import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4x1 font-bold mb-4 primary-color">About me</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nostrum sapiente omnis laborum cumque pariatur dolor assumenda est
              impedit magni perspiciatis dolorem quia unde, porro ex? Hic,
              corrupti iusto est ipsum officia optio facilis vitae, ratione
              fugit voluptates impedit sint eveniet ex dolorum ipsa rem libero
              autem mollitia obcaecati fuga?
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3x1 py-8 md:py-0"
          src={aboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
