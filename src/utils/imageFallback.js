export const FALLBACK_IMAGE = "/product-placeholder.svg";

export function onImageError(event) {
  const target = event.currentTarget;
  if (target.dataset.fallbackApplied === "true") return;
  target.dataset.fallbackApplied = "true";
  target.src = FALLBACK_IMAGE;
}
