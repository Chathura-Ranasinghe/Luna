import { useState, useCallback } from 'react';

export function useApodValidateDate() {
  const [isValidDate, setIsValidDate] = useState<boolean>(true);

  const validateDate = useCallback((date: string) => {
    const minDate = new Date('1994-06-16').toISOString().split('T')[0];
    //const maxDate = new Date('2024-07-05').toISOString().split('T')[0];
    const maxDate = new Date().toISOString().split('T')[0];
    setIsValidDate(date >= minDate && date <= maxDate);
  }, []);

  return { isValidDate, validateDate };
}

export function useNeoWsValidateDate() {
  const [isValidDate, setIsValidDate] = useState<boolean>(true);

  const validateDate = useCallback((date: string) => {
    const minDate = new Date('1900-01-01').toISOString().split('T')[0];
    const maxDate = new Date('2200-12-31').toISOString().split('T')[0];
    //const maxDate = new Date().toISOString().split('T')[0];
    setIsValidDate(date >= minDate && date <= maxDate);
  }, []);

  return { isValidDate, validateDate };
}
