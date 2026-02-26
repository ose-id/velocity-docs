import { useFetch } from '@vueuse/core';
import { computed } from 'vue';

const REPO = import.meta.env.VITE_GITHUB_REPO || 'ose-id/velocity';
const API_URL = `https://api.github.com/repos/${REPO}/releases`;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function useGithubDownloads() {
  const fetchOptions = GITHUB_TOKEN
    ? { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
    : {};

  const { data, isFetching } = useFetch(API_URL, fetchOptions).json();

  const totalDownloads = computed(() => {
    if (!data.value || !Array.isArray(data.value)) {
      if (data.value && data.value.message) {
        console.error('GitHub API Error in Downloads:', data.value.message);
      }
      return 0;
    }

    return data.value.reduce((total, release) => {
      if (!release.assets || !Array.isArray(release.assets))
        return total;

      const assetsTotal = release.assets.reduce((sum, asset) => sum + (asset.download_count || 0), 0);
      return total + assetsTotal;
    }, 0);
  });

  const formattedDownloads = computed(() => {
    return new Intl.NumberFormat('en-US').format(totalDownloads.value);
  });

  return {
    totalDownloads,
    formattedDownloads,
    isLoading: isFetching,
  };
}
