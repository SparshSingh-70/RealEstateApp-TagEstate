import Footer from "./Footer";

export default function About() {
  return (
    <>
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-5 text-slate-800">
          About <span className="text-slate-600">TAG Estate</span>
        </h1>
        <h2 className="text-2xl mb-3 text-slate-600 font-semibold">
          TAG: Your Premier Destination for Real Estate Excellence
        </h2>
        <p className="mb-4 text-slate-700 ">
          At TAG, we&apos;re committed to redefining the real estate experience
          by offering a comprehensive range of tools, resources, and services
          designed to empower buyers, sellers, renters, and agents alike. With
          our user-friendly interface and innovative features, navigating the
          complex world of real estate has never been easier. With a vast and
          diverse selection of properties available, ranging from luxurious
          estates to cozy apartments, TAG ensures that every individual can find
          their perfect space. Our extensive database is continuously updated in
          real-time, providing users with access to the latest listings and
          market trends.
        </p>
        <p className="mb-4 text-slate-700 ">
          In addition to our state-of-the-art technology, TAG also offers access
          to a network of experienced real estate professionals who are ready to
          provide expert guidance and support. From negotiating deals to
          navigating legal complexities, our team of agents is dedicated to
          ensuring a smooth and successful transaction for every client.
        </p>
        <p className="mb-4 text-slate-700 ">
          But TAG is more than just a real estate platform - it&apos;s a
          thriving community where users can connect, share insights, and forge
          meaningful connections. Whether you&apos;re seeking advice from fellow
          enthusiasts or simply looking to stay informed about the latest market
          trends, TAG offers a vibrant online space where real estate dreams
          come to life.
        </p>
      </div>
      <Footer />
    </>
  );
}
