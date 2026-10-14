export function videoEmbedUrl(rawUrl: string): string | null {
  try {
    const url = new URL(rawUrl);
    if (url.protocol !== 'https:') return null;

    if (url.hostname === 'drive.google.com') {
      const id = url.pathname.match(/^\/file\/d\/([\w-]+)/)?.[1] || url.searchParams.get('id');
      return id && /^[\w-]+$/.test(id) ? `https://drive.google.com/file/d/${id}/preview` : null;
    }
    if (url.hostname === 'youtu.be') {
      const id = url.pathname.slice(1);
      return /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (url.hostname === 'youtube.com' || url.hostname === 'www.youtube.com') {
      const id = url.searchParams.get('v') || url.pathname.match(/^\/shorts\/([\w-]+)/)?.[1];
      return id && /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (url.hostname === 'vimeo.com' || url.hostname === 'www.vimeo.com') {
      const id = url.pathname.match(/^\/(\d+)/)?.[1];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function safeVideoLink(rawUrl: string): string | null {
  try {
    const url = new URL(rawUrl);
    return url.protocol === 'https:' ? url.href : null;
  } catch { return null; }
}
