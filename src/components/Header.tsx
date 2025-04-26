
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "О проекте", href: "/about" },
    { title: "Регламент общения", href: "/regulations" },
    { title: "Каналы связи", href: "/channels" },
    { title: "Цифровой этикет", href: "/etiquette" },
    { title: "Вопросы и ответы", href: "/faq" },
    { title: "Обратная связь", href: "/feedback" }
  ];

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col md:flex-row h-auto md:h-16 items-center py-3 md:py-0">
        <Link to="/" className="text-xl font-bold text-primary mr-8 mb-3 md:mb-0">
          Школа и родители: цифровое партнёрство
        </Link>
        
        <nav className="flex flex-wrap">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link 
                key={item.title}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-primary text-white" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
