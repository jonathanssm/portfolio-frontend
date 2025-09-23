# Portfolio Frontend

Um portfólio moderno e responsivo construído com Next.js 15, React 19 e TypeScript, seguindo as melhores práticas de desenvolvimento e os princípios SOLID.

## 🚀 Tecnologias

### Core
- **Next.js 15.5.2** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface de usuário
- **TypeScript 5.9.2** - Tipagem estática
- **Turbopack** - Bundler ultra-rápido para desenvolvimento

### Styling & UI
- **Tailwind CSS 4.1.12** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos
- **next-themes** - Suporte a tema escuro/claro

### Formulários & Validação
- **React Hook Form 7.62.0** - Gerenciamento de formulários
- **Zod 4.1.4** - Validação de schemas
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### Estado & Dados
- **Zustand 5.0.8** - Gerenciamento de estado global
- **TanStack Query 5.85.5** - Cache e sincronização de dados

### Analytics & Monitoramento
- **Vercel Analytics** - Analytics de produção
- **Vercel Speed Insights** - Métricas de performance
- **Cloudflare Insights** - Monitoramento adicional

### Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **TypeScript** - Verificação de tipos

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── contacts/          # Página de contatos
│   ├── home/              # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizáveis
│   ├── analytics/         # Componentes de analytics
│   ├── shared/            # Componentes compartilhados
│   ├── ui/                # Componentes de UI base
│   └── theme-provider.tsx # Provedor de tema
├── hooks/                 # Hooks customizados
├── lib/                   # Utilitários e configurações
│   ├── providers/         # Provedores de contexto
│   └── utils.ts           # Funções utilitárias
└── middleware.ts          # Middleware do Next.js
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
pnpm dev

# Build de produção com Turbopack
pnpm build

# Iniciar servidor de produção
pnpm start

# Linting do código
pnpm lint
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm/yarn

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd portfolio-frontend
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local
NEXT_PUBLIC_CLOUDFLARE_TOKEN=your_cloudflare_token_here
```

4. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador

## ⚙️ Configurações

### Analytics
O projeto inclui configuração centralizada de analytics em `src/lib/analytics-config.ts`:
- **Vercel Analytics**: Ativo apenas em produção
- **Cloudflare Insights**: Configurável via variável de ambiente
- **Rate Limiting**: Implementado para otimizar performance

### CORS
Configuração de CORS centralizada para:
- APIs internas
- Endpoints de analytics
- Headers de segurança

### Tema
Suporte completo a tema escuro/claro com:
- Persistência no localStorage
- Transições suaves
- Componentes adaptativos

## 🏗️ Arquitetura

### Princípios SOLID
- **Single Responsibility**: Cada componente tem uma responsabilidade específica
- **Open/Closed**: Componentes extensíveis sem modificação
- **Liskov Substitution**: Interfaces bem definidas
- **Interface Segregation**: Interfaces específicas e focadas
- **Dependency Inversion**: Dependências injetadas via props/context

### Padrões Implementados
- **Error Boundaries**: Tratamento de erros em analytics
- **Custom Hooks**: Lógica reutilizável
- **Context Providers**: Gerenciamento de estado global
- **Middleware**: Interceptação de requisições

## 🔧 Otimizações

### Performance
- **Turbopack**: Build ultra-rápido
- **Image Optimization**: Otimização automática de imagens
- **Code Splitting**: Carregamento sob demanda
- **Bundle Analysis**: Análise de tamanho do bundle

### SEO
- **Metadata API**: Metadados otimizados
- **Structured Data**: Dados estruturados
- **Sitemap**: Geração automática

### Segurança
- **CSP Headers**: Content Security Policy
- **CORS**: Configuração restritiva
- **Environment Variables**: Configurações seguras

## 📱 Responsividade

O projeto é totalmente responsivo com:
- **Mobile First**: Design mobile-first
- **Breakpoints**: Pontos de quebra otimizados
- **Touch Friendly**: Interface otimizada para touch
- **Performance**: Otimizado para dispositivos móveis

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licença

Este projeto é privado e proprietário.

## 👨‍💻 Desenvolvido por

**Jonathan Moraes** - Desenvolvedor Full Stack

---

*Última atualização: Dezembro 2024*