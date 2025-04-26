
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "О проекте", href: "/about" },
    { title: "Регламент", href: "/regulations" },
    { title: "Каналы связи", href: "/channels" },
    { title: "Этикет", href: "/etiquette" },
    { title: "FAQ", href: "/faq" },
    { title: "Связь", href: "/feedback" }
  ];

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-primary text-lg font-medium mr-4 flex-shrink-0 hidden sm:block">
          Школа и родители
        </Link>
        <Link to="/" className="text-primary text-lg font-medium mr-4 flex-shrink-0 sm:hidden">
          ШиР
        </Link>
        
        <nav className="flex flex-row space-x-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link 
                key={item.title}
                to={item.href}
                className={`px-2 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
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
