import { useFetch } from '@vueuse/core';
import { ref, watch } from 'vue';

const REPO = import.meta.env.VITE_GITHUB_REPO || 'ose-id/velocity';
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;
const FALLBACK_URL = `https://github.com/${REPO}/releases/latest`;

export function useGithubRelease() {
  const downloadUrl = ref(FALLBACK_URL);
  const tagName = ref('');
  const isLoading = ref(true);

  const { data } = useFetch(API_URL).json();

  watch(data, (newData) => {
    if (newData && newData.assets) {
      const exeAsset = newData.assets.find(asset =>
        asset.name.endsWith('.exe'),
      );

      if (exeAsset) {
        downloadUrl.value = exeAsset.browser_download_url;
      }

      if (newData.tag_name) {
        tagName.value = newData.tag_name;
      }
    }
    isLoading.value = false;
  });

  return {
    downloadUrl,
    tagName,
    isLoading,
  };
}
