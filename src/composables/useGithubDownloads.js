import { useFetch } from '@vueuse/core';
import { computed } from 'vue';

const REPO = import.meta.env.VITE_GITHUB_REPO || 'ose-id/velocity';
const API_URL = `https://api.github.com/repos/${REPO}/releases`;

export function useGithubDownloads() {
  const { data, isFetching } = useFetch(API_URL).json();

  const totalDownloads = computed(() => {
    if (!data.value || !Array.isArray(data.value))
      return 0;

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
