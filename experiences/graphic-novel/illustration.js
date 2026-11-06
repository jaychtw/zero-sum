import { illustrations } from './illustrations.js';
// Planning entries never activate images. Only an explicit live binding is resolved.
export function resolveIllustration(panelId, language, manifest = illustrations) {
  const binding = Object.hasOwn(manifest.bindings, panelId) && manifest.bindings[panelId];
  if (!binding) return null;
  const asset = manifest.assets[binding.asset], variant = manifest.variants[binding.variant];
  if (!asset || !variant || variant.status !== 'active-ready' || (variant.asset && variant.asset !== binding.asset)) return null;
  if (asset.allowedVariants && !asset.allowedVariants.includes(binding.variant)) return null;
  if (!/^assets\/[a-z0-9-]+\.webp$/.test(asset.src)) return null;
  const rect = variant.rect;
  if (!Array.isArray(rect) || rect.length !== 4 || !rect.every(Number.isFinite)) return null;
  const [x,y,w,h] = rect;
  if (x < 0 || y < 0 || w <= 0 || h <= 0 || x+w > 1 || y+h > 1 || Math.abs(w-h) > 1e-9) return null;
  if ((w !== 1 || h !== 1) && !variant.alt) return null;
  if (variant.maxDisplayWidth !== undefined && (!Number.isInteger(variant.maxDisplayWidth) || variant.maxDisplayWidth <= 0 || variant.maxDisplayWidth > asset.width*w)) return null;
  const locale = language === 'zh' ? 'zh' : 'en';
  const alt = (variant.alt || asset.alt)?.[locale], caption = manifest.caption?.[locale];
  if (!alt || !caption) return null;
  return {src:asset.src, width:asset.width, height:asset.height, alt, caption, rect, cropped:w!==1 || h!==1, variant:binding.variant, maxDisplayWidth:variant.maxDisplayWidth};
}
