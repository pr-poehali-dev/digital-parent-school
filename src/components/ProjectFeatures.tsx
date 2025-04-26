
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ProjectFeatures = () => {
  return (
    <div className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Что предлагает наш проект</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Понятный регламент */}
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="8" fill="#F6F6F7" />
                <path d="M24 22H40V42H24V22Z" fill="#F0F0F0" />
                <path d="M24 22H40V42H24V22Z" stroke="#666" strokeWidth="1.5" />
                <path d="M28 26H36" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M28 30H36" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M28 34H33" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M44 27L40 22" stroke="#666" strokeWidth="1.5" />
                <path d="M44 27V47H28L24 42" stroke="#666" strokeWidth="1.5" />
                <path d="M44 47L40 42H24" stroke="#666" strokeWidth="1.5" />
                <circle cx="43" cy="26" r="4" fill="#FF7A7A" />
              </svg>
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
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="8" fill="#E1F5FE" />
                <rect x="18" y="18" width="28" height="28" rx="4" fill="#0EAFF5" />
                <path d="M32 26V38" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 32H38" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 26C24 24.8954 24.8954 24 26 24H38C39.1046 24 40 24.8954 40 26V38C40 39.1046 39.1046 40 38 40H26C24.8954 40 24 39.1046 24 38V26Z" stroke="white" strokeWidth="2" />
              </svg>
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
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="8" fill="#FFF8E1" />
                <path d="M26 30C26 25.5817 29.5817 22 34 22V22C38.4183 22 42 25.5817 42 30V38C42 40.2091 40.2091 42 38 42H30C27.7909 42 26 40.2091 26 38V30Z" fill="#FFB300" />
                <path d="M22 34C22 29.5817 25.5817 26 30 26V26" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" />
                <path d="M34.5 33L37 30.5L34.5 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 35.5L28.5 33L26 35.5" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
