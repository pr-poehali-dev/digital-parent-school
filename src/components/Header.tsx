
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
      <div className="container flex items-center h-16 whitespace-nowrap overflow-x-auto">
        <Link to="/" className="text-primary text-lg font-medium mr-8 flex-shrink-0">
          Школа и родители: цифровое партнёрство
        </Link>
        
        <nav className="flex flex-row space-x-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link 
                key={item.title}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex-shrink-0 ${
                  isActive 
                    ? "bg-[#2563eb] text-white" 
                    : "text-foreground hover:text-[#2563eb]"
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
