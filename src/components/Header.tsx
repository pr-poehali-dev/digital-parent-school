
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

const Header = () => {
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
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Школа и родители</span>
        </Link>
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="flex-wrap">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {/* Исправлено вложение тега <a> в <a> */}
                <NavigationMenuLink 
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  asChild
                >
                  <Link to={item.href}>
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
