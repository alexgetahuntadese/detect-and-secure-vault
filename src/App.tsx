
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GradeSelection from "./pages/GradeSelection";
import SubjectsPage from "./pages/SubjectsPage";
import ChaptersPage from "./pages/ChaptersPage";
import QuizPage from "./pages/QuizPage";
import Grade11ChaptersPage from "./pages/Grade11ChaptersPage";
import Grade11QuizPage from "./pages/Grade11QuizPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/grades" element={<GradeSelection />} />
        <Route path="/grade/:grade/subjects" element={<SubjectsPage />} />
        <Route path="/grade/11/subject/:subject/chapters" element={<Grade11ChaptersPage />} />
        <Route path="/grade/11/subject/:subject/chapter/:chapterId/difficulty/:difficulty/quiz" element={<Grade11QuizPage />} />
        <Route path="/grade/:grade/subject/:subject/chapters" element={<ChaptersPage />} />
        <Route path="/grade/:grade/subject/:subject/chapter/:chapterId/difficulty/:difficulty/quiz" element={<QuizPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
