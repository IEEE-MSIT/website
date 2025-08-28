<div align="center">

  <a href="https://ieeemsit.vercel.app/" target="_blank">
    <img src="https://raw.githubusercontent.com/IEEE-MSIT/website/main/public/IEEEWhiteLogowithTransparentBG.png" alt="IEEE MSIT Logo" width="250"/>
  </a>

  <h1 align="center">IEEE MSIT Official Website</h1>
  <p align="center">
    The official source code for the IEEE MSIT student branch website.
    <br />
    A fully optimized PWA with comprehensive SEO, engineered by the Web Development Department '25.
  </p>

  <p align="center">
    <a href="https://github.com/IEEE-MSIT/website/stargazers"><img src="https://img.shields.io/github/stars/IEEE-MSIT/website?style=for-the-badge&logo=github&color=00629B" alt="Stars"></a>
    <a href="https://github.com/IEEE-MSIT/website/network/members"><img src="https://img.shields.io/github/forks/IEEE-MSIT/website?style=for-the-badge&logo=github&color=58595B" alt="Forks"></a>
    <a href="https://github.com/IEEE-MSIT/website/blob/main/LICENSE"><img src="https://img.shields.io/github/license/IEEE-MSIT/website?style=for-the-badge&color=A7B77F" alt="License"></a>
    <img src="https://img.shields.io/badge/PWA%20Ready-✓-brightgreen?style=for-the-badge" alt="PWA Ready">
    <img src="https://img.shields.io/badge/SEO%20Optimized-✓-blue?style=for-the-badge" alt="SEO Optimized">
  </p>

  <p align="center">
    <a href="https://ieeemsit.vercel.app/"><strong>Visit the Live Website</strong></a>
    ·
    <a href="https://github.com/IEEE-MSIT/website/issues/new?assignees=&labels=bug&template=bug_report.md&title=">Report a Bug</a>
    ·
    <a href="https://github.com/IEEE-MSIT/website/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=">Request a Feature</a>
  </p>

</div>

---

## Key Features

This platform is engineered with a rich feature set to inform, engage, and inspire.

### Core Features

| Feature                              | Description                                                                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Dynamic Content Sections**         | Data-driven components for Events, Hackathons, Team, and Chapters that are rendered from a single, easy-to-edit `data.ts` file. |
| **Transparent Leadership Profiles**  | Detailed member cards for the 2025 and 2024 Executive Committees, featuring roles, photos, and direct LinkedIn profile links.   |
| **Interactive Event Carousels**      | A sleek, responsive carousel for showcasing upcoming events and workshops, designed for maximum user engagement.                |
| **Hackathon & Winners Showcase**     | A dedicated hall of fame celebrating our flagship hackathons, featuring winning teams, innovative projects, and prize details.  |
| **AI-Powered Intelligent Assistant** | An integrated RAG chatbot providing instant, context-aware answers to queries about events, membership, chapters, and more.     |

### PWA Features

| Feature                    | Description                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| **Progressive Web App**    | Full PWA support with offline capabilities, app-like experience, and home screen installation. |
| **Install Notifications**  | Smart install prompts for both Android and iOS devices with customized instructions.           |
| **Service Worker Caching** | Intelligent caching strategy for optimal performance and offline functionality.                |
| **App-like Experience**    | Native app feel with proper theming, splash screens, and seamless navigation.                  |

### 🔍 SEO & Performance

| Feature                        | Description                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| **Comprehensive Meta Tags**    | Complete SEO optimization with Open Graph, Twitter Cards, and platform-specific meta tags. |
| **Schema.org Structured Data** | Rich snippets and structured data for better search engine understanding.                  |
| **Multi-Platform OG Images**   | Optimized social media sharing with custom OG images for different platforms.              |
| **Performance Monitoring**     | Core Web Vitals tracking and performance optimization.                                     |
| **Sitemap & Robots.txt**       | Automated sitemap generation and proper SEO directives.                                    |

---

## 🛠 Tech Stack

This project is built on a modern, robust, and efficient technology stack that aligns with our organization's standards.

| Component              | Technologies                                          |
| ---------------------- | ----------------------------------------------------- |
| **Frontend Framework** | React, TypeScript, Vite                               |
| **Styling & UI**       | Tailwind CSS, Lucide React, `react-fast-marquee`      |
| **Routing**            | React Router DOM                                      |
| **AI Integration**     | `10xanswers` (Retrieval-Augmented Generation Chatbot) |
| **Code Quality**       | ESLint, Prettier                                      |

---

## Getting Started: Local Setup

To get a local copy up and running, follow these simple steps. This is essential for any developer looking to contribute.

### Prerequisites

Ensure you have the following installed on your machine:

- [**Node.js**](https://nodejs.org/) (LTS version recommended)
- [**pnpm**](https://pnpm.io/installation) (Recommended package manager for this project)

### Installation

1.  **Clone the Repository**

    ```sh
    git clone https://github.com/IEEE-MSIT/website.git
    cd website
    ```

2.  **Install Dependencies**

    ```sh
    pnpm install
    ```

3.  **Run the Development Server**

    ```sh
    pnpm dev
    ```

4.  **Open in Browser**  
    The application will now be running and accessible at `http://localhost:5173`.

---

## Contribution & Collaboration Workflow

This project operates with a professional development workflow. All contributions, regardless of size, must follow these steps to ensure quality and consistency.

1.  **Find an Issue**  
    All work begins with an issue. Browse the [Issues tab](https://github.com/IEEE-MSIT/website/issues). If your idea doesn't have an issue, create one using our templates.

2.  **Fork & Clone**  
    Fork the repository to your personal account and clone it to your local machine.

3.  **Create a Branch**  
    Create a new branch from `main` with a descriptive name. We follow the `[type]/[short-description]` convention (e.g., `feat/add-event-carousel`, `fix/header-alignment`).

    ```sh
    git checkout -b feat/my-new-feature
    ```

4.  **Develop & Commit**  
    Make your changes. Write clean, well-documented code. Commit your work with clear, conventional commit messages (e.g., `feat: Add user authentication endpoint`).

5.  **Push and Open a Pull Request (PR)**  
    Push your branch to your fork and open a Pull Request against the `main` branch of this repository. Provide a detailed description of your changes in the PR.

6.  **Code Review**  
    Your PR will be reviewed by the Web Dev leadership. Engage in the discussion and make any required changes. At least one approval is required to merge.

### For Content Managers: Updating Website Information

Most of the website's content (events, team members, hackathon results) is managed in a single file. This allows for easy updates without needing to run the project locally.

- **File to Edit:** `src/data/data.ts`

To update content, simply edit this file directly on GitHub, commit your changes to a new branch, and open a Pull Request.

---


## Leadership: The Web Development Department '25

Meet the team responsible for architecting and maintaining this platform.

<table>
<tr>
<td align="center">
  <a href="https://github.com/rajveeerr">
    <img src="https://avatars.githubusercontent.com/u/176945581?v=4" width="100px;" alt="Rajveer Singh"/>
    <br />
    <sub><b>Rajveer Singh</b></sub>
    <br />
    <sub><b>Vice Chairperson</b></sub>
  </a>
</td>
</tr>
</table>

---

### License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
