import { Reading } from './spreads';

const STORAGE_KEY = 'arcana-ask-readings';

export function saveReading(reading: Reading): void {
  if (typeof window === 'undefined') return;
  
  try {
    const existingReadings = getReadings();
    const updatedReadings = [reading, ...existingReadings].slice(0, 50);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReadings));
  } catch (error) {
    console.error('Failed to save reading:', error);
  }
}

export function getReadings(): Reading[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load readings:', error);
    return [];
  }
}

export function deleteReading(id: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const readings = getReadings();
    const filtered = readings.filter((r) => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Failed to delete reading:', error);
  }
}

export function getReadingById(id: string): Reading | undefined {
  return getReadings().find((r) => r.id === id);
}
