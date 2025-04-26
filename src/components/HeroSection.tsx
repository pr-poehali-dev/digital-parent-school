
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8 md:text-5xl">
            Эффективная и уважительная онлайн-коммуникация: вместе для будущего детей
          </h1>
          
          <div className="space-y-6 mb-10 text-muted-foreground text-lg">
            <p>
              Наш проект создан для улучшения цифрового взаимодействия между школой и родителями, обеспечивая комфортное и продуктивное общение всех участников образовательного процесса.
            </p>
            <p>
              Здесь вы найдете регламенты и рекомендации, которые помогут сделать онлайн-коммуникацию более эффективной и уважительной.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button size="lg" className="w-full">Перейти к памятке</Button>
            <Button size="lg" className="w-full">Электронный дневник</Button>
            <Button size="lg" className="w-full">Задать вопрос педагогу</Button>
            <Button size="lg" className="w-full">Оценить взаимодействие</Button>
          </div>
        </div>
        
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Визуализация взаимодействия педагог-родитель-ребёнок" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
