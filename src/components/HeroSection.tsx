
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-6 md:text-4xl">
            Эффективная и уважительная онлайн-коммуникация: вместе для будущего детей
          </h1>
          
          <div className="space-y-4 mb-8 text-muted-foreground">
            <p>
              Наш проект создан для улучшения цифрового взаимодействия между школой и родителями, обеспечивая комфортное и продуктивное общение всех участников образовательного процесса.
            </p>
            <p>
              Здесь вы найдете регламенты и рекомендации, которые помогут сделать онлайн-коммуникацию более эффективной и уважительной.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="w-full">Перейти к памятке</Button>
            <Button className="w-full">Электронный дневник</Button>
            <Button className="w-full">Задать вопрос педагогу</Button>
            <Button className="w-full">Оценить взаимодействие</Button>
          </div>
        </div>
        
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Взаимодействие педагог-родитель-ребёнок" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
