
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "О проекте", href: "/about" },
    { title: "Регламент общения", href: "/regulations" },
    { title: "Каналы связи", href: "/channels" },
    { title: "Цифровой этикет", href: "/etiquette" },
    { title: "FAQ", href: "/faq" },
    { title: "Обратная связь", href: "/feedback" }
  ];

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-foreground text-lg font-medium mr-4 flex-shrink-0 hidden sm:block">
          Школа и родители: цифровое партнёрство
        </Link>
        <Link to="/" className="text-foreground text-lg font-medium mr-4 flex-shrink-0 sm:hidden">
          ШиР
        </Link>
        
        <nav className="flex flex-row space-x-1 overflow-x-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link 
                key={item.title}
                to={item.href}
                className={`px-1.5 py-1 text-xs whitespace-nowrap rounded-md font-medium transition-colors ${
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
