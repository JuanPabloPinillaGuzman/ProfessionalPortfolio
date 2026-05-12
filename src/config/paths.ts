export const siteOrigin = 'https://juanpablopinillaguzman.github.io';
export const basePath = '/ProfessionalPortfolio';

export const withBase = (path = '/') => {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath === '/' ? `${basePath}/` : `${basePath}${normalizedPath}`;
};

export const withoutBase = (pathname: string) => {
  if (pathname === basePath) return '/';
  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || '/';
  }

  return pathname || '/';
};

export const toAbsoluteUrl = (path = '/') => new URL(withBase(path), siteOrigin).toString();
