        // Projects Data
        const projects = [
            {
                title: "EchoDome Band",
                description: "Landing Page para a banda EchoDome com design moderno e interativo. Apresenta informações da banda, músicas e eventos.",
                tech: ["HTML5", "CSS3", "JavaScript", "SCSS"],
                status: "ongoing",
                emoji: "🎸",
                demo: "https://echodome.vercel.app",
                github: "https://github.com/kohlgtr-cmyk/echodome"
            },
            {
                title: "Barbearia",
                description: "Landing Page moderna para barbearia com sistema de agendamento, galeria de cortes e informações de serviços.",
                tech: ["HTML5", "CSS3", "JavaScript", "SCSS"],
                status: "completed",
                emoji: "✂️",
                demo: "https://barber-orcin-gamma.vercel.app",
                github: "https://github.com/kohlgtr-cmyk/barber"
            },
            {
                title: "FD Store",
                description: "Plataforma de e-commerce completa com carrinho de compras, sistema de filtros, autenticação e integração com API. Design responsivo com foco em UX.",
                tech: ["HTML5", "JavaScript", "CSS3"],
                status: "completed",
                emoji: "🛒",
                demo: "https://fdstore.vercel.app",
                github: "https://github.com/kohlgtr-cmyk/fdstore"
            },
            {
                title: "Task Management App",
                description: "Aplicação de gerenciamento de tarefas com drag-and-drop, categorias personalizadas, filtros e modo escuro. Interface inspirada em ferramentas modernas de produtividade.",
                tech: ["React", "JavaScript", "CSS3"],
                status: "ongoing",
                emoji: "✅",
                demo: "#",
                github: "#"
            }
        ];

        // State
        let currentFilter = 'all';
        let searchQuery = '';

        // Initialize
        function init() {
            renderProjects();
            updateStats();
            setupEventListeners();
        }

        // Render Projects
        function renderProjects() {
            const grid = document.getElementById('projectsGrid');
            const emptyState = document.getElementById('emptyState');
            
            const filteredProjects = projects.filter(project => {
                const matchesFilter = currentFilter === 'all' || project.tech.includes(currentFilter);
                const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    project.description.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesFilter && matchesSearch;
            });

            if (filteredProjects.length === 0) {
                grid.innerHTML = '';
                emptyState.classList.add('show');
                return;
            }

            emptyState.classList.remove('show');
            
            grid.innerHTML = filteredProjects.map(project => `
                <div class="project-card" style="animation-delay: ${Math.random() * 0.3}s">
                    <div class="project-image">
                        ${project.emoji}
                    </div>
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">${project.title}</h3>
                            <span class="project-status ${project.status}">${project.status === 'ongoing' ? 'Em Andamento' : 'Finalizado'}</span>
                        </div>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="project-link primary">Ver Demo</a>` : ''}
                            ${project.github !== '#' ? `<a href="${project.github}" target="_blank" class="project-link secondary">GitHub</a>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Update Stats
        function updateStats() {
            const total = projects.length;
            const completed = projects.filter(p => p.status === 'completed').length;
            const ongoing = projects.filter(p => p.status === 'ongoing').length;

            animateNumber('totalProjects', total);
            animateNumber('completedProjects', completed);
            animateNumber('ongoingProjects', ongoing);
        }

        // Animate Numbers
        function animateNumber(id, target) {
            const element = document.getElementById(id);
            let current = 0;
            const increment = target / 30;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 30);
        }

        // Setup Event Listeners
        function setupEventListeners() {
            // Filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.filter;
                    renderProjects();
                });
            });

            // Search input
            document.getElementById('searchInput').addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderProjects();
            });
        }

        // Initialize on load
        init();