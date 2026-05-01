import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function Home() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div>
            <p>home</p>
            <button onClick={() => navigate("/about")}>about</button>
            <p>{t("header.home")}</p>
            <button
                onClick={() =>
                    i18n.changeLanguage(i18n.language === "en" ? "hr" : "en")
                }
            >
                change
            </button>
        </div>
    );
}
