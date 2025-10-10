export default class HomeTemplate {
    home;
    constructor(home) {
        this.home = home;
    }
    setHome = (home) => {
        this.home = home;
    };
    getHomeNode = () => {
        const container = document.createElement('div');
        container.className = 'home-container';
        container.innerHTML = `
      <div class="home-hero">
        <h1>${this.home.title}</h1>
        <h2>${this.home.subtitle}</h2>
        <p>${this.home.featuredMessage}</p>
      </div>
      
      <div class="home-stats">
        <div class="stat-card">
          <h3>${this.home.stats.totalMovies}</h3>
          <p>Películas Disponibles</p>
        </div>
        <div class="stat-card">
          <h3>${this.home.stats.newThisWeek}</h3>
          <p>Novedades Esta Semana</p>
        </div>
        <div class="stat-card">
          <h3>${this.home.stats.topRated}</h3>
          <p>Mejor Valoradas</p>
        </div>
      </div>
      
      <div class="home-links">
        ${this.home.quickLinks.map(link => `<button class="quick-link" data-action="${link.action}">${link.text}</button>`).join('')}
      </div>
    `;
        return container;
    };
}
