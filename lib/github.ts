import axios from 'axios';

export type RepoStats = {
  stars: number;
  forks: number;
};

// Consulta la API pública de GitHub para las estadísticas de un repo.
// Degrada con elegancia: devuelve null ante cualquier error o límite de tasa.
export async function getRepoStats(repo: string): Promise<RepoStats | null> {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github+json' },
      timeout: 6000,
    });
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
    };
  } catch {
    return null;
  }
}
