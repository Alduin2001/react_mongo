import React, { FC } from "react";

const NotFound: FC = () => {
    return (
        <section className="text-white w-full mx-auto text-xl p-10">
            <h1>Ошибка 404!!!</h1>
            <p>Страница не найдена или у вас недостаточно прав доступа, поэтому съебись отсюда</p>
            <svg width="80%" height="400" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#f2f2f2" />

                <text x="50%" y="40%" font-size="100" text-anchor="middle" fill="#e74c3c" font-family="Arial, sans-serif">404</text>

                <text x="50%" y="60%" font-size="30" text-anchor="middle" fill="#333" font-family="Arial, sans-serif">Page Not Found</text>


                <circle cx="50%" cy="40%" r="150" stroke="#e74c3c" stroke-width="5" fill="none" />
                <circle cx="50%" cy="60%" r="200" stroke="#333" stroke-width="5" fill="none" />
            </svg>
        </section>
    );
}
export default NotFound;