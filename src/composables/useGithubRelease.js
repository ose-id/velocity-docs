import { useFetch } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';

const REPO = import.meta.env.VITE_GITHUB_REPO || 'ose-id/velocity';
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;
const FALLBACK_URL = `https://github.com/${REPO}/releases/latest`;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function useGithubRelease() {
  const fetchOptions = GITHUB_TOKEN
    ? { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
    : {};

  const { data, isFetching } = useFetch(API_URL, fetchOptions).json();

  const userArch = ref('x64');

  onMounted(() => {
    if (typeof window !== 'undefined' && window.navigator) {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.includes('arm')) {
        userArch.value = 'arm64';
      }
      else if (ua.includes('windows') && !ua.includes('x64') && !ua.includes('win64') && !ua.includes('wow64')) {
        userArch.value = 'ia32';
      }
    }
  });

  const downloadLinks = computed(() => {
    if (data.value && data.value.message) {
      console.error('GitHub API Error in Release:', data.value.message);
    }
    if (data.value && Array.isArray(data.value.assets)) {
      const exeAssets = data.value.assets.filter(asset =>
        asset.name.toLowerCase().endsWith('.exe'),
      );

      if (exeAssets.length > 0) {
        return exeAssets.map((asset) => {
          let arch = 'x64';
          const lowerName = asset.name.toLowerCase();

          if (lowerName.includes('arm64') || lowerName.includes('aarch64')) {
            arch = 'arm64';
          }
          else if (lowerName.includes('ia32') || lowerName.includes('x86') || lowerName.includes('32bit') || lowerName.includes('386')) {
            arch = 'ia32';
          }

          return {
            label: `Windows (${arch})`,
            arch,
            url: asset.browser_download_url,
          };
        }).filter((v, i, a) => a.findIndex(t => (t.arch === v.arch)) === i).sort((a, b) => {
          if (a.arch === userArch.value)
            return -1;
          if (b.arch === userArch.value)
            return 1;
          const order = { x64: 1, arm64: 2, ia32: 3 };
          return (order[a.arch] || 99) - (order[b.arch] || 99);
        });
      }
    }
    return [
      { label: `Windows (${userArch.value})`, arch: userArch.value, url: FALLBACK_URL },
    ];
  });

  const downloadUrl = computed(() => {
    return downloadLinks.value[0]?.url || FALLBACK_URL;
  });

  const tagName = computed(() => {
    if (data.value && data.value.tag_name) {
      return data.value.tag_name;
    }
    return '';
  });

  return {
    downloadLinks,
    downloadUrl,
    tagName,
    isLoading: isFetching,
  };
}
