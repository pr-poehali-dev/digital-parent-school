
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ProjectFeatures = () => {
  return (
    <div className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Что предлагает наш проект</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Понятный регламент */}
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4 text-4xl">
              📝
            </div>
            <CardTitle className="text-xl">Понятный регламент</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-muted-foreground">
              Четкие правила коммуникации между родителями и педагогами
            </CardDescription>
          </CardContent>
        </Card>
        
        {/* Удобные каналы связи */}
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4 text-4xl">
              🔄
            </div>
            <CardTitle className="text-xl">Удобные каналы связи</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-muted-foreground">
              Обзор и инструкции по всем доступным платформам для общения
            </CardDescription>
          </CardContent>
        </Card>
        
        {/* Цифровой этикет */}
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4 text-4xl">
              🤝
            </div>
            <CardTitle className="text-xl">Цифровой этикет</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-muted-foreground">
              Рекомендации по уважительному и эффективному онлайн-общению
            </CardDescription>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default ProjectFeatures;
