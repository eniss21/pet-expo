function About() {
  return (
    <section className=" bg-slate-300/50">
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8  lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="font-light text-emerald-900 sm:text-lg">
          <h2 className="mb-4 text-5xl font-extrabold  tracking-tight text-emerald-900">
            About Us
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel enim
            dolore, libero voluptas eos omnis magnam expedita voluptatum quaerat
            molestiae ex consequatur ratione sequi repudiandae. Explicabo
            exercitationem unde dicta iure aperiam eveniet accusantium commodi
            adipisci voluptas voluptatem doloremque nobis dolor tenetur
            necessitatibus in aliquid, fugit odio quasi officiis cupiditate
            magnam perspiciatis expedita! Praesentium nobis fugit voluptatem a
            veritatis tempora veniam?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis dolore iusto exercitationem alias a facere doloribus.
            Natus reprehenderit voluptas nihil.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg shadow-xl shadow-slate-900"
            src="../../photos/dog.avif"
            alt="dog"
          />
          <img
            className="mt-4 w-full rounded-lg shadow-xl shadow-slate-900 lg:mt-10"
            src="../../photos/cat.jpg"
            alt="cat"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
