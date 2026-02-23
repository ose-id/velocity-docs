import { useFetch } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';

const REPO = import.meta.env.VITE_GITHUB_REPO || 'ose-id/velocity';
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;
const FALLBACK_URL = `https://github.com/${REPO}/releases/latest`;

export function useGithubRelease() {
  const { data, isFetching } = useFetch(API_URL).json();

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
    if (data.value && data.value.assets) {
      const exeAssets = data.value.assets.filter(asset =>
        asset.name.endsWith('.exe'),
      );

      if (exeAssets.length > 0) {
        return exeAssets.map((asset) => {
          let arch = 'x64';
          if (asset.name.includes('arm64'))
            arch = 'arm64';
          if (asset.name.includes('ia32'))
            arch = 'ia32';
          if (asset.name.includes('x64'))
            arch = 'x64';

          return {
            label: `Windows (${arch})`,
            arch,
            url: asset.browser_download_url,
          };
        }).sort((a, b) => {
          if (a.arch === userArch.value)
            return -1;
          if (b.arch === userArch.value)
            return 1;
          const order = { x64: 1, arm64: 2, ia32: 3 };
          return order[a.arch] - order[b.arch];
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
