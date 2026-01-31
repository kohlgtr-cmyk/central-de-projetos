# Instruções para Modificar o Portfólio

## 1. Modificar a Seção de Projetos

Encontre a seção de projetos no seu HTML (procure por `<section id="projetos">` ou similar) e modifique para incluir apenas os 2-3 melhores projetos.

### Substitua a seção "Portfólio" por esta versão atualizada:

```html
<section id="projetos" class="section">
    <div class="container">
        <div class="section-header">
            <h2>Portfólio</h2>
            <h3>Projetos em Destaque</h3>
            <p>Seleção dos meus melhores trabalhos</p>
        </div>

        <div class="projects-grid">
            <!-- Projeto 1: EchoDome -->
            <div class="project-card">
                <div class="project-image">
                    <img src="/img/full-band-logo.jpg" alt="EchoDome">
                </div>
                <div class="project-content">
                    <h3>EchoDome Band</h3>
                    <span class="project-status">Em Andamento</span>
                    <p>Landing Page para a Banda EchoDome</p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML5</span>
                        <span class="tech-tag">CSS3</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">SCSS</span>
                    </div>
                    <div class="project-links">
                        <a href="https://echodome.vercel.app" target="_blank" class="btn btn-primary">Ver Demo →</a>
                        <a href="https://github.com/kohlgtr-cmyk/echodome" target="_blank" class="btn btn-secondary">GitHub</a>
                    </div>
                </div>
            </div>

            <!-- Projeto 2: FD Store -->
            <div class="project-card">
                <div class="project-image">
                    <img src="/img/logo.svg" alt="FD Store">
                </div>
                <div class="project-content">
                    <h3>FD Store - E-commerce</h3>
                    <span class="project-status completed">Finalizado</span>
                    <p>Plataforma de e-commerce completa com carrinho, filtros e autenticação</p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML5</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">CSS</span>
                    </div>
                    <div class="project-links">
                        <a href="https://fdstore.vercel.app" target="_blank" class="btn btn-primary">Ver Demo →</a>
                        <a href="https://github.com/kohlgtr-cmyk/fdstore" target="_blank" class="btn btn-secondary">GitHub</a>
                    </div>
                </div>
            </div>
        </div>


        <!--                 <div class="project-card">
                    <div class="project-info">
                        <h3>Barbearia</h3>
                        <p class="project-description">
                            Landing Page para a Barbearia.(projeto pessoal)
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">SCSS</span>
                        </div>
                        <div class="project-links">
                            <a target="_blank" href="https://barber-orcin-gamma.vercel.app" class="project-link" rel="noopener">Ver Demo →</a>
                        </div>
                    </div>
                    <div class="project-image img-menor">
                        <img src="/img/logo.svg" alt="Barber Logo">
                    </div>
                </div>
-->

        <!-- BOTÃO PARA VER TODOS OS PROJETOS -->
        <div class="view-all-projects">
            <a href="LINK_DO_SEU_SITE_DE_PROJETOS" class="btn-view-all">
                <span>Ver Todos os Projetos</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    </div>
</section>
```

## 2. Adicionar CSS para o Botão

Adicione este CSS no seu arquivo de estilos:

```css
/* Botão Ver Todos os Projetos */
.view-all-projects {
    margin-top: 4rem;
    text-align: center;
}

.btn-view-all {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
}

.btn-view-all::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn-view-all:hover::before {
    left: 100%;
}

.btn-view-all:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.btn-view-all svg {
    transition: transform 0.3s ease;
}

.btn-view-all:hover svg {
    transform: translateX(5px);
}

/* Estilo adicional para project-status se não existir */
.project-status {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.project-status.completed {
    background: rgba(52, 211, 153, 0.1);
    color: #34d399;
}
```

## 3. IMPORTANTE: Depois de hospedar o site de projetos

Quando você hospedar o arquivo `projetos.html` na Vercel (ou outro serviço), substitua:
```html
<a href="LINK_DO_SEU_SITE_DE_PROJETOS" class="btn-view-all">
```

Por:
```html
<a href="https://seu-link-aqui.vercel.app" class="btn-view-all">
```

## 4. Como Hospedar o Site de Projetos na Vercel

1. Acesse https://vercel.com
2. Faça login com GitHub
3. Clique em "Add New..." → "Project"
4. Crie um novo repositório no GitHub com o arquivo `projetos.html`
5. Importe o repositório na Vercel
6. Deploy!

Ou use o Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Resultado Esperado

- Portfólio mostra apenas 2-3 projetos principais
- Botão destaque para "Ver Todos os Projetos"
- Site separado com todos os projetos + filtros + busca
- Navegação fluida entre os dois sites
