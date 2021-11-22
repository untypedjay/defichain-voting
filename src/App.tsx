import { HashRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import Overview from "./components/Overview/Overview";
import { ProposalDetails } from "./components/ProposalDetails";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/proposals/:proposalId" element={<Overview />}/>
        <Route path="/:votingRound" element={<ProposalDetails />}/>
        <Route path="/" element={<Overview />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </HashRouter>
  );
} 