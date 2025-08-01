
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in">
            EthioQuiz 2050
          </h1>
          <p className="text-xl text-blue-100 mb-8 opacity-0 animate-fade-in [animation-delay:0.2s]">
            Advanced Learning Platform for Ethiopian Students
          </p>
          <div className="text-lg text-purple-100 opacity-0 animate-fade-in [animation-delay:0.4s]">
            Grades 1-12 • Interactive Quizzes • Progress Tracking
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20 opacity-0 animate-fade-in [animation-delay:0.6s]">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Explore Subjects</CardTitle>
              <CardDescription className="text-blue-100">
                Browse all available subjects and chapters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/grades')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Browse Quizzes
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in [animation-delay:0.8s]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80">
            <div>
              <div className="text-2xl font-bold text-green-400">2050+</div>
              <div className="text-sm">Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">12</div>
              <div className="text-sm">Subjects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">12</div>
              <div className="text-sm">Grade Levels</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">AI</div>
              <div className="text-sm">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
