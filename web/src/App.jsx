import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Founder from './pages/Founder';
import Programs from './pages/Programs';
import ForWildlife from './pages/ForWildlife';
import ForGirlEmpowerment from './pages/ForGirlEmpowerment';
import ForCommunities from './pages/ForCommunities';
import ComingSoon from './pages/ComingSoon';

// Impact and Blog get real routes so they're easy to build out, but stay
// unlinked from the nav/footer until their content is ready — point a
// <Link>/<a> at "/impact" or "/blog" to reveal them.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/for-wildlife" element={<ForWildlife />} />
        <Route path="/for-girl-empowerment" element={<ForGirlEmpowerment />} />
        <Route path="/for-communities" element={<ForCommunities />} />
        <Route path="/impact" element={<ComingSoon title="Impact" />} />
        <Route path="/blog" element={<ComingSoon title="Blog" />} />
      </Routes>
    </>
  );
}
