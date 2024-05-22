import { Form } from 'react-router-dom';

function Contact() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="mt-8">
          <img
            className="rounded-xl shadow-2xl shadow-slate-900"
            src="../../photos/bird.jpeg"
            alt="contact"
          />
        </div>
        <div className="mb-24">
          <h1 className="mb-10 mt-20 text-center text-5xl font-extrabold tracking-tight text-emerald-900">
            Contact Us
          </h1>
          <Form method="POST">
            <div className="mx-auto max-w-3xl text-lg font-bold uppercase text-emerald-900">
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Full Name</label>
                <input
                  type="text"
                  name="customer"
                  className="input grow"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Email</label>
                <input
                  type="text"
                  name="email"
                  className="input grow"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="input grow"
                  placeholder="Enter your subject"
                  required
                />
              </div>
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Message</label>
                <textarea
                  className="input h-40 grow rounded-lg"
                  name="postContent"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="grow rounded-full bg-emerald-800/70 py-2 text-2xl font-bold uppercase tracking-widest text-lime-100 hover:bg-emerald-600">
                  Send
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
