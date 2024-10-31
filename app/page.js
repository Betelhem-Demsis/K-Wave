import Navbar from '../components/Navbar';
import { Explore, GetStarted, Hero } from '../sections';

const Page = () => (
  <div className="bg-slate-900 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <Explore />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <GetStarted />
    </div>
  </div>
);

export default Page;
