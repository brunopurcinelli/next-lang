import { Input, Logo } from "@/components/ui";
import { LoginButton } from "../Button/LoginButton";
import { SignUpButton } from "../Button/SignUpButton";
import { useTranslations } from "next-intl";

export const Header = () => {
    const t = useTranslations('Navigation');

    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <Logo/>
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-white">{t('home')}</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">{t('features')}</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">{t('services')}</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">{t('products')}</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">{t('about')}</a></li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <Input label="Search..."/>
                    </form>
                    <div className="text-end">
                        <LoginButton />
                        <SignUpButton />
                    </div>
                </div>
            </div>
        </header>
    );
}