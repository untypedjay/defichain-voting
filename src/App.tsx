import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import Overview from "./components/Overview/Overview";
import { ProposalDetails } from "./components/ProposalDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/proposals/:proposalId" element={<ProposalDetails />}/>
        <Route path="/:votingRound" element={<Overview />}/>
        <Route path="/" element={<Overview />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
} 