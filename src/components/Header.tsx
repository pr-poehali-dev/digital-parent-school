
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
      <div className="container flex items-center h-16">
        <Link to="/" className="text-[#2563eb] text-xl font-medium mr-8">
          Школа и родители: цифровое партнёрство
        </Link>
        
        <nav className="flex items-center space-x-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link 
                key={item.title}
                to={item.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
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
