
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const quickLinks = [
    { title: "Перейти к памятке", href: "/guidelines", icon: "📝" },
    { title: "Инструкции по входу в электронный дневник", href: "/instructions", icon: "🔑" },
    { title: "Задать вопрос педагогу", href: "/ask", icon: "❓" },
    { title: "Оценить взаимодействие", href: "/feedback", icon: "⭐" }
  ];

  return (
    <section className="container grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:py-12 lg:py-16">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Эффективная и уважительная онлайн-коммуникация: вместе для будущего детей
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Наш проект создан для построения конструктивного диалога между школой и родителями в цифровом пространстве.
          Мы стремимся сделать общение продуктивным, уважительным и комфортным для всех участников образовательного процесса.
        </p>
        <p className="text-muted-foreground md:text-xl">
          Здесь вы найдете рекомендации по эффективной коммуникации, правила цифрового этикета и практические инструменты,
          которые помогут наладить взаимодействие между педагогами и родителями во благо развития детей.
        </p>
        <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link key={link.title} to={link.href}>
              <Button variant="outline" className="w-full justify-start text-left">
                <span className="mr-2">{link.icon}</span>
                {link.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-[350px] w-[350px] overflow-hidden rounded-xl md:h-[450px] md:w-[450px]">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
            alt="Взаимодействие педагог-родитель-ребёнок"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
