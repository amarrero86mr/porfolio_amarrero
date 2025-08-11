
export type TSlideProyect = {
  id: number;
  title: string;
  description: string;
  image: string;
}

import imag1 from "../info/task_management_baner.jpg"
import imag2 from "../info/tradiscionCriolla_baner.jpg"
import imag3 from "../info/wlr_shopeer.jpg"

export const slidesData: TSlideProyect[] = [
  {
    id: 1,
    title: 'Proyecto: Task Manegement',
    description: 'Proyecto de tablero de kanban, React, Ts, Tailwiond',
    image: imag1
  },
  {
    id: 2,
    title: 'Proyecto: Tradicion Ciolla',
    description: 'Aplicación front-end & back-end de E-commerce, con js, node.js, express, MySQL, css, html',
    image: imag2
  },
  {
    id: 3,
    title: 'Proyecto: Wl`r Shopeer',
    description: 'Aplicación front-end de E-commerce, React.js, react-router, mockAPI, Bootstrap',
    image: imag3
  },
];