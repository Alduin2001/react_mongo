import React, { FC } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, LineElement, ArcElement, BarElement, PointElement } from 'chart.js/auto';

// Регистрация необходимых шкал и элементов
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(ArcElement);
Chart.register(BarElement);
Chart.register(PointElement);
Chart.register(LineElement);

document.title = 'Статистика';
const Statistic: FC = () => {
    return (
        <section className="w-full grid grid-cols-1 grid-rows-2 gap-2 p-2">
            {/* Bar */}
            <div className="w-full mx-auto bg-font p-1">
                <h1 className="text-xl">Bar</h1>
                <Bar
                    data={{
                        labels: ['A', 'B', 'C'],
                        datasets: [
                            {
                                label: 'Количество водителей с определённой категории в Альметьевске',
                                data: [200, 300, 400]
                            },
                            {
                                label: 'Количество водителей с определённой категории в Акташе',
                                data: [200, 300, 400]
                            },
                            {
                                label: 'Количество водителей с определённой категории в Самаре',
                                data: [200, 2300, 400]
                            }
                        ]
                    }}
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                display: true // Убедитесь, что ось X отображается
                            },
                            y: {
                                display: true // Убедитесь, что ось Y отображается
                            }
                        },
                        plugins: {
                            legend: {
                                display: true // Убедитесь, что легенда включена
                            }
                        }
                    }}
                />
            </div>
            <div className="w-full grid grid-cols-2 gap-1">
                {/* Line */}
                <div className="w-full bg-font p-1">
                    <h1 className="text-xl">Line</h1>
                    <Line className="w-full"
                        data={{
                            labels: ['2014y', '2019y', '2024y'],
                            datasets: [
                                {
                                    label: 'Bitcoin',
                                    data: [1000, 2000, 69000],
                                    fill: false,
                                    borderColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
                                    tension: 0.1
                                },
                                {
                                    label: 'Etherum',
                                    data: [100, 200, 2000],
                                    fill: false,
                                    borderColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
                                    tension: 0.1
                                },
                                {
                                    label: 'Notcoin',
                                    data: [0, 0, 20000],
                                    fill: false,
                                    borderColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
                                    tension: 0
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            scales: {
                                x: {
                                    display: true // Убедитесь, что ось X отображается
                                },
                                y: {
                                    display: true // Убедитесь, что ось Y отображается
                                }
                            },
                            plugins: {
                                legend: {
                                    display: true // Убедитесь, что легенда включена
                                }
                            }
                        }}
                    />
                </div>
                {/* Circle (Doughnut) */}
                <div className="w-full bg-font p-1">
                    <h1 className="text-xl">Circle (Doughnut)</h1>
                    <Doughnut className="w-full"
                        data={{
                            labels: ['Троечники', 'Ударники', 'Отличники'],
                            datasets: [
                                {
                                    label: 'Студенты ис-213',
                                    data: [15, 5, 6],
                                    backgroundColor: [
                                        `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
                                        `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
                                        `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
                                    ],
                                    hoverOffset: 1
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: true // Убедитесь, что легенда включена
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Statistic;