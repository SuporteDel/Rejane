import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Rejane Advocacia | Direito Tributário e Previdenciário',description:'Advocacia tributária e previdenciária em Diamantino/MT, com atendimento presencial e online.',other:{'codex-preview':'development'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
