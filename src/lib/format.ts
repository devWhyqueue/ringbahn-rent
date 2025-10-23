/**
 * Formatting utilities for numbers, currency, and other values
 */

/**
 * Format currency amount with proper German formatting
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format number with German locale (comma as decimal separator)
 */
export function formatNumber(num: number, decimals: number = 2): string {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

/**
 * Format percentage
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
}

/**
 * Format energy consumption (kWh)
 */
export function formatEnergy(kWh: number): string {
  return `${formatNumber(kWh, 2)} kWh`;
}

/**
 * Format volume (m³)
 */
export function formatVolume(m3: number): string {
  return `${formatNumber(m3, 2)} m³`;
}

/**
 * Format water consumption per person per day
 */
export function formatWaterPerPerson(liters: number): string {
  return `${formatNumber(liters, 1)} l/person/day`;
}

/**
 * Extract currency amount from text and return as number
 */
export function parseCurrency(text: string): number | null {
  // Match German currency format: 1.234,56€ or 1.234,56 €
  const match = text.match(/(\d{1,3}(?:\.\d{3})*(?:,\d{2})?)\s*€/);
  if (!match) return null;
  
  // Convert German format to number (replace . with nothing, , with .)
  const numberStr = match[1].replace(/\./g, '').replace(',', '.');
  return parseFloat(numberStr);
}

/**
 * Extract number from text
 */
export function parseNumber(text: string): number | null {
  // Match German number format: 1.234,56
  const match = text.match(/(\d{1,3}(?:\.\d{3})*(?:,\d+)?)/);
  if (!match) return null;
  
  // Convert German format to number
  const numberStr = match[1].replace(/\./g, '').replace(',', '.');
  return parseFloat(numberStr);
}

/**
 * Check if text contains a currency amount
 */
export function hasCurrency(text: string): boolean {
  return /(\d{1,3}(?:\.\d{3})*(?:,\d{2})?)\s*€/.test(text);
}

/**
 * Check if text contains energy units (kWh)
 */
export function hasEnergy(text: string): boolean {
  return /\d+(?:[.,]\d+)?\s*kWh/i.test(text);
}

/**
 * Check if text contains volume units (m³)
 */
export function hasVolume(text: string): boolean {
  return /\d+(?:[.,]\d+)?\s*m³/i.test(text);
}

/**
 * Check if text contains percentage
 */
export function hasPercentage(text: string): boolean {
  return /\d+(?:[.,]\d+)?\s*%/.test(text);
}

