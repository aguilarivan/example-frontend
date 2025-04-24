'use client';

import { useRouter } from 'next/navigation';
import {
  Database,
  Rocket,
  Settings,
  ArrowRight, GithubIcon, BoxIcon
} from 'lucide-react';
import { RiNextjsFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiRailway } from "react-icons/si";
export default function MainPage() {
  const router = useRouter();

  return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gray-900 rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-bold text-white mb-4">🚀 Starter Pack: Next.js + Spring Boot</h1>
          <p className="text-gray-300 text-lg mb-6">
            Este proyecto es un <strong>boilerplate full stack</strong> desarrollado por el equipo de <span className="text-blue-400 font-semibold">GauLab</span>. Ideal para crear apps modernas rápidamente con tecnologías robustas y escalables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Feature icon={<RiNextjsFill className="w-8 h-8 text-white" />} title="Frontend Next.js 14">
              Next.js 14 con App Router y Tailwind CSS listo para producción.
            </Feature>
            <Feature icon={<SiSpring className="w-8 h-8 text-green-400" />} title="Backend Spring Boot 3.4.4">
              API REST con Spring Boot 3, JPA y estructura modular.
            </Feature>
            <Feature icon={<SiPostgresql className="w-8 h-8 text-blue-400" />} title="Base de datos">
              PostgreSQL como motor principal, con configuración lista para Docker.
            </Feature>
            <Feature icon={<SiRailway className="w-8 h-8 text-purple-400" />} title="Deploy railway">
              Integrado con Railway (backend, base de datos y frontend) para un despliegue sencillo.
            </Feature>
          </div>

          <div className="mb-8">
            <h2 className="text-xl text-white font-semibold mb-2 flex items-center gap-2">
              <GithubIcon className="w-5 h-5" />
              Repositorios
            </h2>
            <ul className="list-disc list-inside text-blue-400 space-y-1">
              <li>
                <a href="https://github.com/Gaulab/example-frontend" target="_blank" className="hover:underline">
                  Frontend – Next.js
                </a>
              </li>
              <li>
                <a href="https://github.com/Gaulab/example-backend" target="_blank" className="hover:underline">
                  Backend – Spring Boot
                </a>
              </li>
            </ul>
          </div>

          <button
              onClick={() => router.push('/BoxApp')}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            <BoxIcon className="w-5 h-5" />
            Ver ejemplo de CRUD
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
  );
}

function Feature({
                   icon,
                   title,
                   children,
                 }: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
      <div className="bg-gray-800 rounded-xl p-5 flex items-start space-x-4 shadow-sm">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{children}</p>
        </div>
      </div>
  );
}
