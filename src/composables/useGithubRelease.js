import { useFetch } from '@vueuse/core';
import { computed } from 'vue';

const REPO = import.meta.env.VITE_GITHUB_REPO || 'ose-id/velocity';
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;
const FALLBACK_URL = `https://github.com/${REPO}/releases/latest`;

export function useGithubRelease() {
  const { data, isFetching } = useFetch(API_URL).json();

  const downloadUrl = computed(() => {
    if (data.value && data.value.assets) {
      const exeAsset = data.value.assets.find(asset =>
        asset.name.endsWith('.exe'),
      );
      if (exeAsset) {
        return exeAsset.browser_download_url;
      }
    }
    return FALLBACK_URL;
  });

  const tagName = computed(() => {
    if (data.value && data.value.tag_name) {
      return data.value.tag_name;
    }
    return '';
  });

  return {
    downloadUrl,
    tagName,
    isLoading: isFetching,
  };
}
