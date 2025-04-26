
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Школа и родители */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Школа и родители</h3>
            <p className="text-muted-foreground">
              Проект по созданию эффективной системы цифровой коммуникации между школой и родителями
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-muted-foreground hover:text-foreground">
                  Регламент общения
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-muted-foreground hover:text-foreground">
                  Обратная связь
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-muted-foreground mb-2">
              Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами:
            </p>
            <a 
              href="mailto:school@example.com" 
              className="text-primary hover:underline"
            >
              school@example.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {currentYear} Школа и родители: цифровое партнёрство. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
