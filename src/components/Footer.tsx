
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold">Школа и родители: цифровое партнёрство</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Все права защищены
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/contacts" className="text-sm text-muted-foreground hover:text-foreground">
            Контакты
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
